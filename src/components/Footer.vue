<template>
  <footer>
    <p>{{ copyright }} {{titleCopy}}</p>
  </footer>
</template>
<script>
import { bus } from "../main";

export default {
  name: "app-footer",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copyright: "Copyright 2019 ",
      titleCopy: this.title
    };
  },
  created() {
    bus.$on("changeTitleEventBus", data => {
      this.titleCopy = data;
    });
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>

