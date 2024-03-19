import { reactive } from "vue";

export class Pattern {
    name: string = "";
    tracks: Track[] = [];

    constructor(name: string, samples: string[], length: number) {
        this.name = name;
        for (let i = 0; i < samples.length; i++) {
            this.tracks[i] = new Track(samples[i], length)
        }
    }

    getNOfTracks = () => {
        return this.tracks.length;
    }

    getTrackN = (index: number) => {
        return this.tracks[index];
    }

    isBeatActive = (trackIndex: number, index: number) => {
        return this.tracks[trackIndex].isBeatActive(index);
    }

    toggleBeat = (trackIndex: number, index: number) => {
        this.tracks[trackIndex].toggleBeat(index);
    }
}

export class Track {
    sampleId: string = "";
    beats: boolean[] = reactive([]);

    constructor(sample: string, length: number) {
        this.sampleId = sample;
        for (let i = 0; i < length; i++) {
            this.beats[i] = false;
        }
    }

    isBeatActive = (index:number) => {
        return this.beats[index];
    }

    toggleBeat = (index: number) => {
        this.beats[index] = !this.beats[index];
    } 
}