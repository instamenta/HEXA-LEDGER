import hre from "hardhat";

async function main() {
  const lock = await hre.viem.deployContract(
      "SimpleWallet",
      // [unlockTime],
      // {value: lockedAmount}
  );

  console.log(
    `Contract deployed to ${lock.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
