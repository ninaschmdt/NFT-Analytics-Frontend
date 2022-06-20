import React from 'react';
import SingleWalletWrapper from './SingleWalletWrapper';
import SingleWallet from './SingleWallet';
import SingleTransaction from './SingleTransaction';
import TopLabel from './TopLabel';
import AddWallet from './AddWallet';

const AllWallets = () => {
  return (
    <div className='allWallets'>
      <h1>Selective Wallets Overview</h1>
      <SingleWalletWrapper/>
    </div>
  )
}

export default AllWallets