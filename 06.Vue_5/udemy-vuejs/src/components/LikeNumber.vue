<template>
  <div>
    <p>
      いいね({{   }})
    </p>
    <button @click="increment()">+1</button>
  </div>
</template>

<script>
export default {
  props: [""],
  methods: {
    increment() {
      this.number += 1;
    },
  },
};
</script>

<style scoped>
  div{
    border: solid 1px red;
  }
</style>
