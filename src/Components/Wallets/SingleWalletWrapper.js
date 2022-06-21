import React from 'react'
import SingleWallet from './SingleWallet'
import MultipleTransactions from './MultipleTransactions'
import TopLabel from './TopLabel'
import AddWallet from './AddWallet'

const SingleWalletWrapper = ({data}) => {
  console.log('here is the data for single wallet wrapper: ',data)

  const myDummyTransactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='singleWalletWrapper'>
      <SingleWallet address={data.phone}/>
      {/* this needs to change into the property of our endpoint where we have multiple collections + needs to be limited / sliced to 5 */}
      {myDummyTransactions.slice(0,5).map(el => { return <MultipleTransactions transactionName={data.name} status={data.address.city} money={data.address.geo.lng} link={data.website} date={data.address.zipcode}/>})}
    </div>
  )
}

export default SingleWalletWrapper