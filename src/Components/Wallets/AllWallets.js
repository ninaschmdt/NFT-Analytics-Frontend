import React from "react";
import SingleWalletWrapper from "./SingleWalletWrapper";
import SingleWallet from "./SingleWallet";
import SingleTransaction from "./MultipleTransactions";
import TopLabel from "./TopLabel";
import AddWallet from "./AddWallet";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [dataWallet, setDataWallet] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetch(
      `https://api.etherscan.io/api?module=account&action=tokennfttx&address=0x391d69A9113dB3Eb1B8AAb6DB01bf602a9bfE8e1&apikey=${process.env.REACT_APP_ETH_API_KEY}`
    )
      .then((response) => {
        console.log("ETHERSCAN DATA IS HERE");
        return response.json();
      })
      .then((data) => {
        setDataWallet(data.result);
      })
      .catch((error) => {
        console.log("CAN NOT GET DATA");
      });
  }, []);
  console.log("wallets", dataWallet);

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
      {loading ? "Loading" : dataWallet.map(walletItem => {
        return (
          <div className="allWallets" key={walletItem.id}>
            <SingleWalletWrapper data={walletItem.result} />
          </div>
        )
      })
      }
      <AddWallet />
    </div>
  );
}

export default AllWallets;
