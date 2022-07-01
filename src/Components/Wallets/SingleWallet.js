import React from "react";

const SingleWallet = ({ wallet }) => {
  return (
<<<<<<< HEAD
    <div className='singleWallet'>
      <div className='singleWalletImageNameAddress'>
        <div className='walletImage'>
        </div>
        <div className='singleWalletNameAddress'>
          <div className='walletName'>
            {/* {walletName} */}
          </div>
=======
    <div className="singleWallet">
      <div className="singleWalletImageNameAddress">
        <div className="walletImage"></div>
        <div className="singleWalletNameAddress">
          <div className="walletName">{wallet.tokenName}</div>
          <div className="walletAddress">{/* {address} */}</div>
>>>>>>> sven3
        </div>
      </div>
      <div>
        <button className="button-secondary">Remove</button>
      </div>
    </div>
  );
};

export default SingleWallet;
