import React from "react";
import MultipleTransactions from "./MultipleTransactions";
import { useState } from "react";
import { doc, updateDoc, deleteField, getDoc, arrayRemove } from "firebase/firestore";
import { db } from "../../utils/firebaseSetup";
import { toast } from "react-toastify";

const SingleWallet = ({ data, dataCollection, myWalletAddress }) => {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState([]);
  const avatarStatic = 'https://nypost.com/wp-content/uploads/sites/2/2022/03/emotion-robot.gif?w=744';

   console.log('DATAA', data.walletID)
   
   const theIDUpper = data.walletID.toUpperCase();
   const theIDLower = data.walletID.toLowerCase()

  const handleRemove = async () => {
  try{ 
    const userRef = doc(db, "users", myWalletAddress);
    const userSnap = await getDoc(userRef);

    await updateDoc(userRef, {
      wallets: arrayRemove(data.walletID)
    })}
    catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="singleWallet">
      <div className="singleWalletImageNameAddress">
        <div className="walletImage">
          <img src={avatarStatic}/> 
        </div>

        <div className="singleWalletNameAddress">
          <div className="walletName">
            {data.walletID.slice(0,5)} 
            ...
            {data.walletID.slice(-5)} 

            </div>
        </div>
      </div>
      <div>
        <button className="button-secondary" onClick={handleRemove}>Remove</button>
      </div>
      {loading
        ? "Loading"
        : data?.transactions?.slice(-5).map((transactionItem) => {
            return (
                <MultipleTransactions key={transactionItem.id}
                  dataCollection={dataCollection}
                  transactionName={transactionItem.contractAddress}
                  etherscan={transactionItem.hash}
                  date={transactionItem.timeStamp}
                  tokenName={transactionItem.tokenName}
                  contractAddress={transactionItem.contractAddress}
                />
            );
          })}
    </div>
  );
};

export default SingleWallet;

// 0x137878D2e1cA1739e3F584bDf43741a739Df3E7f