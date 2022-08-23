import api_key from "./api_key.js";

const apikey = api_key;
const types = ['/quote?', '/stats?', '/company?'];

async function getStockData (symbol, type = types[0]) {
        if (symbol == "")
            return {}

        if (!types.includes(type)) {
            console.log("Error 400. Invalid type for GETSTOCKDATA");
            return {};
        }
            
        let url = "https://cloud.iexapis.com/stable/stock/" + symbol + type + "token=" + apikey;
        let response = await fetch(url);
        if (response.status != 200)
            return {};
        let data = await response.json();
        return data;

};


export default getStockData;