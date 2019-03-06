<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="row">
      <methods></methods>
    </div>
  </div>
</template>

<script>
import methods from './components/methods';

export default {
  components: {
    methods
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
