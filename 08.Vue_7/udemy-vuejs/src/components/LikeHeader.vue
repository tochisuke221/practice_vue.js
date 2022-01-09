<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

export default{
  props: ["headerText"],
  data(){
    return{
      user: {
        firstName: "栃川",
        lastName: "晃佑",
      }
    }
  }
}
</script>

<style>
  h1{
    color: red;
  }
</style>>
