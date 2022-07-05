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
}) => {
  const [userInput, setUserInput] = useState("");
  const [trackedWallets, setTrackedWallets] = useState([]);

  const [loading, setLoading] = useState(false);
  const [dataTransactions, setDataTransactions] = useState([]);

  useEffect(() => {
    const getTrackedWallets = () => {
      try {
        const unsub = onSnapshot(doc(db, "users", myWalletAddress), (doc) => {
          console.log(doc.data().wallets);
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
        const promisedWallets = trackedWallets.map((wallet) =>
          axios.get(
            `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${wallet}&apikey=${process.env.REACT_APP_ETH_API_KEY}`
          )
        );
        const responsesWallet = await Promise.all(promisedWallets);
        const wallets = responsesWallet.map((response) => ({
          walletID: response.data.result[0].to,
          transactions: response.data.result,
        }));
        setDataWallet(wallets);
      };
      getWalletsData();
    } catch (error) {
      console.log(error);
    }
  }, [trackedWallets]);

  return (
    <div className="allWallets">
      <h1>Tracked Wallets</h1>

      {clearWallets
        ? "Log in to see your wallets"
        : dataWallet.map((walletItem) => {
            return (
              <div className="singleWallet" key={walletItem.id}>
                <SingleWallet data={walletItem} />
              </div>
            );
          })}
      {/* <SingleWallet data={dataTransactions} /> */}

      <AddWallet myWalletAddress={myWalletAddress} />
    </div>
  );
};

export default AllWallets;
