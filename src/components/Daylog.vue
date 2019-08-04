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
              <div class="row justify-content-center">
                <div class="col-4 text-center">
                  <button class="btn btn-primary">Idea</button>
                </div>
                <div class="col-4 text-center">
                  <button class="btn btn-primary">Event</button>
                </div>
                <div class="col-4 text-center">
                  <button class="btn btn-primary">Task</button>
                </div>
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
  data() {
    return {};
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
  }
};
</script>
<style scoped>
#date {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
</style>


