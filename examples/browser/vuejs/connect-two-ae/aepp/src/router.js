import Router from 'vue-router'
import Home from './components/Home.vue'
import AccountAccess from './components/AccountAccess.vue'
import TransactionSigned from './components/TransactionSigned.vue'

export default (store) => {
  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: route => ({ query: route.query })
    }, {
      path: '/account-access',
      name: 'success',
      component: AccountAccess,
      props: route => ({ query: route.query })
    }, {
      path: '/transaction-signed',
      name: 'transaction-signed',
      component: TransactionSigned,
      props: route => ({ query: route.query })
    },
  ]
  const router = new Router({ mode: 'history', routes: routes })
  return router
}
