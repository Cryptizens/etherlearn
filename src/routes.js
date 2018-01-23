import CryptoFunction from './components/1_CryptoFunction.vue';
import TransactionsHash from './components/2_TransactionsHash.vue';
import BlockMining from './components/3_BlockMining.vue';

export default [
  {
    path: '/1-crypto-function',
    component: CryptoFunction
  },
  {
    path: '/2-transaction-hash',
    component: TransactionsHash
  },
  {
    path: '/3-block-mining',
    component: BlockMining
  }
]
