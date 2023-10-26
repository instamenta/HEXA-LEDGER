// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract SimpleWallet {
    mapping(address => uint) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function getBalance(address user) public view returns (uint) {
        return balances[user];
    }
}