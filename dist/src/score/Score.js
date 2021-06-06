"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractScoreHandler = exports.ScoreHandler = void 0;
var ScoreHandler = /** @class */ (function () {
    function ScoreHandler() {
    }
    return ScoreHandler;
}());
exports.ScoreHandler = ScoreHandler;
var AbstractScoreHandler = /** @class */ (function () {
    function AbstractScoreHandler(p1, p2) {
        this.players = [p1, p2];
        this.scores = [0, 0];
    }
    return AbstractScoreHandler;
}());
exports.AbstractScoreHandler = AbstractScoreHandler;
