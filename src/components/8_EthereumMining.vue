<template lang="pug">
  div
    app-links(
      :previous="'7-transaction'"
      :next="'home'"
    )
    h1 8. Mining on the Ethereum network
    div(style="text-align: center")
      button(@click="runVirtualMachine()" v-if="!virtualMachineRun") RUN THE ETHEREUM VIRTUAL MACHINE !
      button(@click="startMining()" v-if="virtualMachineRun") NOW, START MINING !
    div(style="text-align: center")
      small(v-if="!virtualMachineRun") Before mining, the EVM must be run to execute Smart contracts code and compute the new State of the World
      small(v-if="virtualMachineRun") After code execution, the new State of the World can be hashed to go through the mining process
    div.block
      h1 BLOCK #1
      div(v-if="!virtualMachineRun")
        label Initial World State
        p.block-field
          pre
            |'contracts_variables': {
            |    '0xdd4f1cb1b1fdd207be770168e06ce198bb6978b5' : {
            |        'owner': 'Kane',
            |        'favorite_number': 21
            |    }
            |},
            |'contracts_bytecodes': {
            |    '0xdd4f1cb1b1fdd207be770168e06ce198bb6978b5' : '6060604052341561000f57600080fd5b60bb8061001d6000396000f3006....'
            |}
      div(v-if="!virtualMachineRun")
        label New transactions
        div.tableized.block-field
          table
            thead
              tr
                th.align-left From
                th.align-left To
                th.align-right Transaction
            tbody
              tr
                td
                  | Kane
                td
                  | Contract
                td.align-right
                  | setFavouriteNumber(42)
              tr
                td
                  | Luke
                td
                  | Network
                td.align-right
                  | deployContract(Bytecode)
      label New World State (after Ethereum Virtual Machine run)
      p.block-field(v-if="!virtualMachineRun")
        pre
          | Run the virtual machine first !
      p.block-field(v-if="virtualMachineRun")
        pre
          |'contracts_variables': {
          |    '0xdd4f1cb1b1fdd207be770168e06ce198bb6978b5' : {
          |        'owner': 'Kane',
          |        'favorite_number': 42
          |    },
          |    '0xa94b71815a198e7910d6566e59568e4106c4dd4d' : {
          |        'owner': 'Luke',
          |        'favorite_weapon': 'Lightsaber'
          |    }
          |}
          |'contracts_bytecodes': {
          |    '0xdd4f1cb1b1fdd207be770168e06ce198bb6978b5' : '6060604052341561000f57600080fd5b60bb8061001d600....',
          |    '0xa94b71815a198e7910d6566e59568e4106c4dd4d' : '606040526004361060485763ffffffff7c0100000000000....'
          |}
      div(v-if="virtualMachineRun")
        label New World State Hash
        p.block-field.hash {{ worldStateHash }}
        label Previous Block Hash
        p.block-field.hash.success {{ previousBlockHash }}
        label Nonce
        p.block-field {{ nonce }}
        label Output hash
        p.block-field.hash(v-bind:class="successfullyMined ? 'success' : 'danger'") {{ outputHash }}
</template>

<script>
import Links from './shared/Links.vue'
import WorldState from './shared/WorldState.vue'

export default {
  components: {
    'app-links': Links,
    'app-world-state': WorldState
  },
  data() {
    return {
      virtualMachineRun: false,
      previousBlockHash: '0001c4635baa4044bed42b49833a92a444bff328081049a51d7ddff1690e3273',
      nonce: 0,
      difficulty: 3
    }
  },
  computed: {
    worldStateHash() {
      return this.sha256("Hello world !");
    },
    outputHash() {
      return this.sha256(this.worldStateHash + this.previousBlockHash + this.nonce.toString());
    },
    successfullyMined() {
      return this.isMined(this.outputHash, this.difficulty);
    }
  },
  methods: {
    runVirtualMachine() {
      self = this;
      setTimeout(function(){ self.virtualMachineRun = true; }, 1500)
    },
    startMining() {
      this.nonce = this.mine(this.worldStateHash, this.previousBlockHash, this.nonce, this.difficulty);
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
pre {
  margin-bottom: 5px !important;
}

.block {
  min-width: 700px;
  h1 {
    font-size: 40px;
    margin-top: 10px;
    color: white;
  }
}

.block-field {
  word-wrap: break-word;
}

input.address {
  width: 100%;
  border: none;
  color: $gray-900;
  font-family: 'Andale Mono';
}
</style>
