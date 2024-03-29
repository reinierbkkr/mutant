<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import { computed } from 'vue';

    const props = defineProps<{
      trackIndex: number;
      index: number;
    }>();

    const active = computed(() => usePatternStore().pattern.isBeatActive(props.trackIndex, props.index));
    const isPlaying = computed (() => usePatternStore().isPlaying(props.index))

    function handleClick(){
        usePatternStore().pattern.toggleBeat(props.trackIndex, props.index);
    }

</script>

<template>
    <div @click="handleClick" :class="[
        active?'active':'inactive',
        (props.index+1)%16===0?'thickborder':
            (props.index+1)%4===0?'thinborder':'noborder',
        isPlaying&&active?'playing':'']" />
</template>

<style scoped>

div {
  flex-grow: 1;
  border: none;
  border: .5px solid #042135;
}
.thinborder{
    border-right: 1px solid #2372a0;
}
.thickborder{
    border-right: 3px solid #2372a0;
}
.active {
    background-color: #0c4a6e;
    box-shadow:inset 0 0 0px 0px #3995c7;
    transition: 0.4s;
}
.inactive {
    background-color: #082f49;
    box-shadow:inset 0 0 0px 0px #3995c7;
    transition: 0.4s;
}
.playing {
    box-shadow:inset 0 0 2px 2px #3995c7;
    transition: 0.1s;
}
</style>
