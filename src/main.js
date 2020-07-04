import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
Vue.directive('border', {
  bind(el, binding, vnode){

  },
  inserted(el, binding, vnode){

  },
  update(el, binding, vnode, oldVnode){

  },
  componentUpdated(el, binding, vnode, oldVnode){

  },
  unbind(el, binding, vnode){

  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
