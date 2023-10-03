// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Localization is Ownable {

    struct Unit {
        string name;
        string description;
        string location;
        uint256 readPrice;
        address owner;
    }

    mapping(uint256 => Unit) internal unitAddress;
    mapping(address => uint256) internal personalUnits;

    receive() external payable {}

    function withdrawAll() external payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    modifier isUnitOwner(uint256 _unitId) {
        require(unitAddress[_unitId].owner == msg.sender, "not the owner");
        _;
    }

    modifier canAffordUnit(uint256 _unitId) {
        require(unitAddress[_unitId].readPrice <= msg.value, "cant afford");
        _;
    }

    event UnitCreated(
        string name,
        string description,
        uint256 indexed id
    );

    event UnitSold(
        string name,
        string description,
        uint256 indexed boughtFor,
        string location
    );

    function createUnit(
        string memory _name,
        string memory _description,
        string memory _location,
        int256 _nonce,
        uint256 _readPrice
    ) public returns (uint256) {
        uint256 unitId = uint256(
            keccak256(
                abi.encodePacked(
                    msg.sender,
                    block.timestamp,
                    block.number,
                    _nonce
                )
            )
        );

        personalUnits[msg.sender] = unitId;

        unitAddress[unitId] = Unit({
            name: _name,
            description: _description,
            location: _location,
            readPrice: _readPrice,
            owner: msg.sender
        });

        emit UnitCreated({name: _name, description: _description, id: unitId});

        return unitId;
    }

    function buyUnit(uint256 _unitId) public payable canAffordUnit(_unitId) {
        Unit memory unit = unitAddress[_unitId];

        address prevOwner = unit.owner;

        payable(prevOwner).transfer(msg.value);

        unit.owner = msg.sender;

        personalUnits[msg.sender] = _unitId;

        delete personalUnits[prevOwner];

        emit UnitSold({
            name: unit.name,
            description: unit.description,
            boughtFor: msg.value,
            location: unit.location
        });
    }
}
