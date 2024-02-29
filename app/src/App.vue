<template>
  <nav>
    <span>Development Stuff (Ignore): </span>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
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
</style>