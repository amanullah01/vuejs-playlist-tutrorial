new Vue({
  el: "#vue-app",
  data: {
    age: 29,
    x: 0,
    y: 0
  },
  methods: {
    add(inc) {
      this.age += inc;
    },
    sub(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      alert('you click me and i prevent you');
    }
  }
});
