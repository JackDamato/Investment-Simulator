import { useRef, useState } from "react";
import getStockData from "../../helpers/lookup";

function TransactionForm(props) {
    const [ticker, setTicker] = useState("");
    const [type, setType] = useState("Buy")
    const [shareNumber, setShareNumber] = useState("1");

    const tickerChange = (event) => {
        setTicker(event.target.value)
    }

    const typeChange = (event) => {
        setType(event.target.value);
    }

    const numberChange = (event) => {
        setShareNumber(event.target.value); 
    }

    const handleSubmit = (event) => {
        getStockData(ticker).then(quote => {
            alert(quote['latestPrice'])
        });
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Ticker Symbol:
                <input style={{ 'margin': '1vmin' }} type="text" onChange={tickerChange}/>
            </label>

            <div>
                <input style={{ 'width': '12vmin' }} type="number" value={shareNumber} min="1" onChange={numberChange} />

                <div style={{ 'margin': '1vmin' }} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="type" value="Buy" onChange={typeChange} defaultChecked />
                    <label className="form-check-label" >Buy</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="type" value="Sell" onChange={typeChange} />
                    <label className="form-check-label" >Sell</label>
                </div>

                <input className="btn btn-primary" type="submit" />

            </div>

        </form>
    );
}

export default TransactionForm;