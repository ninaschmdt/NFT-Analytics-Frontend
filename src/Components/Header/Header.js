import React from "react";
import Logo from "./Logo";
import ConnectWalletButton from "./ConnectWalletButton";

const Header = ({ onPressLogout, onPressConnect, loading, address }) => {
  return (
    <div className="headerSlogan">
      <div className="header">
        <div>
          <Logo />
        </div>
        <div>
          <ConnectWalletButton
            onPressConnect={onPressConnect}
            onPressLogout={onPressLogout}
            loading={loading}
            address={address}
          />
        </div>
      </div>
      <div className="slogan">
      <h3>See when your tracked wallets buy from the Top 10 Trending Collections</h3>
      </div>
    </div>
  );
};

export default Header;
