import React from "react";
import SingleWallet from "./SingleWallet";
import MultipleTransactions from "./MultipleTransactions";
import TopLabel from "./TopLabel";
import AddWallet from "./AddWallet";

const MultipleWalletWrapper = ({ dataWrapper }) => {
  console.log('here is the data for multiple wallet wrapper: ', dataWrapper)

  // const walletName = [0, 1, 2, 3, 4]

  return (
      <div>
      <MultipleTransactions transactionName={dataWrapper.contractAddress} etherscan={dataWrapper.hash} date={dataWrapper.timeStamp} tokenName={dataWrapper.tokenName} />
      </div>
  )
}

export default MultipleWalletWrapper;
