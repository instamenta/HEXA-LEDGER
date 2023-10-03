const { ethers } = require("hardhat");

async function main() {

  const minUnit = 100;
  const minAuctionAd = 10;
  const [owner, user1] = await ethers.getSigners();

  const contract = await ethers.deployContract(
    "Lock", [minUnit, minAuctionAd],
    { value: ethers.parseEther('1') }
  );

  const tx = await contract.connect(owner)
    .createUnit("password", 0, 5, { value: minUnitPrice });

  console.log(tx);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
