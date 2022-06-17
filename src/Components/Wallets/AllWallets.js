import React from 'react';
import SingleWalletWrapper from './SingleWalletWrapper';
import SingleWallet from './SingleWallet';
import SingleTransaction from './SingleTransaction';
import TopLabel from './TopLabel';
import AddWallet from './AddWallet';

const AllWallets = () => {
  return (
    <div>
      <h1>AllWallets</h1>
      <SingleWalletWrapper></SingleWalletWrapper>
      <SingleWallet></SingleWallet>
      <SingleTransaction></SingleTransaction>
      <TopLabel></TopLabel>
      <AddWallet></AddWallet>
    </div>
  )
}

export default AllWallets