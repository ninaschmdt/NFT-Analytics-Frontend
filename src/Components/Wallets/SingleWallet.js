import React from "react";
import MultipleTransactions from "./MultipleTransactions";
import { useState } from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import { useEffect } from "react";
import axios from "axios";

const SingleWallet = ({ data, dataCollection }) => {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState([]);
  const avatarStatic = 'https://nypost.com/wp-content/uploads/sites/2/2022/03/emotion-robot.gif?w=744';

  return (
    <div className="singleWallet">
      <div className="singleWalletImageNameAddress">
        <div className="walletImage">
          <img src={avatarStatic}/> 
        </div>

        <div className="singleWalletNameAddress">
          <div className="walletName">
            {data.transactions.map(walletName => {
              return(
                walletName.contractAddress.slice(0, 2)
              )
            })} 
            ...
            {data.transactions.map(walletName => {
              return(
                walletName.contractAddress.slice(-2)
              )
            })} 
            </div>
        </div>
      </div>
      <div>
        <button className="button-secondary">Remove</button>
      </div>
      {loading
        ? "Loading"
        : data.transactions.slice(-5).map((transactionItem) => {
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
