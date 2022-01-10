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
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
}
</script>
