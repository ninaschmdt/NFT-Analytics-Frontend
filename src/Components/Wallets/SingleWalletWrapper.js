import React from 'react'
import SingleWallet from './SingleWallet'
import SingleTransaction from './SingleTransaction'
import TopLabel from './TopLabel'
import AddWallet from './AddWallet'

const SingleWalletWrapper = () => {
  return (
    <div className='singleWalletWrapper'>
      <SingleWallet />
      <SingleTransaction />
      <AddWallet />
    </div>
  )
}

export default SingleWalletWrapper