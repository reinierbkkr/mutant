<script setup lang="ts">
    import { ref, } from 'vue'
    import { fetchSample } from './api';
    
    let sampleURL = ref("");
    
    const playing = ref(false)
    let audioInterval: NodeJS.Timeout | null;

    function toggle() {
        console.log(new Date(Date.now()).toISOString())
        playing.value = !playing.value;
        if (playing.value) {
            playAudio();
            audioInterval = setInterval(playAudio, 200);
        } else {
            if (audioInterval !== null) {
                clearInterval(audioInterval);
                audioInterval = null;
            }
        }
    }

    function playAudio(){
        console.log(new Date(Date.now()).toISOString())
        const audio = new Audio(sampleURL.value)
        audio.play()
    }

    async function fetchAudio(){
        const sample = await fetchSample(0);
        console.log(sample);
        if (sample instanceof Blob){
            sampleURL.value = URL.createObjectURL(sample);
        }
    }
</script>

<template>
    <button @click="toggle" :disabled='sampleURL?false:true'>{{ playing ? "stop" : "play"}}</button>
    <button @click="fetchAudio">fetch</button>
</template>

<style scoped>
button, div {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
