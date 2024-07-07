const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/OpeToken.sol/OpeToken.json");
require("dotenv").config();

const contractAddress = "0xb3584fBD2Fd424E1E5787d33aDE202BBd1D59c42";
const contractABI = contractJSON.abi;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const totalNFTs = await contract.totalSupply();

  for (let i = 0; i < totalNFTs; i++) {
    console.log(`prompts ${i + 1}: ${await contract.prompts(i)}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
