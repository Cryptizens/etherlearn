<template lang="pug">
  div
    h1 Etherlearn.io
    p The Ethereum Blockchain, made fun and visual
    div.chapter-container
      h4 Welcome
      p This website has been designed as a companion for Smart contracts workshops run by Thomas Vanderstraeten from <a target="_blank" href="https://cryptizens.io">Cryptizens.io</a>. For the Blockchain lovers and apprentices out there, it also provides nifty tools to progress in your understanding of the underlying concepts. Also, feel free to request a workshop directly on <a target="_blank" href="https://cryptizens.io">Cryptizens.io</a>. Enjoy!
    div.chapter-container
      h4 Understanding the Blockchain
      p Experiment the fundamentals of the Blockchain, the technology behind Ethereum, Bitcoin, and other crypto-currencies.
      router-link(:to="'1-crypto-function'")
        button Crypto functions
      router-link(:to="'2-transaction-hash'")
        button Hashing transactions
      router-link(:to="'3-block-mining'")
        button Mining a block
      router-link(:to="'4-blocks-chain'")
        button Chaining blocks
    div.chapter-container
      h4 Understanding Ethereum Smart contracts
      p Understand how Ethereum extends the Blockchain to include intelligent programming. Ensure you checked the toolkit first, as you'll need MetaMask with a few Rinkeby Testnet ETH to run these examples.
      router-link(:to="'5-smart-contract'")
        button Smart contract
      router-link(:to="'6-deployment'")
        button Deployment
      router-link(:to="'7-transaction'")
        button Transaction
      router-link(:to="'8-ethereum-mining'")
        button Ethereum mining
    div.chapter-container
      h4 Toolkit
      p These nice tools will help you not to crack your brain open while learning Ethereum.
      a(href="https://metamask.io" target="_blank")
        button MetaMask
      a(href="https://faucet.rinkeby.io/" target="_blank")
        button Rinkeby Faucet
      a(href="https://rinkeby.etherscan.io/" target="_blank")
        button Rinkeby Etherscan
      a(href="https://remix.ethereum.org/" target="_blank")
        button Remix IDE
      a(href="https://ethereum.mom/" target="_blank")
        button Ethereum Mom


    //- div
    //-   h2 Creating a blockchain
    //- div
    //-   h1 Understanding Smart Contracts
    //-   //- p https://gist.github.com/tomconte/4edb83cf505f1e7faf172b9252fff9bf
    //- div
    //-   h2 A simple contract
    //- div
    //-   h2 Compiling to bytecode
    //- div
    //-   h2 Generating a transaction
    //- div
    //-   h2 Deploying on the blockchain
    //- div
    //-   h2 Calling a contract function
</template>


<style lang="scss" scoped>
div {
  text-align: center;
}
.chapter-container {
  margin: 50px;
  text-align: left;
}
.block {
  padding-bottom: 5px;
  padding-top: 5px;
  color: $gray-900;
  margin: 0 auto;
}
</style>
