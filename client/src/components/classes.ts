import { ref, reactive } from "vue";

export class Pattern {
    name: string = "";
    tracks: Track[] = [];
    length: number;

    constructor(name: string, samples: string[], length: number) {
        this.name = name;
        this.length = length;
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
    loadedSamples: HTMLAudioElement[][] = [];
    pattern: Pattern;
    audioInterval: NodeJS.Timeout | null = null;
    playing = false;
    count = 0;

    constructor(sampleURLs: string[], pattern: Pattern){
        this.sampleURLs = sampleURLs;
        this.pattern = pattern;
        for (let index = 0; index < this.sampleURLs.length; index++) {
            this.loadedSamples.push([])
            for (let i = 0; i < this.pattern.length; i++) {
                this.loadedSamples[index].push(new Audio(sampleURLs[index]));   
            }
        }
    }

    playAudio = () => {
        for (let track = 0; track < this.pattern.getNOfTracks(); track++) {
            const beat = this.pattern.getTrackN(track).beats[this.count];
            // console.log(`${new Date(Date.now()).toISOString()}: sample ${track} on beat ${this.count} ${beat?"plays":"doesn't play"}`)

            if (this.pattern.isBeatActive(track, this.count)) {
                this.loadedSamples[track][this.count].play();
                // console.log(this.sampleURLs[track])
            }
        }

        this.count = (this.count === this.pattern.length -1) 
            ? 0 
            : this.count+1;
    }

    togglePlay = () => {    
        console.log("player toggleplay called")

        this.playing = !this.playing;
        if (this.playing) {
            this.playAudio;
            this.audioInterval = setInterval(this.playAudio, 200);
        } else {
            this.stop();
        }
    }

    private stop() {
        if (this.audioInterval !== null) {
            clearInterval(this.audioInterval);
            this.audioInterval = null;
            this.count = 0;
        }
    }
}
