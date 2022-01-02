<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{number}}</p>
    <LikeNumber :total-number="number" @my-click="incrementNumber($event)"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data(){
    return {
      number: 16
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      console.log(value);
      this.number = value
    },
  }
}
</script>

<style scoped>
  div{
    border: solid 1px green;
  }
</style>
