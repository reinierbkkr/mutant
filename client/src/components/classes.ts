import { ref, reactive } from "vue";

export class Pattern {
    name: string = "";
    tracks: Track[] = [];
    length: number = 0;

    constructor(name?: string, samples?: string[], length?: number, json?: IPattern) {
        if (name && samples && length && !json){
            this.name = name;
            this.length = length;
            for (let i = 0; i < samples.length; i++) {
                this.tracks[i] = Track.createNew(samples[i], length);
            }
        } else if (!name && !samples && !length && json){
            this.name = json.name;
            this.length = json.length;
            for (const track of json.tracks){
                const itrack: ITrack = track as ITrack;
                this.tracks.push(Track.createWithJson(itrack));
            }
        }
    }

    static createNew = (name: string, samples: string[], length:number) => {
        return new Pattern(name, samples, length, undefined);
    }

    static createWithJson = (json: IPattern) => {
        return new Pattern(undefined, undefined, undefined, json);
    }

    getNOfTracks = () => {
        return this.tracks.length;
    }

    getTrackN = (index: number) => {
        return this.tracks[index];
    }

    getSampleIds = () => {
        const sampleIds = [];
        for (let i = 0; i < this.getNOfTracks(); i++) {
            sampleIds[i] = this.tracks[i].sampleId;            
        }
        return sampleIds;
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

    constructor(sample?: string, length?: number, json?: ITrack) {
        if (!json && sample && length) {
            this.sampleId = sample;
            for (let i = 0; i < length; i++) {
                this.beats.push(false);
            }
        } else if (json && !sample && !length) {
            this.sampleId = json.sampleId;
            for (const beat of json.beats){
                this.beats.push(beat);
            }
        }
    }

    static createNew = (sample: string, length: number) => {
        return new Track(sample, length, undefined);
    }

    static createWithJson = (json: ITrack) => {
        return new Track(undefined, undefined, json);
    }

    isBeatActive = (index:number) => {
        return this.beats[index];
    }

    toggleBeat = (index: number) => {
        this.beats[index] = !this.beats[index];
    }

}

export interface ITrack {
    sampleId: string;
    beats: boolean[]
}

export interface IPattern {
    name: string;
    tracks: Track[];
    length: number;
}
