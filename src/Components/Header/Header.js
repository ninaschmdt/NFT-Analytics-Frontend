import React from "react";
import Logo from "./Logo";
import ConnectWalletButton from "./ConnectWalletButton";

const Header = ({ onPressLogout, onPressConnect, loading, address }) => {
  return (
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
  );
};

export default Header;
