<script setup lang="ts">
    // import { Pattern } from "./classes";
    import PlayButton from "./PlayButton.vue";
    import SaveButton from "./SaveButton.vue";
    import TrackView from "./TrackView.vue";
    import Load from "./Load.vue";
    import { usePatternStore } from '@/stores/stores';

    // const store = usePatternStore();
    // const { pattern } = store;

</script>

<template>
    <div>{{ usePatternStore().pattern.name }}</div>
    <PlayButton />
    <div class="container">
      <TrackView v-for="(track, index) of usePatternStore().pattern.tracks" :track="track" :trackIndex="index" />
    </div>
    <SaveButton />
    <Load />
</template>

<style scoped>
.container {
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
