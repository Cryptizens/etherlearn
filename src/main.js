import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
const CryptoJS = require('crypto-js');
// const fs = require('fs');
// const solc = require('solc');

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
});

Vue.mixin({
  methods: {
    sha256: function(x) {
      return CryptoJS.SHA256(x).toString(CryptoJS.enc.Hex);
    },
    isMined: function(hash, difficulty) {
      var leadingZeros = Array(parseInt(difficulty) + 1).join("0");
      return hash.startsWith(leadingZeros);
    },
    mine: function(blockContent, previousBlockHash, startingNonce, difficulty) {
      var nonce = startingNonce - 1;
      var mined = false;
      var outputHash = ''
      var leadingZeros = Array(parseInt(difficulty) + 1).join("0");

      while (!mined) {
        nonce++;
        outputHash = CryptoJS.SHA256(blockContent + previousBlockHash + nonce.toString()).toString(CryptoJS.enc.Hex);
        mined = outputHash.startsWith(leadingZeros);
      }

      return nonce;
    },
    compile: function(contractCode) {
      // return solc.compile(contractCode, 1);
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
