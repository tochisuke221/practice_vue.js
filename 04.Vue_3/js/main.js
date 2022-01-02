// const vm1 = new Vue({
//   el: "#app1",
//   data: {
//     message: "インスタンス1"
//   }
// })


// const vm2 = new Vue({
//   el: "#app2",
//   data: {
//     message: "インスタンス2"
//   },
//   methods: {
//     changeMessage1: function(){
//       vm1.message = "インスタンス2から書き換えられました"
//     }
//   }
// })

const data = {
  message: "こんにちは",
  aisatu: "こんにちは"
}

Vue.component('hellow',{
  template: '<p>おはよう</p>'
})

const vm = new Vue({
  // el: "#app",
  data: data,
  computed: {
    myData: function(){
      return this.$data;
    }
  }
})

vm.$mount('#app')


new Vue({
  // el: "#app2",
  data: {
    name: "よしぴー"
  },
  template: '<p>こんにちは、{{name}}</p>'
}).$mount('#app2')

new Vue({
  // el: "#app2",
  data: {
    name: "よしぴー"
  },
  render: function(h){
    return h('h1', 'こんにちは' + this.name);
  }
}).$mount('#app3')

new Vue({
  el: '#app4',
  data: {
    name: "よしぴー"
  },
  beforeCreate: function(){
    console.log("beforeCreate");
  },
  created: function(){
    console.log("created");
  },
  beforeMount: function(){
    console.log("beforeMount");
  },
  mounted: function(){
    console.log("mounted");
  },
  beforeUpdate: function(){
    console.log("beforeUpdate");
  },
  updated: function(){
    console.log("updated");
  },
  beforeDestroy: function(){
    console.log("beforeDestroy");
  },
  destroyed: function(){
    console.log("destroyed");
  },
  methods: {
    destroy: function(){
      this.$destroy()
    }
  }
})

new Vue({
  // el: '.hello',
  // template: '<p>こんにちは</p>'
})
