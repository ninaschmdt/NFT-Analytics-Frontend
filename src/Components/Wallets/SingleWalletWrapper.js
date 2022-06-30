import React from 'react'
import SingleWallet from './SingleWallet'
import MultipleTransactions from './MultipleTransactions'
import TopLabel from './TopLabel'
import AddWallet from './AddWallet'

const SingleWalletWrapper = ({data}) => {
  console.log('here is the data for single wallet wrapper: ', data)
  const wallets = [{data}]

  return (
    <div className='singleWalletWrapper'>
      <SingleWallet walletName={data}/>
      {/* this needs to change into the property of our endpoint where we have multiple collections + needs to be limited / sliced to 5 */}
      {wallets.slice(0,5).map(el => { return <MultipleTransactions transactionName={data.contractAddress} link={data.website} date={data.address.zipcode}/>})}
    </div>
  )
}

export default SingleWalletWrapper