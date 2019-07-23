<template>
  <div>
    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header> -->
    <app-header v-bind:title="title"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <hr />
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas
  },
  data: function() {
    return {
      ninjas: [
        { id: 1, name: "Aman", speciality: "Vue component", show: true },
        { id: 2, name: "Khan", speciality: "HTML", show: false },
        { id: 3, name: "Suzon", speciality: "PHP", show: true },
        { id: 4, name: "Tago", speciality: "TypeScript", show: false },
        { id: 5, name: "Kami", speciality: "Webpack", show: true },
        { id: 6, name: "Yosi", speciality: "Aakaimma", show: false }
      ],
      title: "Aman"
    };
  },
  methods: {
    // updateTitle: function(updatedTitle) {
    //   this.title = updatedTitle;
    // }
  }
};
</script>

<style>
</style>
