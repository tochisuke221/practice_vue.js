import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
// Vue.directive("border", function(el, binding){
//   // el.style.border = "solid black 2px";
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;//引数は一つしか取らない

//   //修飾
//   if(binding.modifiers.round){
//     el.style.borderRadius = "0.5rem";
//   }
//   if(binding.modifiers.shadow){
//     el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 1)";
//   }
// }
//{
  // bind(el, binding, vnode){
  //   //ディレクティブが初めて要素に紐づいたとき（最初の一回だけ）
  // },
  // inserted(el, binding, vnode){
  //   //親nodeに挿入されたとき（DOMに挿入されたとき）
  // },
  // update(el, binding, vnode, oldVnode){
  //   //コンポーネントが更新される度。コポーネントが更新される前。
  // },
  // componentUpdated(el, binding, vnode, oldVnode){
  //   //コンポーネントが更新される度。コンポーネントが更新された後
  // },
  // unbind(el, binding, vnode){
  //   // ディレクティブが紐づいている要素かた取り除かれたとき。
  // }
//}
// );
new Vue({
  render: h => h(App),
}).$mount('#app')
