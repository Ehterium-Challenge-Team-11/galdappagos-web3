import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";


/*
import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
export const [metaMask, hooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions })) */



const connector = new InjectedConnector({
    supportedChainIds: [
        11155111, // Sepolia
    ],
  });
  
  const getLibrary = (provider) => {
    return new Web3(provider);
  };
  
  export { connector, getLibrary };
  