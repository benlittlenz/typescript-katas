"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var score_1 = require("../score");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(p1, p2) {
        var _this = _super.call(this, p1, p2) || this;
        _this.ScoreHandler = new score_1.PointSystem(p1, p2);
        return _this;
    }
    Game.prototype.pointWonBy = function (player) {
        this.ScoreHandler.pointWonBy(player);
        if (this.ScoreHandler.isDeuce()) {
            this.ScoreHandler = new (score_1.DeuceSystem.bind.apply(score_1.DeuceSystem, __spreadArray([void 0], this.players)))();
            return;
        }
        if (this.ScoreHandler.winner()) {
            var index = this.players.findIndex(function (p) { return p === player; });
            this.scores[index] = this.scores[index] + 1;
            if (this.scores.every(function (s) { return s === 6; })) {
                console.log('tie break');
            }
            else {
                this.ScoreHandler = new (score_1.PointSystem.bind.apply(score_1.PointSystem, __spreadArray([void 0], this.players)))();
            }
        }
    };
    Game.prototype.isDeuce = function () {
        return false;
    };
    Game.prototype.score = function () {
        var score = this.scores[0] + "-" + this.scores[1];
        var scoreFromScoreHandler = this.ScoreHandler.score();
        if (scoreFromScoreHandler === "")
            return score;
        return score + ", " + scoreFromScoreHandler;
    };
    Game.prototype.winner = function () {
        console.log("IN HERE");
        if (this.scores[0] === 6 && this.scores[0] - this.scores[1] >= 2) {
            return this.players[0];
        }
        if (this.scores[1] === 6 && this.scores[1] - this.scores[0] >= 2) {
            return this.players[1];
        }
        // player win the seventh point after tie break
        if (this.scores[0] === 7) {
            return this.players[0];
        }
        if (this.scores[1] === 7) {
            return this.players[1];
        }
        return undefined;
    };
    return Game;
}(score_1.AbstractScoreHandler));
exports.Game = Game;
