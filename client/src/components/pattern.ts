import { Track } from './track.ts';

export class Pattern {
    name: string = "";
    tracks: Track[] = [];

    constructor(name: string, samples: string[], length: number) {
        this.name = name;
        for (let i = 0; i < samples.length; i++) {
            this.tracks[i] = new Track(samples[i], length)
        }
    }
}