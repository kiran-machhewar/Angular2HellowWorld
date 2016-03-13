System.register(['angular2/core', './sfremote.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sfremote_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sfremote_service_1_1) {
                sfremote_service_1 = sfremote_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_sfRemoteService) {
                    this._sfRemoteService = _sfRemoteService;
                    this.status = 'AppInit';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.status = 'NgOnInit';
                    this._sfRemoteService.remote({ "controller": "SFRemoteController", "method": "getRecords", "methodInput": { "soql": "Select Id, Name From Account " } }).then(function (result) {
                        _this.accounts = result;
                        _this.status = 'Accounts from SFDC';
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\t\n    \t\t\t<div class=\"jumbotron\">\n    \t\t\t\t<center><h2>Angular 2 in Salesforce</h2></center>\n    \t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t    <h3 class=\"panel-title\">{{status}}</h3>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t    <ul class=\"accounts list-group\">\n\t\t\t\t\t\t  <li class=\"list-group-item\" *ngFor=\"#account of accounts\" >\n\t\t\t\t\t\t    \t<span>{{account.Name}}</span>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t",
                        providers: [sfremote_service_1.SFRemoteService]
                    }), 
                    __metadata('design:paramtypes', [sfremote_service_1.SFRemoteService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map