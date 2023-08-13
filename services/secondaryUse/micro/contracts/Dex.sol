// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dex {

    struct Pool {
        ERC20 tokenA;
        ERC20 tokenB;
        bool isOpen;
    }

    mapping(string => Pool) public pools;

    function registerPool(ERC20 tokenA, ERC20 tokenB) public {
        string memory symbolA = tokenA.symbol();
        string memory symbolB = tokenB.symbol();
        string memory poolName = string.concat(symbolA, symbolB);

        pools[poolName] = Pool({tokenA: tokenA, tokenB: tokenB, isOpen: true});
    }
}

contract UsdcToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("USDC", "USDC") {
        _mint(msg.sender, initialSupply);
    }
}

contract GGToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("GGToken", "GG") {
        _mint(msg.sender, initialSupply);
    }
}