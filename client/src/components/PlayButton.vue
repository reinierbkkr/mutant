<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';

    function togglePlay(){
        usePatternStore().togglePlay();
    }
</script>

<template>
    <div class="button green"
            @click="togglePlay" 
            :disabled='usePatternStore().loading?true:false'
        >
            {{ usePatternStore().playing ? "stop" : "play"}}
    </div>
</template>

<style scoped>

</style>
