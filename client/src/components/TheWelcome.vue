<script setup lang="ts">
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { ref } from 'vue'

let message = ref("message");

async function getMessage(){
  const response = await fetch("/api/message");
  const fetchedMessage = await response.text();
  console.log(fetchedMessage)
  message.value = fetchedMessage
}
</script>

<template>
    <button @click="getMessage">click</button>
    <div id="message">{{ message }}</div>
</template>

<style scoped>
button {
  display: block;
  margin: 2rem auto 2rem;
}

#message {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
