export class AudioSyncManager {
	static correctLatency = true;
	private static references = 0;
	private static context: AudioContext | undefined;

	static addReference() {
		this.references++;
		this.resume();
	}

	static removeReference() {
		this.references--;
		if (this.references === 0) {
			const context = this.context;
			this.context = undefined;
			context?.close().catch(() => {});
		}
	}

	static setCorrectLatency(enabled: boolean) {
		this.correctLatency = enabled;
		if (enabled) this.resume();
		else this.context?.suspend().catch(() => {});
	}

	static resume() {
		if (!this.correctLatency || !this.references || typeof AudioContext !== "function") return;
		try {
			this.context ??= new AudioContext();
			if (this.context.state !== "running") this.context.resume().catch(() => {});
		} catch {
			// The player clock works even when Web Audio is unavailable.
		}
	}

	static getProgress(): number {
		const latency = this.correctLatency ? this.context?.outputLatency || 0 : 0;
		return Math.max(0, SpotiKit.Player.position / 1000 - latency);
	}
}
