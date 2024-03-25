<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';

    function togglePlay(){
        usePatternStore().togglePlay();
    }
</script>

<template>
    <button 
        @click="togglePlay" 
        :disabled='usePatternStore().loading?true:false'
    >
        {{ usePatternStore().playing ? "stop" : "play"}}
    </button>
</template>

<style scoped>
button, div {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
