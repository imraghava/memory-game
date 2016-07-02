// var numbers = [];
var num;
var url = 'http://pokeapi.co/api/v2/pokemon/?limit=150';
var url;
var card;
var deck = [];


// API call to Pokemon API
$.getJSON(url, function(data) {
  
  
  for (var i = 0; i < 10; i++) {
    // Generate a list of 10 numbers between 1 and 150 and create URLs with them
    num = Math.floor(Math.random() * 150) + 1;
    
    makeCard(num, data);
     
  } // end for
  
  console.log(deck);
  
});

function makeCard(num, data) {
  var info = data.results[num];
  
  card = {
    'pkmnName' : info.name,
    'pkmnSprite' : 'http://pokeapi.co/media/sprites/pokemon/' + num + '.png',
    'pkmnID' : num
  };
  
  deck.push(card);
};

