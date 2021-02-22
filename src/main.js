// import Vue from "vue";
// import App from "./App.vue";

// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

import Vue from "vue";

Vue.config.productionTip = false;

import { CarbonIconsVue } from "@carbon/icons-vue";
import AppSwitcher20 from "@carbon/icons-vue/es/app-switcher/20";
import Bee32 from "@carbon/icons-vue/es/bee/32";

Vue.use(CarbonIconsVue, {
  components: {
    AppSwitcher20,
    Bee32
  }
});

import App from "./App.vue";

new Vue({
  render: h => h(App)
}).$mount("#app");
