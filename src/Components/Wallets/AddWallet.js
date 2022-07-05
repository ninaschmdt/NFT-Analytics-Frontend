import React from "react";
import { doc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../utils/firebaseSetup";

const AddWallet = ({ myWalletAddress }) => {
  const [wallet, setWallet] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!myWalletAddress) return toast.error("Please log in");
      if (!wallet) return toast.error("Please connect your wallet first");
      const res = await fetch(
        `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${wallet}&apikey=${process.env.REACT_APP_ETH_API_KEY}`
      );
      const data = await res.json();
      if (data.status === "0") return toast.error(data.result);
      const userRef = doc(db, "users", myWalletAddress);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) return toast.error("User does not exists");
      const { wallets: walletsInUser } = userSnap.data();

      if ( walletsInUser?.length === 3) {
        setWallet("");
        return toast.error("You can only track 3 wallets");
      }
      console.log("hehe")
      await updateDoc(userRef, { wallets: arrayUnion(wallet) });
      setWallet("");
      toast.success("Added wallet to user");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="addWallet">
      <h3>Track Wallet</h3>
      <form onSubmit={handleSubmit}>
        <input
          disabled={myWalletAddress ? false : true}
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
