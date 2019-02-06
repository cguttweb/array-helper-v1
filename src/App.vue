<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <methods></methods>
    <Form></Form>
  </div>
</template>

<script>
import methods from "./components/methods";
import Form from './components/addform';
// import "./components/copy.js";

export default {
  components: {
    methods,
    Form
  }
};

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
