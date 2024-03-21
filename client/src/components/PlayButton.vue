<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';

    import { ref } from 'vue'
        
    const playing = ref(false)
    let audioInterval: NodeJS.Timeout | null;

    // function toggle() {
    //     console.log(new Date(Date.now()).toISOString())
    //     playing.value = !playing.value;
    //     if (playing.value) {
    //         playAudio();
    //         audioInterval = setInterval(playAudio, 1000);
    //     } else {
    //         if (audioInterval !== null) {
    //             clearInterval(audioInterval);
    //             audioInterval = null;
    //         }
    //     }
    // }

    // const { audioPlayer } = usePatternStore();

    function playAudio(){
        if (usePatternStore().audioPlayer) {
            usePatternStore().audioPlayer?.playAudio();
        }
    }
</script>

<template>
    <span>{{ usePatternStore().loading?"loading":"done" }}</span>
    <button @click="playAudio">play</button>
    <!-- <button @click="toggle" :disabled='sampleURL?false:true'>{{ playing ? "stop" : "play"}}</button> -->
</template>

<style scoped>
button, div {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
