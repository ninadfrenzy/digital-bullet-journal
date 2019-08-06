<template>
  <div id="app">
    <Scaffolding/>
    <router-view></router-view>    
  </div>
</template>

<script>
import Scaffolding from '@/components/Scaffolding.vue'
export default {
  name: "app",
  components: {
    Scaffolding
  }
};
</script>

<style>
</style>
