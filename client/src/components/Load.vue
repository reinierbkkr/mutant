<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import { ref, onMounted } from 'vue'
    import router from '@/router/index';

    const inputField = ref();
    const bpm = ref("");
    let ok = ref(true);

    onMounted(() => {
        inputField.value.focus();
    })

    function handleClick(){
        if (bpm.value){
            usePatternStore().loadPattern(bpm.value as string);
            router.push('/');
        }
    }

</script>

<template>
    <div class="loadcontainer">
        <input v-model="name" ref="inputField" 
        @keyup.enter="handleClick()"/>
        <div class="button green" @click="handleClick">load</div>
        <div class="button green" @click="router.push('/')">back</div>
    </div>
</template>

<style scoped>
.loadcontainer {
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

button, div {
  display: block;
  margin: 2rem auto 2rem;
}

input, input:focus {
    width:150px;
    height: 26px;
    color: var(--color-text);
    border: none;
    outline: none;
    background-color: hsla(160, 100%, 37%, 0.2);
    padding: 3px 10px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
}

.editable {
    width: 150px;
    height: 26px;
}
</style>
