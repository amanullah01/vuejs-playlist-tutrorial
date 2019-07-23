<template>
  <div>
    <h1>List of ninjas</h1>
    <p>This is all available ninjas</p>
    <ul>
      <li v-for="(ninja, index) in ninjas" v-bind:key="index">{{ninja}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Yousi", "Suzon", "Ryu"]
    };
  }
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>

