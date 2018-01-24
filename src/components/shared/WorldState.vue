<template lang="pug">
  div.block
    h1 BLOCK {{ '#'+stateIndex }}
    label Transactions
    div.tableized.block-field
      table
        thead
          tr
            th.align-left From
            th.align-left To
            th.align-right Instruction
        tbody
          tr(v-for="transaction in transactions")
            td
              input.table-input(v-model="transaction.fromAddress")
            td
              input.table-input(v-model="transaction.toAddress")
            td.align-right
              input.align-right.table-input(v-model="transaction.instruction")
</template>

<script>
export default {
  props: [
    'stateIndex',
    'variables',
    'transactions'
  ]
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
  margin-top: 10px;
  color: white;
}
</style>
