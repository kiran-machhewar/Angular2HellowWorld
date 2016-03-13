System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SFRemoteService;
    return {
        setters:[],
        execute: function() {
            SFRemoteService = (function () {
                function SFRemoteService() {
                }
                // See the "Take it slow" appendix
                SFRemoteService.prototype.remote = function (input) {
                    return new Promise(function (resolve, reject) {
                        if (location.href.indexOf(':3000') != -1) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function () {
                                if (xhttp.readyState == 4 && xhttp.status == 200) {
                                    resolve(JSON.parse(xhttp.responseText));
                                }
                            };
                            xhttp.open("POST", "https://angular2sflab-developer-edition.ap2.force.com/services/apexrest/RestWebserviceSFRemote", true);
                            input.methodInput = "" + JSON.stringify(input.methodInput);
                            xhttp.send(JSON.stringify(input));
                        }
                        else {
                            var controller = window[input.controller];
                            controller[input.method](input.methodInput, function (result, event) {
                                if (event.status) {
                                    resolve(result);
                                }
                                else if (event.type === 'exception') {
                                    reject({ 'status': event.message });
                                }
                            }, { escape: false });
                        }
                    });
                };
                return SFRemoteService;
            }());
            exports_1("SFRemoteService", SFRemoteService);
        }
    }
});
//# sourceMappingURL=sfremote.service.js.map