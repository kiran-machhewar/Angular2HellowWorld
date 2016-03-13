System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var queryRecords;
    return {
        setters:[],
        execute: function() {
            exports_1("queryRecords", queryRecords = function (soql) { return new Promise(function (resolve, reject) {
                debugger;
                console.log(soql);
                console.log(window.location.href);
                var Angular2HelloWorldController = window['Angular2HelloWorldController'];
                Angular2HelloWorldController.getRecords(soql, function (result, event) {
                    if (event.status) {
                        resolve(result);
                    }
                    else if (event.type === 'exception') {
                        reject({ 'status': event.message });
                    }
                }, { escape: false });
            }); });
        }
    }
});
//# sourceMappingURL=remoting.service.js.map