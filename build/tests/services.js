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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Services_1 = require("../classes/Services");
var Action_1 = require("../classes/Action");
Services_1.Services.add({ name: "String", obj: "HUEBR" });
var TestServices = (function (_super) {
    __extends(TestServices, _super);
    function TestServices() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = "testServices";
        return _this;
    }
    TestServices.prototype.run = function (payload) {
        return null;
    };
    TestServices.prototype.test = function () {
        console.log(this.String);
    };
    TestServices = __decorate([
        Services_1.ServiceDecorators.service(["String"])
    ], TestServices);
    return TestServices;
}(Action_1.Action));
var act = new TestServices();
act.test();
//# sourceMappingURL=services.js.map