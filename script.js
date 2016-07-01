// var numbers = [];
var num;
var url_base = 'http://pokeapi.co/api/v2/pokemon/';
var url;
var cards = [];



function getCards() {
  // Generate a list of 10 numbers between 1 and 150
  for (var i = 0; i < 10; i++) {
    num = Math.floor(Math.random() * 150) + 1;

    url = url_base + num + '/';

    // API call to Pokemon API
    $.getJSON(url, function(data) {
      var pkmnName = data.name;
      var pkmnSprite = data.sprites.front_default;
      var pkmnID = data.id;

      var card = {
          name: pkmnName,
          img: pkmnSprite,
          id: pkmnID
        };

      cards.push(card);
    });

  } // end for
} // end function




