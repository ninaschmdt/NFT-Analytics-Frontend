import React from "react";
import SingleWallet from "./SingleWallet";
import MultipleTransactions from "./MultipleTransactions";
import TopLabel from "./TopLabel";
import AddWallet from "./AddWallet";

const MultipleWalletWrapper = ({ dataWrapper }) => {
  console.log("here is the data for single wallet wrapper: ", dataWrapper);

  // const walletName = [0, 1, 2, 3, 4]
  
  return (
    <div className="singleWalletWrapper">
      <SingleWallet wallet={dataWrapper} />
      <MultipleTransactions transactionName={dataWrapper.contractAddress} />
      {/* this needs to change into the property of our endpoint where we have multiple collections + needs to be limited / sliced to 5 */}
      {/* {dataWrapper.map(el => { return <MultipleTransactions transactionName={dataWrapper.contractAddress} link={dataWrapper.website} date={dataWrapper.address.zipcode}/>})} */}
    </div>
  );
};

export default MultipleWalletWrapper;
