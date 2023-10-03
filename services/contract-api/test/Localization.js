const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const {anyValue} = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Storage Contract", function() {

    let contract, owner, user;
    const name = "Name"
        , description = "Description"
        , location = "Sofia, Bulgaria"
        , nonce = 400_000
        , readPrice = 100_000_000
        , ONE_GWEI = 1_000_000_000;

    before(async function() {
        [owner, ...user] = await ethers.getSigners();
        const Storage = await ethers.getContractFactory("Localization", owner);

        contract = await Storage.deploy();
    });

    it('should create storage unit and emit proper data', async function() {
        const tx = await contract.connect(owner)
            .createUnit(name, description, location, nonce, readPrice);
        expect(tx).to.exist;
        expect(tx).to.not.be.reverted;
        const rc = await tx.wait();
        expect(rc).to.exist;
        expect(rc).to.not.be.reverted;

        const eventFilter = contract.filters.UnitCreated()
            , events = await contract.queryFilter(eventFilter, "latest");

        const created_name = events[0].args[0]
            , created_description = events[0].args[1]
            , created_id = ethers.toBigInt(events[0].args[2]);

        expect(created_name).to.equal(name)
        expect(created_description).to.equal(description)
        expect(typeof created_id).to.equal('bigint');
    });

    it('should sell unit', async function() {
        let tx = await contract.connect(owner)
            .createUnit(name, description, location, nonce, readPrice);
        expect(await tx.wait()).to.emit(contract, "UnitCreated");

        let eventFilter = contract.filters.UnitCreated()
            , events = await contract.queryFilter(eventFilter, "latest")
            , created_name = events[0].args[0]
            , created_description = events[0].args[1]
            , created_id = ethers.toBigInt(events[0].args[2]);

        tx = await contract.connect(user[0])
            .buyUnit(created_id, {value: 10 * ONE_GWEI});
        expect(await tx.wait()).to.emit(contract, "UnitSold");

        eventFilter = contract.filters.UnitSold()
        events = await contract.queryFilter(eventFilter, "latest")

        expect(events[0].args[0]).to.equal(created_name)
        expect(events[0].args[1]).to.equal(created_description)
        expect(events[0].args[2]).to.equal(ONE_GWEI * 10)
        expect(events[0].args[3]).to.equal(location)
    });

});