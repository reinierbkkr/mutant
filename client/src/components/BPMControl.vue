<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import { ref, computed, nextTick } from 'vue'

    const edit = ref(false);
    const bpm = usePatternStore().getBPM();
    const inputField = ref();

    const handleClick = () =>{
        edit.value = true;
        nextTick(() => {
            inputField.value.focus();
        });
    }

    const save = (event: Event) => {
        const target = event.target as HTMLInputElement;
        console.log(parseInt(target.value));
        usePatternStore().setBPM(parseInt(target.value))
        edit.value = false;
    }

    const esc = () => {
        edit.value = false;
    }

</script>

<template>
    <span>BPM: </span>
    <input type="number"
        v-if="edit"
        ref="inputField"
        :value="bpm"
        @keyup.enter="save($event);"
        @keyup.esc="esc();"
        @blur="save($event);"
        />
    <div v-if="!edit" @click="handleClick" class="editable">
        {{ bpm }}
    </div>
</template>
    
<style scoped>
input, input:focus {
    width: 28px;
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
    width: 28px;
    height: 26px;
    display: inline-block;
}

input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
</style>


