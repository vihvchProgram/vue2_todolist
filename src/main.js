import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate () {
    // 全局事件總線 (GlobalEventBus)
    Vue.prototype.$bus = this
  }
}).$mount('#app')
