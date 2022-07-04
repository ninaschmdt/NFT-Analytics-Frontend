import React from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../utils/firebaseSetup";

const AddWallet = ({ myWalletAddress }) => {
  const [wallet, setWallet] = useState("");
  const [list, setList] = useState([]);

  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!wallet) return alert("Please capture a valid waller thingy");
      const res = await fetch(
        `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${wallet}&apikey=${process.env.REACT_APP_ETH_API_KEY}`
      );
      const data = await res.json();
      if (data.status === "0") return alert(data.result);
      const userRef = doc(db, "users", myWalletAddress);
      await updateDoc(userRef, { wallets: arrayUnion(wallet) });
      setWallet("");
      console.log("added wallet to user");
    } catch (error) {
      console.log(error);
    }
  };
  console.log("HOOOORAY", myWalletAddress);
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
