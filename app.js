new Vue({
  el: "#vue-app",
  data: {
    isAvailable: false,
    isNearby: false
  },
  methods: {},
  computed: {
    computedCssClass: function() {
      return {
        available: this.isAvailable,
        nearby: this.isNearby
      };
    }
  }
});
