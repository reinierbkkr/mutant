import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { Pattern, AudioPlayer } from '@/components/classes';
import { fetchSample } from '@/components/api';

export const usePatternStore = defineStore('patternStore', () => {

  const currentPattern = ref(new Pattern("dnb",["0","1"],16))
  const samples: string[] = [];
  let loading = ref<boolean>(true);
  let audioPlayer = ref<AudioPlayer | null>(null);
  let playing = ref(true);

  (async () => {
    for (const sampleId of currentPattern.value.getSampleIds()) {
      const response = await fetchSample(sampleId);
      if (typeof (response) === 'string'){
        samples.push(response);
      }     
    }
    audioPlayer.value = new AudioPlayer(samples, currentPattern.value);
    loading.value = false;
  })();

  return { currentPattern, samples, loading, audioPlayer };
})

