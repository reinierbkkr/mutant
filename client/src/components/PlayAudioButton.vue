<script setup lang="ts">
    // import { ref, } from 'vue'

    async function playAudio(){
        const audio = new Audio('/LegoweltSnare001.wav')
        audio.play()
    }
</script>

<template>
    <button @click="playAudio">play audio</button>
</template>

<style scoped>
button {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
