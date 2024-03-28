<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import Load from '@/components/Load.vue'

    usePatternStore().stop()

</script>

<template>
    <Load />
</template>

<style scoped>

</style>
