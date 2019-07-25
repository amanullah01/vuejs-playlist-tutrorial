<template>
  <div>
    <form-helper>
      <h2>I am the slot title</h2>
      <p>I am the slot paragraph</p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue";

export default {
  components: {
    "form-helper": formHelper
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
