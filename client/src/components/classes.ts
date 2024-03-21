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

export class AudioPlayer {
    sampleURLs: string[];
    loadedSamples: HTMLAudioElement[] = [];
    pattern: Pattern;
    audioInterval: NodeJS.Timeout | null = null;

    constructor(sampleURLs: string[], pattern: Pattern){
        this.sampleURLs = sampleURLs;
        this.pattern = pattern;
        for (let index = 0; index < this.sampleURLs.length; index++) {
            // console.log("doing audiopush into array" + sampleURLs[index])
            this.loadedSamples.push(new Audio(sampleURLs[index]));
        }
    }
    
    playAudio = () => {
        for (const sample of this.loadedSamples){
            console.log('playing')
            sample.play();
        }
    }


}