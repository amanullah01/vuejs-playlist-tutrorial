<template>
  <header>
    <h1 @click="changePrimitiveType">{{ titleCopy }}</h1>
  </header>
</template>

<script>
import { bus } from "../main";
export default {
  //   name: "appHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      titleCopy: this.title
    };
  },
  methods: {
    changePrimitiveType() {
      //emit
      //this.$emit("changeTitle", "Vue Wizerd");
      this.titleCopy = "Vue Wizerd event bus";
      bus.$emit("changeTitleEventBus", "Vue Wizerd event bus");
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
