new Vue({
  el: "#vue-app",
  data: {
    age: 29
  },
  methods: {
    add(inc) {
      this.age += 1;
    },
    sub(dec){
        this.age -=dec;
    }
  }
});
