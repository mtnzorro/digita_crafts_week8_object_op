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
    var ace = {point: 1, suit: 'spades'};
    expect(deck.cards[0]).toEqual(ace);
  });
  });
