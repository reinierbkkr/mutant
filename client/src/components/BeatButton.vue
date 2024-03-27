<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import { computed } from 'vue';

    // const { currentPattern } = usePatternStore();

    const props = defineProps<{
      trackIndex: number;
      index: number;
    }>();

    const active = computed(() => usePatternStore().pattern.isBeatActive(props.trackIndex, props.index));

    function handleClick(){
        usePatternStore().pattern.toggleBeat(props.trackIndex, props.index);
    }

</script>

<template>
    <button @click="handleClick" :class="[
        active?'active':'inactive',
        (props.index+1)%16===0?'thickborder':
            (props.index+1)%4===0?'thinborder':'noborder']" />
</template>

<style scoped>
button {
  display: block;
  margin: 0.2rem auto;
  width: 5rem;
  height: 1rem;
  border: none;
  /* border-color: #0c4a6e; */
  /* border-style: solid;
  border-radius: 30%; */
  /* {"border-neutral-100": !hasTurn} */
}
.thinborder{
    border-bottom: 1px solid #2372a0;
}
.thickborder{
    border-bottom: 3px solid #2372a0;
}
.active {
    background-color: #0c4a6e;
}
.inactive {
    background-color: #082f49;
}
</style>
