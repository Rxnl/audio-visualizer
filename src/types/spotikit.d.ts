interface VisualizerTrack {
	uri: string;
	images?: { url: string }[];
	album?: { images?: { url: string }[] };
}

declare const SpotiKit: {
	React: typeof import("react");
	ReactDOM: typeof import("react-dom/client");
	Player: {
		track: VisualizerTrack | null;
		position: number;
		on(event: "track", listener: () => void): () => void;
	};
	Audio: { analysis(uri: string): Promise<SpotifyAudioAnalysis> };
	Colors: { extract(image: string): Promise<{ light?: string; raw?: string }> };
	notify(message: string): void;
};

declare module "*.css" {
	const css: string;
	export default css;
}
