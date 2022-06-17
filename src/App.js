import logo from './logo.svg';
import './App.css';
import CollectionsTable from './Components/Collections/CollectionsTable';
import Wallets from './Components/Wallets/AllWallets';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <div className='header'>
      <Header/>
      </div>
      <div className='content'>
      <CollectionsTable/>
      <Wallets/>
      </div>
    </div>
  );
}

export default App;
