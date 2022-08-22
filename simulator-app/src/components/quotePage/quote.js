import QuoteForm from './quoteForm';
import QuoteBody from './quoteBody';
import { useState } from 'react';

function Quote() {
    const [stockData, setStockData] = useState(initData());

    const getData = (data) => {
        setStockData(data);
        console.log(stockData);
    }

    return (
        <div className='Quote-app'>
            {/* TICKER SUBMITION */}
            <div className='Quote-header'>
                <span className='Title-header'>Quote a Company</span>
                <div style={{ 'fontSize': '2vmin' }}>Enter a ticker symbol to recieve relevant data for that company.</div>
                <hr className='Invisible'></hr>
                <QuoteForm data={getData}/>
            </div>
            {/* DATA EXHIBIT */}
            <div className='Quote-body'>
                <QuoteBody stockData={stockData} />
            </div>
        </div>
    );
}

function initData () {
    return {
        'stockQuote': {},
        'stockStats': {},
        'stockCompany': {}
    }
}

export default Quote;