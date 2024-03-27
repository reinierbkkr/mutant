<script setup lang="ts">
    import PatternName from '../components/PatternName.vue';
    import PlayButton from "../components/PlayButton.vue";
    import SaveButton from "../components/SaveButton.vue";
    import TrackBox from "../components/TrackBox.vue";
    import Load from "../components/Load.vue";
    import { usePatternStore } from '@/stores/stores';

</script>

<template>
    <RouterLink to="/newpattern">new pattern</RouterLink>
    <PatternName />
    <PlayButton />
    <div class="container">
      <TrackBox v-for="(track, index) of usePatternStore().pattern.tracks" :track="track" :trackIndex="index" />
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
