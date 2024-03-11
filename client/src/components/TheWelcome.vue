<script setup lang="ts">
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

let message: string = "";

async function getMessage(){
  const response = await fetch("/api/message");
  const message = await response.text();
  console.log(message)
  // this.message = (message as string)
}
</script>

<template>
    <button @click="getMessage">click</button>
    <!-- <div>{{ message }}</div> -->
</template>

<style scoped>
button {
  display: block;
  margin: 2rem auto 2rem;
  margin-top: 2rem;
}
</style>
