<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';

    import { ref } from 'vue'
        
    const playing = ref(false)
    let audioInterval: NodeJS.Timeout | null;

    function togglePlay(){
        usePatternStore().audioPlayer?.togglePlay();
    }
</script>

<template>
    <button 
        @click="togglePlay" 
        :disabled='usePatternStore().loading?true:false'
    >
        {{ usePatternStore().audioPlayer?.playing ? "stop" : "play"}}
    </button>
</template>

<style scoped>
button, div {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
