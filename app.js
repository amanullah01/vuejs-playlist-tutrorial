var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue app one title"
  },
  methods: {},
  computed: {
    greet: function() {
      return "Hello, Good Morning app one instance";
    }
  }
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue app two title",
    outside: false,
    outText: ""
  },
  methods: {
    changeOneTitle: function() {
      one.title = "Changed from vue app two. This is title one";
    }
  },
  computed: {
    greet: function() {
      return "Hello, Evening app two instance ";
    }
  }
});

two.outside = true;
two.outText = "This text comes from outside on instance";
