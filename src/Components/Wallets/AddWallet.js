import React from "react";
import { useState } from "react";

const AddWallet = () => {
  const [wallet, setWallet] = useState("");
  const [list, setList] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = { wallet };
    if (wallet) {
      setList((ls) => [...ls, data]);
      setWallet("");
    }
  };

  return (
    <div className="addWallet">
      <h3>Track Wallet</h3>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Paste wallet ID here..."
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        <br />
        <input type="submit" className="button" value="Add" />
      </form>
      {list.map((a) => (
        <div>{a.wallet}</div>
      ))}
    </div>
  );
};

export default AddWallet;
