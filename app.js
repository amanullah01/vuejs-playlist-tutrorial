Vue.component("greeting", {
  template:
    "<p>Hello my name is {{ name }} <button @click='changeMe'>Change me</button></p>",
  data: function() {
    return {
      name: "Amanullah Aman"
    };
  },
  methods: {
    changeMe: function() {
      this.name = "Mr. Rafi";
    }
  }
});

var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue app one title"
  },
  methods: {},
  computed: {}
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue app two title"
  },
  methods: {},
  computed: {}
});
