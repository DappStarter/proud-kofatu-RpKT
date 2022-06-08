require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stove response office company inside light army genius'; 
let testAccounts = [
"0x68ae6c2b325c49088f61c1531d4b4ab4cb8ad9751d0f40333779857beca66052",
"0xcb43cf56e0f97ea376ad14310e28343e1aed0bb47419c1c37a6c139fb01d6f53",
"0xf3c646b3d915a17b7160fa572a44c7092466db539bfa318d15c2f40779ac6f36",
"0x4ece3691eb56ba67ecbb06b03628ae2ef387c3b0ccf1ef60e3e8dcd0fac52470",
"0x5ea7b879ad431b59caf17221fcdcaf8243388a31f23287e6c91c78696d93ea6d",
"0x3228901df274581ae9e207c20237fb6e43af3bf32cc86f4234973956dec84504",
"0x3552f2bc87ff1704170956849507060fb229870d53e29b537a519e7c357132db",
"0x535c7d03ccbe1805f5a2ac6efca1d39d6646f2c5b3b99768c6bd3709c98c3ba1",
"0xfe7e2dbe29a9f51ca1035b019b9c1b4f0889aacef74e9cf78fe329d61a93abe1",
"0x80753b5eb0d4c5f8d27781a8f9c353997627dd6c664a9818270e790fe2a1968e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

