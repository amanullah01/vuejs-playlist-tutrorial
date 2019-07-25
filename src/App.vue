<template>
  <div>
    <app-blog></app-blog>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
export default {
  components: {
    "app-blog": addBlog
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
