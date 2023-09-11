// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Storage is Ownable {
    struct StorageUnit {
        uint32 size;
        string password;
        address unitOwner;
        string[] data;
        uint256 readPrice;
    }

    struct UnitAuction {
        uint256 unitId;
        uint256 price;
        string name;
        string description;
        address currentOwner;
    }

    event UnitAuctioned(
        address indexed unitOwner,
        string indexed name,
        string indexed description,
        uint256 price
    );

    error InvalidPassword();

    error InsufficientFunds();

    error InsufficientFundsForReading(uint256 priceForReading);

    uint256 minUnitPrice;
    mapping(uint256 => StorageUnit) internal unitAddress;
    mapping(address => uint256) internal personalUnitIds;
    UnitAuction[] internal unitsForAuction;

    constructor(uint256 _minUnitPrice) {
        minUnitPrice = _minUnitPrice;
    }

    modifier minimumUnitPrice() {
        if (msg.value < minUnitPrice) {
            revert InsufficientFunds();
        }
        _;
    }

    modifier isUnitOwner(uint256 _unitId) {
        require(unitAddress[_unitId].unitOwner == msg.sender);
        _;
    }

    function createUnit(
        string memory _password,
        uint256 _nonce,
        uint256 _readPrice
    ) public payable minimumUnitPrice returns (uint256) {
        uint32 storageSize = uint32(msg.value / 0.1 ether);
        uint256 unitId = uint256(
            keccak256(
                abi.encodePacked(
                    msg.sender,
                    block.timestamp,
                    block.number,
                    _password,
                    _nonce
                )
            )
        );

        personalUnitIds[msg.sender] = unitId;

        unitAddress[unitId] = StorageUnit({
            size: storageSize,
            password: _password,
            unitOwner: msg.sender,
            data: new string[](0),
            readPrice: _readPrice
        });

        return unitId;
    }

    function fillUnit(uint256 _unitId, string memory _data)
        public
        isUnitOwner(_unitId)
    {
        unitAddress[_unitId].data.push(_data);
    }

    function readUnit(uint256 _unitId, string memory _password)
        public
        payable
        returns (string[] memory)
    {
        StorageUnit memory unit = unitAddress[_unitId];
        // if (keccak256(bytes(unit.password)) != keccak256(bytes(_password))) {
        //     revert InvalidPassword();
        // }
        if (unit.readPrice < msg.value) {
            revert InsufficientFundsForReading(unit.readPrice);
        }

        return unitAddress[_unitId].data;
    }

    function sellUnit(
        uint256 _unitId,
        uint256 _price,
        string memory _name,
        string memory _description
    ) public isUnitOwner(_unitId) {
        StorageUnit memory unit = unitAddress[_unitId];

        unitsForAuction.push(
            UnitAuction({
                unitId: _unitId,
                price: _price,
                name: _name,
                description: _description,
                currentOwner: unit.unitOwner
            })
        );

        emit UnitAuctioned({
            unitOwner: unit.unitOwner,
            name: _name,
            description: _description,
            price: _price
        });
    }

    function buyStorageUnit(uint256 _auctionNumber) public payable  {
        uint256 len = unitsForAuction.length;
        require(_auctionNumber < len, "Invalid auction number");

        UnitAuction memory unit = unitsForAuction[_auctionNumber];
        require(unit.price >= msg.value);

        if (_auctionNumber < len - 1) {
        unitsForAuction[_auctionNumber] = unitsForAuction[len - 1];
    }


        address currentOwner = unitAddress[unit.unitId].unitOwner;
        unitAddress[unit.unitId].unitOwner = msg.sender;

        payable(currentOwner).transfer(msg.value);
        unitsForAuction.pop();
    }

    function listUnitsForActuon() public view returns(UnitAuction[] memory) {
        return unitsForAuction;
    }
    
}

