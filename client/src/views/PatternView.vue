<script setup lang="ts">
    import PatternName from '../components/PatternName.vue';
    import BPMControl from "../components/BPMControl.vue";
    import PlayButton from "../components/PlayButton.vue";
    import SaveButton from "../components/SaveButton.vue";
    import TrackBox from "../components/TrackBox.vue";
    import Load from "../components/Load.vue";
    import { usePatternStore } from '@/stores/stores';

</script>

<template>
    <div class="playercontainer">
      <div class="topcontainer">
        <div class="namecontainer"><PatternName /></div>
        <div class="buttoncontainer">
          <BPMControl />
          <PlayButton />
          <SaveButton />
        </div>
    </div>
    <div class="trackcontainer">
      <TrackBox v-for="(track, index) of usePatternStore().pattern.tracks" :track="track" :trackIndex="index" />
    </div>
    </div>
</template>

<style scoped>
.playercontainer {
  min-height: 360px;
}

.topcontainer {
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;
}

.trackcontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
