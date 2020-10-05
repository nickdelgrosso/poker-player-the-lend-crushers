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
    if (currentScore <= scoreFoldThreshold) {
      bet(fold);
    } else {
      // @todo: throw if pot does not return a number?
      bet(game.pot());
    }

     // post flop
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

