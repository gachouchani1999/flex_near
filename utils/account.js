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
async function createLockedAccount()  {
    // Connects to near via config
    const near = await nearAPI.connect(config);
    // Creates a key pair with full access that needs to be saved in the database
    const keyPair = nearAPI.KeyPair.fromRandom("ed25519");
    // Finds the public key of the keypair and creates 
    const publicKey = keyPair.getPublicKey().toString();
    const accountID = nearAPI.utils.PublicKey.fromString(publicKey).data.hexSlice();
    const account = await near.account(accountID);
    account.addKey(

    )
    return [accountID, keyPair]
}