<script setup lang="ts">
    import BeatButton from "./BeatButton.vue";
    import { usePatternStore } from "@/stores/stores";
    import { computed } from "vue";
    
    const props = defineProps<{
      trackIndex: number
    }>();

    const name = computed(() => usePatternStore().pattern.getSampleIds()[props.trackIndex])
    const type = computed(() => {
      let type = name.value;
      if (type.includes("Basedrum") || type.includes("basedrum")) {
        type = "Basedrum"
      } else if (type.includes("Snare") || type.includes("snare")){
        type = "Snare"
      } else if (type.includes("Hat") || type.includes("hat")){
        type = "Hihat"
      } else if (type.includes("Clap") || type.includes("clap")){
        type = "Clap"
      }
      return type
    })

</script>

<template>
    <div>
      <div>{{ type }}</div>
      <div class="name">{{ name }}</div>
      <BeatButton 
        v-for="index in usePatternStore().pattern.length" 
        :trackIndex="trackIndex" 
        :active="usePatternStore().pattern.getTrackN(trackIndex).isBeatActive(index-1)" 
        :index="index-1" />
    </div>
</template>

<style scoped>
.name {
  font-size: 10px;
}

span {
  display: block;
  margin: 1rem auto;
  text-align: center;
}
</style>
