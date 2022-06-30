import React from 'react';
import SingleWalletWrapper from './SingleWalletWrapper';
import SingleWallet from './SingleWallet';
import SingleTransaction from './MultipleTransactions';
import TopLabel from './TopLabel';
import AddWallet from './AddWallet';
import axios from 'axios'
import { useEffect, useState } from 'react'

const AllWallets = () => {

  const [dataWallet, setDataWallet] = useState([]);

  //This is the placeholder code from Ruslan
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataWallet(res.data.slice(0, 3)))
      .catch(err => console.log(err))
  }, []);

  console.log('data wallet', dataWallet)

  /* This is the code I wrote for fetching and Reagan approved

  function App() {
  const [userInput, setUserInput] = useState("");
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    fetch(`https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x3996881D5AFB107e4Abb0fe124a6420Bfa2E3F9d&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=1PNDKADJZH14KW2FDEQ2FCQ5IQSF6NBKCS`)
      .then((response) => {
        console.log('DATA IS HERE')
        return response.json();
      })
      .then((data) => {
        setWallets(data);
      })
      .catch(error => {
        console.log('CAN NOT GET DATA')
      })
  }, []);
  console.log('wallets', wallets)

// Thois coudl potetialy handle the selective wallet fetching,
// or fetch all and use find method to get the one that we need 

  const search = () => {
    //console.log(userInput);
    fetch("" + userInput)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWallets(data);
      });
  };

  return (
    <div className="App">
      <h1>ETHERSCAN Data</h1>
    </div>
  );

} */

  return (
    <div className='allWallets'>
      <h1>Tracked Wallets</h1>
      {dataWallet.length && dataWallet.map(walletItem => {
        return (
          <div key={walletItem.id}>
            <SingleWalletWrapper data={walletItem} />
          </div>
        )
      })
      }
      <AddWallet />

    </div>
  )
}

export default AllWallets