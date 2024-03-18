<script setup lang="ts">
    import { ref } from 'vue'
    import { fetchSample } from './api';
    
    let sampleURL = ref("");
    
    const playing = ref(false)
    let audioInterval: NodeJS.Timeout | null;

    function toggle() {
        console.log(new Date(Date.now()).toISOString())
        playing.value = !playing.value;
        if (playing.value) {
            playAudio();
            audioInterval = setInterval(playAudio, 1000);
        } else {
            if (audioInterval !== null) {
                clearInterval(audioInterval);
                audioInterval = null;
            }
        }
    }

    function playAudio(){
        // console.log(new Date(Date.now()).toISOString())
        const audio = new Audio(sampleURL.value)
        audio.play()
    }

    async function fetchAudio(){
        const response = await fetchSample(0);
        if (response instanceof Blob){
            console.log(response.size)
            sampleURL.value = URL.createObjectURL(response);
        } else {
            console.log(response.statusCode + ": " + response.statusText)
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
