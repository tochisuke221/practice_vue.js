<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{number}}</p>
    <LikeNumber :test-props="number"></LikeNumber>
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
  }
}
</script>

<style scoped>
  div{
    border: solid 1px green;
  }
</style>
