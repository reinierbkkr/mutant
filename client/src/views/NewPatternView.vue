<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { usePatternStore } from '@/stores/stores';
    import { Pattern } from '@/components/classes';
    import router from '@/router/index';

    usePatternStore().stop()

    const bars = ref(1);
    const tracks = ref(2);
    const inputField = ref();
    const bpm = ref("");
    let ok = ref(true);

    onMounted(() => {
        inputField.value.focus();
    })

    const makePattern = () => {
        if (!bpm.value){
            ok.value = false;
        } else {
            const samples: string[] = [];
            for (let i = 0; i < tracks.value; i++) {
                samples.push(usePatternStore().sampleList[i]);
            }
            usePatternStore().setNewPattern(Pattern.createNew(bpm.value, samples, bars.value*16));
            router.push('/');
        }
    }

</script>

<template>
    <div class="savecontainer">
        <div>start a new pattern</div>
        <div>
            name: 
            <input type="text" 
                ref="inputField" 
                v-model="name"
                @change="ok=name?true:false" />
            <div v-if="!ok">name is not ok</div>
        </div><br />
        <div>
            how many bars:
            <select v-model="bars">
                <option>1</option>
                <option>2</option>
                <option>4</option>
                <option>8</option>
            </select>
        </div><br />
        <div>
            how many tracks:
            <select v-model="tracks">
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div><br />
        <div class="button green small" @click="makePattern">make it</div><br /><br /><br />
        <div class="button green small" @click="router.push('/')">back</div>
    </div>
</template>

<style scoped>
.savecontainer {
    width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.small {
    
    max-width: 50px;
}
</style>
