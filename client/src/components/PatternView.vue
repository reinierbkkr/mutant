<script setup lang="ts">
    // import { Pattern } from "./classes";
    import PlayButton from "./PlayButton.vue";
    import TrackView from "./TrackView.vue";
    import { usePatternStore } from '@/stores/stores';

    const store = usePatternStore();
    const { currentPattern } = store;

</script>

<template>
    <div>{{ currentPattern.name }}</div>
    <PlayButton />
    <div class="container">
      <TrackView v-for="(track, index) of currentPattern.tracks" :track="track" :trackIndex="index" />
    </div>
</template>

<style scoped>
.container {
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
