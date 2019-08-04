<template>
  <div id="app">
    <Scaffolding />
    <Daylog />
  </div>
</template>

<script>

import Scaffolding from '@/components/Scaffolding.vue'
import Daylog from '@/components/Daylog.vue'
export default {
  name: 'app',
  components: {
    Scaffolding,
    Daylog
  }

}
</script>

<style>

</style>
