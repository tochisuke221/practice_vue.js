new Vue({
   el: '#app',
    data:{ 
      message: 'HelloWord' 
    },
    methods:{
      reverseMessage: function(){
        this.message = this.message.split('').reverse().join('');
      }
    }
})
