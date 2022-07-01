import React from "react";
import MultipleWalletWrapper from "./MultipleWalletWrapper";
import SingleWallet from "./SingleWallet";
import SingleTransaction from "./MultipleTransactions";
import TopLabel from "./TopLabel";
import AddWallet from "./AddWallet";
import axios from "axios";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebaseSetup";

/*const AllWallets = () => {

  const [dataWallet, setDataWallet] = useState([]);

  //This is the placeholder code from Ruslan
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataWallet(res.data.slice(0, 3)))
      .catch(err => console.log(err))
  }, []);

  console.log('data wallet', dataWallet)*/

function AllWallets() {
  const [userInput, setUserInput] = useState("");
  const [trackedWallets, setTrackedWallets] = useState([]);
  const [dataWallet, setDataWallet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "users", "0xB0edC4b584045541153E26f3748Ee78EE08aAa6b"),
      (doc) => setTrackedWallets(doc.data().wallets)
    );
    return () => unsub();
  }, []);

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

  // Thois coudl potetialy handle the selective wallet fetching,
  // or fetch all and use find method to get the one that we need

  const search = () => {
    //console.log(userInput);
    fetch("" + userInput)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataWallet(data);
      });
  };

  return (
    <div className="allWallets">
      <h1>Tracked Wallets</h1>
      {loading
        ? "Loading"
        : dataWallet.map((walletItem) => {
            return (
              <div className="allWallets" key={walletItem.walletID}>
                <MultipleWalletWrapper dataWrapper={walletItem} />
              </div>
            );
          })}
      <AddWallet />
    </div>
  );
}

export default AllWallets;
