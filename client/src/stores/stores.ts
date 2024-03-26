import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type IPattern, Pattern, type ITrack, Track } from '@/components/classes';
import { fetchSample, storePattern, fetchPattern } from '@/components/api';

export const usePatternStore = defineStore('audioPlayerStore', () => {
  let pattern = ref(new Pattern("dnb",["0","1"],16))
  const sampleURLs: string[] = [];
  const loadedSamples: HTMLAudioElement[][] = [];
  let loading = ref(true);
  let audioInterval: NodeJS.Timeout | null = null;
  let playing = ref(false);
  let count = 0;

  (async () => {
    console.log('loading')
    for (const sampleId of pattern.value.getSampleIds()) {
      const response = await fetchSample(sampleId);
      if (typeof (response) === 'string'){
        sampleURLs.push(response);
      }
    }
    // console.log(sampleURLs)
    for (let index = 0; index < sampleURLs.length; index++) {
      loadedSamples.push([])
        for (let i = 0; i < pattern.value.length; i++) {
          loadedSamples[index].push(new Audio(sampleURLs[index]));   
        }
    }
    // console.log(loadedSamples)
    loading.value = false;
    console.log('done')
  })();

  const playAudio = () => {
    for (let track = 0; track < pattern.value.getNOfTracks(); track++) {
        const beat = pattern.value.getTrackN(track).beats[count];
        // console.log(`${new Date(Date.now()).toISOString()}: sample ${track} on beat ${this.count} ${beat?"plays":"doesn't play"}`)

        if (pattern.value.isBeatActive(track, count)) {
            loadedSamples[track][count].play();
            // console.log(this.sampleURLs[track])
        }
    }

    count = (count === pattern.value.length -1) 
        ? 0 
        : count+1;
  }

  const togglePlay = () => {    
    console.log("player toggleplay called")

    playing.value = !playing.value;
    if (playing.value) {
        playAudio;
        audioInterval = setInterval(playAudio, 200);
    } else {
        stop();
    }
  }

  const stop = () => {
    if (audioInterval !== null) {
        clearInterval(audioInterval);
        audioInterval = null;
        count = 0;
    }
  }

  const savePattern = () => {
    storePattern(pattern.value);
  }

  const loadPattern = async (name: string) => {
    const fetchedPattern = await fetchPattern(name);
    if (fetchedPattern instanceof Pattern) {
      pattern.value = fetchedPattern;
    }
    console.log(pattern.value);
  }

  return { pattern, loading, playing, togglePlay, savePattern, loadPattern }

})