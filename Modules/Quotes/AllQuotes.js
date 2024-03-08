let fs = require('fs');

let allQuotes = {};

allQuotes.arrQuote = function arrQuotes() {
    let quotes = fs.readFileSync(`${__dirname}/Quotes.txt`, 'utf-8');
    
    let quotesArr = quotes.split(/\r?\n/);
    return quotesArr;
}

module.exports = allQuotes;