<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { usePatternStore } from '@/stores/stores';
    import { Pattern } from '@/components/classes';
    import router from '@/router/index';

    const bars = ref(1);
    const tracks = ref(2);
    const inputField = ref();
    const name = ref("");
    let ok = ref(true);

    onMounted(() => {
        inputField.value.focus();
    })

    const makePattern = () => {
        if (!name.value){
            ok.value = false;
        } else {
            const samples: string[] = [];
            for (let i = 0; i < tracks.value; i++) {
                samples.push(usePatternStore().sampleList[i]);
            }
            usePatternStore().setNewPattern(Pattern.createNew(name.value, samples, bars.value*16));
            router.push('/');
        }
    }

</script>

<template>
    <div>start a new pattern</div>
    <div>
        name: 
        <input type="text" 
            ref="inputField" 
            v-model="name"
            @change="ok=name?true:false" />
        <div v-if="!ok">name is not ok</div>
    </div>
    <div>
        how many bars:
        <select v-model="bars">
            <option>1</option>
            <option>2</option>
            <option>4</option>
            <option>8</option>
            <option>16</option>
        </select>
    </div>
    <div>
        how many tracks:
        <select v-model="tracks">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <button @click="makePattern">make it</button>
    <RouterLink to="/">back</RouterLink>
</template>

<style scoped>
.container {
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
