<template>
  <div>{{ msg }} <button @click="sendToRust">click</button></div>
</template>

<script lang="js">
import App from "./App.ts";

export default App;
</script>
<style lang="scss" scoped>
div {
  color: #008080;
  text-align: center;
}
</style>
