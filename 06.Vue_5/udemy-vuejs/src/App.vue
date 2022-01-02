<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./assets/components/LikeHeader.vue"

export default {
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
