<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import { ref, onMounted } from 'vue'
    import router from '@/router/index';

    const inputField = ref();
    const name = ref("");
    let ok = ref(true);

    onMounted(() => {
        inputField.value.focus();
    })

    function handleClick(){
        console.log("this")
        if (name.value){
            console.log("not this")
            usePatternStore().loadPattern(name.value as string);
            router.push('/');
        }
    }

</script>

<template>
    <input v-model="name" ref="inputField" />
    <button @click="handleClick">load</button>
    <RouterLink to="/">back</RouterLink>
</template>

<style scoped>
button, div {
  display: block;
  margin: 2rem auto 2rem;
}
</style>
