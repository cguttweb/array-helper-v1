<template>
  <div id="app">
    <transition name="fade">
      <img class="" alt="Vue logo" src="./assets/logo.png">
    </transition>
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

.fade-enter {
  // only attached for once at beginning
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
  // opacity: 1;
}

.fade-leave {
// opacity: 1
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
