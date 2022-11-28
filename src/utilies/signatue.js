import {ethers} from "ethers";
import {financeAppContractAddress} from './Contract'

export const  getSignature = async( user, uleTokenAmount, packageAmount, fantomAmount) => {
    try {
        
    const RPC = "https://data-seed-prebsc-1-s3.binance.org:8545";
    const provider = new ethers.providers.JsonRpcProvider(RPC)
    const blockNumber = await provider.getBlockNumber(); 

    const nonce = (await provider.getBlock(blockNumber)).timestamp;
    console.log("nonce-timestamp:", nonce)

    let hash = ethers.utils.solidityKeccak256(["string", "string", "uint256", "uint256", "uint256", "uint256"],
    [financeAppContractAddress.toLowerCase(), user.toLowerCase(), nonce, uleTokenAmount, packageAmount, fantomAmount]);


    let privateKey = "0x4f69878a432fff609330e3bc01cce303711b426ec551f910f80c370ebe6ca379" //signer_pk
    // 0xf8F76f766B39420019E4301ca7949279302D1A90 - signer address User 1 (Hamza)

    const signingKey = new ethers.utils.SigningKey(privateKey);
    let deployTx = signingKey.signDigest(hash);

    const signature = ethers.utils.joinSignature(deployTx);
    return {
        signature, 
        nonce
    }
} catch (error) {
       console.error("error while get signatur", error); 
}
}