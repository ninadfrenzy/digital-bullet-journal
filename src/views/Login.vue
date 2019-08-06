<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3">
          <div class="card my-5">
            <h2 class="card-title text-center my-5">Login</h2>
            <div class="row text-center">
              <div class="col">
                <button class="btn btn-danger my-3" @click="loginWithGoogle()">google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scaffolding from "@/components/Scaffolding.vue";
import Daylog from "@/components/Daylog.vue";
export default {
  components: {
    Scaffolding,
    Daylog
  },
  methods: {
    loginWithGoogle () {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result)=>{
        console.log(result)
        localStorage.setItem('auth', JSON.stringify(result))
        this.$root.auth = result
        this.$router.push('/day')
        
      })
    }
  }
};
</script>

<style>
</style>
