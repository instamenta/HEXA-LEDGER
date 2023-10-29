// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract SimpleWallet {
    mapping(address => uint256) public balances;

    event Deposit(address indexed _address, uint256 balance);
    event Balance(address indexed _address, uint256 balance);

    receive() external payable {
        deposit();
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, balances[msg.sender]);
    }

    function getBalance(address user) public view returns(uint) {
        return balances[user];
    }
}
