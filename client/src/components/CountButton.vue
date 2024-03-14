<script setup lang="ts">
import { type Ref, ref, computed } from 'vue'

const count = ref({
    first:0,
    second:1,
});

function increment() {
    count.value.first++
    count.value.second++
    // isActive.value=false
}

interface Library {
  name: string;
  books: string[]; // Specify the type of the 'books' array
}

const library: Ref<Library> = ref({
    name:"Reinier",
    books: [],
});
const bookMessage = computed (() => { // this is cached
    return library.value.books.length > 0 ? 'has books' : 'no books';
})

function bookMessageFunc(){ // this is not cached only computed when rendered. better for very heavy calculations
    return library.value.books.length > 0 ? 'has books' : 'no books';
}
const isActive = computed(() => {
    return library.value.books.length < 10;
})
// const isActive = ref(true);

</script>

<template>
    <button @click="increment">click</button><br/>
    {{ count.first }} {{ count.second }}<br/>
    <button v-if="isActive" :class="{ 'active': isActive }" @click="library.books.push('boek')">click</button>
    <div v-else>too many</div>
    <br/>
    {{ library.name }} {{ library.books.length }} {{ bookMessage }}<br /><br />
    
    <li v-for="book in library.books">
  	{{ book }}<br />
	</li>
    

</template>