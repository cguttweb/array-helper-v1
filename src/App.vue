<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <methods></methods>
    <examplebox></examplebox>
  </div>
</template>

<script>
import methods from './components/methods.vue';
import examplebox from './components/examplebox.vue';

export default {
  components: {
    methods,
    examplebox
  }
}
// Copy to clipboard code
// let brandopacity = false
//     const copyToClipboard = str => {
//   const el = document.createElement('textarea');  // Create a <textarea> element
//   el.value = str;                                 // Set its value to the string that you want copied
//   el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
//   el.style.position = 'absolute';                 
//   el.style.left = '-9999px';                      // Move outside the screen to make it invisible
//   document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
//   const selected =            
//     document.getSelection().rangeCount > 0        // Check if there is any content selected previously
//       ? document.getSelection().getRangeAt(0)     // Store selection if found
//       : false;                                    // Mark as false to know no selection existed before
//   el.select();                                    // Select the <textarea> content
//   document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
//   document.body.removeChild(el);                  // Remove the <textarea> element
//   if (selected) {                                 // If a selection existed before copying
//     document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
//     document.getSelection().addRange(selected);   // Restore the original selection
//   }
// };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
