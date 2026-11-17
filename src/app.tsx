import React, { useEffect, useRef, useState } from "react";
import css from "./css/app.css";
import LoadingIcon from "./components/LoadingIcon";
import { ErrorHandlerContext } from "./error";
import { useFullscreenElement, useMouseRecentlyMoved } from "./hooks";
import { loadTrackData } from "./loaders";
import { RENDERERS, RendererId, TrackData } from "./defs";
import { AudioSyncManager } from "./audio-sync";

type LoadState = { uri: string; data?: TrackData; error?: string };

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
		loadTrackData(track).then(
			data => { if (active) setResult({ uri, data }); },
			error => {
				console.warn("[Visualizer] Audio analysis unavailable", error);
				if (active) setResult({ uri, error: "Аудиоанализ недоступен для этого трека." });
			}
		);
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
			SpotiKit.notify("Не удалось переключить полноэкранный режим.");
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
			SpotiKit.notify("Клиент Spotify не смог открыть отдельное окно.");
		}
	}

	const message = !uri ? "Включите трек, чтобы запустить визуализатор."
		: !supported ? "Визуализация доступна для музыкальных треков."
		: current?.error ?? renderError;
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
			{current?.data && !renderError && (
				<ErrorHandlerContext.Provider value={setRenderError}>
					<Renderer key={`${uri}:${renderer}`} isEnabled trackData={current.data} />
				</ErrorHandlerContext.Provider>
			)}
			{loading && <div className="spotikit-visualizer-status" role="status" aria-label="Загрузка аудиоанализа"><LoadingIcon /></div>}
			{!loading && message && (
				<div className="spotikit-visualizer-status" role="status">
					<p>{message}</p>
					{current?.error && <button type="button" onClick={retry}>Повторить</button>}
				</div>
			)}
			<details className="spotikit-visualizer-controls" ref={settings}>
				<summary aria-label="Настройки визуализатора" title="Настройки визуализатора">
					<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
						<circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" />
					</svg>
				</summary>
				<div className="spotikit-visualizer-settings">
					<label>Режим
						<select value={renderer} onChange={event => selectRenderer(event.currentTarget.value as RendererId)}>
							{Object.entries(RENDERERS).map(([id, mode]) => <option key={id} value={id}>{mode.name}</option>)}
						</select>
					</label>
					<label>
						<input type="checkbox" checked={correctLatency} onChange={event => {
							const checked = event.currentTarget.checked;
							setCorrectLatency(checked);
							AudioSyncManager.setCorrectLatency(checked);
						}} />
						Компенсировать задержку
					</label>
					<button type="button" onClick={toggleFullscreen}>
						{fullscreen ? "Выйти из полноэкранного режима" : "На весь экран"}
					</button>
					{!popup && <button type="button" onClick={openWindow}>Открыть в отдельном окне</button>}
				</div>
			</details>
		</div>
	);
}
