export class Track {
    sample: string = "";
    beats: boolean[] = [];

    constructor(sample: string, length: number) {
        this.sample = sample;
        for (let i = 0; i < length; i++) {
            this.beats[i] = false;
        }
    }
}