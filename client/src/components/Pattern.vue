<script setup lang="ts">
    import { Pattern } from "./pattern.ts";
    import { Track } from "./track.ts";
    import TrackView from "./TrackView.vue";

    const beatPattern = new Pattern("dnb",["sample1","sample2"],16);
    console.log(beatPattern.tracks);
</script>

<template>
    <div>{{ beatPattern.name }}</div>
    <div v-for="track in beatPattern.tracks">
        <TrackView :track="track" />
    </div>
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
