<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of form</h3>
        <p>Information about the slot</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
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
  methods: {
    handleSubmit: function() {}
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
