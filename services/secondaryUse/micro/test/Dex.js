const {expect} = require("chai");

describe("Dex", () => {
    it("should work", async () => {
        const [owner, otherAccount] = await ethers.getSigners();

        // deploy the test ERC20 tokens so we can actually register a new pool.
        const initialSupply = ethers.utils.parseUnits("100", 8);
        const UsdcToken = await ethers.getContractFactory("UsdcToken");
        const usdcToken = await UsdcToken.deploy(initialSupply);
        const GGToken = await ethers.getContractFactory("GGToken");
        const ggToken = await GGToken.deploy(initialSupply);

        const Dex = await ethers.getContractFactory("Dex");
        const dex = await Dex.deploy();

        console.log(dex.address);
    });
})