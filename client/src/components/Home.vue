<script setup lang="ts">
import PlayAudioButton from './PlayAudioButton.vue'
import BETestButtons from './BETestButtons.vue'
</script>

<template>
    <div>
        <PlayAudioButton />
        <BETestButtons />
    </div>
</template>

<style scoped>
div {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: var(--vt-c-divider-dark-1); 
    padding: 2rem;
    }
</style>
