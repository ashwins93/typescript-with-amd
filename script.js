define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function logger() {
        console.log('hello there');
    }
    exports.logger = logger;
});
define("index", ["require", "exports", "rxjs", "utils"], function (require, exports, rxjs_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    utils_1.logger();
    rxjs_1.of('hi from observable').subscribe(console.log);
});
