<script setup lang="ts">
    import BeatButton from "./BeatButton.vue";
    import { usePatternStore } from "@/stores/stores";
    import { computed } from "vue";
    
    const props = defineProps<{
      trackIndex: number
    }>();

    const name = computed(() => {
            let name = usePatternStore().pattern.getSampleIds()[props.trackIndex];
            if (name.includes("Basedrum") || name.includes("basedrum")) {
              name = "Basedrum"
            } else if (name.includes("Snare") || name.includes("snare")){
              name = "Snare"
            } else if (name.includes("Hat") || name.includes("hat")){
              name = "Hihat"
            } else if (name.includes("Clap") || name.includes("clap")){
              name = "Clap"
            }
            return name
        })

</script>

<template>
    <div>
      <span>{{ name }}</span>
      <BeatButton 
        v-for="index in usePatternStore().pattern.length" 
        :trackIndex="trackIndex" 
        :active="usePatternStore().pattern.getTrackN(trackIndex).isBeatActive(index-1)" 
        :index="index-1" />
    </div>
</template>

<style scoped>
span {
  display: block;
  margin: 1rem auto;
  text-align: center;
}
</style>
