<template>
  <nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0" id="nav-title">Bullet Journal</span>

    <ul class="navbar-nav ml-auto list-group-horizontal" v-if="$root.auth">
      <a class="navbar-brand" href="#">
        <img :src="this.$root.auth.user.photoURL" alt="" height="40px" width="40px" class="rounded-circle">
      </a>
      <span
        class="mx-2 px-2 text-light mb-0 mt-1 navbar-brand username"
      >{{'Hi '+ this.$root.auth.user.displayName}}</span>
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
      localStorage.removeItem("auth");
      this.$root.auth = null;
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#nav-title {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-style: italic;
}
.username {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
}
</style>


