import { DEFAULT_COLOR, TrackData } from "./defs";

export async function loadTrackData(track: VisualizerTrack): Promise<TrackData> {
	const image = track.images?.[0]?.url ?? track.album?.images?.[0]?.url;
	const [audioAnalysis, colors] = await Promise.all([
		SpotiKit.Audio.analysis(track.uri),
		Promise.resolve().then(() => SpotiKit.Colors.extract(image ?? track.uri)).catch(() => undefined)
	]);

	if (!audioAnalysis?.track || !audioAnalysis.segments?.length) {
		throw new Error("Spotify returned no audio segments.");
	}

	const color = [colors?.light, colors?.raw].find(value => value && /^#[0-9a-f]{6}$/i.test(value));
	return { audioAnalysis, color: color ?? DEFAULT_COLOR };
}
