<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';

    function handleClick(){
        usePatternStore().savePattern();
    }

</script>

<template>
    <button @click="handleClick">save</button>
</template>

<style scoped>
button, div {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
