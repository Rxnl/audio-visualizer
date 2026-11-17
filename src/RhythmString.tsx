import { unzlibSync } from "fflate";

export type RhythmString = number[][];

export function parseRhythmString(rhythmString: string): RhythmString {
	rhythmString = rhythmString.replace(/-/g, "+").replace(/_/g, "/");
	const compressed = new Uint8Array(
		atob(rhythmString)
			.split("")
			.map(c => c.charCodeAt(0))
	);
	const decompressed = unzlibSync(compressed);

	const input = new TextDecoder()
		.decode(decompressed)
		.split(" ")
		.map(s => parseInt(s));
	const output: number[][] = [];
	if (input.length < 3) return output;

	const sampleRate = input.shift()!;
	const stepSize = input.shift()!;
	const stepDuration = stepSize / sampleRate;

	const channelCount = input.shift()!;
	if (input.length < channelCount) return output;

	for (let i = 0; i < channelCount; i++) {
		const channel: number[] = [];
		const entryCount = input.shift()!;
		if (input.length < entryCount + (channelCount - i - 1)) return output;

		for (let j = 0; j < entryCount; j++) {
			const entry = input.shift()! * stepDuration;
			channel.push(j == 0 ? entry : channel[j - 1] + entry);
		}

		output.push(channel);
	}

	return output;
}

export function readRhythm(analysis: SpotifyAudioAnalysis): RhythmString | undefined {
	const { rhythm_version, rhythmstring } = analysis.track;
	if (rhythm_version !== 1 || !rhythmstring) return undefined;
	try {
		const rhythm = parseRhythmString(rhythmstring);
		if (rhythm.length && rhythm.every(channel => channel.every(Number.isFinite))) return rhythm;
	} catch {
		// Spectrum can use the segment pitches when rhythm data cannot be decoded.
	}
}
