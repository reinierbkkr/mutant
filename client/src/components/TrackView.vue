<script setup lang="ts">
    import { Track } from "./track.ts";
    
    const props = defineProps<{track: Track}>();

    console.log(props.track.beats)

</script>

<template>
    <div>{{ track.sample }}</div>
    <div v-for="beat in track.beats">{{ beat }}</div>
</template>

<style scoped>
button {
  display: block;
  margin: 2rem auto 2rem;
}

#message {
  display: block;
  margin: 2rem auto 2rem;
  text-align: center;
}
</style>
