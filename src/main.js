import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Paginate from "vuejs-paginate";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import tooltipDirective from "./directives/tooltip.directive";
import localizeFilter from "./filters/localize.filter";
import Vuelidate from "vuelidate";
import messagePlugin from "./utils/message.plugin";
import Loader from "./components/app/Loader.vue";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component("Paginate", Paginate);

const firebaseConfig = {
  apiKey: "AIzaSyBKiXGrpST1N8cNTvQTOVjZ2Qa0pxNT1Mg",
  authDomain: "vue-crm-kanaroo.firebaseapp.com",
  databaseURL: "https://vue-crm-kanaroo.firebaseio.com",
  projectId: "vue-crm-kanaroo",
  storageBucket: "vue-crm-kanaroo.appspot.com",
  messagingSenderId: "644581411823",
  appId: "1:644581411823:web:6abb137acc748816cec41a",
  measurementId: "G-2MHGBTZM5W"
};

firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
