import React from "react";
import { useState } from "react";
import { ethers } from "ethers";

const MetaMask = () => {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("Requesting account...");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <div className="walletConnect">
      <header>
        <h3>My Wallet Address: <br></br> Some address{walletAddress}</h3>
        <button className='button' onClick={requestAccount}>Connect Your Wallet</button>
      </header>
    </div>
  );
};

export default MetaMask;
