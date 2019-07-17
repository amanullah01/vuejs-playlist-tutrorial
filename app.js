new Vue({
  el: "#vue-app",
  data: {
    title: "Hello world",
    favFood: "",
    divTitle: ""
  },
  methods: {
    readRefs: function() {
      console.log("clicked");
      console.log(this.$refs);
      this.favFood = this.$refs.food.value;
      this.divTitle = this.$refs.div_title.innerText;
    }
  },
  computed: {}
});
