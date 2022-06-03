const { expect } = require('chai');
const { ethers } = require('hardhat');
//run: npx hardhat test

describe('Wibu', function () {
    let wibu;
    const testURI = 'https://token.com/';
    let owner;
    let addr1;
    let addr2;
    before(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();        
        const Wibu = await ethers.getContractFactory('Wibu');
        wibu = await Wibu.deploy();
        await wibu.deployed();
        // console.log(signer);
        // console.log(addr1.address);
        // console.log(addr2.address);
    });

    describe('Wibu', function () {
        it('It should log the address', async function () {
            console.log(wibu.address);
        });
        it('total supply', async () => {
            expect((await wibu.totalSupply()).toString()).to.equal('0');
        });
        it('check owner', async () => {
            expect(await wibu.owner()).to.equal(owner.address);
        });
        it('mint NFT', async () => {
            await wibu.safeMint(addr1.address, testURI + 1);
            const addr1Balance = await wibu.balanceOf(addr1.address);
            console.log(addr1Balance);
            expect(addr1Balance.toString()).to.equal("1");
        });

        // it('accounts', () => {
        //     console.log(owner, addr1, addr2);
        // });
        it('list NFT of addr1', async () => {
            await wibu.safeMint(addr1.address, testURI + 2);
            const addr1Balance = await wibu.balanceOf(addr1.address);
            let tokenIds = [];
            for (let i = 0; i < +addr1Balance.toString(); i++) {
                let id = await wibu.tokenOfOwnerByIndex(addr1.address, i);
                tokenIds.push(id.toString());
            }

            console.log(tokenIds);
        });

         it('total supply 2', async () => {
             expect((await wibu.totalSupply()).toString()).to.equal('2');
         });
    });
});
