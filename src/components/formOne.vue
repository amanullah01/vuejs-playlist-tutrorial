<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Please get in touch.</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <label for>Your message:</label>
        <textarea name id cols="15" rows="5"></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
export default {};
</script>
