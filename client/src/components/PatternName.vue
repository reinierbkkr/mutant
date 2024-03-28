<script setup lang="ts">
    import { usePatternStore } from '@/stores/stores';
    import { ref, computed, nextTick } from 'vue'

    let edit = ref(false);
    let name = computed(() => usePatternStore().pattern.name);
    const inputField = ref();


    const handleClick = () =>{
        edit.value = true;
        nextTick(() => {
            inputField.value.focus();
        });
    }

    const save = (event: Event) => {
        const target = event.target as HTMLInputElement;
        usePatternStore().pattern.name = target.value;
        edit.value = false;
    }

    const esc = () => {
        edit.value = false;
    }

</script>

<template>
    <span>pattern name: </span>
    <input type="text"
        ref="inputField"
        v-if="edit"
        :value="name"
        @keyup.enter="save($event);"
        @keyup.esc="esc();"
        @blur="save($event);"
        />
    <div v-if="!edit" @click="handleClick" class="editable">
        {{ name }}
    </div>
</template>
    
<style scoped>
.editable {
    width: 150px;
    display: inline-block;
}
</style>


