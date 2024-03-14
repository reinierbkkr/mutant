<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="hello world" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
