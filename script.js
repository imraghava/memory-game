// var numbers = [];
var num;
var url = 'http://pokeapi.co/api/v2/pokemon/?limit=150';
var card;
var deck = [];


// Function to make a card object
function makeCard(num, data) {
  var info = data.results[num];
  num = num + 1;
  
  card = {
    'pkmnName' : info.name,
    'pkmnSprite' : 'http://pokeapi.co/media/sprites/pokemon/' + num + '.png',
    'pkmnID' : num
  };
  
  // Add new card to deck twice so that each card has a match
  deck.push(card);
  deck.push(card);
};


// Randomizing order of cards using code from: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};


// Build out the gameboard
function makeGameBoard(array) {
  for (var j = 0; j < 20; j++) {
    var placedCard = array.pop();
    var id = placedCard.pkmnID + 1;
    
    var cardString = '<div class="card ' + id + '">' + placedCard.pkmnName + '<img src="' + placedCard.pkmnSprite + '" /></div>';
    
    $("#gameboard").append(cardString);
    

  }
  
  
};



// API call to Pokemon API
$.getJSON(url, function(data) {

  // Generate a number between 1 & 150. 
  for (var i = 0; i < 10; i++) {
    num = Math.floor(Math.random() * 150) + 1;
    
    // Make a card for each number (10 cards total)
    makeCard(num, data);  
  } // end for
  
  // Randomize the order of the deck
  var shuffled = shuffle(deck);
  
  // Make HTML
  makeGameBoard(shuffled);
  console.log(shuffled);
  
});

