<template lang="pug">
  div
    app-links(
      :previous="'home'"
      :next="'6-deployment'"
    )
    h1 5. A simple Smart contract
    div(style="text-align: center")
      button(@click="compileContract()") COMPILE THIS CONTRACT !
    div.block
      label Contract code
      div.tableized.block-field
        pre
          code
            |contract MyFavouriteNumberStore {
            |    uint public favouriteNumber;
            |
            |    function setFavouriteNumber(uint x) public {
            |       favouriteNumber = x;
            |    }
            |}
      label Contract Bytecode
      p.block-field.hash {{ compiledBytecode }}
      label Contract Interface
      p.block-field.hash {{ compiledInterface }}
</template>

<script>
import Links from './shared/Links.vue'

export default {
  components: {
    'app-links': Links
  },
  data() {
    return {
      isCompiled: false,
      contract: {
        bytecode: '6060604052341561000f57600080fd5b60bb8061001d6000396000f30060606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166343ede4ae8114604d578063acca388f14606f575b600080fd5b3415605757600080fd5b605d6084565b60405190815260200160405180910390f35b3415607957600080fd5b6082600435608a565b005b60005481565b6000555600a165627a7a723058207c2066a6894e87131ccc2742d11e0c8e725cbdb0fedf0c091406af0e48ba3e610029',
        interface: '[{"constant":true,"inputs":[],"name":"favouriteNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"setFavouriteNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      }
    }
  },
  computed: {
    compiledBytecode() {
      if (this.isCompiled) {
        return this.contract.bytecode;
      } else {
        return 'Compile me first!'
      }
    },
    compiledInterface() {
      if (this.isCompiled) {
        return this.contract.interface;
      } else {
        return 'Compile me first!'
      }
    }
  },
  methods: {
    compileContract: function() {
      self = this;
      setTimeout(function(){ self.isCompiled = true; }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  min-width: 700px;
}

.block-field {
  min-height: 150px;
  word-wrap: break-word;
}
</style>
