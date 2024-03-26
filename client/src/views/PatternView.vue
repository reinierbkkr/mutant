<script setup lang="ts">
    // import { Pattern } from "./classes";
    import Name from '../components/Name.vue';
    import PlayButton from "../components/PlayButton.vue";
    import SaveButton from "../components/SaveButton.vue";
    import TrackView from "../components/TrackView.vue";
    import Load from "../components/Load.vue";
    import { usePatternStore } from '@/stores/stores';

    // const store = usePatternStore();
    // const { pattern } = store;

</script>

<template>
    <RouterLink to="/newpattern">new pattern</RouterLink>
    <Name />
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
  margin: 0;
}
</style>
