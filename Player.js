const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    var currentScore = game.me().score();
    var scoreFoldThreshold = 10;

    if (currentScore < scoreFoldThreshold) {
      bet(0);
    } else {
      bet(1000);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

