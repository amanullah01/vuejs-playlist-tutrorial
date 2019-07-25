<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Login form</h3>
        <p>Enter your details to logged in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./formHelper.vue";
export default {
  components: {
    "form-helper": formHelper
  },
  methods: {
    handleSubmit: function() {}
  }
};
</script>
