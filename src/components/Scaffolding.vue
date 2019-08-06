<template>
  <nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 " id="nav-title">Bullet Journal</span>
    
    <ul class="navbar-nav ml-auto" v-if = "$root.auth">
      <li class="nav-item active">
        <button @click="logoutUser()" class="btn btn-danger">Logout</button>
      </li>
    </ul>
    
  </nav>
</template>
<script>
export default {
  methods: {
    logoutUser() {
      localStorage.removeItem('auth')
      this.$root.auth = null
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
    #nav-title{
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
        font-style: italic;
    }
</style>


