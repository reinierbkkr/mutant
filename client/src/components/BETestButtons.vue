<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { fetchMessage } from './api'
    import { storeClickCount } from './api'
    import { fetchClickCount } from './api'
    
    let message = ref("message");
    
    async function getMessage(){
      const fetchedMessage = await fetchMessage();
      message.value = fetchedMessage;
    }
    
    let count = ref(0);
    const clickedMessage = computed(() => `clicked ${count.value} times`);
    
    async function storeClicked(){
      await storeClickCount(count.value +1);
      count.value =  await fetchClickCount();}

    function reset() {
      message.value = "message";
      count.value = 0;
    }
    </script>

<template>
    <button @click="getMessage">get message</button>
    <div id="message">{{ message }}</div>
    <button @click="storeClicked">{{ clickedMessage }}</button>
    <div>the count is stored and retrieved from persistence</div>
    <button @click="reset">reset</button>
</template>

<style scoped>
button {
  display: block;
  margin: 2rem auto 2rem;
}

#message {
  display: block;
  margin: 2rem auto 2rem;
  text-align: center;
}
</style>
