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
    <button @click="handleClick" :class="active?'active':'inactive'"></button>
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
.active {
    background-color: #0c4a6e;
}
.inactive {
    background-color: #082f49;
}
</style>
