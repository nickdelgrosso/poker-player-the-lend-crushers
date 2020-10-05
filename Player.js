const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    var currentScore = game.me().score();
    var scoreFoldThreshold = 8;
    var fold = 0;

    // pre flop
    if (game.bettingRound() === "pre flop"){
      if (currentScore <= scoreFoldThreshold) {
        bet(fold);
      } else {
        // @todo: throw if pot does not return a number?
        bet(game.pot());
    }} 
  
    // post flop
    else {
      var communityCards = game.communityCards(); // open cards in middle
      var holeCards = game.me().holeCards(); // our initial cards

      var haveAtLeastPair = communityCards.map(card => card.rank()).includes(holeCards[0].rank()) || 
      communityCards.map(card => card.rank()).includes(holeCards[1].rank())
      
      if(haveAtLeastPair) {
        bet(game.pot());
      }
      else {
        bet(fold);
      }
    }

     
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

