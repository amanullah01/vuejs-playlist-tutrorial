new Vue({
  el: "#vue-app",
  data: {
    name: "Aman",
    job: "Software Engineer",
    website: "https://www.google.com",
    webTag: "<a href='https://www.google.com' target='_blank'>Google</a>"
  },
  methods: {
    greet(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
