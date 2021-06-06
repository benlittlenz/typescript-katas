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
exports.DeuceSystem = void 0;
var Score_1 = require("./Score");
var DeuceSystem = /** @class */ (function (_super) {
    __extends(DeuceSystem, _super);
    function DeuceSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeuceSystem.prototype.pointWonBy = function (player) {
        var index = this.players.findIndex(function (p) { return p === player; });
        this.scores[index] = this.scores[index] + 1;
    };
    DeuceSystem.prototype.isDeuce = function () {
        return false;
    };
    DeuceSystem.prototype.score = function () {
        if (this.scores[0] === this.scores[1]) {
            return "Deuce";
        }
        if (this.scores[0] > this.scores[1]) {
            return "Advantage " + this.players[0];
        }
        return "Advantage " + this.players[1];
    };
    DeuceSystem.prototype.winner = function () {
        if (this.scores[0] - this.scores[1] === 2) {
            return this.players[0];
        }
        if (this.scores[1] - this.scores[0] === 2) {
            return this.players[1];
        }
        return undefined;
    };
    return DeuceSystem;
}(Score_1.AbstractScoreHandler));
exports.DeuceSystem = DeuceSystem;
