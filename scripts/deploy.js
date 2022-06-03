// const hre = require("hardhat");
const { ethers } = require('hardhat');
 require('dotenv').config();


async function main() {
    const Wibu = await ethers.getContractFactory('Wibu');

    const wibu = await Wibu.deploy();
    //NFT Contract Address: 0x6d5E620CA80801B6a5cdc2baB5e8e0A217B44D29
    console.log('Contract deployed to address:', wibu.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
