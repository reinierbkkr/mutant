<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    const patternName = defineModel();

    function handleClick(){
        usePatternStore().loadPattern(patternName.value as string);
    }

</script>

<template>
    <input v-model="patternName">
    <button @click="handleClick">load</button>
</template>

<style scoped>
button, div {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
