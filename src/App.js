import Web3 from "web3/dist/web3.min.js";
import { useState } from "react";
import { getAuth, signInWithCustomToken, signOut } from "firebase/auth";
import axios from "axios";
import mobileCheck from "./Components/Header/helpers/mobileCheck";
import getLinker from "./Components/Header/helpers/deepLink";
import CollectionsTable from "./Components/Collections/CollectionsTable";
import Wallets from "./Components/Wallets/AllWallets";
import Header from "./Components/Header/Header";
import "./scss/appcontainer.scss";
import "./scss/collections.scss";
import "./scss/wallets.scss";
import app from "./utils/firebaseSetup";
import Footer from "./Components/Footer/Footer";

const auth = getAuth(app);

const App = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [myWalletAddress, setMyWalletAddress] = useState("");
  const [clearWallets, setClearWallets] = useState(true);

  const onPressConnect = async () => {
    setLoading(true);

    try {
      const yourWebUrl = "http://localhost:3000/"; // Replace with your domain
      const deepLink = `https://metamask.app.link/dapp/${yourWebUrl}`;
      const downloadMetamaskUrl = "https://metamask.io/download.html";

      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        await handleLogin(account);
      } else if (mobileCheck()) {
        // Mobile browser
        const linker = getLinker(downloadMetamaskUrl);
        linker.openURL(deepLink);
      } else {
        window.open(downloadMetamaskUrl);
      }
    } catch (error) {
      console.log(error);
      setAddress("");
    }

    setLoading(false);
  };

  const handleLogin = async (address) => {
    const baseUrl = "https://frozen-dusk-75651.herokuapp.com";
    const response = await axios.get(`${baseUrl}/message?address=${address}`);
    const messageToSign = response?.data?.messageToSign;

    console.log("RESPONSE HEREEEEEE!!!!!", messageToSign);

    // turn messageToSign into an array
    const walletAddress = messageToSign.split("").splice(16, 42).join("");
    setMyWalletAddress(walletAddress);

    if (!messageToSign) {
      throw new Error("Invalid message to sign");
    }

    const web3 = new Web3(Web3.givenProvider);
    const signature = await web3.eth.personal.sign(messageToSign, address);

    const jwtResponse = await axios.get(
      `${baseUrl}/jwt?address=${address}&signature=${signature}`
    );

    const customToken = jwtResponse?.data?.customToken;

    if (!customToken) {
      throw new Error("Invalid JWT");
    }

    await signInWithCustomToken(auth, customToken);
    setAddress(address);
    setClearWallets(false);
  };

  const onPressLogout = () => {
    setAddress("");
    signOut(auth);
    setClearWallets(true);
  };

  return (
    <div className="App">
      <Header
        onPressConnect={onPressConnect}
        onPressLogout={onPressLogout}
        loading={loading}
        address={address}
      />
      <div className="content">
        <CollectionsTable />
        <Wallets
          myWalletAddress={myWalletAddress}
          clearWallets={clearWallets}
          setClearWallets={setClearWallets}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
