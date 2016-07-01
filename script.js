// var numbers = [];
var num;
var url_base = 'http://pokeapi.co/api/v2/pokemon/';
var url;
var card;
var deck = [];



function makeDeck() {
  
  for (var i = 0; i < 10; i++) {
    // Generate a list of 10 numbers between 1 and 150 and create URLs with them
    num = Math.floor(Math.random() * 150) + 1;
    url = url_base + num + '/';
    
    
    makeCard();
    
    
    
  } // end for
  
} // end function



function makeCard() {
  // API call to Pokemon API
  
  $.getJSON(url, function(data) {
    // Pull out the three items I need
    var pkmnName = data.name;
    var pkmnSprite = data.sprites.front_default;
    var pkmnID = data.id;

    // Create a card object
    card = {
        name: pkmnName,
        img: pkmnSprite,
        id: pkmnID
      };
    
    console.log(card);
    deck.push(card);
    return(deck);
  });
  
  
  
}

makeDeck();