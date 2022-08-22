import { useEffect } from "react";
import format from "../../helpers/format";

function QuoteBody(props) {
    let stockData = props.stockData;
    console.log(props)

    return (
        <div className='Quote-body'>
            <div className='Stock-overview' style={{ 'fontSize': '1.5vmin' }}>
                <p><span style={{ 'fontSize': '2vmin' }}>Description: </span> {stockData.stockCompany['description']}</p>
                <p><span style={{ 'fontSize': '2vmin' }}>Tags: </span> {printStockTags(stockData.stockCompany.tags)}  </p>
            </div>
            <table className='Stock-data'>
                <tbody>
                    <tr style={{ 'textDecoration': 'underline' }}>
                        <th>Name: {stockData.stockQuote['companyName']} {stockData.stockQuote['symbol']}</th>
                        <th>Latest Price: ${format(stockData.stockQuote['latestPrice'])}</th>
                    </tr>
                    <tr>
                        <td>Average Volume: {format(stockData.stockQuote['avgTotalVolume'], 0)}</td>
                        <td>Previous Close: {format(stockData.stockQuote['previousClose'])}</td>
                    </tr>
                    <tr>
                        <td>Market Cap: {format(stockData.stockQuote['marketCap'], 0)}</td>
                        <td>Beta: {format(stockData.stockStats['beta'])}</td>
                    </tr>
                    <tr>
                        <td>P/E Ratio: {stockData.stockQuote['peRatio']}</td>
                        <td>EPS: {stockData.stockStats['ttmEPS']}</td>
                    </tr>
                    <tr>
                        <td>52 Week Low: {format(stockData.stockQuote['week52Low'])}</td>
                        <td>52 Week High: {format(stockData.stockQuote['week52High'])}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// returns the array of tags as a formatted string
function printStockTags (tags) {
    if (tags == null)
        return tags;

    let tagString = "";
    for (let i = 0; i < tags.length; i++) {
        if (i != 0)
            tagString += "; ";
        tagString += tags[i];
    }
    return tagString
}

export default QuoteBody;