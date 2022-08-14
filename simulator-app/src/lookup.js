import api_key from "./api_key.js";

const apikey = api_key;

async function quoteStock (symbol) {
    let url = "https://cloud.iexapis.com/stable/stock/" + symbol + "/quote?token=" + apikey;
    let response = await fetch(url);
    if (response.status != 200)
        return {};
    let quote = await response.json();
    return quote;
};

export default quoteStock;