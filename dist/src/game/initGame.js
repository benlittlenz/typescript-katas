"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGame = void 0;
var CalculateScore_1 = require("../score/CalculateScore");
var initGame = function (playerManager) {
    return function (playerOneName, playerTwoName) {
        var playerOne = playerManager.player(playerOneName);
        var playerTwo = playerManager.player(playerTwoName);
        var score = function () {
            return CalculateScore_1.CalculateScore(playerOne.points, playerTwo.points);
        };
        var getPlayerOne = function () { return playerManager.playerName(playerOne); };
        var getPlayerTwo = function () { return playerManager.playerName(playerTwo); };
        var pointWonBy = function (player) {
            if (player === playerOne.name) {
                playerOne = playerManager.incrementScore(playerOne);
            }
        };
        return {
            score: score,
            getPlayerOne: getPlayerOne,
            getPlayerTwo: getPlayerTwo,
            pointWonBy: pointWonBy
        };
    };
};
exports.initGame = initGame;
