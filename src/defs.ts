import DebugVisualizer from "./components/renderer/DebugVisualizer";
import NCSVisualizer from "./components/renderer/NCSVisualizer";
import SpectrumVisualizer from "./components/renderer/SpectrumVisualizer";

export const DEFAULT_COLOR = "#535353";

export type TrackData = {
	audioAnalysis: SpotifyAudioAnalysis;
	color: string;
};

export type RendererProps = {
	isEnabled: boolean;
	trackData: TrackData;
};

export const RENDERERS = {
	ncs: { name: "NCS", renderer: NCSVisualizer },
	spectrum: { name: "Spectrum", renderer: SpectrumVisualizer },
	debug: { name: "Debug", renderer: DebugVisualizer }
};

export type RendererId = keyof typeof RENDERERS;
