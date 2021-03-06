"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = require("./GameObject");
var Vector3_1 = require("./Vector3");
var Logger_1 = require("./Logger");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this._id = "-1";
        _this.guest = true;
        _this.ready = false;
        _this.input = {
            position: new Vector3_1.Vector3,
            rotation: new Vector3_1.Vector3
        };
        _this.log = new Logger_1.Log("Player");
        _this.gameIsFocused = true;
        _this._id = _this.makeID();
        _this.log.inf("CREATING NEW PLAYER", _this._id);
        _this.color = '';
        return _this;
    }
    Object.defineProperty(Player.prototype, "gameroom", {
        get: function () {
            return this._gameroom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.inGameroom = function () {
        return this._gameroom !== null;
    };
    Player.prototype.setGameroom = function (gr) {
        this._gameroom = gr;
    };
    Player.prototype.unsetGameroom = function () {
        this._gameroom = null;
    };
    Player.prototype.setUser = function (u) {
        this._user = u;
    };
    Player.prototype.makeID = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text.substr(0, 4);
    };
    Player.prototype.toString = function () {
        return this._id;
    };
    return Player;
}(GameObject_1.GameObject));
exports.Player = Player;
//# sourceMappingURL=Player.js.map