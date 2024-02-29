<template>
  <div class="home">
    <information />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import information from '@/components/home/information.vue'

export default {
  name: 'HomeView',
  components: { information }
}
</script>
