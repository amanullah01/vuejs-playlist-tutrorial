import Vue from "vue";
import App from "./App.vue";

//globaly import components
// import Ninjas from "./components/Ninjas.vue";
// Vue.component("ninjas", Ninjas);

//event bus
export const bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
