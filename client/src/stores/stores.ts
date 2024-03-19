import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Pattern } from '@/components/classes';

export const usePatternStore = defineStore('patternStore', () => {

  const currentPattern = ref(new Pattern("dnb",["0","1"],16))
  const samples = [];

  for (let i = 0; i < currentPattern.value.getNOfTracks(); i++) {
    samples[i] = currentPattern.value.tracks[i].sampleId;
  }
  
  return { currentPattern };
})
