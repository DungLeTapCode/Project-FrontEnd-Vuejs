
import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import store from './store'; 
import 'regenerator-runtime';
import database from './config/firebase'
import { auth } from "./config/firebase";


Vue.config.productionTip = false;

auth.onAuthStateChanged(function(user){
     if(user)
      {
        let data ={
          email: user.email,
          uid:user.uid
        }
        store.commit('SET_CURRENT_USER',data)
        router.push('/trangchu')
      }
      else{
        let data ={
          email:'',
          uid:''
        }
        store.commit('SET_CURRENT_USER',data)
        // router.push('/login')
      }
})


new Vue({
  el: '#app',
  router,
  store, // Khai báo store Vuex
  render: h => h(App)
});
