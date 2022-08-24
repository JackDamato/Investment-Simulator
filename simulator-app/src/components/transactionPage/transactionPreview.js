import format from "../../helpers/format";

function TransactionPreview (props) {
    if (!props.isSubmitted)
        return (<div></div>);
    console.log(props)
    const tInfo = props.tInfo;

    return (
        <div className="Transaction-preview">
            <hr></hr>
            <span style={{ "fontSize": "4vmin", "textDecoration": "underline"}}>Transaction Preview</span>
            <div><strong>{tInfo.type}ing {tInfo.shareNumber}</strong> shares of <strong>{tInfo.company} </strong> 
             at <strong>${format(tInfo.price)}</strong> for a total of <strong>${format(tInfo.price * tInfo.shareNumber)}</strong></div>
            
            <button className="btn btn-danger" type="submit" style={{"margin": "2vmin"}} onClick={props.cancelTransaction}>Cancel Transaction</button>
            <button className="btn btn-success" type="submit" style={{"margin": "2vmin"}} onClick={props.commitTransaction}>Finalize Transaction</button> 
            
            <div className="Footer">*Note that this may change before the time you finalize this transaction</div>

        </div>
    );
}

export default TransactionPreview;