new Vue({
  el: "#vue-app",
  data: {
    name: "Aman",
    job: "Software Engineer"
  },
  methods: {
    greet(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
