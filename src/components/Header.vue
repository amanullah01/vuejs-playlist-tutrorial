<template>
  <header>
    <h1 @click="changePrimitiveType">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  //   name: "appHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    changePrimitiveType() {
      this.$emit("changeTitle", "Vue Wizerd");
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
