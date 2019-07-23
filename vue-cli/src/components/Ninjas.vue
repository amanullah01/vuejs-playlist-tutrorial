<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show" v-bind:key="ninja.id">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ninjas",
  data() {
    return {
      ninjas: [
        { id: 1, name: "Aman", speciality: "Vue component", show: true },
        { id: 2, name: "Khan", speciality: "HTML", show: false },
        { id: 3, name: "Suzon", speciality: "PHP", show: true },
        { id: 4, name: "Tago", speciality: "TypeScript", show: false },
        { id: 5, name: "Kami", speciality: "Webpack", show: true },
        { id: 6, name: "Yosi", speciality: "Aakaimma", show: false }
      ]
    };
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

