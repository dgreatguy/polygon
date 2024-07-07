// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpeToken is ERC721A, Ownable {
    constructor() Ownable(msg.sender) ERC721A("OpeToken", "BTN") {}

    uint256 private limit = 5;
    string[] private descriptions = [
        "A figure stands alone on a cliff edge, bathed in the soft light of the full moon",
        "A woman watches the city skyline from her apartment window as dusk settles in",
        "A traveler gazes across an expansive desert, buffeted by the relentless wind",
        "A child skips stones across a tranquil lake, mirroring the clouds above",
        "A hiker pauses on a rocky summit, listening to the distant call of an eagle"
    ];
    mapping(uint256 => string) private _tokenURIs;

    function _baseURI() internal pure override returns (string memory) {
        return "QmTqSM29Q4BWAZyHbortmFmHSFe8sBY5Qz6YDhqtDKgPY9";
    }

    function mint(address reciever, uint256 quantity) external onlyOwner {
        require(reciever != address(0), "Invalid address");
        require(totalSupply() < limit, "NFTs minted exceeds maximum");
        _safeMint(reciever, quantity);
    }

    function prompts(uint256 tokenId) public view returns (string memory) {
        return descriptions[tokenId];
    }
}
