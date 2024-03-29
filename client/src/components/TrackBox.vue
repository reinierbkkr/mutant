<script setup lang="ts">
    import BeatButton from "./BeatButton.vue";
    import { usePatternStore } from "@/stores/stores";
    import { ref, computed, nextTick } from "vue";
    
    const props = defineProps<{
      trackIndex: number
    }>();

    const bpm = computed(() => usePatternStore().getSampleIdForTrack(props.trackIndex))
    const type = computed(() => {
      let type = bpm.value;
      if (type.includes("Basedrum") || type.includes("basedrum")) {
        type = "Basedrum"
      } else if (type.includes("Snare") || type.includes("snare")){
        type = "Snare"
      } else if (type.includes("Hat") || type.includes("hat")){
        type = "Hihat"
      } else if (type.includes("Clap") || type.includes("clap")){
        type = "Clap"
      }
      return type
    })
    
    const selectBox = ref();
    const edit = ref(false);
    const chosenSample = ref("");
    const handleClick = () => {
      chosenSample.value = bpm.value;
      edit.value = true;
      nextTick(() => {
          selectBox.value.focus();
      });
    }

    const stop = () => {
      edit.value = false;
    }

    const save = () => {
      usePatternStore().reloadAudioElement(chosenSample.value, props.trackIndex);
      edit.value = false;
    }

</script>

<template>
    <div class="container">
      <div :class='["editable samplecontainer", edit?"isedit":""]' @click="handleClick">
        <div class="type">{{ type }}</div>
        <div class="name" v-if="!edit">{{ name }}</div>
          <select v-if="edit" v-model="chosenSample" ref="selectBox"
              @change="save()"
              @keyup.esc="stop();"
              @blur="save()"
          >
            <option :value="chosenSample" :key="chosenSample">{{ chosenSample }}</option>
            <option v-for="sample of usePatternStore().sampleList" v-show="sample !== chosenSample" :value="sample" :key="sample"
            >{{ sample }}</option>
          </select>
        </div>
        <div class="beatcontainer">
          <BeatButton 
            v-for="index in usePatternStore().pattern.length" 
            :trackIndex="trackIndex" 
            :active="usePatternStore().pattern.getTrackN(trackIndex).isBeatActive(index-1)" 
            :index="index-1" />
        </div>
    </div>
</template>

<style scoped>

select, select:focus {
    width:130px;
    height: 16px;
    color: var(--color-text);
    border: none;
    outline: none;
    background-color: #13392C;
    margin-left: auto;
    /* padding: 3px 10px; */
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    -o-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-align-last: right;
}

option {
  direction: rtl;
}

.isedit {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.container{
  display: flex;
  flex-direction: row;
}

.samplecontainer{
  display: flex;
  flex-direction: column;
  text-align: right;
  /* justify-items: right; */
  margin: 0.5rem;
}

.type, .name {
  width: 150px;
  margin: 0.05rem;
}

.name {
  font-size: 10px;
}

.beatcontainer {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}
</style>
