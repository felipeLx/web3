// In Node.js
const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const eth = web3.eth

console.log(eth)

/* 
let config = {
    eth: process.env.KEY_ONE,
    shh: "" ,
    utils: "",
}

/* 
Additionally you can set a provider using web3.setProvider() (e.g. WebsocketProvider):

web3.setProvider('ws://localhost:8546');
    or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
 

web3.eth.getAccounts().then(console.log())
*/