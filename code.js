function Card(point, suit){
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function(){
  if (this.point === 11){
    console.log(this.point);
    return "images/jack_of_" + this.suit + ".png";
  }
  else if (this.point === 12){
    return "images/queen_of_" + this.suit + ".png";
  }
  else if (this.point === 13){
    return "images/king_of_" + this.suit + ".png";
  }
  else if (this.point === 1){
    return "images/ace_of_" + this.suit + ".png";
  }
  else{
  return "images/" + this.point + "_of_" + this.suit + ".png";
}
};

function Hand(){
  this.cards = [];
}

Hand.prototype.addCard = function(card){
  this.cards.push(card);
};

Hand.prototype.getPoints = function(){
  return this.cards.reduce(function(sum, point){
    return sum + point.point;
  }, 0);
};

function Deck(){
  this.cards = [];
  for (i=1; i<14; i++) {
    this.cards.push(new Card(i,'spades'));
    this.cards.push(new Card(i,'hearts'));
    this.cards.push(new Card(i,'clubs'));
    this.cards.push(new Card(i,'diamonds'));
  }
}

Deck.prototype.draw = function(){
  return this.cards.pop();
};

Deck.prototype.numCardsLeft = function(){
  return this.cards.length;
};
