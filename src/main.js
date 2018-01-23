import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
var CryptoJS = require("crypto-js");

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
});

Vue.mixin({
  methods: {
    sha256: function(x) {
      console.log('Was here');
      CryptoJS.SHA256(x).toString(CryptoJS.enc.Hex);
    },
    mine: function(blockContent, startingNonce, difficulty) {
      var nonce = startingNonce;
      var mined = false;
      var outputHash = ''
      var leadingZeros = Array(parseInt(difficulty) + 1).join("0");

      while (!mined) {
        outputHash = CryptoJS.SHA256(blockContent + nonce.toString()).toString(CryptoJS.enc.Hex);
        mined = outputHash.startsWith(leadingZeros);
        nonce++;
      }

      return {
        nonce: nonce,
        outputHash: outputHash
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
