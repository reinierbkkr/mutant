import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Pattern } from '@/components/classes';
import { fetchSample, storePattern, fetchPattern, fetchSampleList } from '@/components/api';

export const usePatternStore = defineStore('audioPlayerStore', () => {
  let sampleList = ref([""]);
  let pattern = ref(Pattern.createNew("new pattern", ["LegoweltBasedrum001","LegoweltSnare010","LegoweltHat1closed","LegoweltClap002"], 4*16))
  let sampleURLs: string[] = [];
  let loadedSamples: HTMLAudioElement[][] = [];
  let loading = ref(true);
  let audioInterval: NodeJS.Timeout | null = null;
  let playing = ref(false);
  let count = ref(0);

  (async () => {
    await fetchAndPrepareAudio();
  })();

  async function fetchAndPrepareAudio() {
    loading.value = true;
    console.log('loading');
    sampleURLs = [];
    loadedSamples = [];
    await loadSampleList();
    await loadSampleURLs();
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

  async function loadSampleURLs() {
    for (const sampleId of pattern.value.getSampleIds()) {
      const sampleURL = await loadSampleURL(sampleId);
      if (sampleURL) {
        sampleURLs.push(sampleURL);
      }
    }
  }

  async function reloadAudioElement(sampleId: string, trackIndex: number){
    loading.value = true;
    console.log('loading')
    updateSampleIdForTrack(sampleId, trackIndex);
    const sampleURL = await loadSampleURL(sampleId);
    if (typeof (sampleURL) === 'string') {
      pattern.value.getTrackN(trackIndex).sampleId = sampleId;
      sampleURLs[trackIndex] = sampleURL;
      for (let index = 0; index < 16; index++) {
        loadedSamples[trackIndex][index] = new Audio(sampleURL);
      }
    }
    loading.value = false;
    console.log('done')
  }

  const updateSampleIdForTrack = (newSampleId: string, trackIndex: number) => {
    pattern.value.tracks[trackIndex].sampleId = newSampleId;
  }

  const getSampleIdForTrack = (trackIndex: number) => pattern.value.tracks[trackIndex].sampleId;

  const isPlaying = (index: number) => playing.value && count.value === index;
  
  async function loadSampleURL(sampleId: string){
    const sampleURL = await fetchSample(sampleId);
      if (typeof (sampleURL) === 'string') {
        return sampleURL;
      }
      return null;
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
        const beat = pattern.value.getTrackN(track).beats[count.value];

        if (pattern.value.isBeatActive(track, count.value)) {
            loadedSamples[track][count.value%16].play();
        }
    }

    count.value = (count.value === pattern.value.length -1) 
        ? 0 
        : count.value+1;
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
        playing.value = false;
        clearInterval(audioInterval);
        audioInterval = null;
        count.value = 0;
    }
  }

  const savePattern = () => {
    storePattern(pattern.value);
  }

  const loadPattern = async (name: string) => {
    const fetchedPattern = await fetchPattern(name);
    if (fetchedPattern instanceof Pattern) {
      setNewPattern(fetchedPattern);
    }
  }

  const setNewPattern = (newPattern: Pattern) => {
    pattern.value = newPattern;
    fetchAndPrepareAudio();
  }

  return { getSampleIdForTrack, isPlaying, updateSampleIdForTrack, stop, sampleList, pattern, loading, playing, togglePlay, savePattern, loadPattern, setNewPattern, reloadAudioElement }

})