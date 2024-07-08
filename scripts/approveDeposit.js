const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContract.json");
const contractJSON = require("../artifacts/contracts/OpeToken.sol/OpeToken.json");

const contractAddress = "0xb3584fBD2Fd424E1E5787d33aDE202BBd1D59c42";
const contractABI = contractJSON.abi;
const fxERC721ContractAddress = "0x34F5A25B627f50Bb3f5cAb72807c4D4F405a9232";
const walletAddress = "0x5bB94AF4324e4A0232cD6475716A34bf198F5F80";

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC721ContractAddress
  );
  const totalNFTs = await contract.totalSupply();
  for (let i = 0; i < totalNFTs; i++) {
    const approveTx = await contract.approve(fxERC721ContractAddress, i);
    await approveTx.wait();
    console.log(`NFT with tokenId ${i} approved`);
  }
  console.log("NFTs approved");

  for (let i = 0; i < totalNFTs; i++) {
    const depositTx = await fxContract.deposit(
      contractAddress,
      walletAddress,
      i,
      "0x6556"
    );
    await depositTx.wait();
    console.log(`NFT with TokenId ${i} deposited`);
  }

  console.log("NFTs deposited");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
