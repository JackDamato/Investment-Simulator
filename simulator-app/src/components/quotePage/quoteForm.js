import getStockData from "../../helpers/lookup";
import { useState } from "react";

function QuoteForm(props) {
    const [ticker, setTicker] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        getStockData(ticker, '/quote?').then(quote =>
            getStockData(ticker, '/stats?').then(stats =>
                getStockData(ticker, '/company?').then(company =>
                    (props.data({'stockQuote': quote, 'stockStats': stats, 'stockCompany': company},)))));

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
        </div>
    );
}


export default QuoteForm;