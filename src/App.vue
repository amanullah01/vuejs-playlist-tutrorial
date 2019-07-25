<template>
  <div>
    <form-helper>
      <h2 slot="title">{{ title }}</h2>
      <p slot="text">I am the slot paragraph</p>
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
    return {
      title: "I am a dynamic slot title"
    };
  },
  methods: {}
};
</script>

<style>
</style>
