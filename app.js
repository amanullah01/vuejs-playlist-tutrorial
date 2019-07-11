new Vue({
  el: "#vue-app",
  data: {
    age: 29
  },
  methods: {
    add(inc) {
      this.age += inc;
    },
    sub(dec){
        this.age -=dec;
    }
  }
});
