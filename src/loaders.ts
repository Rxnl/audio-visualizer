import { DEFAULT_COLOR } from "./defs";

export async function loadTrackData(track: VisualizerTrack) {
	const image = track.images?.[0]?.url ?? track.album?.images?.[0]?.url;
	const [audioAnalysis, colors] = await Promise.all([
		Promise.resolve().then(async () => {
			const analysis = await SpotiKit.Audio.analysis(track.uri);
			if (!analysis?.track || !analysis.segments?.length) {
				throw new Error("Spotify returned no audio segments.");
			}
			return analysis;
		}).catch(error => {
			console.warn("[Visualizer] Audio analysis unavailable", error);
			return undefined;
		}),
		Promise.resolve().then(() => SpotiKit.Colors.extract(image ?? track.uri)).catch(() => undefined)
	]);

	const color = [colors?.light, colors?.raw].find(value => value && /^#[0-9a-f]{6}$/i.test(value));
	return { audioAnalysis, color: color ?? DEFAULT_COLOR };
}
