import logo from './logo.svg';
import './App.css';
import CollectionsTable from './Components/Collections/CollectionsTable';
import Wallets from './Components/Wallets/AllWallets';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <CollectionsTable></CollectionsTable>
      <Wallets></Wallets>
    </div>
  );
}

export default App;
