import Home from './components/Home.vue';
import CryptoFunction from './components/1_CryptoFunction.vue';
import TransactionsHash from './components/2_TransactionsHash.vue';
import BlockMining from './components/3_BlockMining.vue';
import BlocksChain from './components/4_BlocksChain.vue';
import SmartContract from './components/5_SmartContract.vue';
import Deployment from './components/6_Deployment.vue';
import Transaction from './components/7_Transaction.vue';
import EthereumMining from './components/8_EthereumMining.vue';

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
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
  },
  {
    path: '/4-blocks-chain',
    component: BlocksChain
  },
  {
    path: '/5-smart-contract',
    component: SmartContract
  },
  {
    path: '/6-deployment',
    component: Deployment
  },
  {
    path: '/7-transaction',
    component: Transaction
  },
  {
    path: '/8-ethereum-mining',
    component: EthereumMining
  }
]
