let http = require('http');
let random = require('./Modules/RandomNum/RandomNum');
let quotesArr = require('./Modules/Quotes/AllQuotes');

let app = {};

app.config = {
    timeOfLoop: 1000,
}

app.getRandomQuotes = () => {
    let quotes =  quotesArr.arrQuote()
    let len = quotes.length;
    let quotesRandomNum = random.getRandomNum(1, len);

    let quote = quotes[quotesRandomNum - 1];
    console.log(quote);
}

app.loopQuotes = () => {
    setInterval(() => {
        app.getRandomQuotes(); // Added parentheses to call the function
    }, app.config.timeOfLoop);
}


app.loopQuotes();