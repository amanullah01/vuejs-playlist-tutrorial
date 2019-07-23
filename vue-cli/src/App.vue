<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Ninjas from "./components/Ninjas.vue";

export default {
  components: {
    ninjas: Ninjas
  },
  data: function() {
    return {
      title: "Ninja App"
    };
  },
  methods: {
    greeting() {
      return "Good moring!";
    }
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
<style>
p {
  color: green;
}
</style>
