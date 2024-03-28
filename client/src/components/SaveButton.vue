<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';

    function handleClick(){
        usePatternStore().savePattern();
    }

</script>

<template>
    <div class="button green" @click="handleClick">save pattern</div>
</template>

<style scoped>

</style>
