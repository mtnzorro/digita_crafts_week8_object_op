describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
  });

  it('image URL works for 2-10', function() {
    var card = new Card(2, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/2_of_diamonds.png');
    card = new Card(3, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/3_of_diamonds.png');
    card = new Card(4, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/4_of_diamonds.png');
    card = new Card(5, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/5_of_diamonds.png');
    card = new Card(6, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/6_of_diamonds.png');
    card = new Card(7, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/7_of_diamonds.png');
    card = new Card(8, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/8_of_diamonds.png');
    card = new Card(9, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/9_of_diamonds.png');
    card = new Card(10, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/10_of_diamonds.png');
  });

  it('image URL works for jack, queen, king and ace', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(12, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/queen_of_diamonds.png');
    card = new Card(13, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/king_of_diamonds.png');
    card = new Card(1, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/ace_of_diamonds.png');
  });

  it('image URL works for different suits', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(11, 'clubs');
    expect(card.getImageUrl()).toEqual('images/jack_of_clubs.png');
    card = new Card(11, 'spades');
    expect(card.getImageUrl()).toEqual('images/jack_of_spades.png');
    card = new Card(11, 'hearts');
    expect(card.getImageUrl()).toEqual('images/jack_of_hearts.png');
  });

});

describe('Hand', function () {
  it('should take a new Card', function() {
    var card = new Card(11, 'diamonds');
    var hand = new Hand();
    hand.addCard(card);
    expect(hand.cards).toEqual([card]);
  });

  it('should take more than one Card', function() {
    var card = new Card(11, 'diamonds');
    var hand = new Hand();
    hand.addCard(card);
    expect(hand.cards).toEqual([card]);
    card2 = new Card(11, 'clubs');
    hand.addCard(card2);
    expect(hand.cards).toEqual([card, card2]);
  });

  it('should return a sum of its point value', function() {
    var card = new Card(11, 'diamonds');
    var hand = new Hand();
    hand.addCard(card);
    card2 = new Card(11, 'clubs');
    hand.addCard(card2);
    expect(hand.getPoints()).toEqual(22);
  });

});

describe('Deck', function () {
  it('should generate a complete deck', function() {
    deck = new Deck();
    expect((deck.cards).length).toEqual(52);
  });

  it('should generate a deck of card objects', function() {
    deck = new Deck();
    var ace = new Card(1, 'spades');
    expect(deck.cards[0]).toEqual(ace);
  });
  it('should draw one card from the deck when asked', function(){
    deck = new Deck();
    expect(deck.draw()).toEqual(new Card(13,'diamonds'));
  });
  it('should return the number of cards left in the deck', function(){
    deck = new Deck();
    expect(deck.numCardsLeft()).toEqual(deck.cards.length);
  });
  // it('should return an array of card objects in a differnt order from the initial Deck', function(){
  //   deck = new Deck();
  //   var shuffled_deck = deck.shuffle().join(',');
  //   expect(shuffled_deck).toNotEqual('1 of spades,1 of hearts,1 of clubs,1 of diamonds,2 of spades,2 of hearts,2 of clubs,2 of diamonds,3 of spades,3 of hearts,3 of clubs,3 of diamonds,4 of spades,4 of hearts,4 of clubs,4 of diamonds,5 of spades,5 of hearts,5 of clubs,5 of diamonds,6 of spades,6 of hearts,6 of clubs,6 of diamonds,7 of spades,7 of hearts,7 of clubs,7 of diamonds,8 of spades,8 of hearts,8 of clubs,8 of diamonds,9 of spades,9 of hearts,9 of clubs,9 of diamonds,10 of spades,10 of hearts,10 of clubs,10 of diamonds,11 of spades,11 of hearts,11 of clubs,11 of diamonds,12 of spades,12 of hearts,12 of clubs,12 of diamonds,13 of spades,13 of hearts,13 of clubs,13 of diamonds');
  // });
  it('should return the same number of cards as before the shuffle', function(){
    deck = new Deck();
    var original_length = deck.cards.length;
    deck.shuffle();
    expect(deck.cards.length).toEqual(original_length);
  });

  it('should return the array of card objects in a differnt order from the original deck', function(){
    deck = new Deck();
    card1 = deck.cards[0];
    card2 = deck.cards[1];
    card3 = deck.cards[2];
    card4 = deck.cards[3];
    deck.shuffle();
    expect(deck.cards[0]).not.toEqual(card1);
    expect(deck.cards[1]).not.toEqual(card2);
    expect(deck.cards[2]).not.toEqual(card3);
    expect(deck.cards[3]).not.toEqual(card4);
  });

  });
