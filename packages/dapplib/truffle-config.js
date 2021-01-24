require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant heavy kiwi blue sight'; 
let testAccounts = [
"0x5b4df76ef482893ab440c3cafafdd2e3dc14f4f72d09a02a1821151ac6ca7f97",
"0xe89b92d19b9eeedca0b1a1c3eb4d40fb676303c9c88f0fee011818f907e816ce",
"0xb4e9b118816bdab5064610b271a9e98b2c51f240ee5f4b117c82ad01a031f1fb",
"0x243435690fecdbe65270ba9214e550d32e37fdc1d52867d703dc082ceb8340f4",
"0x45f54e074b04b45f813b6b43eb06d94fe547c2cd3d98ad8acd97930822ca7976",
"0x7c84554375c85cd4d9510ea461e2c3457542ec056f4c66196c9ddb299b51e060",
"0xd8161aa1b363776b3f7d647a00e5b60d726f1cd529d7852c6bf53041cecbf93a",
"0xc8e36e3ce608fbbf8dad05b61c2fc212d424edd2510bf059eff19517063dbbcb",
"0x0a4247fa213830e41ac979a4eb7afec887ec6576844d8ee10933634b9aee801a",
"0x51d9f3d46adfde670d1d84e7295137a363a9ef44c3cf1cf32898882c5f82f5aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
