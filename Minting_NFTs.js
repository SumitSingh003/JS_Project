// creating a variable to hold the NFTs
const nftHolder = [];

// this function will take in some values as parameters
function minting_NFT(name, eyecolor, hairtype, accessory){

// creating an _nft object using the parameters passed to it for its metadata
const _nft = { 
    "name" : name,
    "eyecolor" : eyecolor,
    "hairtype" : hairtype,
    "accessory" : accessory
}
//storing the NFT in the variable created above
nftHolder.push(_nft); 
console.log("Minted NFT: " + name);
}

// creating a "loop" that will go through an "array" of NFT's (i.e., nftHolder) and print their metadata
function listing_NFTs() {
for(let i=0; i< nftHolder.length; i++){
    console.log("\nID: " + (i+1));
    console.log("Name: " + nftHolder[i].name);
    console.log("Eye Color: " + nftHolder[i].eyecolor);
    console.log("Hair Type: " + nftHolder[i].hairtype);
    console.log("Accessory: " + nftHolder[i].accessory);
}
}

// printing the total number of minted NFTs
function Total_NFTs() {
console.log("\nTotal number of minted NFTs: " + nftHolder.length);
}

//invoking the functions
minting_NFT("Sumit", "Brown", "Curly", "Gold Bracelet");
minting_NFT("Vikas", "Green", "Wavy", "Silver Watch");
minting_NFT("Roshan", "Black", "Straight", "Silver Bracelet");
minting_NFT("Kanchana", "Hazel", "Straight", "Gold Necklace");
minting_NFT("Swati", "Blue", "Straight", "Sapphire Pendant");
listing_NFTs();
Total_NFTs();
