<script setup lang="ts">
    import { ref, } from 'vue'

    const active = ref(false)
    let audioInterval: NodeJS.Timeout | null;

    function toggle() {
        console.log(new Date(Date.now()).toISOString())
        active.value = !active.value;
        if (active.value) {
            playAudio();
            audioInterval = setInterval(playAudio, 200);
        } else {
            if (audioInterval !== null) {
                clearInterval(audioInterval);
                audioInterval = null;
            }
        }
    }

    async function playAudio(){
        console.log(new Date(Date.now()).toISOString())
        const audio = new Audio('/LegoweltSnare001.wav')
        audio.play()
    }
</script>

<template>
    <button @click="toggle">{{ active ? "stop" : "play"}}</button>
</template>

<style scoped>
button {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
