import './App.css';
import Quote from './components/quotePage/quote.js';
import Transaction from './components/transactionPage/transaction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Transaction /> 
      </header>
    </div>
  );
}

export default App;
