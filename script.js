// var numbers = [];
var num;
var url = 'http://pokeapi.co/api/v2/pokemon/?limit=150';
var card;
var deck = [];


// Function to make a card object
function makeCard(num, data) {
  var info = data.results[num];
  
  card = {
    'pkmnName' : info.name,
    'pkmnSprite' : 'http://pokeapi.co/media/sprites/pokemon/' + num + '.png',
    'pkmnID' : num
  };
  
  // Add new card to deck
  deck.push(card);
};


// API call to Pokemon API
$.getJSON(url, function(data) {

  // Generate a number between 1 & 150. 
  for (var i = 0; i < 10; i++) {
    num = Math.floor(Math.random() * 150) + 1;
    
    // Make a card for each number (10 cards total)
    makeCard(num, data);  
  } // end for
  
  console.log(deck);
  
});


