import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies';


Vue.config.productionTip = false
Vue.use(VueCookies); // wird benötigt weil sonst nichts gehen und ich habe es vergessen, weil ich nicht gerade intelligent bin


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
