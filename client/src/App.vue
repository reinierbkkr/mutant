<script setup lang="ts">
import { RouterView } from 'vue-router'

data: {
    image: 'logo.png'
}

</script>

<template>
  <header>
    <div id="logo">
      <img alt="Mutant logo" class="logo" src="@/assets/logo.png" width="75" height="75" />
      <h1>Mutant</h1>
    </div>
    <div class="spacerleft"/>
    <nav>
      <RouterLink to="/">edit</RouterLink>
      <RouterLink to="/newpattern">new pattern</RouterLink>
      <RouterLink to="/loadpattern">load pattern</RouterLink>
    </nav>
    <div class="spacerright" />
  </header>
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.spacerleft {
  flex-grow: 3;
}
.spacerright {
  flex-grow: 4;
}

header {
  position:relative;
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
  margin: 2rem auto 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-right: 2rem;
}

#logo {
  display:flex;
  flex-direction: row;
  margin: 2rem auto 2rem;
}

h1 {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 2rem;
}

.container {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--vt-c-divider-dark-1); 
  margin: 2rem;
  padding: 2rem;
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