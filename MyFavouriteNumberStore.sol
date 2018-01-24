pragma solidity ^0.4.19;

contract MyFavouriteNumberStore {
    uint public favouriteNumber;

    function setFavouriteNumber(uint x) public {
        favouriteNumber = x;
    }
}

/* const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

// Connect to local Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Compile the source code
const input = fs.readFileSync('Token.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts['Token'].bytecode;
const abi = JSON.parse(output.contracts['Token'].interface); */
