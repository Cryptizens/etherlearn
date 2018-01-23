import Vue from 'vue'
import App from './App.vue'
window.CryptoJS = require("crypto-js");

new Vue({
  el: '#app',
  render: h => h(App)
})
