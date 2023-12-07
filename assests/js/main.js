
var quotes = [
    {
        quote : "“So many books, so little time.”",
        author :"Frank Zappa"
    },
    {
        quote : "“You only live once, but if you do it right, once is enough.”",
        author :"Mae West"
    },
    {
        quote : "“A room without books is like a body without a soul.”",
        author :"Marcus Tullius Cicero"
    },
    {
        quote : "“Be the change that you wish to see in the world.”",
        author :"Mahatma Gandhi"
    },
    {
        quote : "“If you tell the truth, you don't have to remember anything.”",
        author :"Mark Twain"
    },
    {
        quote : "“A friend is someone who knows all about you and still loves you.”",
        author :"Elbert Hubbard"
    },
    {
        quote : "“We accept the love we think we deserve.”",
        author :"Stephen Chbosky"
    },
    {
        quote : "“Without music, life would be a mistake.”",
        author :"Friedrich Nietzsche"
    },
    {
        quote : "“Be yourself; everyone else is already taken.”",
        author :"Oscar Wilde"
    },
    
  
];


console.log(quotes);

var previousQuote = -1;

function generateRandomQuote() {

    var randomQuote;

    do {
        randomQuote = Math.floor(Math.random() * quotes.length);
      } while (randomQuote === previousQuote);
      

  var randomMain = quotes[randomQuote].quote;
  var randomAuthor = quotes[randomQuote].author;
  var quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = randomMain +"<br>" +  "--" + randomAuthor;
}