/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogType;
(function (LogType) {
    LogType[LogType["Debug"] = 0] = "Debug";
    LogType[LogType["Info"] = 1] = "Info";
    LogType[LogType["Warn"] = 2] = "Warn";
    LogType[LogType["Error"] = 3] = "Error";
})(LogType = exports.LogType || (exports.LogType = {}));
exports.DefaultLogStyles = [
    {
        icon: "background-color:#3eb370;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#a4e2c6;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    },
    {
        icon: "background-color:#4c6cb3;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#a1afc9;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    }, {
        icon: "background-color:#ffa500;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#f5e56b;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    },
    {
        icon: "background-color:#c93756;font-size:1.6em;color:white;font-family:'Century Gothic','YaHei';font-weight:900",
        msg: "font-size:1.3em;font-weight:700;font-family:'Century Gothic','YaHei';line-height:1.6;",
        route: 'background-color:#ffb3a7;line-height:1.2;',
        descrb: "color:#787878;font-family:'Century Gothic';line-height:1.7;background-color:#fafafa;",
        stamp: "font-size:0.6em;font-family:'Century Gothic';line-height:1.5;"
    }
];


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
exports.LOGGER_SERVICE_CONFIG = config_1.LOGGER_SERVICE_CONFIG;
var interfaces_1 = __webpack_require__(0);
exports.LogType = interfaces_1.LogType;
exports.DefaultLogStyles = interfaces_1.DefaultLogStyles;
var logger_1 = __webpack_require__(3);
exports.Logger = logger_1.Logger;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:class-name
var LOGGER_SERVICE_CONFIG = /** @class */ (function () {
    function LOGGER_SERVICE_CONFIG(Level, IsProduction, styles) {
        if (Level === void 0) { Level = 0; }
        if (IsProduction === void 0) { IsProduction = false; }
        this.Level = Level;
        this.IsProduction = IsProduction;
        this.styles = styles;
    }
    return LOGGER_SERVICE_CONFIG;
}());
exports.LOGGER_SERVICE_CONFIG = LOGGER_SERVICE_CONFIG;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(0);
var ws_regex_1 = __webpack_require__(4);
var Logger = /** @class */ (function () {
    function Logger(config, typeMeta) {
        var _this = this;
        this.config = config;
        this._module = 'MODULE';
        this._styles = interfaces_1.DefaultLogStyles;
        this.SetModule = function (_module) {
            _this._module = _module.toUpperCase();
            return _this;
        };
        this.SetLogStyle = function (type, style) {
            _this._styles[type] = style;
            return _this;
        };
        this.SetLogStyles = function (styles) {
            _this._styles = styles;
            return _this;
        };
        this.Debug = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Debug, msg, method_name, module_name);
        };
        this.Info = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Info, msg, method_name, module_name);
        };
        this.Warn = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Warn, msg, method_name, module_name);
        };
        this.Error = function (msg, method_name, module_name) {
            _this.log(interfaces_1.LogType.Error, msg, method_name, module_name);
        };
        this.log = function (type, msg, method_name, module_name) {
            if (_this.config.Level > type) {
                return;
            }
            var typeStr = type === interfaces_1.LogType.Debug ? 'DEBUG' :
                type === interfaces_1.LogType.Info ? 'INFO' :
                    type === interfaces_1.LogType.Warn ? 'WARN' :
                        'ERROR';
            var _a = [null, null, null], param01 = _a[0], param02 = _a[1], param03 = _a[2];
            var styles = _this.LogStyles[type] || interfaces_1.DefaultLogStyles[type];
            if (msg instanceof Array) {
                param01 = msg[0];
                if (typeof (msg[1]) === 'string') {
                    param02 = msg[1];
                }
                else {
                    param03 = msg[1];
                }
                if (msg.length > 2) {
                    param02 = msg[1];
                    param03 = msg[2];
                }
            }
            else if (typeof (msg) === 'string') {
                param01 = msg;
            }
            else {
                param03 = msg;
            }
            var container = {
                format: _this.config.IsProduction ?
                    "%c " + typeStr + " >> \n%c" + (param01 || 'No message recorded.') + (param02 === null ? "" : "\n%c" + param02) :
                    "%c " + typeStr + " >> \n%c" + (param01 || 'No message recorded.') + "\n" +
                        ("%c=>[" + (module_name || _this._module.toUpperCase()) + "]-[" + (_this._comp || 'WHERE') + "]-[" + (method_name || 'METHOD') + "]") +
                        (param02 === null ? "" : "\n%c" + param02),
                obj: !_this.config.IsProduction ? param03 : null,
                styles: _this.config.IsProduction ?
                    param02 !== null ?
                        [styles.icon, styles.msg, styles.descrb] :
                        [styles.icon, styles.msg] :
                    param02 !== null ?
                        [styles.icon, styles.msg, styles.route, styles.descrb] :
                        [styles.icon, styles.msg, styles.route],
            };
            return printLogs(container);
        };
        this._comp = ws_regex_1.Regex.Create(/function (.+?)\(.+/i).Matches(typeMeta.toString(), ['FNCM'])['FNCM'];
        if (config.styles) {
            this._styles = config.styles;
        }
    }
    Object.defineProperty(Logger.prototype, "LogStyles", {
        get: function () { return this._styles; },
        set: function (value) { this._styles = value; },
        enumerable: true,
        configurable: true
    });
    return Logger;
}());
exports.Logger = Logger;
var printLogs = function (contr) {
    var coll = [contr.format].concat(contr.styles);
    if (contr.obj) {
        coll[0] += '\n';
        coll.push(contr.obj);
    }
    console.log.apply(console, coll.concat(['\n-------------\n' + new Date().toLocaleTimeString() + '\n-']));
};
// const logger = new Logger({ Level: 0, IsProduction: true, styles: [] }, Logger);
// logger.Debug(['message', 'description', 9654312], 'method');
// console.log('--------------------------------------')
// logger.Debug(['message', 9654312], 'method');
// console.log('--------------------------------------')
// logger.Debug(['message', 'description'], 'method');
// console.log('--------------------------------------')
// logger.Debug('message', 'method');
// console.log('--------------------------------------')
// logger.Debug(9654312, 'method');
// console.log('--------------------------------------')


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression types, such as 'i', 'g', 'm'...
 *
 * @export
 * @enum {number}
 */
var RegexType;
(function (RegexType) {
    RegexType["Default"] = "";
    RegexType["IgnoreCase"] = "i";
    RegexType["Glocal"] = "g";
    RegexType["Multiline"] = "m";
})(RegexType = exports.RegexType || (exports.RegexType = {}));
/**
 * A regular expression extensions for Typescript, provides the names key value pairs supports.
 *
 * @export
 * @class Regex
 */
var Regex = (function () {
    function Regex(pattern) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        var _this = this;
        this.default_key = '__default';
        /**
         * Set keys of names pairs return
         *
         * @memberof Regex
         */
        this.SetKeys = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            _this._keys = keys;
            return _this;
        };
        /**
         * Test the pattern if it is able to be matched.
         *
         * @memberof Regex
         */
        this.Test = function (target) {
            return _this._pattern.test(target);
        };
        /**
         * Return a strings collection of matched items
         *
         * @memberof Regex
         */
        this.Exec = function (target) {
            return _this._pattern.exec(target);
        };
        /**
         * Return a map of matched items in key-value pairs if you've set the names keys, or you can set them here in string[] style.
         *
         * @memberof Regex
         */
        this.Matches = function (target, keys) {
            var result = _this.Exec(target) || [];
            if (_this._keys || keys) {
                var coll_1 = {};
                coll_1[_this.default_key] = result[0];
                (_this._keys || keys).forEach(function (value, index) {
                    coll_1[value] = result[index + 1];
                });
                return coll_1;
            }
            else {
                var coll_2 = {};
                result.forEach(function (value, index) {
                    coll_2[index] = value;
                });
                return coll_2;
            }
        };
        if (pattern instanceof RegExp) {
            this.is_string = false;
            this._pattern = pattern;
            var patStr = pattern.toString();
            this._types = patStr.substring((patStr.lastIndexOf('/') || 0) + 1);
            this._typeStrings = regexTypeReader(this._types);
        }
        else {
            this.is_string = true;
            this._pattern = new (RegExp.bind.apply(RegExp, [void 0, pattern].concat(types)))();
            this._types = types.join('');
            this._typeStrings = regexTypeReader(types || [RegexType.Default]);
        }
    }
    Object.defineProperty(Regex.prototype, "Type", {
        /**
         * Get the types string connected by ' | '
         *
         * @readonly
         * @type {string}
         * @memberof Regex
         */
        get: function () { return this._typeStrings.join(' | '); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Regex.prototype, "Types", {
        /**
         * Get regex types string collection
         *
         * @readonly
         * @type {string[]}
         * @memberof Regex
         */
        get: function () { return this._typeStrings; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Regex.prototype, "Pattern", {
        /**
         * Get the regex pattern of this Regex instance in string format
         *
         * @readonly
         * @type {string}
         * @memberof Regex
         */
        get: function () { return this._pattern.toString(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Regex.prototype, "Keys", {
        /**
         * The keys for names pairs return
         *
         * @memberof Regex
         */
        get: function () { return this._keys || []; },
        set: function (value) { this._keys = value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Create a regex by string of RegExp interface value, support regex types importing.
     *
     * @static
     * @memberof Regex
     */
    Regex.Create = function (pattern) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        return new (Regex.bind.apply(Regex, [void 0, pattern].concat(types)))();
    };
    return Regex;
}());
exports.Regex = Regex;
/**Read types to string[] from different type-styles */
var regexTypeReader = function (types) {
    var strs = [];
    var nItems = distinct(types);
    for (var _i = 0, nItems_1 = nItems; _i < nItems_1.length; _i++) {
        var i = nItems_1[_i];
        strs.push(i === RegexType.Default ? 'Default' :
            i === RegexType.IgnoreCase ? 'IgnoreCase' :
                i === RegexType.Multiline ? 'Multiline' :
                    'Global');
    }
    return strs;
};
/**A filter for singleton in array or a string */
var distinct = function (items) {
    var arr = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var i = items_1[_i];
        if (!arr.includes(i)) {
            arr.push(i);
        }
    }
    return arr;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGQyYmFiNThmMTRiMTZhN2I4MTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2dlci9pbnRlcmZhY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9nZ2VyL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9nZ2VyL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd3MtcmVnZXgvZGlzdC9yZWdleC51dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3ZEQSxJQUFZLE9BS1g7QUFMRCxXQUFZLE9BQU87SUFDZix1Q0FBUztJQUNULHFDQUFRO0lBQ1IscUNBQVE7SUFDUix1Q0FBUztBQUNiLENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEI7QUF1Qlksd0JBQWdCLEdBQWU7SUFDeEM7UUFDSSxJQUFJLEVBQUUsMkdBQTJHO1FBQ2pILEdBQUcsRUFBRSx1RkFBdUY7UUFDNUYsS0FBSyxFQUFFLDJDQUEyQztRQUNsRCxNQUFNLEVBQUUsc0ZBQXNGO1FBQzlGLEtBQUssRUFBRSwrREFBK0Q7S0FDekU7SUFDRDtRQUNJLElBQUksRUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsMEJBQTBCLHNDQUFzQyxFQUFFO0FBQ2xFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQixFQUFFO0FBQ3REO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsMEJBQTBCLGlDQUFpQyxFQUFFO0FBQzdEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlCQUF5QixFQUFFO0FBQ3JELCtCQUErQixvQkFBb0IsRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGQyYmFiNThmMTRiMTZhN2I4MTAiLCJcclxuLyoqXHJcbiAqIG1lc3NhZ2UgfCBbbWVzc2FnZSwgZGVzY3JpcHRpb25dIHwgW21lc3NhZ2UsIG9iamVjdF0gfCBbbWVzc2FnZSwgZGVzY3JpcHRpb24sIG9iamVjdF0gfCBvYmplY3RcclxuICovXHJcbmV4cG9ydCB0eXBlIElucHV0TXNnID0gc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSB8IFtzdHJpbmcsIGFueV0gfCBbc3RyaW5nLCBzdHJpbmcsIGFueV0gfCBhbnk7XHJcblxyXG5leHBvcnQgZW51bSBMb2dUeXBlIHtcclxuICAgIERlYnVnID0gMCxcclxuICAgIEluZm8gPSAxLFxyXG4gICAgV2FybiA9IDIsXHJcbiAgICBFcnJvciA9IDNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyIHtcclxuICAgIERlYnVnOiBGdW5jdGlvbjtcclxuICAgIEluZm86IEZ1bmN0aW9uO1xyXG4gICAgV2FybjogRnVuY3Rpb247XHJcbiAgICBFcnJvcjogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nU3R5bGUge1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIG1zZz86IHN0cmluZztcclxuICAgIGRlc2NyYj86IHN0cmluZztcclxuICAgIHJvdXRlPzogc3RyaW5nO1xyXG4gICAgc3RhbXA/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nc0NvbnRhaW5lciB7XHJcbiAgICBmb3JtYXQ6IHN0cmluZztcclxuICAgIG9iajogYW55O1xyXG4gICAgc3R5bGVzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlZmF1bHRMb2dTdHlsZXM6IExvZ1N0eWxlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogYGJhY2tncm91bmQtY29sb3I6IzNlYjM3MDtmb250LXNpemU6MS42ZW07Y29sb3I6d2hpdGU7Zm9udC1mYW1pbHk6J0NlbnR1cnkgR290aGljJywnWWFIZWknO2ZvbnQtd2VpZ2h0OjkwMGAsXHJcbiAgICAgICAgbXNnOiBgZm9udC1zaXplOjEuM2VtO2ZvbnQtd2VpZ2h0OjcwMDtmb250LWZhbWlseTonQ2VudHVyeSBHb3RoaWMnLCdZYUhlaSc7bGluZS1oZWlnaHQ6MS42O2AsXHJcbiAgICAgICAgcm91dGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNhNGUyYzY7bGluZS1oZWlnaHQ6MS4yOycsXHJcbiAgICAgICAgZGVzY3JiOiBgY29sb3I6Izc4Nzg3ODtmb250LWZhbWlseTonQ2VudHVyeSBHb3RoaWMnO2xpbmUtaGVpZ2h0OjEuNztiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7YCxcclxuICAgICAgICBzdGFtcDogYGZvbnQtc2l6ZTowLjZlbTtmb250LWZhbWlseTonQ2VudHVyeSBHb3RoaWMnO2xpbmUtaGVpZ2h0OjEuNTtgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246IGBiYWNrZ3JvdW5kLWNvbG9yOiM0YzZjYjM7Zm9udC1zaXplOjEuNmVtO2NvbG9yOndoaXRlO2ZvbnQtZmFtaWx5OidDZW50dXJ5IEdvdGhpYycsJ1lhSGVpJztmb250LXdlaWdodDo5MDBgLFxyXG4gICAgICAgIG1zZzogYGZvbnQtc2l6ZToxLjNlbTtmb250LXdlaWdodDo3MDA7Zm9udC1mYW1pbHk6J0NlbnR1cnkgR290aGljJywnWWFIZWknO2xpbmUtaGVpZ2h0OjEuNjtgLFxyXG4gICAgICAgIHJvdXRlOiAnYmFja2dyb3VuZC1jb2xvcjojYTFhZmM5O2xpbmUtaGVpZ2h0OjEuMjsnLFxyXG4gICAgICAgIGRlc2NyYjogYGNvbG9yOiM3ODc4Nzg7Zm9udC1mYW1pbHk6J0NlbnR1cnkgR290aGljJztsaW5lLWhlaWdodDoxLjc7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2AsXHJcbiAgICAgICAgc3RhbXA6IGBmb250LXNpemU6MC42ZW07Zm9udC1mYW1pbHk6J0NlbnR1cnkgR290aGljJztsaW5lLWhlaWdodDoxLjU7YFxyXG4gICAgfSwge1xyXG4gICAgICAgIGljb246IGBiYWNrZ3JvdW5kLWNvbG9yOiNmZmE1MDA7Zm9udC1zaXplOjEuNmVtO2NvbG9yOndoaXRlO2ZvbnQtZmFtaWx5OidDZW50dXJ5IEdvdGhpYycsJ1lhSGVpJztmb250LXdlaWdodDo5MDBgLFxyXG4gICAgICAgIG1zZzogYGZvbnQtc2l6ZToxLjNlbTtmb250LXdlaWdodDo3MDA7Zm9udC1mYW1pbHk6J0NlbnR1cnkgR290aGljJywnWWFIZWknO2xpbmUtaGVpZ2h0OjEuNjtgLFxyXG4gICAgICAgIHJvdXRlOiAnYmFja2dyb3VuZC1jb2xvcjojZjVlNTZiO2xpbmUtaGVpZ2h0OjEuMjsnLFxyXG4gICAgICAgIGRlc2NyYjogYGNvbG9yOiM3ODc4Nzg7Zm9udC1mYW1pbHk6J0NlbnR1cnkgR290aGljJztsaW5lLWhlaWdodDoxLjc7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2AsXHJcbiAgICAgICAgc3RhbXA6IGBmb250LXNpemU6MC42ZW07Zm9udC1mYW1pbHk6J0NlbnR1cnkgR290aGljJztsaW5lLWhlaWdodDoxLjU7YFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiBgYmFja2dyb3VuZC1jb2xvcjojYzkzNzU2O2ZvbnQtc2l6ZToxLjZlbTtjb2xvcjp3aGl0ZTtmb250LWZhbWlseTonQ2VudHVyeSBHb3RoaWMnLCdZYUhlaSc7Zm9udC13ZWlnaHQ6OTAwYCxcclxuICAgICAgICBtc2c6IGBmb250LXNpemU6MS4zZW07Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtZmFtaWx5OidDZW50dXJ5IEdvdGhpYycsJ1lhSGVpJztsaW5lLWhlaWdodDoxLjY7YCxcclxuICAgICAgICByb3V0ZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmYjNhNztsaW5lLWhlaWdodDoxLjI7JyxcclxuICAgICAgICBkZXNjcmI6IGBjb2xvcjojNzg3ODc4O2ZvbnQtZmFtaWx5OidDZW50dXJ5IEdvdGhpYyc7bGluZS1oZWlnaHQ6MS43O2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtgLFxyXG4gICAgICAgIHN0YW1wOiBgZm9udC1zaXplOjAuNmVtO2ZvbnQtZmFtaWx5OidDZW50dXJ5IEdvdGhpYyc7bGluZS1oZWlnaHQ6MS41O2BcclxuICAgIH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9nZ2VyL2ludGVyZmFjZXMudHMiLCJleHBvcnQgeyBMT0dHRVJfU0VSVklDRV9DT05GSUcgfSBmcm9tICcuL2xvZ2dlci9jb25maWcnO1xyXG5leHBvcnQgeyBMb2dUeXBlLCBMb2dTdHlsZSwgRGVmYXVsdExvZ1N0eWxlcyB9IGZyb20gJy4vbG9nZ2VyL2ludGVyZmFjZXMnXHJcbmV4cG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlcic7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgeyBMb2dTdHlsZSB9IGZyb20gJy4vLi4vbG9nZ2VyL2ludGVyZmFjZXMnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcclxuZXhwb3J0IGNsYXNzIExPR0dFUl9TRVJWSUNFX0NPTkZJRyB7XHJcbiAgICBwdWJsaWMgc3R5bGVzOiBMb2dTdHlsZVtdO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIExldmVsOiBudW1iZXIgPSAwLCBwdWJsaWMgSXNQcm9kdWN0aW9uOiBib29sZWFuID0gZmFsc2UsIHN0eWxlcz86IExvZ1N0eWxlW10pIHtcclxuICAgICAgICB0aGlzLnN0eWxlcyA9IHN0eWxlcztcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9nZ2VyL2NvbmZpZy50cyIsImltcG9ydCB7IExPR0dFUl9TRVJWSUNFX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgSW5wdXRNc2csIExvZ1R5cGUsIExvZ1N0eWxlLCBMb2dzQ29udGFpbmVyLCBJTG9nZ2VyLCBEZWZhdWx0TG9nU3R5bGVzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgUmVnZXggfSBmcm9tICd3cy1yZWdleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyPFQ+IGltcGxlbWVudHMgSUxvZ2dlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29tcDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlID0gJ01PRFVMRSc7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3R5bGVzID0gRGVmYXVsdExvZ1N0eWxlcztcclxuICAgIHB1YmxpYyBnZXQgTG9nU3R5bGVzKCkgeyByZXR1cm4gdGhpcy5fc3R5bGVzOyB9XHJcbiAgICBwdWJsaWMgc2V0IExvZ1N0eWxlcyh2YWx1ZTogTG9nU3R5bGVbXSkgeyB0aGlzLl9zdHlsZXMgPSB2YWx1ZTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBMT0dHRVJfU0VSVklDRV9DT05GSUcsIHR5cGVNZXRhOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2NvbXAgPSBSZWdleC5DcmVhdGUoL2Z1bmN0aW9uICguKz8pXFwoLisvaSkuTWF0Y2hlcyh0eXBlTWV0YS50b1N0cmluZygpLCBbJ0ZOQ00nXSlbJ0ZOQ00nXTtcclxuICAgICAgICBpZiAoY29uZmlnLnN0eWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHlsZXMgPSBjb25maWcuc3R5bGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0TW9kdWxlID0gPFQ+KF9tb2R1bGU6IHN0cmluZyk6IExvZ2dlcjxUPiA9PiB7XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gX21vZHVsZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRMb2dTdHlsZSA9IDxUPih0eXBlOiBMb2dUeXBlLCBzdHlsZTogTG9nU3R5bGUpOiBMb2dnZXI8VD4gPT4ge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlc1t0eXBlXSA9IHN0eWxlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRMb2dTdHlsZXMgPSA8VD4oc3R5bGVzOiBMb2dTdHlsZVtdKTogTG9nZ2VyPFQ+ID0+IHtcclxuICAgICAgICB0aGlzLl9zdHlsZXMgPSBzdHlsZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERlYnVnID0gKG1zZzogSW5wdXRNc2csIG1ldGhvZF9uYW1lPzogc3RyaW5nLCBtb2R1bGVfbmFtZT86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMubG9nKExvZ1R5cGUuRGVidWcsIG1zZywgbWV0aG9kX25hbWUsIG1vZHVsZV9uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSW5mbyA9IChtc2c6IElucHV0TXNnLCBtZXRob2RfbmFtZT86IHN0cmluZywgbW9kdWxlX25hbWU/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dUeXBlLkluZm8sIG1zZywgbWV0aG9kX25hbWUsIG1vZHVsZV9uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgV2FybiA9IChtc2c6IElucHV0TXNnLCBtZXRob2RfbmFtZT86IHN0cmluZywgbW9kdWxlX25hbWU/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dUeXBlLldhcm4sIG1zZywgbWV0aG9kX25hbWUsIG1vZHVsZV9uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRXJyb3IgPSAobXNnOiBJbnB1dE1zZywgbWV0aG9kX25hbWU/OiBzdHJpbmcsIG1vZHVsZV9uYW1lPzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nVHlwZS5FcnJvciwgbXNnLCBtZXRob2RfbmFtZSwgbW9kdWxlX25hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nID0gKHR5cGU6IExvZ1R5cGUsIG1zZzogSW5wdXRNc2csIG1ldGhvZF9uYW1lPzogc3RyaW5nLCBtb2R1bGVfbmFtZT86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5MZXZlbCA+IHR5cGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgY29uc3QgdHlwZVN0ciA9XHJcbiAgICAgICAgICAgIHR5cGUgPT09IExvZ1R5cGUuRGVidWcgPyAnREVCVUcnIDpcclxuICAgICAgICAgICAgICAgIHR5cGUgPT09IExvZ1R5cGUuSW5mbyA/ICdJTkZPJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gTG9nVHlwZS5XYXJuID8gJ1dBUk4nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0VSUk9SJztcclxuICAgICAgICBsZXQgW3BhcmFtMDEsIHBhcmFtMDIsIHBhcmFtMDNdOiBbc3RyaW5nLCBhbnksIGFueV0gPSBbbnVsbCwgbnVsbCwgbnVsbF07XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzOiBMb2dTdHlsZSA9IHRoaXMuTG9nU3R5bGVzW3R5cGVdIHx8IERlZmF1bHRMb2dTdHlsZXNbdHlwZV07XHJcbiAgICAgICAgaWYgKG1zZyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHBhcmFtMDEgPSBtc2dbMF07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKG1zZ1sxXSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbTAyID0gbXNnWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW0wMyA9IG1zZ1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobXNnLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtMDIgPSBtc2dbMV07XHJcbiAgICAgICAgICAgICAgICBwYXJhbTAzID0gbXNnWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKG1zZykgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHBhcmFtMDEgPSBtc2c7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyYW0wMyA9IG1zZztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyOiBMb2dzQ29udGFpbmVyID0ge1xyXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuY29uZmlnLklzUHJvZHVjdGlvbiA/XHJcbiAgICAgICAgICAgICAgICBgJWMgJHt0eXBlU3RyfSA+PiBcXG4lYyR7cGFyYW0wMSB8fCAnTm8gbWVzc2FnZSByZWNvcmRlZC4nfWAgKyAocGFyYW0wMiA9PT0gbnVsbCA/IGBgIDogYFxcbiVjJHtwYXJhbTAyfWApIDpcclxuICAgICAgICAgICAgICAgIGAlYyAke3R5cGVTdHJ9ID4+IFxcbiVjJHtwYXJhbTAxIHx8ICdObyBtZXNzYWdlIHJlY29yZGVkLid9XFxuYCArXHJcbiAgICAgICAgICAgICAgICBgJWM9Plske21vZHVsZV9uYW1lIHx8IHRoaXMuX21vZHVsZS50b1VwcGVyQ2FzZSgpfV0tWyR7dGhpcy5fY29tcCB8fCAnV0hFUkUnfV0tWyR7bWV0aG9kX25hbWUgfHwgJ01FVEhPRCd9XWAgK1xyXG4gICAgICAgICAgICAgICAgKHBhcmFtMDIgPT09IG51bGwgPyBgYCA6IGBcXG4lYyR7cGFyYW0wMn1gKSxcclxuICAgICAgICAgICAgb2JqOiAhdGhpcy5jb25maWcuSXNQcm9kdWN0aW9uID8gcGFyYW0wMyA6IG51bGwsXHJcbiAgICAgICAgICAgIHN0eWxlczogdGhpcy5jb25maWcuSXNQcm9kdWN0aW9uID9cclxuICAgICAgICAgICAgICAgIHBhcmFtMDIgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuaWNvbiwgc3R5bGVzLm1zZywgc3R5bGVzLmRlc2NyYl0gOlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuaWNvbiwgc3R5bGVzLm1zZ10gOlxyXG4gICAgICAgICAgICAgICAgcGFyYW0wMiAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5pY29uLCBzdHlsZXMubXNnLCBzdHlsZXMucm91dGUsIHN0eWxlcy5kZXNjcmJdIDpcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmljb24sIHN0eWxlcy5tc2csIHN0eWxlcy5yb3V0ZV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJpbnRMb2dzKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBwcmludExvZ3MgPSAoY29udHI6IExvZ3NDb250YWluZXIpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGNvbGw6IGFueVtdID0gW2NvbnRyLmZvcm1hdCwgLi4uY29udHIuc3R5bGVzXTtcclxuICAgIGlmIChjb250ci5vYmopIHtcclxuICAgICAgICBjb2xsWzBdICs9ICdcXG4nXHJcbiAgICAgICAgY29sbC5wdXNoKGNvbnRyLm9iaik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyguLi5jb2xsLCAnXFxuLS0tLS0tLS0tLS0tLVxcbicgKyBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpICsgJ1xcbi0nKTtcclxufTtcclxuXHJcbi8vIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoeyBMZXZlbDogMCwgSXNQcm9kdWN0aW9uOiB0cnVlLCBzdHlsZXM6IFtdIH0sIExvZ2dlcik7XHJcbi8vIGxvZ2dlci5EZWJ1ZyhbJ21lc3NhZ2UnLCAnZGVzY3JpcHRpb24nLCA5NjU0MzEyXSwgJ21ldGhvZCcpO1xyXG4vLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxyXG4vLyBsb2dnZXIuRGVidWcoWydtZXNzYWdlJywgOTY1NDMxMl0sICdtZXRob2QnKTtcclxuLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuLy8gbG9nZ2VyLkRlYnVnKFsnbWVzc2FnZScsICdkZXNjcmlwdGlvbiddLCAnbWV0aG9kJyk7XHJcbi8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpXHJcbi8vIGxvZ2dlci5EZWJ1ZygnbWVzc2FnZScsICdtZXRob2QnKTtcclxuLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuLy8gbG9nZ2VyLkRlYnVnKDk2NTQzMTIsICdtZXRob2QnKTtcclxuLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xvZ2dlci9sb2dnZXIudHMiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVndWxhciBleHByZXNzaW9uIHR5cGVzLCBzdWNoIGFzICdpJywgJ2cnLCAnbScuLi5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAZW51bSB7bnVtYmVyfVxyXG4gKi9cclxudmFyIFJlZ2V4VHlwZTtcclxuKGZ1bmN0aW9uIChSZWdleFR5cGUpIHtcclxuICAgIFJlZ2V4VHlwZVtcIkRlZmF1bHRcIl0gPSBcIlwiO1xyXG4gICAgUmVnZXhUeXBlW1wiSWdub3JlQ2FzZVwiXSA9IFwiaVwiO1xyXG4gICAgUmVnZXhUeXBlW1wiR2xvY2FsXCJdID0gXCJnXCI7XHJcbiAgICBSZWdleFR5cGVbXCJNdWx0aWxpbmVcIl0gPSBcIm1cIjtcclxufSkoUmVnZXhUeXBlID0gZXhwb3J0cy5SZWdleFR5cGUgfHwgKGV4cG9ydHMuUmVnZXhUeXBlID0ge30pKTtcclxuLyoqXHJcbiAqIEEgcmVndWxhciBleHByZXNzaW9uIGV4dGVuc2lvbnMgZm9yIFR5cGVzY3JpcHQsIHByb3ZpZGVzIHRoZSBuYW1lcyBrZXkgdmFsdWUgcGFpcnMgc3VwcG9ydHMuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFJlZ2V4XHJcbiAqL1xyXG52YXIgUmVnZXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVnZXgocGF0dGVybikge1xyXG4gICAgICAgIHZhciB0eXBlcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHR5cGVzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdF9rZXkgPSAnX19kZWZhdWx0JztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQga2V5cyBvZiBuYW1lcyBwYWlycyByZXR1cm5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWdleFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuU2V0S2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGtleXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fa2V5cyA9IGtleXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlc3QgdGhlIHBhdHRlcm4gaWYgaXQgaXMgYWJsZSB0byBiZSBtYXRjaGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlZ2V4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5UZXN0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3BhdHRlcm4udGVzdCh0YXJnZXQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJuIGEgc3RyaW5ncyBjb2xsZWN0aW9uIG9mIG1hdGNoZWQgaXRlbXNcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWdleFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuRXhlYyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9wYXR0ZXJuLmV4ZWModGFyZ2V0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybiBhIG1hcCBvZiBtYXRjaGVkIGl0ZW1zIGluIGtleS12YWx1ZSBwYWlycyBpZiB5b3UndmUgc2V0IHRoZSBuYW1lcyBrZXlzLCBvciB5b3UgY2FuIHNldCB0aGVtIGhlcmUgaW4gc3RyaW5nW10gc3R5bGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVnZXhcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1hdGNoZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXlzKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5FeGVjKHRhcmdldCkgfHwgW107XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fa2V5cyB8fCBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sbF8xID0ge307XHJcbiAgICAgICAgICAgICAgICBjb2xsXzFbX3RoaXMuZGVmYXVsdF9rZXldID0gcmVzdWx0WzBdO1xyXG4gICAgICAgICAgICAgICAgKF90aGlzLl9rZXlzIHx8IGtleXMpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxfMVt2YWx1ZV0gPSByZXN1bHRbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxfMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xsXzIgPSB7fTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsXzJbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsXzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfc3RyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhdHRlcm4gPSBwYXR0ZXJuO1xyXG4gICAgICAgICAgICB2YXIgcGF0U3RyID0gcGF0dGVybi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLl90eXBlcyA9IHBhdFN0ci5zdWJzdHJpbmcoKHBhdFN0ci5sYXN0SW5kZXhPZignLycpIHx8IDApICsgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3R5cGVTdHJpbmdzID0gcmVnZXhUeXBlUmVhZGVyKHRoaXMuX3R5cGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfc3RyaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fcGF0dGVybiA9IG5ldyAoUmVnRXhwLmJpbmQuYXBwbHkoUmVnRXhwLCBbdm9pZCAwLCBwYXR0ZXJuXS5jb25jYXQodHlwZXMpKSkoKTtcclxuICAgICAgICAgICAgdGhpcy5fdHlwZXMgPSB0eXBlcy5qb2luKCcnKTtcclxuICAgICAgICAgICAgdGhpcy5fdHlwZVN0cmluZ3MgPSByZWdleFR5cGVSZWFkZXIodHlwZXMgfHwgW1JlZ2V4VHlwZS5EZWZhdWx0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZ2V4LnByb3RvdHlwZSwgXCJUeXBlXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgdGhlIHR5cGVzIHN0cmluZyBjb25uZWN0ZWQgYnkgJyB8ICdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlZ2V4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl90eXBlU3RyaW5ncy5qb2luKCcgfCAnKTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVnZXgucHJvdG90eXBlLCBcIlR5cGVzXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgcmVnZXggdHlwZXMgc3RyaW5nIGNvbGxlY3Rpb25cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVnZXhcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3R5cGVTdHJpbmdzOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWdleC5wcm90b3R5cGUsIFwiUGF0dGVyblwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IHRoZSByZWdleCBwYXR0ZXJuIG9mIHRoaXMgUmVnZXggaW5zdGFuY2UgaW4gc3RyaW5nIGZvcm1hdFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVnZXhcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3BhdHRlcm4udG9TdHJpbmcoKTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVnZXgucHJvdG90eXBlLCBcIktleXNcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBrZXlzIGZvciBuYW1lcyBwYWlycyByZXR1cm5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWdleFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fa2V5cyB8fCBbXTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLl9rZXlzID0gdmFsdWU7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSByZWdleCBieSBzdHJpbmcgb2YgUmVnRXhwIGludGVyZmFjZSB2YWx1ZSwgc3VwcG9ydCByZWdleCB0eXBlcyBpbXBvcnRpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIFJlZ2V4XHJcbiAgICAgKi9cclxuICAgIFJlZ2V4LkNyZWF0ZSA9IGZ1bmN0aW9uIChwYXR0ZXJuKSB7XHJcbiAgICAgICAgdmFyIHR5cGVzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdHlwZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKFJlZ2V4LmJpbmQuYXBwbHkoUmVnZXgsIFt2b2lkIDAsIHBhdHRlcm5dLmNvbmNhdCh0eXBlcykpKSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWdleDtcclxufSgpKTtcclxuZXhwb3J0cy5SZWdleCA9IFJlZ2V4O1xyXG4vKipSZWFkIHR5cGVzIHRvIHN0cmluZ1tdIGZyb20gZGlmZmVyZW50IHR5cGUtc3R5bGVzICovXHJcbnZhciByZWdleFR5cGVSZWFkZXIgPSBmdW5jdGlvbiAodHlwZXMpIHtcclxuICAgIHZhciBzdHJzID0gW107XHJcbiAgICB2YXIgbkl0ZW1zID0gZGlzdGluY3QodHlwZXMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBuSXRlbXNfMSA9IG5JdGVtczsgX2kgPCBuSXRlbXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgaSA9IG5JdGVtc18xW19pXTtcclxuICAgICAgICBzdHJzLnB1c2goaSA9PT0gUmVnZXhUeXBlLkRlZmF1bHQgPyAnRGVmYXVsdCcgOlxyXG4gICAgICAgICAgICBpID09PSBSZWdleFR5cGUuSWdub3JlQ2FzZSA/ICdJZ25vcmVDYXNlJyA6XHJcbiAgICAgICAgICAgICAgICBpID09PSBSZWdleFR5cGUuTXVsdGlsaW5lID8gJ011bHRpbGluZScgOlxyXG4gICAgICAgICAgICAgICAgICAgICdHbG9iYWwnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJzO1xyXG59O1xyXG4vKipBIGZpbHRlciBmb3Igc2luZ2xldG9uIGluIGFycmF5IG9yIGEgc3RyaW5nICovXHJcbnZhciBkaXN0aW5jdCA9IGZ1bmN0aW9uIChpdGVtcykge1xyXG4gICAgdmFyIGFyciA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBpdGVtc18xID0gaXRlbXM7IF9pIDwgaXRlbXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgaSA9IGl0ZW1zXzFbX2ldO1xyXG4gICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGkpKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3dzLXJlZ2V4L2Rpc3QvcmVnZXgudXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9