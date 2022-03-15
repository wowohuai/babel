import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";
import router from "./router/index";

Vue.use(VueCompositionAPI);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
