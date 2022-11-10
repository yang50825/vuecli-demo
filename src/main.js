import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.filter('reverse', (val, p) => {
  console.log(p)
  if (p === undefined) {
    return val.split('').reverse().join('')
  }
  return val.split('').reverse().join(p)
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
