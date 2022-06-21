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

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataWallet(res.data.slice(0, 3)))
      .catch(err => console.log(err))
  }, []);

  console.log('data wallet', dataWallet)

  return (
    <div className='allWallets'>
      <h1>Selective Wallets Overview</h1>
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