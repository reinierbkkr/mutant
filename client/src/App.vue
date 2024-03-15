<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

data: {
    image: 'logo.png'
  }
</script>

<template>
  <header>
    <div id="logo">
      <img alt="Mutant logo" class="logo" src="@/assets/logo.png" width="75" height="75" />
    </div>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin: 2rem auto 2rem;
}

#logo {
  text-align: center;
}



/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */
</style>
