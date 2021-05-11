import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Logout from '../views/Logout.vue';

Vue.use(VueRouter);
//Gibt die Routen an, über die das Programm laufen soll, ansonsten funktioniert es nur teilweise, nicht ganz, aber teilweise. Zumindest bei mir, Herr Prof. ich weiß nicht ob es bei ihnen funktioniert, aber ich habe einen anderen PC als Sie und dementsprechend auch andere Software. Wir sollten mal Plugins vergleichen 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) next({ name: 'Login' });
      next(); //Überprüft ob er angemeldet ist oder nicht 
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
//definiert den Router lol
function isAuthenticated() {
  if (Vue.$cookies.get('sid')) return true;
  else return false;
}
//Authentifizierung obs so ist . Überprüft ob Cookies vorhanden sind

export default router;
