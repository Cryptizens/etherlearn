<template lang="pug">
  div
    app-links(
      :previous="'5-smart-contract'"
      :next="'7-transaction?c_a=' + contract.address"
    )
    h1 6. Deploying the Smart contract
    div(style="text-align: center")
      button(@click="deployContract()") DEPLOY THIS CONTRACT !
      button.inverted(v-if="isSent")
        a(target="_blank" v-bind:href="'https://rinkeby.etherscan.io/tx/' + txHash") CHECK TX
      button.inverted(v-if="isDeployed")
        a(target="_blank" v-bind:href="'https://rinkeby.etherscan.io/address/' + contract.address") CHECK CONTRACT
    div(style="text-align: center")
      small Make sure your MetaMask wallet is tuned on the Rinkeby Testnet before deploying.<br>After deployment, wait about 30 seconds for your contract address to appear, as the deployment needs to be mined first!
    div.block
      label Contract Bytecode
      p.block-field.hash {{ contract.bytecode }}
      label Deployment Transaction Hash (TxHash)
      p.block-field.hash {{ txHash }}
      label Contract Address
      p.block-field.hash {{ contract.address }}
</template>

<script>
import Links from './shared/Links.vue'

export default {
  components: {
    'app-links': Links
  },
  data() {
    return {
      isSent: false,
      isDeployed: false,
      txHash: 'Deploy me first!',
      contract: {
        address: 'Deploy me first!',
        bytecode: '6060604052341561000f57600080fd5b60bb8061001d6000396000f30060606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166343ede4ae8114604d578063acca388f14606f575b600080fd5b3415605757600080fd5b605d6084565b60405190815260200160405180910390f35b3415607957600080fd5b6082600435608a565b005b60005481565b6000555600a165627a7a723058207c2066a6894e87131ccc2742d11e0c8e725cbdb0fedf0c091406af0e48ba3e610029',
        interface: '[{"constant":true,"inputs":[],"name":"favouriteNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"setFavouriteNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      }
    }
  },
  computed: {

  },
  methods: {
    deployContract: function() {
      self = this;

      const abi = JSON.parse(this.contract.interface);

      // Contract object
      const contract = web3.eth.contract(abi);

      // Deploy contract instance
      const contractInstance = contract.new({
          data: '0x' + self.contract.bytecode,
          from: web3.eth.coinbase,
          gas: 90000*2
      }, (err, res) => {
          if (err) {
              console.log(err);
              return;
          }

          // Log the tx, you can explore status with eth.getTransaction()
          console.log(res.transactionHash);
          self.txHash = res.transactionHash;
          self.isSent = true;

          // If we have an address property, the contract was deployed
          if (res.address) {
              console.log('Contract address: ' + res.address);
              self.contract.address = res.address;
              self.isDeployed = true;
          }
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
</style>
