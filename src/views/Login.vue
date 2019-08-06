<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3">
          <div class="card my-5 shadow-lg">
            <h2 class="card-title text-center my-5">Bullet Journal</h2>
            <div class="card-text text-center intro mb-4 mx-5">
                a mindfulness practice disguised as a productivity system. It's designed to help you organize your what while you remain aware of your why. The goal of the Bullet Journal is to help its practitioners (bullet journalists) live intentional lives, ones that are productive and meaningful.
            </div>
            <div class="row text-center">
              <div class="col">
                <button class="btn btn-primary my-3" @click="loginWithGoogle()">Login  <i class="fa fa-google" aria-hidden="true"></i></button>
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
    .intro {
        font-family: Source Code Pro, monospace;
        font-size: 14px;
    }
    h2 {
        font-family: 'Rouge Script', cursive;
        font-weight: bolder;
        font-size: 60px; 
    }
</style>
