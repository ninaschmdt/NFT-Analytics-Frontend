import React from "react";
import SingleWallet from "./SingleWallet";
import SingleTransaction from "./MultipleTransactions";
import TopLabel from "./TopLabel";
import AddWallet from "./AddWallet";
import axios from "axios";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebaseSetup";
import MultipleTransactions from "./MultipleTransactions";

const AllWallets = ({
  myWalletAddress,
  clearWallets,
  dataWallet,
  setDataWallet,
  dataCollection
}) => {
  const [userInput, setUserInput] = useState("");
  const [trackedWallets, setTrackedWallets] = useState([]);

  const [loading, setLoading] = useState(false);
  const [dataTransactions, setDataTransactions] = useState([]);

  useEffect(() => {
    const getTrackedWallets = () => {
      try {
        const unsub = onSnapshot(doc(db, "users", myWalletAddress), (doc) => {
          // console.log(doc.data().wallets);
          setTrackedWallets(doc.data().wallets);
        });
        return () => unsub();
      } catch (error) {
        console.error(error);
      }
    };
    myWalletAddress && getTrackedWallets();
  }, [myWalletAddress]);

  useEffect(() => {
    try {
      const getWalletsData = async () => {
        const wallets = []

        for await (const wallet of trackedWallets) {
          const { data } = await axios.get(
            `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${wallet}&apikey=${process.env.REACT_APP_ETH_API_KEY}`
          )
          wallets.push({ walletID: wallet, transactions: data.result })
        }
        setDataWallet(wallets);
      };


      getWalletsData();
    } catch (error) {
      console.log(error);
    }
  }, [trackedWallets]);

  console.log('DATA WALLET', dataWallet)
  return (
    <div className="allWallets">
      <h1>Tracked Wallets</h1>

      {clearWallets
        ? <div className='LoginToSee'>Connect your wallet to track wallets</div>
        : dataWallet.map((walletItem) => {
          return (
            <div className="singleWallet" key={walletItem.id}>
              <SingleWallet data={walletItem} dataCollection={dataCollection} myWalletAddress={myWalletAddress} />
            </div>
          );
        })}
      {/* <SingleWallet data={dataTransactions} /> */}

      <AddWallet myWalletAddress={myWalletAddress} />
    </div>
  );
};

export default AllWallets;
