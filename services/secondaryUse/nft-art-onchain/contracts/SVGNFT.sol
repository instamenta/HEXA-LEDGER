// SPDX-License-Identifier: MIT
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SVGNFT is ERC721URIStorage {
    constructor() ERC721("SVG NFT", "svgNFT") {}

    function create(string memory svg) public {
        
    }
}
