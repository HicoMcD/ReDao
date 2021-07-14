import { ethers } from "ethers";

//Provider
// If you don't specify a //url//, Ethers connects to the default (infura)
// (i.e. ``http:/\/localhost:8545``)
//const provider = new ethers.providers.JsonRpcProvider(); //local: http://localhost:8545
//const provider = new ethers.getDefaultProvider( )
//const provider = new ethers.providers.InfuraProvider( ); //Connect to mainnet
const provider = new ethers.providers.InfuraProvider("mainnet", {
    projectId: 'b3b8f96e79bd4df2b5e664e84ae3bc36',
    projectSecret: '605a9161dd2546219aa261c38c0660f8'
});

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
//const signer = provider.getSigner()

console.log(provider)
//console.log(signer)
async function awe() {
    try{
        console.log('awe');

        const balance = await provider.getBalance('ethers.eth');
        console.log(balance);
        const formatE = ethers.utils.formatEther(balance);
        console.log(formatE);
    }
    catch(error) {
        console.log("this is the error", error);
    }
    finally{
        console.log("it works");
    }
}
awe();
/************************ 
//MetaMask
// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const providerr = new ethers.providers.Web3Provider(window.ethereum) //WINDOW IS NOT DEFINED!
// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = providerr.getSigner()
console.log(providerr)
console.log(signerr)
***********************/