const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/OpeToken.sol/OpeToken.json");

const contractAddress = "0xb3584fBD2Fd424E1E5787d33aDE202BBd1D59c42";
const contractABI = contractJSON.abi;
const walletAddress = "0x5bB94AF4324e4A0232cD6475716A34bf198F5F80";

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  console.log(
    `${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
