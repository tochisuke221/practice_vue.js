<template>
  <div>
    <label for="title">イベントのタイトル</label>
    <input id="title" type="text"
      :value="value" @input="$emit('input', $event.target.value)">
    <pre>{{value}}</pre>
  </div>
</template>

<script>
  export default{
    props: ["value"]
  };
</script>
