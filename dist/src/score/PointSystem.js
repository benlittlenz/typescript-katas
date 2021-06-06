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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointSystem = void 0;
var Score_1 = require("./Score");
var pointLookup = {
    0: '0',
    1: '15',
    2: '30',
    3: '40',
};
var PointSystem = /** @class */ (function (_super) {
    __extends(PointSystem, _super);
    function PointSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointSystem.prototype.pointWonBy = function (player) {
        var index = this.players.findIndex(function (p) { return p === player; });
        this.scores[index] = this.scores[index] + 1;
    };
    PointSystem.prototype.isDeuce = function () {
        return this.scores.every(function (score) { return score === 3; });
    };
    PointSystem.prototype.score = function () {
        if (this.scores.every(function (s) { return s === 0; })) {
            return "";
        }
        return pointLookup[this.scores[0]] + "-" + pointLookup[this.scores[1]];
    };
    PointSystem.prototype.winner = function () {
        if (this.scores[0] === 4) {
            return this.players[0];
        }
        if (this.scores[1] === 4) {
            return this.players[1];
        }
        return undefined;
    };
    return PointSystem;
}(Score_1.AbstractScoreHandler));
exports.PointSystem = PointSystem;
