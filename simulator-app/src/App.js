import './App.css';
import Quote from './components/quotePage/quote.js';
import TransactionForm from './components/transactionPage/transactionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TransactionForm /> 
      </header>
    </div>
  );
}

export default App;
