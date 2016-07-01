// Tracker Variables
var up;
var remaining;
var found;
var checked;

// Create a function that creates the cards
var Card = function(x, y) {
  this.x = x;
  this.y = y;
  this.width = 70;
};

Card.prototype.drawFaceDown = function() {
  fill(214, 247,202);
  strokeWeight(2);
  rect(this.x, this.y, this.width, this.width, 10);
  // image(getImage("images/back"), this.x, this.y, this.width, this.width);
};



var cards = [];

var COLS = 5;
var ROWS = 4;


for (var i = 0; i < COLS; i++) {
  for (var j = 0; j < ROWS; j++) {
    cards.push(new CARD( i * 78 + 10, j * 78 + 40))
  }
}

for (var i = 0; i < tiles.length; i++) {
    tiles[i].drawFaceDown();
}

// When a card is clicked
$('.card').on('click', function() {


});
