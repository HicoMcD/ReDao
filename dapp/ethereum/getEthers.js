import { ethers, Signer } from "ethers";

//Provider
const provider = ethers.getDefaultProvider('mainnet', {
    etherscan: '', //YOUR_ETHERSCAN_API_KEY
    infura: {
      projectId: 'b3b8f96e79bd4df2b5e664e84ae3bc36',
      projectSecret: '605a9161dd2546219aa261c38c0660f8',
    },
    alchemy: '', //YOUR_ALCHEMY_API_KEY,
    pocket: { //YOUR_POCKET_APPLICATION_KEY
      applicationId:'' ,
      applicationSecretKey:''
    },
    local: 'http://localhost:8545',
});

console.log(Signer);

async function Ethers() {
    try{
        console.log('awe');

        const balance = await provider.getBalance('ethers.eth');
        console.log(balance);
        const formatE = await ethers.utils.formatEther(balance);
        console.log(formatE);
        const daiAddress = await "dai.tokens.ethers.eth";
        console.log(daiAddress);
        // The ERC-20 Contract ABI, which is a common contract interface
        // for tokens (this is the Human-Readable ABI format)
        const daiAbi = [
            // Some details about the token
            "function name() view returns (string)",
            "function symbol() view returns (string)",
        
            // Get the account balance
            "function balanceOf(address) view returns (uint)",
        
            // Send some of your tokens to someone else
            "function transfer(address to, uint amount)",
        
            // An event triggered whenever anyone transfers to someone else
            "event Transfer(address indexed from, address indexed to, uint amount)"
        ];
        // The Contract object
        const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
        console.log(daiContract);
        const name = await daiContract.name();
        console.log(name);
        const balanceOf = await daiContract.balanceOf("0xf614f1ae4a7e6f456b3f1afb33856879657e0f50");
        //console.log(balance);
        console.log(ethers.utils.formatUnits(balanceOf, 18))
        }
    catch(error) {
        console.log("this is the error", error);
    }
    finally{
        console.log("it works");
    }
}
Ethers();
