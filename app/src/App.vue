<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  margin: 1em;
}
.section {
  margin: 1em;
  width: calc(100% - 2em);
}
.accent-text {
  filter: brightness(0.5);
}
</style>