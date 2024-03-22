<script setup lang="ts">
    import { Track } from "./classes";
    import BeatButton from "./BeatButton.vue";

    
    const props = defineProps<{
      track: Track;
      trackIndex: number
    }>();

    // console.log(props.track.beats)

</script>

<template>
    <div>
      <span>{{ track.sampleId }}</span>
      <BeatButton v-for="(beat, index) in track.beats" :trackIndex="trackIndex" :active="beat" :index="index" />
    </div>
</template>

<style scoped>
span {
  display: block;
  margin: 1rem auto;
  text-align: center;
}
</style>
