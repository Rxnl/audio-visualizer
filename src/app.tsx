import React, { useEffect, useRef, useState } from "react";
import css from "./css/app.css";
import LoadingIcon from "./components/LoadingIcon";
import NCSVisualizer from "./components/renderer/NCSVisualizer";
import { ErrorHandlerContext } from "./error";
import { useFullscreenElement, useMouseRecentlyMoved } from "./hooks";
import { loadTrackData } from "./loaders";
import { DEFAULT_COLOR, RENDERERS, RendererId, TrackData } from "./defs";
import { AudioSyncManager } from "./audio-sync";

type LoadState = { uri: string; data: Awaited<ReturnType<typeof loadTrackData>> };

const SPHERE_COLOR_KEY = "spotikit-visualizer.sphere-color";
const USE_COVER_COLOR_KEY = "spotikit-visualizer.use-cover-color";
const sphereColorChanges = new EventTarget();
type SphereColorSettings = { customColor: string | null; useCoverColor: boolean };
let sphereColorSettings: SphereColorSettings = { customColor: null, useCoverColor: true };
try {
	const saved = localStorage.getItem(SPHERE_COLOR_KEY);
	const customColor = saved && /^#[0-9a-f]{6}$/i.test(saved) ? saved : null;
	const useCoverColor = localStorage.getItem(USE_COVER_COLOR_KEY);
	sphereColorSettings = {
		customColor,
		useCoverColor: useCoverColor === null ? customColor === null : useCoverColor !== "false"
	};
} catch {
	// Keep the color available for the session when storage is disabled.
}

function subscribeToSphereColor(listener: () => void) {
	sphereColorChanges.addEventListener("change", listener);
	return () => sphereColorChanges.removeEventListener("change", listener);
}

function getSphereColorSettings() {
	return sphereColorSettings;
}

function changeSphereColorSettings(settings: SphereColorSettings) {
	sphereColorSettings = settings;
	try {
		localStorage.setItem(USE_COVER_COLOR_KEY, String(settings.useCoverColor));
		if (settings.customColor !== null) localStorage.setItem(SPHERE_COLOR_KEY, settings.customColor);
	} catch {}
	sphereColorChanges.dispatchEvent(new Event("change"));
}

function initialRenderer(): RendererId {
	try {
		const saved = localStorage.getItem("spotikit-visualizer.renderer");
		if (saved === "ncs" || saved === "spectrum" || saved === "debug") return saved;
	} catch {
		// Storage can be disabled in the host.
	}
	return "ncs";
}

export default function Visualizer({ popup = false, initialMode }: {
	popup?: boolean;
	initialMode?: RendererId;
}) {
	const [renderer, setRenderer] = useState(() => initialMode ?? initialRenderer());
	const { customColor, useCoverColor } = React.useSyncExternalStore(subscribeToSphereColor, getSphereColorSettings);
	const [track, setTrack] = useState(() => SpotiKit.Player.track);
	const [result, setResult] = useState<LoadState>();
	const [attempt, setAttempt] = useState(0);
	const [renderError, setRenderError] = useState<string>();
	const [correctLatency, setCorrectLatency] = useState(AudioSyncManager.correctLatency);
	const [host, setHost] = useState<HTMLDivElement | null>(null);
	const settings = useRef<HTMLDetailsElement>(null);
	const owner = host?.ownerDocument;
	const fullscreen = useFullscreenElement(owner) === host && host !== null;
	const mouseMoved = useMouseRecentlyMoved(owner);
	const uri = track?.uri ?? "";
	const supported = uri.startsWith("spotify:track:");
	const current = result?.uri === uri ? result : undefined;
	const Renderer = RENDERERS[renderer].renderer;
	const trackData = current?.data;
	const pickerColor = customColor ?? trackData?.color ?? DEFAULT_COLOR;
	const color = renderer === "ncs" && !useCoverColor ? pickerColor : trackData?.color ?? DEFAULT_COLOR;
	const rendererData: TrackData | undefined = trackData?.audioAnalysis
		? { audioAnalysis: trackData.audioAnalysis, color }
		: undefined;
	const missingAnalysis = supported && current !== undefined && !rendererData;

	useEffect(() => {
		const updateTrack = () => setTrack(SpotiKit.Player.track);
		const unsubscribe = SpotiKit.Player.on("track", updateTrack);
		updateTrack();
		return unsubscribe;
	}, []);

	useEffect(() => {
		if (!track || !supported) return;
		let active = true;
		setResult(undefined);
		loadTrackData(track).then(data => { if (active) setResult({ uri, data }); });
		return () => { active = false; };
	}, [uri, supported, attempt]);

	useEffect(() => {
		AudioSyncManager.addReference();
		return () => AudioSyncManager.removeReference();
	}, []);

	function selectRenderer(mode: RendererId) {
		setRenderer(mode);
		setRenderError(undefined);
		if (!popup) {
			try { localStorage.setItem("spotikit-visualizer.renderer", mode); } catch {}
		}
	}

	function retry() {
		setResult(undefined);
		setAttempt(value => value + 1);
	}

	async function toggleFullscreen() {
		if (!host || !owner) return;
		try {
			if (fullscreen) await owner.exitFullscreen();
			else await host.requestFullscreen();
			if (settings.current) settings.current.open = false;
		} catch {
			SpotiKit.notify("Could not switch fullscreen mode.");
		}
	}

	async function openWindow() {
		let win: Window | null = null;
		try {
			win = window.open("", "", "popup,width=960,height=540");
			if (!win) {
				const pip = (window as Window & {
					documentPictureInPicture?: { requestWindow(options: {width: number; height: number}): Promise<Window> };
				}).documentPictureInPicture;
				if (pip) win = await pip.requestWindow({ width: 960, height: 540 });
			}
			if (!win) throw new Error("Popup unavailable");
			win.document.title = "Visualizer";
			win.document.body.style.margin = "0";
			const mount = win.document.body.appendChild(win.document.createElement("div"));
			const root = SpotiKit.ReactDOM.createRoot(mount);
			win.addEventListener("pagehide", () => root.unmount(), { once: true });
			root.render(<Visualizer popup initialMode={renderer} />);
		} catch (error) {
			win?.close();
			console.warn("[Visualizer] Could not open a window", error);
			SpotiKit.notify("Spotify could not open a separate window.");
		}
	}

	const message = !uri ? "Play a track to start the visualizer."
		: !supported ? "Visualization is available for music tracks."
		: renderError ?? (missingAnalysis && renderer !== "ncs" ? "Audio analysis is unavailable for this track." : undefined);
	const loading = supported && !current;
	return (
		<div
			className={`spotikit-visualizer${popup ? " spotikit-visualizer--popup" : ""}${fullscreen && !mouseMoved ? " spotikit-visualizer--idle" : ""}`}
			ref={setHost}
			onPointerDown={() => AudioSyncManager.resume()}
			onKeyDown={event => {
				AudioSyncManager.resume();
				if (event.key === "Escape" && settings.current?.open) settings.current.open = false;
			}}
		>
			<style>{css}</style>
			{rendererData && !renderError && (
				<ErrorHandlerContext.Provider value={setRenderError}>
					<Renderer key={`${uri}:${renderer}`} isEnabled trackData={rendererData} />
				</ErrorHandlerContext.Provider>
			)}
			{missingAnalysis && renderer === "ncs" && !renderError && (
				<ErrorHandlerContext.Provider value={setRenderError}>
					<NCSVisualizer key={uri} isEnabled trackData={{ color }} />
					<div className="spotikit-visualizer-fallback">
						<span role="status">Audio analysis unavailable · Ambient motion</span>
						<button className="spotikit-visualizer-retry" type="button" onClick={retry}>Retry</button>
					</div>
				</ErrorHandlerContext.Provider>
			)}
			{loading && <div className="spotikit-visualizer-status" role="status" aria-label="Loading audio analysis"><LoadingIcon /></div>}
			{!loading && message && (
				<div className="spotikit-visualizer-status" role="status">
					<p>{message}</p>
					{missingAnalysis && !renderError && (
						<>
							<button className="spotikit-visualizer-retry" type="button" onClick={retry}>Retry</button>
							<button type="button" onClick={() => selectRenderer("ncs")}>Use ambient NCS</button>
						</>
					)}
				</div>
			)}
			<details className="spotikit-visualizer-controls" ref={settings}>
				<summary aria-label="Visualizer settings" title="Visualizer settings">
					<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
						<circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" />
					</svg>
				</summary>
				<div className="spotikit-visualizer-settings">
					<label>Mode
						<select value={renderer} onChange={event => selectRenderer(event.currentTarget.value as RendererId)}>
							{Object.entries(RENDERERS).map(([id, mode]) => <option key={id} value={id}>{mode.name}</option>)}
						</select>
					</label>
					{renderer === "ncs" && (
						<>
							<label>
								Use cover art color
								<input
									type="checkbox"
									checked={useCoverColor}
									onChange={event => {
										const checked = event.currentTarget.checked;
										changeSphereColorSettings({
											customColor: checked ? customColor : pickerColor,
											useCoverColor: checked
										});
									}}
								/>
							</label>
							<label>
								Sphere color
								<input
									type="color"
									value={pickerColor}
									disabled={useCoverColor}
									onChange={event => changeSphereColorSettings({
										customColor: event.currentTarget.value,
										useCoverColor: false
									})}
								/>
							</label>
						</>
					)}
					<label>
						<input type="checkbox" checked={correctLatency} onChange={event => {
							const checked = event.currentTarget.checked;
							setCorrectLatency(checked);
							AudioSyncManager.setCorrectLatency(checked);
						}} />
						Compensate for audio latency
					</label>
					<button type="button" onClick={toggleFullscreen}>
						{fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
					</button>
					{!popup && <button type="button" onClick={openWindow}>Open in a separate window</button>}
				</div>
			</details>
		</div>
	);
}
