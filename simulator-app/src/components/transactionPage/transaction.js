import { useState } from "react";
import TransactionForm from "./transactionForm";
import TransactionPreview from "./transactionPreview"
import getStockData from "../../helpers/lookup";
import commitTransaction from "../../helpers/commitTransaction";

function Transaction() {
    const [tInfo, setTransactionInfo] = useState({});
    const [isSubmitted, setSubmittionState] = useState(false);

    const updateTransactionInfo = (info) => {
        getStockData(info.ticker).then(quote => {
            // if error response from server refresh page
            if (quote.response != 200) {
                alert("Invalid Ticker Symbol");
                window.location.reload(false);
            }
            // submits data from the stock and the form to transaction info variable
            else {
                let stock = { "company": quote.companyName, "price": quote.latestPrice };
                setTransactionInfo(Object.assign(info, stock))
                setSubmittionState(true);
            }
        });
    }

    // gets updated stock data and then checks for invalid submittions
    const handleTransaction = () => {
        getStockData(tInfo.ticker).then(quote => {
            let stock = { "company": quote.companyName, "price": quote.latestPrice };
            setTransactionInfo(Object.assign(tInfo, stock))

            let commitResponse = commitTransaction(tInfo);
            alert(commitResponse);
            window.location.reload(false);
        });
    };

    const cancelTransaction = () => {
        alert("Cancelling Transaction");
        window.location.reload(false);
    }

    return (
        <div className="Transaction-app">
            <div className="Transaction-header">
                <span className='Title-header'>Buy and Sell Companies of Your Choice</span>
                <div style={{ 'fontSize': '2vmin' }}>Just enter the company's ticker and the amount of shares you would like to buy or sell</div>
            </div>
            <TransactionForm tInfo={updateTransactionInfo} />
            <TransactionPreview tInfo={tInfo} isSubmitted={isSubmitted} commitTransaction={handleTransaction} cancelTransaction={cancelTransaction} />
        </div>
    );
}

export default Transaction;