<script setup lang="ts">
import { ref, computed } from 'vue'
import { fetchMessage } from './api'
import { storeClickCount } from './api'
import { fetchClickCount } from './api'

let message = ref("message");
// let count = ref(0);
// let clickedMessage = ref("clicked " + count.value + " times")

async function getMessage(){
  const fetchedMessage = await fetchMessage();
  message.value = fetchedMessage;
}

let count = ref(0);
const clickedMessage = computed(() => `clicked ${count.value} times`);

async function storeClicked(){
  await storeClickCount(count.value +1);
  const newCount =  await fetchClickCount();
  console.log(newCount)
  count.value = newCount;
  console.log(count.value)
}
</script>

<template>
    <button @click="getMessage">get message </button>
    <div id="message">{{ message }}</div>
    <button @click="storeClicked">{{ clickedMessage }}</button>
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
