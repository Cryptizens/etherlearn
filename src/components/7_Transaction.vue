<template lang="pug">
  div
    app-links(
      :previous="'6-deployment'"
      :next="'8-ethereum-mining'"
    )
    h1 7. Making a transaction
    div(style="text-align: center")
      label Your new favourite number
      input.short(v-model="newFavouriteNumber" type="number")
      button(@click="setFavouriteNumber()") SET FAVOURITE NUMBER !
      button.inverted(@click="getFavouriteNumber()") REFRESH
    div(style="text-align: center")
      small Make sure you've got the right contract address (we've copy-pasted it from previous step).<br>After you've set your new favourite number, wait about 30 seconds before refreshing, as the transaction must be mined first.
    div.block
      label Contract Address
      p
        input.address.block-field.hash(v-model="contract.address")
      label Favourite number from the Contract
      p.block-field {{ contract.favouriteNumber }}
      label Transaction Hash (TxHash)
      p.block-field.hash {{ txHash }}
</template>

<script>
import Links from './shared/Links.vue'

export default {
  components: {
    'app-links': Links
  },
  data() {
    return {
      newFavouriteNumber: 0,
      txHash: 'First make a transaction!',
      contract: {
        favouriteNumber: 0,
        address: '',
        bytecode: '6060604052341561000f57600080fd5b60bb8061001d6000396000f30060606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166343ede4ae8114604d578063acca388f14606f575b600080fd5b3415605757600080fd5b605d6084565b60405190815260200160405180910390f35b3415607957600080fd5b6082600435608a565b005b60005481565b6000555600a165627a7a723058207c2066a6894e87131ccc2742d11e0c8e725cbdb0fedf0c091406af0e48ba3e610029',
        interface: '[{"constant":true,"inputs":[],"name":"favouriteNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"setFavouriteNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      }
    }
  },
  computed: {

  },
  created() {
    this.contract.address = this.$route.query.c_a;
    this.getFavouriteNumber();
  },
  methods: {
    getFavouriteNumber() {
      self = this;
      const abi = JSON.parse(this.contract.interface);
      const contract = web3.eth.contract(abi);
      const MyFavouriteNumberStore = contract.at(this.contract.address);
      MyFavouriteNumberStore.favouriteNumber(function(err,res) {
          self.contract.favouriteNumber = res.c[0];
      });
    },
    setFavouriteNumber() {
      self = this;
      const abi = JSON.parse(this.contract.interface);
      const contract = web3.eth.contract(abi);
      const MyFavouriteNumberStore = contract.at(this.contract.address);
      MyFavouriteNumberStore.setFavouriteNumber(self.newFavouriteNumber, function(err,res) {
          self.txHash = res;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  min-width: 700px;
}

.block-field {
  word-wrap: break-word;
}

input.address {
  width: 100%;
  border: none;
  color: $gray-900;
  font-family: Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
</style>
