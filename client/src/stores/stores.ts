import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Pattern } from '@/components/classes';
import { fetchSample, storePattern, fetchPattern, fetchSampleList } from '@/components/api';

export const usePatternStore = defineStore('audioPlayerStore', () => {
  let sampleList = ref([""]);
  let pattern = ref(Pattern.createNew("ad", ["LegoweltBasedrum001","LegoweltSnare010","LegoweltHat1closed","LegoweltClap002"], 4*16))
  const sampleURLs: string[] = [];
  const loadedSamples: HTMLAudioElement[][] = [];
  let loading = ref(true);
  let audioInterval: NodeJS.Timeout | null = null;
  let playing = ref(false);
  let count = 0;

  (async () => {
    await fetchAndPrepareAudio();
  })();

  async function fetchAndPrepareAudio() {
    loading.value = true;
    console.log('loading');
    await loadSampleList();
    await loadSamples();
    loadAudioElements();
    loading.value = false;
    console.log('done');
  }

  async function loadSampleList() {
    const fetchedSampleList = await fetchSampleList();
    if (Array.isArray(fetchedSampleList)){
      sampleList.value = fetchedSampleList;
    }
  }

  async function loadSamples() {
    for (const sampleId of pattern.value.getSampleIds()) {
      const response = await fetchSample(sampleId);
      if (typeof (response) === 'string') {
        sampleURLs.push(response);
      }
    }
  }

  function loadAudioElements() {
    for (let index = 0; index < sampleURLs.length; index++) {
      loadedSamples.push([]);
      for (let i = 0; i < 16; i++) {
        loadedSamples[index].push(new Audio(sampleURLs[index]));
      }
    }
  }

  const playAudio = () => {
    for (let track = 0; track < pattern.value.getNOfTracks(); track++) {
        const beat = pattern.value.getTrackN(track).beats[count];

        if (pattern.value.isBeatActive(track, count)) {
            loadedSamples[track][count%16].play();
        }
    }

    count = (count === pattern.value.length -1) 
        ? 0 
        : count+1;
  }

  const togglePlay = () => {    
    playing.value = !playing.value;
    if (playing.value) {
        playAudio;
        audioInterval = setInterval(playAudio, 125);
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
      fetchAndPrepareAudio();
    }
  }

  const setNewPattern = (newPattern: Pattern) => {
    pattern.value = newPattern;
    fetchAndPrepareAudio();
  }

  return { sampleList, pattern, loading, playing, togglePlay, savePattern, loadPattern, setNewPattern }

})