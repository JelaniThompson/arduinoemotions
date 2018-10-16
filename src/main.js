// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueSocketio from "vue-socket.io";

Vue.config.productionTip = false;
Vue.use(VueSocketio, "https://aeb1925e.ngrok.io");

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
