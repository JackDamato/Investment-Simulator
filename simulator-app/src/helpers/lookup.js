import api_key from "./api_key.js";

const apikey = api_key;
const types = ['/quote?', '/stats?', '/company?'];

// returns callback from iex api for specific api calls like quotes, stats, and others. type is default to getting a quote.
async function getStockData(symbol, type = types[0]) {
    let url = "https://cloud.iexapis.com/stable/stock/" + symbol + type + "token=" + apikey;
    let response = await fetch(url);

    // handles all api errors
    if (response.status != 200)
        return {};

    // parse and return data with a response of 200
    let data = await response.json();
    data.response = 200;
    return data;

};


export default getStockData;