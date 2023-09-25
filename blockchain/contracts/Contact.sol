// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Contact {
    constructor() {}

    event ContactEvent(address sender, string firstName , string secondName , string contact , string countryCode );

    function addContact(string memory firstName,string memory secondName,string memory contact,string memory countryCode) public {
        emit ContactEvent(msg.sender, firstName, secondName, contact, countryCode);
    }
}