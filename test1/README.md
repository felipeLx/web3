From the web3 Documentation

***************************
Most Ethereum-supported browsers like MetaMask have an EIP-1193 compliant provider available at window.ethereum.

For web3.js, check Web3.givenProvider.

If this property is null you should connect to a remote/local node.

// In Node.js use: const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

****************************

web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
.once('sending', function(payload){ ... })
.once('sent', function(payload){ ... })
.once('transactionHash', function(hash){ ... })
.once('receipt', function(receipt){ ... })
.on('confirmation', function(confNumber, receipt, latestBlockHash){ ... })
.on('error', function(error){ ... })
.then(function(receipt){
    // will be fired once the receipt is mined
});