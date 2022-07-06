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

  useEffect(() => {
    axios('https://avatars.dicebear.com/api/:sprites/:seed.svg')
      .then(res => setAvatar(res.data))
      .catch(err => console.log(err))
  }, []);

  let svg = createAvatar(style, {
    seed: 'custom-seed'
  });

  return (
    <div className="singleWallet">
      <div className="singleWalletImageNameAddress">
        <div className="walletImage">
        {svg}
        </div>
        <div className="singleWalletNameAddress">
          <div className="walletName">{/* {transactionItem.to} */}</div>
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
