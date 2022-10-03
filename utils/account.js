const nearAPI = require("near-api-js");

 const config = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
  };


/**
 * Creates a locked account that does not have access to any contract calls.
 * This account will be used to transfer the original NFT to it.
 * The output of this function is the account ID of the newly generated adddress and a secret private key that the user will need to be able to access this account from his wallet. 
 *
 * @since 0.0.1

*/
async function createLockedAccount(nftAddress, tokenId)  {
    // Connects to near via config
    const near = await nearAPI.connect(config);
    // Creates a key pair with full access that needs to be saved in the database
    const keyPair = nearAPI.KeyPair.fromRandom("ed25519");
    // Finds the public key of the keypair and creates a new key pair that would be visible to the user privately
    // This key pair would be responsible for the user to connect but does not have any functionality other than that. 
    // The other key pair would be deleted after giving approval of the NFT to the user
    const publicKey = keyPair.getPublicKey().toString();
    const accountID = nearAPI.utils.PublicKey.fromString(publicKey).data.hexSlice();
    const account = await near.account(accountID);
    const locked_keyPair = nearAPI.KeyPair.fromRandom("ed25519");
    const locked_publicKey = locked_keyPair.getPublicKey().toString();
    account.addKey(
      locked_publicKey,
      "test-locked.testnet",
      null
    )
    const contract = new nearAPI.Contract(
      account,
      nftAddress,
        {
          changeMethods: ["nft_approve"],
          sender : account,
        }
    );
    // giving approval to the Copy NFT contract to be able to transfer the locked token to the required address at repossession or claim
    const result = await contract.nft_approve(
      {
        token_id: tokenId,
        account_id: "test-locked.nft",
      }
    );
    // Ensure that the result is successful before moving on
    
    
    return [accountID, locked_keyPair]
}