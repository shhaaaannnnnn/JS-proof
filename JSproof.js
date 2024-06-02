// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, creator, dateCreated) {
    const nft = {
        name: name,
        description: description,
        creator: creator,
        dateCreated: dateCreated
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Description: ${nfts[i].description}`);
        console.log(`Creator: ${nfts[i].creator}`);
        console.log(`Date Created: ${nfts[i].dateCreated}`);
        console.log('---------------------------');
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("Cryptape", "A unique ape", "meta1", "2024-04-23");
mintNFT("Bored", "A bored man in world", "meta2", "2024-06-30");
mintNFT("Art ", "Generative art", "meta3", "2024-10-27");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
