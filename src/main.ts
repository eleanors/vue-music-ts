import Vue from 'vue'
import './cube-ui'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import VueRx from 'vue-rx';

Vue.use(VueRx);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
