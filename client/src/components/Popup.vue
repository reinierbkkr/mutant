<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import { ref, computed, nextTick } from 'vue'

   

</script>

<template>
    <div class="blackout">
        <div>
            popup
        </div>
    </div>
</template>

<style scoped>
    .blackout {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0);
        opacity: 0.7;
    }
    div {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>


