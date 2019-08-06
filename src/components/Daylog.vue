<template>
  <div class="daylog">
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title" id="date">{{this.date.date}}</h2>
              <h6 class="card-subtitle mb-2 text-muted" id="date">{{this.date.day}}</h6>
              <hr>
              <input type="text" class="form-control my-2" v-model="note" placeholder="Note">
              <div class="row justify-content-center">
                <div class="col-4 text-center">
                  <button @click="addIdea()" class="btn btn-primary">Idea</button>
                </div>
                <div class="col-4 text-center">
                  <button @click="addEvent()" class="btn btn-primary">Event</button>
                </div>
                <div class="col-4 text-center">
                  <button @click="addTask()" class="btn btn-primary">Task</button>
                </div>
              </div>
              <div class="container my-2">
                <h2 class="card-title" id="ideas">Ideas</h2>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="idea in ideas" :key="idea.id">{{idea.idea}}</li>
                </ul>
              </div>
              <hr>
              <div class="container my-2">
                <h2 class="card-title" id="Events">Events</h2>
                <ul class="list-group list-group-flush">
                  <li  class="list-group-item" v-for="event in events" :key="event.id">{{event.event}}</li>
                </ul>
              </div>
              <hr>
              <div class="container my-2">
                <h2 class="card-title" id="Tasks">Tasks</h2>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="task in tasks" :key="task.id">{{task.task}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem('auth')) {
      next()
    } else {
      next('/')
    }
  },
  data() {
    return {
      note: null,
      ideas: [

      ],
      tasks: [

      ],
      events: [

      ]
    };
  },
  computed: {
    date() {
      var Day = new Date().getDate().toString();
      var Months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var Month = Months[new Date().getMonth()];
      var Year = new Date().getFullYear().toString();
      var DayString = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var DayofTheWeek = new Date().getDay();

      return {
        date: Day + " " + Month + " " + Year,
        day: DayString[DayofTheWeek]
      };
    }
  },
  methods: {
    addIdea () {
      this.ideas.push({
        id:this.ideas.length+1,
        idea:this.note

      })
    },
    addEvent () {
      this.events.push({
        id:this.events.length+1,
        event:this.note
        
      })
    },
    addTask () {
      this.tasks.push({
        id:this.tasks.length+1,
        task:this.note
        
      })
    }
  }
};
</script>
<style scoped>
#date {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
h2,ul{
  font-family: 'Nanum Pen Script',cursive;
}
</style>


