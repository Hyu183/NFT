const { ethers } = require('hardhat');
require('dotenv').config();

const contract = require('../artifacts/contracts/Wibu.sol/Wibu.json');
const contractInterface = contract.abi;

const provider = ethers.getDefaultProvider('ropsten', {
    infura: process.env.INFURA_PROJECT_ID,

});

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const wibu = new ethers.Contract(
    '0x6d5E620CA80801B6a5cdc2baB5e8e0A217B44D29',
    contractInterface,
    wallet
);

const main = () => {
    wibu.safeMint(
        process.env.PUBLIC_KEY,
        process.env.IPFS_GATEWAY +
            'QmTbRppkFZ42ghw44gaPVGXZg115bGRU22WUxiv3dRgWKp'
    )
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log('something went wrong', e));
    const addr1Balance = await wibu.balanceOf(addr1.address);
       
};
main();
