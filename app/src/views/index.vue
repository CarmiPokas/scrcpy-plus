<template>
  <div class="home">
    <information />
    <device />
  </div>
</template>

<script>
import information from '@/components/home/information.vue';
import device from '@/components/home/device.vue';

export default {
  name: 'HomeView',
  components: { information, device }
}
</script>
