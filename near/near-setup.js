import {
  keyStores,
  KeyPair,
  Near,
  WalletConnection,
  utils as nearUtils
} from "near-api-js";

// export const CONTRACT_ID = "harmonicnft.calvintorra.testnet";
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;
const NETWORK_URL_BASE =
  process.env.NEXT_PUBLIC_NETWORK === "mainnet"
    ? "https://wallet.near.org"
    : "https://wallet.testnet.near.org";

export const initNear = () => {
  // Testnet
  const near = new Near({
    networkId: `${NETWORK}`,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: `https://rpc.${NETWORK}.near.org`,
    walletUrl: `https://wallet.${NETWORK}.near.org`
  });

  // Start wallet

  wallet = new WalletConnection(near);
};

export let wallet = null;
export let contract = null;
export const utils = nearUtils;

export const signIn = () => {
  wallet.requestSignIn();
};

export const signOut = () => {
  wallet.signOut();
};

// =====================
// GENERIC VIEW METHODS
// =====================

export const viewFunction = async ({
  contractID = CONTRACT_ID,
  functionName,
  args = {}
}) => {
  const result = await wallet
    .account()
    .viewFunction(contractID, functionName, args);

  return result;
};

// =====================
// GENERIC CALL METHODS (CHANGE METHODS)
// =====================

export const callFunction = async ({
  contractID,
  functionName,
  args = {},
  deposit = "0"
}) => {
  const result = await wallet.account().functionCall({
    contractId: contractID, // NFT CONTRACT ID
    methodName: functionName,
    args: args,
    // attachedDeposit: utils.format.parseNearAmount("1")
    attachedDeposit: utils.format.parseNearAmount("0.01") // 4cents works
  });

  return result;
};
