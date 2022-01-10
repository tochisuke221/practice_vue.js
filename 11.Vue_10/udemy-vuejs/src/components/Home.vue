<template>
  <div>
    <p  v-border:solid.round.shadow="{width: '5px', color: 'red'}">{{tmpData}}</p>
    <h2>{{title}}</h2>
    <!-- <h2>{{upperCaseTitle}}</h2> -->
    <h2>{{title | upperCase}}</h2>
    <h2>{{title | lowerCase}}</h2>
    <h2>{{title | lowerCase | upperCase}}</h2>
    <p>number: {{number}}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue"
import { tokyoNumber } from "@/tokyoNumber.js"

export default {
  mixins: [tokyoNumber],
  data(){
    return{
      tmpData: "hello",
    }
  },
  components: {
    CountNumber
  },
  // computed: {
  //   upperCaseTitle(){
  //     return this.title.toUpperCase();
  //   }
  // },
  directives: {
    border(el, binding) {
      // this.tmpData = "とち" カスタムディレクティブ内でthisは使えない
      // el.style.border = "solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;//引数は一つしか取らない
    
      //修飾
      if(binding.modifiers.round){
        el.style.borderRadius = "0.5rem";
      }
      if(binding.modifiers.shadow){
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 1)";
      }
    }
  }
}
</script>
