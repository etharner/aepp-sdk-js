// import socketio from 'socket.io'
import './main.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import getRouter from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router: getRouter(store),
  store,
  render: h => h(App),
  beforeCreate () {}
}).$mount('#app')

  // const r = 'aepp-base://?d=2iJf3cnw9ZshAq5SvcoDemZKR2u6Hhxz1WnoiYeq6t5kWPuc5t7CPA2EurC8ZercKYj9x858B2xPeDrwcv7PwgZWLMUiMFG7uSqdJtbcxCQ4uu3G6c1WPVCkkZjdba5ehDbKwMRtoPsxyBMYnZrZkpD7QNorW7NFjKtPJtQHGBdQ2GwGD1S9riUiuPt6G3VdHWXuGuvDxFafMpokKA7cuEJHC5';
  // const rlp = rlpToStrings(Crypto.decode(Crypto.decodeBase58Check(new URL(r).searchParams.get('d'))));
  // console.log(rlp);

  // const methods = {
  //   async address(...args) {
  //     return new Promise(r => {
  //       console.log(args);
  //       r('test');
  //     });
  //   }
  // }
  // console.log(methods);
  // const a = await methods[rlp[0]](rlp);
  // console.log(a);


  // const url = new URL(`${rlp[1]}/success`);
  // const res = Crypto.encodeBase58Check(Crypto.encode([rlp[0], a]));
  // console.log(res);
  // url.searchParams.set('d', res);
  // console.log(url);

