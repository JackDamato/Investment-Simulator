import React from 'react';
import quoteStock from './lookup.js';
import { useState } from "react";

function QuoteForm() {
    const [ticker, setTicker] = useState("");
    const [stockInfo, setStockInfo] = useState({
        symbol: "",
        latestPrice: "",
        companyName: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        quoteStock(ticker).then(quote => (setStockInfo({symbol: quote['symbol'], latestPrice: quote['latestPrice'], companyName: quote['companyName']})));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Ticker:
                    <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div style={{textAlign: "left"}}>
                <p id="stockName">Name: <span style={{color: '#a0a0a0'}}>{stockInfo.companyName}</span></p>
                <p id="stockSymbol">Symbol: <span style={{color: '#a0a0a0'}}>{stockInfo.symbol}</span></p>
                <p id="stockPrice">Price: <span style={{color: '#a0a0a0'}}>{stockInfo.latestPrice}</span></p>
            </div>
        </div>
    );
}


export default QuoteForm;