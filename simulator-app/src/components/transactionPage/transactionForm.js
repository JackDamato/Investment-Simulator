import { useRef, useState } from "react";

function TransactionForm(props) {
    const [ticker, setTicker] = useState("");
    const [type, setType] = useState("Buy")
    const [shareNumber, setShareNumber] = useState("1");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.tInfo({"ticker": ticker, "type": type, "shareNumber": shareNumber});
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Ticker Symbol:
                <input style={{ 'margin': '1vmin' }} type="text" onChange={event => setTicker(event.target.value)} />
            </label>

            <label>Number of Shares:
                <input style={{ 'width': '9vmin', 'margin': '1vmin' }} type="number" value={shareNumber} min="1" onChange={event => setShareNumber(event.target.value)} />
            </label>

            <div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="type" value="Buy" onChange={event => setType(event.target.value)} defaultChecked/>
                    <label className="form-check-label" >Buy</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="type" value="Sell" onChange={event => setType(event.target.value)} />
                    <label className="form-check-label" >Sell</label>
                </div>

                <input className="btn btn-primary" type="submit" />
            </div>

        </form>
    );
}

export default TransactionForm;