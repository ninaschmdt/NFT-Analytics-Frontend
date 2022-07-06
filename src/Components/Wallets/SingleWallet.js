import React from "react";
import MultipleTransactions from "./MultipleTransactions";
import { useState } from "react";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../../utils/firebaseSetup";

const SingleWallet = ({ data, dataCollection }) => {
  const [loading, setLoading] = useState(false);

  // console.log('DATAA', data.walletID)

  // const handleRemove = () => {
  //   const userRef = doc(db, "users", data.walletID);
  //   await updateDoc(userRef, {
  //     wallets: deleteField()
  //   });
  // }

  return (
    <div className="singleWallet">
      <div className="singleWalletImageNameAddress">
        <div className="walletImage"></div>
        <div className="singleWalletNameAddress">
          <div className="walletName">{/* {transactionItem.to} */}</div>
        </div>
      </div>
      <div>
        <button className="button-secondary">Remove</button>
      </div>
      {loading
        ? "Loading"
        : data?.transactions?.slice(-5).map((transactionItem) => {
            return (
              <div key={transactionItem.id}>
                <MultipleTransactions
                  dataCollection={dataCollection}
                  transactionName={transactionItem.contractAddress}
                  etherscan={transactionItem.hash}
                  date={transactionItem.timeStamp}
                  tokenName={transactionItem.tokenName}
                  contractAddress={transactionItem.contractAddress}
                />
              </div>
            );
          })}
    </div>
  );
};

export default SingleWallet;
