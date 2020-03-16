//Quote Class in which quotes will be stored
class QuoteC{
  constructor(quote,source,citation,year,tag){
    this.quote = quote;
    this.source =  source;
    this.citation = citation;
    this.year = year;
    this.tag = tag;

  }
}
//quote array to store all quotes
quotes = []
// adding quote objects to quote array unknown field are entered as empty strings
quotes.push(new QuoteC("\"If you want to change the world, make your bed\"" ,"Admiral William H. McRaven" ,"University of Texas commencement speech", "2014","inspirational"))
quotes.push(new QuoteC("\"Set your Goals high and don't stop 'till you get there\"" ,"Bo Jackson" ,"", "","inspirational"))
quotes.push(new QuoteC("\"Do your job\"" ,"Bill Belichick" ,"", "","inspirational"))
quotes.push(new QuoteC("\"If you can accept losing, you can't win.\"" ,"Vince Lombardi" ,"", "","inspirational"))
quotes.push(new QuoteC("\“Mediocre people hate high achievers, and high achievers hate mediocre people.\"" ,"Nick Saban" ,"60 minutes", "","inspirational"))


quotes.push(new QuoteC("\“My greatest pain in life is that I will never be able to see myself perform life.\"","Kanye West","","","kanye west"))
quotes.push(new QuoteC("\“Believe in your flyness…conquer your shyness.\"","Kanye West","","","kanye west"))
quotes.push(new QuoteC("\“For me giving up is way harder than trying.\"","Kanye West","","","kanye west"))
quotes.push(new QuoteC("\“People never change. They just become better at hiding who they really are.\"","Kanye West","","","kanye west"))
quotes.push(new QuoteC("\"Everyone wanted to know what I would do if I didn't win. I guess we'll never know.\"","Kanye West","Grammy Awards","2005","kanye west"))


quotes.push(new QuoteC("\"Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!\"","Billy Connolly","","","funny"))
quotes.push(new QuoteC("\"I lie to myself all the time. But I never believe me.\"","S.E. Hinton","","","funny"))
quotes.push(new QuoteC("\"I\'d like to live like a poor man—only with lots of money.\"","Pablo Picasso","","","funny"))
quotes.push(new QuoteC("\"In theory, there is no difference between theory and practice. In practice, there is.\"","Yogi Bera","","","funny"))

console.log(quotes)






// takes the tag to grab from and quote array
// returns a rand quote with the same tag property entered in param
function getRandomQuote(tg,q){
   var arr = []
  if (tg == "all"){
    arr= q
}
else{
  for (var x of q){
    if(x.tag == tg){
      arr.push(x)
    }
  }
}
var rand = Math.floor(Math.random()*(arr.length))
return arr[rand]
}



//prints a random quote to the screen
function printQuote(tg,quotes){
  //gets random quote
  var rq = getRandomQuote(tg,quotes)

  //adds known html
  var html = ""
  html = html + "<p class=\"quote\">"+ rq.quote+"</p>"
  html = html + "<p class=\"source\">"+ rq.source

  //conditionals check to see if prop exists if it does they will be added to html string
  if(rq.citation != ""){
    html = html + "<span class=\"citation\">"+rq.citation+"</span>"
  }
  if( rq.year!= ""){
    html = html + "<span class=\"citation\">"+rq.year+"</span>"
  }
  html += "</p>"

  //changes quote-box html to include random quote
  document.getElementById("quote-box").innerHTML = html
  
  //chooses a color at random
  colors = ["red","orange","green","blue","purple"]
  var colrand = Math.floor(Math.random()*colors.length)
  var col = colors[colrand]

  //changes background to random color

  document.getElementById("bod").style.backgroundColor = col
  document.getElementById("loadQuote").style.backgroundColor = col
  document.getElementById("MyQ").style.backgroundColor = col

}
// changes global tg variable 
function changeTag(){
  var tagar = ["all","funny","inspirational","kanye west"]
  // goes to next tag
  cq +=1
  //if end of array start at begging  
  if(cq>3){
    cq = 0
  }
  tg = tagar[cq]
  //change html of heading to display the tag
  document.getElementById("Ti").innerHTML = tg
  // runs printQuote so tag matches quote
  printQuote(tg,quotes)
}
// global variables utilized by changeTag()
var tg = "all"
var cq = 0

// changes tag upon button press
document.getElementById('MyQ').addEventListener("click", changeTag, false);
//changes quote upon button press
document.getElementById('loadQuote').addEventListener("click",  function(){ printQuote(tg,quotes);}, false);
// prints a quote when screen is loading
document.getElementById("bod").onload = function(){ printQuote(tg,quotes);}
//prints new quote every 20 secs
setInterval(function(){ printQuote(tg,quotes);}, 20000)
