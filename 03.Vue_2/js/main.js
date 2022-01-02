new Vue({
  el: '#app',
  data: {
    ok: true,
    fruits: ["りんご", "ばなな", "ぶどう"],
    object:{
      firstName: "太郎",
      lastName: "田中",
      age: 21,
    }
  },
  methods: {
    remove: function(){
      this.fruits.shift()
    }
  }
})
