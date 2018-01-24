<template lang="pug">
  div
    app-links(
      :previous="'1-crypto-function'"
      :next="'3-block-mining'"
    )
    h1 2. Hashing transactions
    div(style="text-align: center")
      small Cryptocurrencies are often used for transaction purposes.<br>To verify that a set of transactions have not been tampered with, it is easier to check the resulting hash<br>rather than go through every transaction. The slightest transaction change would completely modify the resulting hash.<br>Try it out for yourself by modifying the ETH transaction amounts.
    div.block
      label Transactions
      div.tableized.block-field
        table
          thead
            tr
              th.align-left From
              th.align-left To
              th.align-right Amount
          tbody
            tr(v-for="transaction in transactions")
              td
                input.table-input(v-model="transaction.fromAddress")
              td
                input.table-input(v-model="transaction.toAddress")
              td.align-right
                input.align-right.table-input(v-model="transaction.amount")
      label Transactions hash
      p.block-field.hash {{ transactionsHash }}
</template>

<script>
import Links from './shared/Links.vue'

export default {
  components: {
    'app-links': Links
  },
  data() {
    return {
      transactions: [
        {
          fromAddress: 'Albert',
          toAddress: 'Janneke',
          amount: '35.02 ETH'
        },
        {
          fromAddress: 'Albert',
          toAddress: 'Eddy',
          amount: '3.58 ETH'
        },
        {
          fromAddress: 'Janneke',
          toAddress: 'Jacques',
          amount: '10.40 ETH'
        }
      ]
    }
  },
  computed: {
    transactionsHash() {
      return this.sha256(JSON.stringify(this.transactions));
    }
  }
}
</script>

<style lang="scss">
</style>
