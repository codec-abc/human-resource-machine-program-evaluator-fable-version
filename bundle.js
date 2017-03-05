/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return NonDeclaredType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Any; });
/* unused harmony export Unit */
/* harmony export (immutable) */ __webpack_exports__["j"] = Option;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FableArray; });
/* harmony export (immutable) */ __webpack_exports__["t"] = Tuple;
/* harmony export (immutable) */ __webpack_exports__["r"] = GenericParam;
/* harmony export (immutable) */ __webpack_exports__["e"] = Interface;
/* harmony export (immutable) */ __webpack_exports__["s"] = makeGeneric;
/* unused harmony export isGeneric */
/* harmony export (immutable) */ __webpack_exports__["p"] = getDefinition;
/* unused harmony export extendInfo */
/* harmony export (immutable) */ __webpack_exports__["n"] = hasInterface;
/* harmony export (immutable) */ __webpack_exports__["q"] = getPropertyNames;
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["m"] = getRestParams;
/* harmony export (immutable) */ __webpack_exports__["g"] = toString;
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["i"] = equals;
/* harmony export (immutable) */ __webpack_exports__["h"] = compare;
/* harmony export (immutable) */ __webpack_exports__["f"] = equalsRecords;
/* harmony export (immutable) */ __webpack_exports__["k"] = compareRecords;
/* harmony export (immutable) */ __webpack_exports__["b"] = equalsUnions;
/* harmony export (immutable) */ __webpack_exports__["c"] = compareUnions;
/* unused harmony export createDisposable */
/* harmony export (immutable) */ __webpack_exports__["a"] = createObj;
/* unused harmony export toPlainJsObj */
/* unused harmony export round */
/* unused harmony export randomNext */
/* harmony export (immutable) */ __webpack_exports__["u"] = defaultArg;

var NonDeclaredType = (function () {
    function NonDeclaredType(kind, definition, generics) {
        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }
    NonDeclaredType.prototype.Equals = function (other) {
        if (this.kind === other.kind && this.definition === other.definition) {
            return typeof this.generics === "object"
                ? equalsRecords(this.generics, other.generics)
                : this.generics === other.generics;
        }
        return false;
    };
    return NonDeclaredType;
}());

var Any = new NonDeclaredType("Any");
var Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, t);
}
function FableArray(t, isTypedArray) {
    if (isTypedArray === void 0) { isTypedArray = false; }
    var def = null, genArg = null;
    if (isTypedArray) {
        def = t;
    }
    else {
        genArg = t;
    }
    return new NonDeclaredType("Array", def, genArg);
}

function Tuple(ts) {
    return new NonDeclaredType("Tuple", null, ts);
}
function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
    return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
    return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
    return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
function getDefinition(typ) {
    return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
    var parent = Object.getPrototypeOf(cons.prototype);
    if (typeof parent[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function") {
        var newInfo_1 = {}, parentInfo_1 = parent[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]();
        Object.getOwnPropertyNames(info).forEach(function (k) {
            var i = info[k];
            if (typeof i === "object") {
                newInfo_1[k] = Array.isArray(i)
                    ? (parentInfo_1[k] || []).concat(i)
                    : Object.assign(parentInfo_1[k] || {}, i);
            }
            else {
                newInfo_1[k] = i;
            }
        });
        return newInfo_1;
    }
    return info;
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[Symbol.iterator] === "function";
    }
    else if (typeof obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function") {
        var interfaces = obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    var propertyMap = typeof obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function" ? obj[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().properties || [] : obj;
    return Object.getOwnPropertyNames(propertyMap);
}
function isArray(obj) {
    return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function getRestParams(args, idx) {
    for (var _len = args.length, restArgs = Array(_len > idx ? _len - idx : 0), _key = idx; _key < _len; _key++)
        restArgs[_key - idx] = args[_key];
    return restArgs;
}
function toString(o) {
    return o != null && typeof o.ToString == "function" ? o.ToString() : String(o);
}
function hash(x) {
    var s = JSON.stringify(x);
    var h = 5381, i = 0, len = s.length;
    while (i < len) {
        h = (h * 33) ^ s.charCodeAt(i++);
    }
    return h;
}
function equals(x, y) {
    if (x === y)
        return true;
    else if (x == null)
        return y == null;
    else if (y == null)
        return false;
    else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y))
        return false;
    else if (typeof x.Equals === "function")
        return x.Equals(y);
    else if (Array.isArray(x)) {
        if (x.length != y.length)
            return false;
        for (var i = 0; i < x.length; i++)
            if (!equals(x[i], y[i]))
                return false;
        return true;
    }
    else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength)
            return false;
        var dv1 = new DataView(x.buffer), dv2 = new DataView(y.buffer);
        for (var i = 0; i < x.byteLength; i++)
            if (dv1.getUint8(i) !== dv2.getUint8(i))
                return false;
        return true;
    }
    else if (x instanceof Date)
        return x.getTime() == y.getTime();
    else
        return false;
}
function compare(x, y) {
    if (x === y)
        return 0;
    if (x == null)
        return y == null ? 0 : -1;
    else if (y == null)
        return 1;
    else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y))
        return -1;
    else if (typeof x.CompareTo === "function")
        return x.CompareTo(y);
    else if (Array.isArray(x)) {
        if (x.length != y.length)
            return x.length < y.length ? -1 : 1;
        for (var i = 0, j = 0; i < x.length; i++)
            if ((j = compare(x[i], y[i])) !== 0)
                return j;
        return 0;
    }
    else if (ArrayBuffer.isView(x)) {
        if (x.byteLength != y.byteLength)
            return x.byteLength < y.byteLength ? -1 : 1;
        var dv1 = new DataView(x.buffer), dv2 = new DataView(y.buffer);
        for (var i = 0, b1 = 0, b2 = 0; i < x.byteLength; i++) {
            b1 = dv1.getUint8(i), b2 = dv2.getUint8(i);
            if (b1 < b2)
                return -1;
            if (b1 > b2)
                return 1;
        }
        return 0;
    }
    else if (x instanceof Date)
        return compare(x.getTime(), y.getTime());
    else
        return x < y ? -1 : 1;
}
function equalsRecords(x, y) {
    if (x === y) {
        return true;
    }
    else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            if (!equals(x[keys[i]], y[keys[i]]))
                return false;
        }
        return true;
    }
}
function compareRecords(x, y) {
    if (x === y) {
        return 0;
    }
    else {
        var keys = getPropertyNames(x);
        for (var i = 0; i < keys.length; i++) {
            var res = compare(x[keys[i]], y[keys[i]]);
            if (res !== 0)
                return res;
        }
        return 0;
    }
}
function equalsUnions(x, y) {
    if (x === y) {
        return true;
    }
    else if (x.Case !== y.Case) {
        return false;
    }
    else {
        for (var i = 0; i < x.Fields.length; i++) {
            if (!equals(x.Fields[i], y.Fields[i]))
                return false;
        }
        return true;
    }
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    }
    else {
        var res = compare(x.Case, y.Case);
        if (res !== 0)
            return res;
        for (var i = 0; i < x.Fields.length; i++) {
            res = compare(x.Fields[i], y.Fields[i]);
            if (res !== 0)
                return res;
        }
        return 0;
    }
}
function createDisposable(f) {
    return _a = {
            Dispose: f
        },
        _a[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () { return { interfaces: ["System.IDisposable"] }; },
        _a;
    var _a;
}
function createObj(fields) {
    var iter = fields[Symbol.iterator]();
    var cur = iter.next(), o = {};
    while (!cur.done) {
        o[cur.value[0]] = cur.value[1];
        cur = iter.next();
    }
    return o;
}
function toPlainJsObj(source) {
    if (source != null && source.constructor != Object) {
        var target = {};
        var props = Object.getOwnPropertyNames(source);
        for (var i = 0; i < props.length; i++) {
            target[props[i]] = source[props[i]];
        }
        var proto = Object.getPrototypeOf(source);
        if (proto != null) {
            props = Object.getOwnPropertyNames(proto);
            for (var i = 0; i < props.length; i++) {
                var prop = Object.getOwnPropertyDescriptor(proto, props[i]);
                if (prop.value) {
                    target[props[i]] = prop.value;
                }
                else if (prop.get) {
                    target[props[i]] = prop.get.apply(source);
                }
            }
        }
        return target;
    }
    else {
        return source;
    }
}
function round(value, digits) {
    if (digits === void 0) { digits = 0; }
    var m = Math.pow(10, digits);
    var n = +(digits ? value * m : value).toFixed(8);
    var i = Math.floor(n), f = n - i;
    var e = 1e-8;
    var r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return digits ? r / m : r;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : (f != null ? f(arg) : arg);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Seq__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Map__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ListClass__["b"]; });
/* harmony export (immutable) */ __webpack_exports__["a"] = append;
/* harmony export (immutable) */ __webpack_exports__["d"] = choose;
/* unused harmony export collect */
/* unused harmony export concat */
/* harmony export (immutable) */ __webpack_exports__["f"] = filter;
/* unused harmony export where */
/* unused harmony export initialize */
/* harmony export (immutable) */ __webpack_exports__["e"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export partition */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export singleton */
/* unused harmony export slice */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export groupBy */






/* harmony default export */ __webpack_exports__["c"] = __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */];

function append(xs, ys) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc); }, ys, reverse(xs));
}
function choose(f, xs) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) {
        var y = f(x);
        return y != null ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](y, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
    return reverse(r);
}
function collect(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return append(acc, f(x)); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function concat(xs) {
    return collect(function (x) { return x; }, xs);
}
function filter(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return f(x) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc; }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function where(f, xs) {
    return filter(f, xs);
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("List length must be non-negative");
    }
    var xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]();
    for (var i = 1; i <= n; i++) {
        xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(n - i), xs);
    }
    return xs;
}
function map(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(x), acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function mapIndexed(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x, i) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(i, x), acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function partition(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) {
        var lacc = acc[0], racc = acc[1];
        return f(x) ? [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, lacc), racc] : [lacc, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, racc)];
    }, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()], reverse(xs));
}
function replicate(n, x) {
    return initialize(n, function () { return x; });
}
function reverse(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function singleton(x) {
    return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]());
}
function slice(lower, upper, xs) {
    var noLower = (lower == null);
    var noUpper = (upper == null);
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x, i) { return (noLower || lower <= i) && (noUpper || i <= upper) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc; }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function unzip(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["b" /* foldBack */])(function (xy, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[1], acc[1])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function unzip3(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["b" /* foldBack */])(function (xyz, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[1], acc[1]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[2], acc[2])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function groupBy(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["c" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["d" /* map */])(function (k) { return [k[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["c" /* toList */])(k[1])]; }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Map__["a" /* groupBy */])(f, xs)));
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Array__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListClass__ = __webpack_require__(7);
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* harmony export (immutable) */ __webpack_exports__["c"] = toList;
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* unused harmony export collect */
/* harmony export (immutable) */ __webpack_exports__["h"] = choose;
/* harmony export (immutable) */ __webpack_exports__["e"] = compareWith;
/* harmony export (immutable) */ __webpack_exports__["n"] = delay;
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* harmony export (immutable) */ __webpack_exports__["m"] = exists;
/* unused harmony export exists2 */
/* harmony export (immutable) */ __webpack_exports__["q"] = filter;
/* unused harmony export where */
/* harmony export (immutable) */ __webpack_exports__["a"] = fold;
/* harmony export (immutable) */ __webpack_exports__["b"] = foldBack;
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* harmony export (immutable) */ __webpack_exports__["l"] = forAll;
/* unused harmony export forAll2 */
/* unused harmony export tryHead */
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* harmony export (immutable) */ __webpack_exports__["p"] = item;
/* harmony export (immutable) */ __webpack_exports__["j"] = iterate;
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* unused harmony export last */
/* unused harmony export count */
/* harmony export (immutable) */ __webpack_exports__["d"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export map2 */
/* unused harmony export mapIndexed2 */
/* unused harmony export map3 */
/* unused harmony export mapFold */
/* unused harmony export mapFoldBack */
/* unused harmony export max */
/* unused harmony export maxBy */
/* unused harmony export min */
/* unused harmony export minBy */
/* unused harmony export pairwise */
/* unused harmony export permute */
/* unused harmony export rangeStep */
/* unused harmony export rangeChar */
/* unused harmony export range */
/* unused harmony export readOnly */
/* harmony export (immutable) */ __webpack_exports__["k"] = reduce;
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* harmony export (immutable) */ __webpack_exports__["i"] = scan;
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* unused harmony export skip */
/* unused harmony export skipWhile */
/* harmony export (immutable) */ __webpack_exports__["o"] = sortWith;
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* unused harmony export take */
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* unused harmony export tryFind */
/* unused harmony export find */
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* unused harmony export tryFindIndex */
/* unused harmony export findIndex */
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* harmony export (immutable) */ __webpack_exports__["g"] = tryPick;
/* harmony export (immutable) */ __webpack_exports__["f"] = pick;
/* unused harmony export unfold */
/* unused harmony export zip */
/* unused harmony export zip3 */




var Enumerator = (function () {
    function Enumerator(iter) {
        this.iter = iter;
    }
    Enumerator.prototype.MoveNext = function () {
        var cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    };
    Object.defineProperty(Enumerator.prototype, "Current", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    Enumerator.prototype.Reset = function () {
        throw new Error("JS iterators cannot be reset");
    };
    Enumerator.prototype.Dispose = function () { };
    return Enumerator;
}());

function getEnumerator(o) {
    return typeof o.GetEnumerator === "function"
        ? o.GetEnumerator() : new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        next: function () {
            return en.MoveNext()
                ? { done: false, value: en.Current }
                : { done: true, value: null };
        }
    };
}
function __failIfNone(res) {
    if (res == null)
        throw new Error("Seq did not contain any matching element");
    return res;
}
function toList(xs) {
    return foldBack(function (x, acc) {
        return new __WEBPACK_IMPORTED_MODULE_2__ListClass__["a" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_2__ListClass__["a" /* default */]());
}
function ofList(xs) {
    return delay(function () { return unfold(function (x) { return x.tail != null ? [x.head, x.tail] : null; }, xs); });
}
function ofArray(xs) {
    return delay(function () { return unfold(function (i) { return i < xs.length ? [xs[i], i + 1] : null; }, 0); });
}
function append(xs, ys) {
    return delay(function () {
        var firstDone = false;
        var i = xs[Symbol.iterator]();
        var iters = [i, null];
        return unfold(function () {
            var cur;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                }
                else {
                    firstDone = true;
                    iters = [null, ys[Symbol.iterator]()];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return acc + x;
    }, xs);
    return sum / count;
}
function averageBy(f, xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return (count === 2 ? f(acc) : acc) + f(x);
    }, xs);
    return sum / count;
}
function concat(xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        var output = null;
        return unfold(function (innerIter) {
            var hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    var cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    }
                    else {
                        hasFinished = true;
                    }
                }
                else {
                    var cur = innerIter.next();
                    if (!cur.done) {
                        output = cur.value;
                        hasFinished = true;
                    }
                    else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    var trySkipToNext = function (iter) {
        var cur = iter.next();
        if (!cur.done) {
            var y = f(cur.value);
            return y != null ? [y, iter] : trySkipToNext(iter);
        }
        return void 0;
    };
    return delay(function () {
        return unfold(function (iter) {
            return trySkipToNext(iter);
        }, xs[Symbol.iterator]());
    });
}
function compareWith(f, xs, ys) {
    var nonZero = tryFind(function (i) { return i != 0; }, map2(function (x, y) { return f(x, y); }, xs, ys));
    return nonZero != null ? nonZero : count(xs) - count(ys);
}
function delay(f) {
    return _a = {},
        _a[Symbol.iterator] = function () { return f()[Symbol.iterator](); },
        _a;
    var _a;
}
function empty() {
    return unfold(function () { return void 0; });
}
function enumerateWhile(cond, xs) {
    return concat(unfold(function () { return cond() ? [xs, true] : null; }));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(function () {
        var iter;
        try {
            iter = xs[Symbol.iterator]();
        }
        catch (err) {
            return void 0;
        }
        finally {
            finalFn();
        }
        return unfold(function (iter) {
            try {
                var cur = iter.next();
                return !cur.done ? [cur.value, iter] : null;
            }
            catch (err) {
                return void 0;
            }
            finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    var isDisposed = false;
    var disposeOnce = function () {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    }
    catch (err) {
        return void 0;
    }
    finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    var iter = xs[Symbol.iterator]();
    var fst = iter.next();
    if (fst.done)
        throw new Error("Seq was empty");
    var snd = iter.next();
    if (!snd.done)
        throw new Error("Seq had multiple items");
    return fst.value;
}
function except(itemsToExclude, source) {
    var exclusionItems = Array.from(itemsToExclude);
    var testIsNotInExclusionItems = function (element) { return !exclusionItems.some(function (excludedItem) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["i" /* equals */])(excludedItem, element); }); };
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    function aux(iter) {
        var cur = iter.next();
        return !cur.done && (f(cur.value) || aux(iter));
    }
    return aux(xs[Symbol.iterator]());
}
function exists2(f, xs, ys) {
    function aux(iter1, iter2) {
        var cur1 = iter1.next(), cur2 = iter2.next();
        return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
    }
    return aux(xs[Symbol.iterator](), ys[Symbol.iterator]());
}
function filter(f, xs) {
    function trySkipToNext(iter) {
        var cur = iter.next();
        while (!cur.done) {
            if (f(cur.value)) {
                return [cur.value, iter];
            }
            cur = iter.next();
        }
        return void 0;
    }
    return delay(function () { return unfold(trySkipToNext, xs[Symbol.iterator]()); });
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    }
    else {
        var cur = void 0;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done)
                break;
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    var iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();
    var cur1, cur2;
    for (var i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
    for (var i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function forAll(f, xs) {
    return fold(function (acc, x) { return acc && f(x); }, true, xs);
}
function forAll2(f, xs, ys) {
    return fold2(function (acc, x, y) { return acc && f(x, y); }, true, xs, ys);
}
function tryHead(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    return cur.done ? null : cur.value;
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(function () {
        return unfold(function (i) { return i < n ? [f(i), i + 1] : null; }, 0);
    });
}
function initializeInfinite(f) {
    return delay(function () {
        return unfold(function (i) { return [f(i), i + 1]; }, 0);
    });
}
function tryItem(i, xs) {
    if (i < 0)
        return null;
    if (Array.isArray(xs) || ArrayBuffer.isView(xs))
        return i < xs.length ? xs[i] : null;
    for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
        var cur = iter.next();
        if (cur.done)
            return null;
        if (j === i)
            return cur.value;
    }
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold(function (_, x) { return f(x); }, null, xs);
}
function iterate2(f, xs, ys) {
    fold2(function (_, x, y) { return f(x, y); }, null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold(function (_, x, i) { return f(i, x); }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2(function (_, x, y, i) { return f(i, x, y); }, null, xs, ys);
}
function isEmpty(xs) {
    var i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    try {
        return reduce(function (_, x) { return x; }, xs);
    }
    catch (err) {
        return null;
    }
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
function count(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs)
        ? xs.length
        : fold(function (acc, x) { return acc + 1; }, 0, xs);
}
function map(f, xs) {
    return delay(function () { return unfold(function (iter) {
        var cur = iter.next();
        return !cur.done ? [f(cur.value), iter] : null;
    }, xs[Symbol.iterator]()); });
}
function mapIndexed(f, xs) {
    return delay(function () {
        var i = 0;
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function map2(f, xs, ys) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(), cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(function () {
        var i = 0;
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(), cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        var iter3 = zs[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next(), cur2 = iter2.next(), cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function mapFold(f, acc, xs) {
    var result = [];
    var r;
    var cur;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done)
            break;
        _a = f(acc, cur.value), r = _a[0], acc = _a[1];
        result.push(r);
    }
    return [result, acc];
    var _a;
}
function mapFoldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var result = [];
    var r;
    for (var i = arr.length - 1; i >= 0; i--) {
        _a = f(arr[i], acc), r = _a[0], acc = _a[1];
        result.push(r);
    }
    return [result, acc];
    var _a;
}
function max(xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(acc, x) === 1 ? acc : x; }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(f(acc), f(x)) === 1 ? acc : x; }, xs);
}
function min(xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(acc, x) === -1 ? acc : x; }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(f(acc), f(x)) === -1 ? acc : x; }, xs);
}
function pairwise(xs) {
    return skip(2, scan(function (last, next) { return [last[1], next]; }, [0, 0], xs));
}
function permute(f, xs) {
    return ofArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Array__["a" /* permute */])(f, Array.from(xs)));
}
function rangeStep(first, step, last) {
    if (step === 0)
        throw new Error("Step cannot be 0");
    return delay(function () { return unfold(function (x) { return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null; }, first); });
}
function rangeChar(first, last) {
    return delay(function () { return unfold(function (x) { return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null; }, first); });
}
function range(first, last) {
    return rangeStep(first, 1, last);
}
function readOnly(xs) {
    return map(function (x) { return x; }, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs))
        return xs.reduce(f);
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done)
        throw new Error("Seq was empty");
    var acc = cur.value;
    for (;;) {
        cur = iter.next();
        if (cur.done)
            break;
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    if (ar.length === 0)
        throw new Error("Seq was empty");
    var acc = ar[ar.length - 1];
    for (var i = ar.length - 2; i >= 0; i--)
        acc = f(ar[i], acc, i);
    return acc;
}
function replicate(n, x) {
    return initialize(n, function () { return x; });
}
function reverse(xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (acc) {
            if (acc == null)
                return [seed, seed];
            var cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan(function (acc, x) { return f(x, acc); }, seed, reverse(xs)));
}
function singleton(x) {
    return unfold(function (x) { return x != null ? [x, null] : null; }, x);
}
function skip(n, xs) {
    return _a = {},
        _a[Symbol.iterator] = function () {
            var iter = xs[Symbol.iterator]();
            for (var i = 1; i <= n; i++)
                if (iter.next().done)
                    throw new Error("Seq has not enough elements");
            return iter;
        },
        _a;
    var _a;
}
function skipWhile(f, xs) {
    return delay(function () {
        var hasPassed = false;
        return filter(function (x) { return hasPassed || (hasPassed = !f(x)); }, xs);
    });
}
function sortWith(f, xs) {
    var ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs) {
    return fold(function (acc, x) { return acc + x; }, 0, xs);
}
function sumBy(f, xs) {
    return fold(function (acc, x) { return acc + f(x); }, 0, xs);
}
function tail(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done)
        throw new Error("Seq was empty");
    return _a = {},
        _a[Symbol.iterator] = function () { return iter; },
        _a;
    var _a;
}
function take(n, xs, truncate) {
    if (truncate === void 0) { truncate = false; }
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            if (i < n) {
                var cur = iter.next();
                if (!cur.done)
                    return [cur.value, i + 1];
                if (!truncate)
                    throw new Error("Seq has not enough elements");
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            var cur = iter.next();
            if (!cur.done && f(cur.value))
                return [cur.value, null];
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return defaultValue === void 0 ? null : defaultValue;
        if (f(cur.value, i))
            return cur.value;
    }
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    var match = null;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return match === null ? (defaultValue === void 0 ? null : defaultValue) : match;
        if (f(cur.value, i))
            match = cur.value;
    }
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return null;
        if (f(cur.value, i))
            return i;
    }
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    var match = -1;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            return match === -1 ? null : match;
        if (f(cur.value, i))
            match = i;
    }
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done)
            break;
        var y = f(cur.value, i);
        if (y != null)
            return y;
    }
    return void 0;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, acc) {
    return _a = {},
        _a[Symbol.iterator] = function () {
            return {
                next: function () {
                    var res = f(acc);
                    if (res != null) {
                        acc = res[1];
                        return { done: false, value: res[0] };
                    }
                    return { done: true };
                }
            };
        },
        _a;
    var _a;
}
function zip(xs, ys) {
    return map2(function (x, y) { return [x, y]; }, xs, ys);
}
function zip3(xs, ys, zs) {
    return map3(function (x, y, z) { return [x, y, z]; }, xs, ys, zs);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["b"] = setType;
/* harmony export (immutable) */ __webpack_exports__["c"] = getType;
var fableGlobal = function () {
    var globalObj = typeof window !== "undefined" ? window
        : (typeof global !== "undefined" ? global
            : (typeof self !== "undefined" ? self : {}));
    if (typeof globalObj.__FABLE_CORE__ === "undefined") {
        globalObj.__FABLE_CORE__ = {
            types: new Map(),
            symbols: {
                reflection: Symbol("reflection"),
            }
        };
    }
    return globalObj.__FABLE_CORE__;
}();
function setType(fullName, cons) {
    fableGlobal.types.set(fullName, cons);
}
function getType(fullName) {
    return fableGlobal.types.get(fullName);
}
/* harmony default export */ __webpack_exports__["a"] = fableGlobal.symbols;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeSpan__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Long__ = __webpack_require__(20);
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* harmony export (immutable) */ __webpack_exports__["g"] = parse;
/* unused harmony export tryParse */
/* unused harmony export create */
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export today */
/* unused harmony export isLeapYear */
/* unused harmony export daysInMonth */
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export kind */
/* harmony export (immutable) */ __webpack_exports__["e"] = day;
/* harmony export (immutable) */ __webpack_exports__["c"] = hour;
/* unused harmony export millisecond */
/* harmony export (immutable) */ __webpack_exports__["f"] = minute;
/* harmony export (immutable) */ __webpack_exports__["d"] = month;
/* harmony export (immutable) */ __webpack_exports__["a"] = second;
/* harmony export (immutable) */ __webpack_exports__["b"] = year;
/* unused harmony export dayOfWeek */
/* unused harmony export ticks */
/* unused harmony export toBinary */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addTicks */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export toLongDateString */
/* unused harmony export toShortDateString */
/* unused harmony export toLongTimeString */
/* unused harmony export toShortTimeString */
/* unused harmony export equals */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */



function minValue() {
    return parse(-8640000000000000, 1);
}
function maxValue() {
    return parse(8640000000000000, 1);
}
function parse(v, kind) {
    if (kind == null) {
        kind = typeof v == "string" && v.slice(-1) == "Z" ? 1 : 2;
    }
    var date = (v == null) ? new Date() : new Date(v);
    if (kind === 2) {
        date.kind = kind;
    }
    if (isNaN(date.getTime())) {
        throw new Error("The string is not a valid Date.");
    }
    return date;
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    }
    catch (_err) {
        return [false, minValue()];
    }
}
function create(year, month, day, h, m, s, ms, kind) {
    if (h === void 0) { h = 0; }
    if (m === void 0) { m = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    if (kind === void 0) { kind = 2; }
    var date;
    if (kind === 2) {
        date = new Date(year, month - 1, day, h, m, s, ms);
        date.kind = kind;
    }
    else {
        date = new Date(Date.UTC(year, month - 1, day, h, m, s, ms));
    }
    if (isNaN(date.getTime())) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    return date;
}
function now() {
    return parse();
}
function utcNow() {
    return parse(null, 1);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
function daysInMonth(year, month) {
    return month == 2
        ? isLeapYear(year) ? 29 : 28
        : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
}
function toUniversalTime(d) {
    return d.kind === 2 ? new Date(d.getTime()) : d;
}
function toLocalTime(d) {
    if (d.kind === 2) {
        return d;
    }
    else {
        var d2 = new Date(d.getTime());
        d2.kind = 2;
        return d2;
    }
}
function timeOfDay(d) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__TimeSpan__["a" /* create */])(0, hour(d), minute(d), second(d), millisecond(d));
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind || 1);
}
function kind(d) {
    return d.kind || 1;
}
function day(d) {
    return d.kind === 2 ? d.getDate() : d.getUTCDate();
}
function hour(d) {
    return d.kind === 2 ? d.getHours() : d.getUTCHours();
}
function millisecond(d) {
    return d.kind === 2 ? d.getMilliseconds() : d.getUTCMilliseconds();
}
function minute(d) {
    return d.kind === 2 ? d.getMinutes() : d.getUTCMinutes();
}
function month(d) {
    return (d.kind === 2 ? d.getMonth() : d.getUTCMonth()) + 1;
}
function second(d) {
    return d.kind === 2 ? d.getSeconds() : d.getUTCSeconds();
}
function year(d) {
    return d.kind === 2 ? d.getFullYear() : d.getUTCFullYear();
}
function dayOfWeek(d) {
    return d.kind === 2 ? d.getDay() : d.getUTCDay();
}
function ticks(d) {
    return __WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime())
        .add(62135596800000)
        .sub(d.kind == 2 ? d.getTimezoneOffset() * 60 * 1000 : 0)
        .mul(10000);
}
function toBinary(d) {
    return ticks(d);
}
function dayOfYear(d) {
    var _year = year(d);
    var _month = month(d);
    var _day = day(d);
    for (var i = 1; i < _month; i++)
        _day += daysInMonth(_year, i);
    return _day;
}
function add(d, ts) {
    return parse(d.getTime() + ts, d.kind || 1);
}
function addDays(d, v) {
    return parse(d.getTime() + v * 86400000, d.kind || 1);
}
function addHours(d, v) {
    return parse(d.getTime() + v * 3600000, d.kind || 1);
}
function addMinutes(d, v) {
    return parse(d.getTime() + v * 60000, d.kind || 1);
}
function addSeconds(d, v) {
    return parse(d.getTime() + v * 1000, d.kind || 1);
}
function addMilliseconds(d, v) {
    return parse(d.getTime() + v, d.kind || 1);
}
function addTicks(d, t) {
    return parse(__WEBPACK_IMPORTED_MODULE_2__Long__["a" /* fromNumber */](d.getTime()).add(t.div(10000)).toNumber(), d.kind || 1);
}
function addYears(d, v) {
    var newMonth = month(d);
    var newYear = year(d) + v;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function addMonths(d, v) {
    var newMonth = month(d) + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    }
    else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = year(d) + yearOffset;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind || 1);
}
function subtract(d, that) {
    return typeof that == "number"
        ? parse(d.getTime() - that, d.kind || 1)
        : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() == d2.getTime();
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* compare */])(x, y);
}
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_String__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fable_core_Seq__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Types; });
/* unused harmony export mapEventHandler */
/* unused harmony export mapAttributes */
/* unused harmony export mapElem */
/* unused harmony export mapVoidElem */
/* unused harmony export map */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Events; });
/* unused harmony export Svg */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var Types = function (__exports) {
    var Attribute = __exports.Attribute = function () {
        function Attribute(caseName, fields) {
            _classCallCheck(this, Attribute);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(Attribute, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.Html.Types.Attribute",
                    interfaces: ["FSharpUnion"],
                    cases: {
                        Attribute: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", "string"])],
                        EventHandler: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", "function"])],
                        Hook: ["string", __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */]],
                        Property: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", "string"])],
                        Style: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", "string"])
                        })]
                    }
                };
            }
        }]);

        return Attribute;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.Html.Types.Attribute", Attribute);

    var DomNode = __exports.DomNode = function () {
        function DomNode(caseName, fields) {
            _classCallCheck(this, DomNode);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(DomNode, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.Html.Types.DomNode",
                    interfaces: ["FSharpUnion"],
                    cases: {
                        Element: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(Attribute, {
                                TMessage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")
                            })
                        })]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(DomNode, {
                                TMessage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")
                            })
                        })],
                        Svg: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(Attribute, {
                                TMessage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")
                            })
                        })]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(DomNode, {
                                TMessage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")
                            })
                        })],
                        Text: ["string"],
                        VirtualNode: ["string", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_3_fable_core_Map__["b" /* default */], {
                            Key: "string",
                            Value: "string"
                        }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["l" /* Array */])(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */])],
                        VoidElement: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(Attribute, {
                                TMessage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")
                            })
                        })])],
                        WhiteSpace: ["string"]
                    }
                };
            }
        }]);

        return DomNode;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.Html.Types.DomNode", DomNode);
    return __exports;
}({});
function mapEventHandler(mapping, e, f) {
    return new Types.Attribute("EventHandler", [[e, function ($var1) {
        return mapping(f($var1));
    }]]);
}
function mapAttributes(mapping, attribute) {
    if (attribute.Case === "Style") {
        return new Types.Attribute("Style", [attribute.Fields[0]]);
    } else if (attribute.Case === "Property") {
        return new Types.Attribute("Property", [attribute.Fields[0]]);
    } else if (attribute.Case === "Attribute") {
        return new Types.Attribute("Attribute", [attribute.Fields[0]]);
    } else if (attribute.Case === "Hook") {
        return new Types.Attribute("Hook", [attribute.Fields[0], attribute.Fields[1]]);
    } else {
        return mapEventHandler(mapping, attribute.Fields[0][0], attribute.Fields[0][1]);
    }
}
function mapElem(mapping, node_0, node_1) {
    var node = [node_0, node_1];
    return [node[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (attribute) {
        return mapAttributes(mapping, attribute);
    }, node[1])];
}
function mapVoidElem(mapping, node_0, node_1) {
    var node = [node_0, node_1];
    return [node[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (attribute) {
        return mapAttributes(mapping, attribute);
    }, node[1])];
}
function map(mapping, node) {
    if (node.Case === "VoidElement") {
        return new Types.DomNode("VoidElement", [mapVoidElem(mapping, node.Fields[0][0], node.Fields[0][1])]);
    } else if (node.Case === "Text") {
        return new Types.DomNode("Text", [node.Fields[0]]);
    } else if (node.Case === "WhiteSpace") {
        return new Types.DomNode("WhiteSpace", [node.Fields[0]]);
    } else if (node.Case === "Svg") {
        return new Types.DomNode("Element", [mapElem(mapping, node.Fields[0][0], node.Fields[0][1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (node_1) {
            return map(mapping, node_1);
        }, node.Fields[1])]);
    } else if (node.Case === "VirtualNode") {
        return new Types.DomNode("VirtualNode", [node.Fields[0], node.Fields[1], node.Fields[2]]);
    } else {
        return new Types.DomNode("Element", [mapElem(mapping, node.Fields[0][0], node.Fields[0][1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (node_2) {
            return map(mapping, node_2);
        }, node.Fields[1])]);
    }
}
var Tags = function (__exports) {
    var elem = __exports.elem = function (tagName, attrs, children) {
        return new Types.DomNode("Element", [[tagName, attrs], children]);
    };

    var voidElem = __exports.voidElem = function (tagName, attrs) {
        return new Types.DomNode("VoidElement", [[tagName, attrs]]);
    };

    var whiteSpace = __exports.whiteSpace = function (x) {
        return new Types.DomNode("WhiteSpace", [x]);
    };

    var text = __exports.text = function (x) {
        return new Types.DomNode("Text", [x]);
    };

    var vnode = __exports.vnode = function (tag, props, children) {
        return new Types.DomNode("VirtualNode", [tag, props, children]);
    };

    var br = __exports.br = function (x) {
        return voidElem("br", x);
    };

    var area = __exports.area = function (x) {
        return voidElem("area", x);
    };

    var baseHtml = __exports.baseHtml = function (x) {
        return voidElem("base", x);
    };

    var col = __exports.col = function (x) {
        return voidElem("col", x);
    };

    var embed = __exports.embed = function (x) {
        return voidElem("embed", x);
    };

    var hr = __exports.hr = function (x) {
        return voidElem("hr", x);
    };

    var img = __exports.img = function (x) {
        return voidElem("img", x);
    };

    var input = __exports.input = function (x) {
        return voidElem("input", x);
    };

    var link = __exports.link = function (x) {
        return voidElem("link", x);
    };

    var meta = __exports.meta = function (x) {
        return voidElem("meta", x);
    };

    var param = __exports.param = function (x) {
        return voidElem("param", x);
    };

    var source = __exports.source = function (x) {
        return voidElem("source", x);
    };

    var track = __exports.track = function (x) {
        return voidElem("track", x);
    };

    var wbr = __exports.wbr = function (x) {
        return voidElem("wbr", x);
    };

    var head = __exports.head = function (x) {
        var tagName = "head";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var style = __exports.style = function (x) {
        var tagName = "style";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var title = __exports.title = function (x) {
        var tagName = "title";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var address = __exports.address = function (x) {
        var tagName = "address";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var article = __exports.article = function (x) {
        var tagName = "article";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var aside = __exports.aside = function (x) {
        var tagName = "aside";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var footer = __exports.footer = function (x) {
        var tagName = "footer";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var header = __exports.header = function (x) {
        var tagName = "header";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var h1 = __exports.h1 = function (x) {
        var tagName = "h1";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var h2 = __exports.h2 = function (x) {
        var tagName = "h2";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var h3 = __exports.h3 = function (x) {
        var tagName = "h3";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var h4 = __exports.h4 = function (x) {
        var tagName = "h4";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var h5 = __exports.h5 = function (x) {
        var tagName = "h5";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var h6 = __exports.h6 = function (x) {
        var tagName = "h6";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var hgroup = __exports.hgroup = function (x) {
        var tagName = "hgroup";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var nav = __exports.nav = function (x) {
        var tagName = "nav";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var dd = __exports.dd = function (x) {
        var tagName = "dd";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var div = __exports.div = function (x) {
        var tagName = "div";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var dl = __exports.dl = function (x) {
        var tagName = "dl";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var dt = __exports.dt = function (x) {
        var tagName = "dt";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var figcaption = __exports.figcaption = function (x) {
        var tagName = "figcaption";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var figure = __exports.figure = function (x) {
        var tagName = "figure";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var li = __exports.li = function (x) {
        var tagName = "li";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var main = __exports.main = function (x) {
        var tagName = "main";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var ol = __exports.ol = function (x) {
        var tagName = "ol";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var p = __exports.p = function (x) {
        var tagName = "p";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var pre = __exports.pre = function (x) {
        var tagName = "pre";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var section = __exports.section = function (x) {
        var tagName = "section";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var ul = __exports.ul = function (x) {
        var tagName = "ul";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var a = __exports.a = function (x) {
        var tagName = "a";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var abbr = __exports.abbr = function (x) {
        var tagName = "abbr";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var b = __exports.b = function (x) {
        var tagName = "b";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var bdi = __exports.bdi = function (x) {
        var tagName = "bdi";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var bdo = __exports.bdo = function (x) {
        var tagName = "bdo";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var cite = __exports.cite = function (x) {
        var tagName = "cite";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var code = __exports.code = function (x) {
        var tagName = "code";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var data = __exports.data = function (x) {
        var tagName = "data";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var dfn = __exports.dfn = function (x) {
        var tagName = "dfn";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var em = __exports.em = function (x) {
        var tagName = "em";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var i = __exports.i = function (x) {
        var tagName = "i";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var kbd = __exports.kbd = function (x) {
        var tagName = "kbd";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var mark = __exports.mark = function (x) {
        var tagName = "mark";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var q = __exports.q = function (x) {
        var tagName = "q";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var rp = __exports.rp = function (x) {
        var tagName = "rp";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var rt = __exports.rt = function (x) {
        var tagName = "rt";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var rtc = __exports.rtc = function (x) {
        var tagName = "rtc";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var ruby = __exports.ruby = function (x) {
        var tagName = "ruby";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var s = __exports.s = function (x) {
        var tagName = "s";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var samp = __exports.samp = function (x) {
        var tagName = "samp";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var small = __exports.small = function (x) {
        var tagName = "small";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var span = __exports.span = function (x) {
        var tagName = "span";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var strong = __exports.strong = function (x) {
        var tagName = "strong";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var sub = __exports.sub = function (x) {
        var tagName = "sub";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var sup = __exports.sup = function (x) {
        var tagName = "sup";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var time = __exports.time = function (x) {
        var tagName = "time";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var u = __exports.u = function (x) {
        var tagName = "u";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var _var = __exports.var = function (x) {
        var tagName = "var";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var audio = __exports.audio = function (x) {
        var tagName = "audio";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var map_1 = __exports.map = function (x) {
        var tagName = "map";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var video = __exports.video = function (x) {
        var tagName = "video";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var objectHtml = __exports.objectHtml = function (x) {
        var tagName = "object";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var iframe = __exports.iframe = function (x) {
        var tagName = "iframe";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var del = __exports.del = function (x) {
        var tagName = "del";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var ins = __exports.ins = function (x) {
        var tagName = "ins";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var caption = __exports.caption = function (x) {
        var tagName = "caption";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var colgroup = __exports.colgroup = function (x) {
        var tagName = "colgroup";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var table = __exports.table = function (x) {
        var tagName = "table";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var tbody = __exports.tbody = function (x) {
        var tagName = "tbody";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var td = __exports.td = function (x) {
        var tagName = "td";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var tfoot = __exports.tfoot = function (x) {
        var tagName = "tfoot";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var th = __exports.th = function (x) {
        var tagName = "th";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var thead = __exports.thead = function (x) {
        var tagName = "thead";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var tr = __exports.tr = function (x) {
        var tagName = "tr";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var button = __exports.button = function (x) {
        var tagName = "button";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var datalist = __exports.datalist = function (x) {
        var tagName = "datalist";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var fieldset = __exports.fieldset = function (x) {
        var tagName = "fieldset";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var form = __exports.form = function (x) {
        var tagName = "form";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var label = __exports.label = function (x) {
        var tagName = "label";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var legend = __exports.legend = function (x) {
        var tagName = "legend";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var meter = __exports.meter = function (x) {
        var tagName = "meter";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var optgroup = __exports.optgroup = function (x) {
        var tagName = "optgroup";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var option = __exports.option = function (x) {
        var tagName = "option";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var output = __exports.output = function (x) {
        var tagName = "output";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var progress = __exports.progress = function (x) {
        var tagName = "progress";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var select = __exports.select = function (x) {
        var tagName = "select";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var textarea = __exports.textarea = function (x) {
        var tagName = "textarea";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var details = __exports.details = function (x) {
        var tagName = "details";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var dialog = __exports.dialog = function (x) {
        var tagName = "dialog";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var menu = __exports.menu = function (x) {
        var tagName = "menu";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var menuitem = __exports.menuitem = function (x) {
        var tagName = "menuitem";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    var summary = __exports.summary = function (x) {
        var tagName = "summary";
        return function (children) {
            return elem(tagName, x, children);
        };
    };

    return __exports;
}({});
var Attributes = function (__exports) {
    var attribute = __exports.attribute = function (key, value) {
        return new Types.Attribute("Attribute", [[key, value]]);
    };

    var property = __exports.property = function (key, value) {
        return new Types.Attribute("Property", [[key, value]]);
    };

    var hook = __exports.hook = function (key, value) {
        return new Types.Attribute("Hook", [key, value]);
    };

    var HookHelper = __exports.HookHelper = function () {
        function HookHelper() {
            _classCallCheck(this, HookHelper);
        }

        _createClass(HookHelper, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.Html.Attributes.HookHelper",
                    properties: {}
                };
            }
        }]);

        return HookHelper;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.Html.Attributes.HookHelper", HookHelper);

    var classy = __exports.classy = function (value) {
        return attribute("class", value);
    };

    var classList = __exports.classList = function (list) {
        return classy(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["b" /* join */])(" ", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_Seq__["d" /* map */])(function (tupledArg) {
            return tupledArg[0];
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_Seq__["q" /* filter */])(function (tupledArg_1) {
            return tupledArg_1[1];
        }, list))));
    };

    var classBaseList = __exports.classBaseList = function (b, list) {
        return classy(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["a" /* fsFormat */])("%s %s")(function (x) {
            return x;
        })(b)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["b" /* join */])(" ", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_Seq__["d" /* map */])(function (tupledArg) {
            return tupledArg[0];
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_Seq__["q" /* filter */])(function (tupledArg_1) {
            return tupledArg_1[1];
        }, list)))));
    };

    var boolAttribute = __exports.boolAttribute = function (name, value) {
        return attribute(name, String(value));
    };

    return __exports;
}({});
var Events = function (__exports) {
    var onMouseEvent = __exports.onMouseEvent = function (eventType, f) {
        var h = function h(e) {
            e.stopPropagation();
            e.preventDefault();
            return f(e);
        };

        return new Types.Attribute("EventHandler", [[eventType, h]]);
    };

    var onMouseClick = __exports.onMouseClick = function (x) {
        return onMouseEvent("onclick", x);
    };

    var onContextMenu = __exports.onContextMenu = function (x) {
        return onMouseEvent("oncontextmenu", x);
    };

    var onDblClick = __exports.onDblClick = function (x) {
        return onMouseEvent("ondblclick", x);
    };

    var onMouseDown = __exports.onMouseDown = function (x) {
        return onMouseEvent("onmousedown", x);
    };

    var onMouseEnter = __exports.onMouseEnter = function (x) {
        return onMouseEvent("onmouseenter", x);
    };

    var onMouseLeave = __exports.onMouseLeave = function (x) {
        return onMouseEvent("onmouseleave", x);
    };

    var onMouseMove = __exports.onMouseMove = function (x) {
        return onMouseEvent("onmousemove", x);
    };

    var onMouseOut = __exports.onMouseOut = function (x) {
        return onMouseEvent("onmouseout", x);
    };

    var onMouseOver = __exports.onMouseOver = function (x) {
        return onMouseEvent("onmouseover", x);
    };

    var onMouseUp = __exports.onMouseUp = function (x) {
        return onMouseEvent("onmouseup", x);
    };

    var onShow = __exports.onShow = function (x) {
        return onMouseEvent("onshow", x);
    };

    var onKeyboardEvent = __exports.onKeyboardEvent = function (eventType, f) {
        return new Types.Attribute("EventHandler", [[eventType, f]]);
    };

    var onKeydown = __exports.onKeydown = function (x) {
        return onKeyboardEvent("onkeydown", x);
    };

    var onKeypress = __exports.onKeypress = function (x) {
        return onKeyboardEvent("onkeypress", x);
    };

    var onKeyup = __exports.onKeyup = function (x) {
        return onKeyboardEvent("onkeyup", x);
    };

    var onEvent = __exports.onEvent = function (eventType, f) {
        return new Types.Attribute("EventHandler", [[eventType, f]]);
    };

    var onAbort = __exports.onAbort = function (x) {
        return onEvent("onabort", x);
    };

    var onAfterPrint = __exports.onAfterPrint = function (x) {
        return onEvent("onafterprint", x);
    };

    var onAudioEnd = __exports.onAudioEnd = function (x) {
        return onEvent("onaudioend", x);
    };

    var onAudioStart = __exports.onAudioStart = function (x) {
        return onEvent("onaudiostart", x);
    };

    var onBeforePrint = __exports.onBeforePrint = function (x) {
        return onEvent("onbeforeprint", x);
    };

    var onCached = __exports.onCached = function (x) {
        return onEvent("oncached", x);
    };

    var onCanPlay = __exports.onCanPlay = function (x) {
        return onEvent("oncanplay", x);
    };

    var onCanPlayThrough = __exports.onCanPlayThrough = function (x) {
        return onEvent("oncanplaythrough", x);
    };

    var onChange = __exports.onChange = function (x) {
        return onEvent("onchange", x);
    };

    var onChargingChange = __exports.onChargingChange = function (x) {
        return onEvent("onchargingchange", x);
    };

    var onChargingTimeChange = __exports.onChargingTimeChange = function (x) {
        return onEvent("onchargingtimechange", x);
    };

    var onChecking = __exports.onChecking = function (x) {
        return onEvent("onchecking", x);
    };

    var onClose = __exports.onClose = function (x) {
        return onEvent("onclose", x);
    };

    var onDischargingTimeChange = __exports.onDischargingTimeChange = function (x) {
        return onEvent("ondischargingtimechange", x);
    };

    var onDOMContentLoaded = __exports.onDOMContentLoaded = function (x) {
        return onEvent("onDOMContentLoaded", x);
    };

    var onDownloading = __exports.onDownloading = function (x) {
        return onEvent("ondownloading", x);
    };

    var onDurationchange = __exports.onDurationchange = function (x) {
        return onEvent("ondurationchange", x);
    };

    var onEmptied = __exports.onEmptied = function (x) {
        return onEvent("onemptied", x);
    };

    var onEnd = __exports.onEnd = function (x) {
        return onEvent("onend", x);
    };

    var onEnded = __exports.onEnded = function (x) {
        return onEvent("onended", x);
    };

    var onError = __exports.onError = function (x) {
        return onEvent("onerror", x);
    };

    var onCullScreenChange = __exports.onCullScreenChange = function (x) {
        return onEvent("onfullscreenchange", x);
    };

    var onCullScreenError = __exports.onCullScreenError = function (x) {
        return onEvent("onfullscreenerror", x);
    };

    var onInput = __exports.onInput = function (x) {
        return onEvent("oninput", x);
    };

    var onInvalid = __exports.onInvalid = function (x) {
        return onEvent("oninvalid", x);
    };

    var onLanguageChange = __exports.onLanguageChange = function (x) {
        return onEvent("onlanguagechange", x);
    };

    var onLevelChange = __exports.onLevelChange = function (x) {
        return onEvent("onlevelchange", x);
    };

    var onLoadedData = __exports.onLoadedData = function (x) {
        return onEvent("onloadeddata", x);
    };

    var onLoadedMetaData = __exports.onLoadedMetaData = function (x) {
        return onEvent("onloadedmetadata", x);
    };

    var onNoUpdate = __exports.onNoUpdate = function (x) {
        return onEvent("onnoupdate", x);
    };

    var onObsolete = __exports.onObsolete = function (x) {
        return onEvent("onobsolete", x);
    };

    var onOffline = __exports.onOffline = function (x) {
        return onEvent("onoffline", x);
    };

    var onOnline = __exports.onOnline = function (x) {
        return onEvent("ononline", x);
    };

    var onOpen = __exports.onOpen = function (x) {
        return onEvent("onopen", x);
    };

    var onOrientationChange = __exports.onOrientationChange = function (x) {
        return onEvent("onorientationchange", x);
    };

    var onPause = __exports.onPause = function (x) {
        return onEvent("onpause", x);
    };

    var onPointerlockchange = __exports.onPointerlockchange = function (x) {
        return onEvent("onpointerlockchange", x);
    };

    var onPointerlockerror = __exports.onPointerlockerror = function (x) {
        return onEvent("onpointerlockerror", x);
    };

    var onPlay = __exports.onPlay = function (x) {
        return onEvent("onplay", x);
    };

    var onPlaying = __exports.onPlaying = function (x) {
        return onEvent("onplaying", x);
    };

    var onRateChange = __exports.onRateChange = function (x) {
        return onEvent("onratechange", x);
    };

    var onReadyStateChange = __exports.onReadyStateChange = function (x) {
        return onEvent("onreadystatechange", x);
    };

    var onReset = __exports.onReset = function (x) {
        return onEvent("onreset", x);
    };

    var onSeeked = __exports.onSeeked = function (x) {
        return onEvent("onseeked", x);
    };

    var onSeeking = __exports.onSeeking = function (x) {
        return onEvent("onseeking", x);
    };

    var onSelectStart = __exports.onSelectStart = function (x) {
        return onEvent("onselectstart", x);
    };

    var onSelectionChange = __exports.onSelectionChange = function (x) {
        return onEvent("onselectionchange", x);
    };

    var onSoundEnd = __exports.onSoundEnd = function (x) {
        return onEvent("onsoundend", x);
    };

    var onSoundStart = __exports.onSoundStart = function (x) {
        return onEvent("onsoundstart", x);
    };

    var onSpeechEnd = __exports.onSpeechEnd = function (x) {
        return onEvent("onspeechend", x);
    };

    var onSpeechStart = __exports.onSpeechStart = function (x) {
        return onEvent("onspeechstart", x);
    };

    var onStalled = __exports.onStalled = function (x) {
        return onEvent("onstalled", x);
    };

    var onStart = __exports.onStart = function (x) {
        return onEvent("onstart", x);
    };

    var onSubmit = __exports.onSubmit = function (x) {
        return onEvent("onsubmit", x);
    };

    var onSuccess = __exports.onSuccess = function (x) {
        return onEvent("onsuccess", x);
    };

    var onSuspend = __exports.onSuspend = function (x) {
        return onEvent("onsuspend", x);
    };

    var onTimeUpdate = __exports.onTimeUpdate = function (x) {
        return onEvent("ontimeupdate", x);
    };

    var onUpdateReady = __exports.onUpdateReady = function (x) {
        return onEvent("onupdateready", x);
    };

    var onVoicesChanged = __exports.onVoicesChanged = function (x) {
        return onEvent("onvoiceschanged", x);
    };

    var onVisibilityChange = __exports.onVisibilityChange = function (x) {
        return onEvent("onvisibilitychange", x);
    };

    var onVolumeChange = __exports.onVolumeChange = function (x) {
        return onEvent("onvolumechange", x);
    };

    var onVrdisplayConnected = __exports.onVrdisplayConnected = function (x) {
        return onEvent("onvrdisplayconnected", x);
    };

    var onVrdisplayDisconnected = __exports.onVrdisplayDisconnected = function (x) {
        return onEvent("onvrdisplaydisconnected", x);
    };

    var onVrdisplayPresentChange = __exports.onVrdisplayPresentChange = function (x) {
        return onEvent("onvrdisplaypresentchange", x);
    };

    var onWaiting = __exports.onWaiting = function (x) {
        return onEvent("onwaiting", x);
    };

    var onBlur = __exports.onBlur = function (x) {
        return onEvent("onblur", x);
    };

    var onFocus = __exports.onFocus = function (x) {
        return onEvent("onfocus", x);
    };

    return __exports;
}({});
var Svg = function (__exports) {
    var svgNS = __exports.svgNS = function () {
        return new Types.Attribute("Property", [["namespace", "http://www.w3.org/2000/svg"]]);
    };

    var svgElem = __exports.svgElem = function (tagName, attrs, children) {
        return new Types.DomNode("Element", [[tagName, new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](svgNS(), attrs)], children]);
    };

    var svg = __exports.svg = function (x) {
        var tagName = "svg";
        return function (children) {
            return svgElem(tagName, x, children);
        };
    };

    var circle = __exports.circle = function (x) {
        var tagName = "circle";
        return function (children) {
            return svgElem(tagName, x, children);
        };
    };

    var rect = __exports.rect = function (x) {
        var tagName = "rect";
        return function (children) {
            return svgElem(tagName, x, children);
        };
    };

    var width = __exports.width = function (x) {
        return Attributes.attribute("width", x);
    };

    var height = __exports.height = function (x) {
        return Attributes.attribute("height", x);
    };

    var viewBox = __exports.viewBox = function (x) {
        return Attributes.attribute("viewBox", x);
    };

    var cx = __exports.cx = function (x) {
        return Attributes.attribute("cx", x);
    };

    var cy = __exports.cy = function (x) {
        return Attributes.attribute("cy", x);
    };

    var r = __exports.r = function (x) {
        return Attributes.attribute("r", x);
    };

    var stroke = __exports.stroke = function (x) {
        return Attributes.attribute("stroke", x);
    };

    var strokeWidth = __exports.strokeWidth = function (x) {
        return Attributes.attribute("stroke-width", x);
    };

    var fill = __exports.fill = function (x) {
        return Attributes.attribute("fill", x);
    };

    return __exports;
}({});
//# sourceMappingURL=Fable.Arch.Html.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = ofArray;




function ofArray(args, base) {
    var acc = base || new List();
    for (var i = args.length - 1; i >= 0; i--) {
        acc = new List(args[i], acc);
    }
    return acc;
}
var List = (function () {
    function List(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    List.prototype.ToString = function () {
        return "[" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* toString */]).join("; ") + "]";
    };
    List.prototype.Equals = function (x) {
        if (this === x) {
            return true;
        }
        else {
            var iter1 = this[Symbol.iterator](), iter2 = x[Symbol.iterator]();
            for (;;) {
                var cur1 = iter1.next(), cur2 = iter2.next();
                if (cur1.done)
                    return cur2.done ? true : false;
                else if (cur2.done)
                    return false;
                else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["i" /* equals */])(cur1.value, cur2.value))
                    return false;
            }
        }
    };
    List.prototype.CompareTo = function (x) {
        if (this === x) {
            return 0;
        }
        else {
            var acc = 0;
            var iter1 = this[Symbol.iterator](), iter2 = x[Symbol.iterator]();
            for (;;) {
                var cur1 = iter1.next(), cur2 = iter2.next();
                if (cur1.done)
                    return cur2.done ? acc : -1;
                else if (cur2.done)
                    return 1;
                else {
                    acc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* compare */])(cur1.value, cur2.value);
                    if (acc != 0)
                        return acc;
                }
            }
        }
    };
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            var cur = this, acc = 0;
            while (cur.tail != null) {
                cur = cur.tail;
                acc++;
            }
            return acc;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype[Symbol.iterator] = function () {
        var cur = this;
        return {
            next: function () {
                var tmp = cur;
                cur = cur.tail;
                return { done: tmp.tail == null, value: tmp.head };
            }
        };
    };
    List.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "Microsoft.FSharp.Collections.FSharpList",
            interfaces: ["System.IEquatable", "System.IComparable"]
        };
    };
    return List;
}());
/* harmony default export */ __webpack_exports__["a"] = List;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(9)

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "2"


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericComparer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Seq__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBy;
/* unused harmony export countBy */
/* unused harmony export MapTree */
/* harmony export (immutable) */ __webpack_exports__["c"] = create;
/* unused harmony export add */
/* unused harmony export remove */
/* unused harmony export containsValue */
/* unused harmony export tryGetValue */
/* unused harmony export exists */
/* unused harmony export find */
/* unused harmony export tryFind */
/* unused harmony export filter */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export forAll */
/* unused harmony export isEmpty */
/* unused harmony export iterate */
/* unused harmony export map */
/* unused harmony export partition */
/* unused harmony export findKey */
/* unused harmony export tryFindKey */
/* unused harmony export pick */
/* unused harmony export tryPick */












function groupBy(f, xs) {
    var keys = [], iter = xs[Symbol.iterator]();
    var acc = create(), cur = iter.next();
    while (!cur.done) {
        var k = f(cur.value), vs = tryFind(k, acc);
        if (vs == null) {
            keys.push(k);
            acc = add(k, [cur.value], acc);
        }
        else {
            vs.push(cur.value);
        }
        cur = iter.next();
    }
    return keys.map(function (k) { return [k, acc.get(k)]; });
}
function countBy(f, xs) {
    return groupBy(f, xs).map(function (kv) { return [kv[0], kv[1].length]; });
}
var MapTree = (function () {
    function MapTree(caseName, fields) {
        this.Case = caseName;
        this.Fields = fields;
    }
    return MapTree;
}());

function tree_sizeAux(acc, m) {
    return m.Case === "MapOne"
        ? acc + 1
        : m.Case === "MapNode"
            ? tree_sizeAux(tree_sizeAux(acc + 1, m.Fields[2]), m.Fields[3])
            : acc;
}
function tree_size(x) {
    return tree_sizeAux(0, x);
}
function tree_empty() {
    return new MapTree("MapEmpty", []);
}
function tree_height(_arg1) {
    return _arg1.Case === "MapOne" ? 1 : _arg1.Case === "MapNode" ? _arg1.Fields[4] : 0;
}
function tree_isEmpty(m) {
    return m.Case === "MapEmpty" ? true : false;
}
function tree_mk(l, k, v, r) {
    var matchValue = [l, r];
    var $target1 = function () {
        var hl = tree_height(l);
        var hr = tree_height(r);
        var m = hl < hr ? hr : hl;
        return new MapTree("MapNode", [k, v, l, r, m + 1]);
    };
    if (matchValue[0].Case === "MapEmpty") {
        if (matchValue[1].Case === "MapEmpty") {
            return new MapTree("MapOne", [k, v]);
        }
        else {
            return $target1();
        }
    }
    else {
        return $target1();
    }
}
;
function tree_rebalance(t1, k, v, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + 2) {
        if (t2.Case === "MapNode") {
            if (tree_height(t2.Fields[2]) > t1h + 1) {
                if (t2.Fields[2].Case === "MapNode") {
                    return tree_mk(tree_mk(t1, k, v, t2.Fields[2].Fields[2]), t2.Fields[2].Fields[0], t2.Fields[2].Fields[1], tree_mk(t2.Fields[2].Fields[3], t2.Fields[0], t2.Fields[1], t2.Fields[3]));
                }
                else {
                    throw new Error("rebalance");
                }
            }
            else {
                return tree_mk(tree_mk(t1, k, v, t2.Fields[2]), t2.Fields[0], t2.Fields[1], t2.Fields[3]);
            }
        }
        else {
            throw new Error("rebalance");
        }
    }
    else {
        if (t1h > t2h + 2) {
            if (t1.Case === "MapNode") {
                if (tree_height(t1.Fields[3]) > t2h + 1) {
                    if (t1.Fields[3].Case === "MapNode") {
                        return tree_mk(tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], t1.Fields[3].Fields[2]), t1.Fields[3].Fields[0], t1.Fields[3].Fields[1], tree_mk(t1.Fields[3].Fields[3], k, v, t2));
                    }
                    else {
                        throw new Error("rebalance");
                    }
                }
                else {
                    return tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], tree_mk(t1.Fields[3], k, v, t2));
                }
            }
            else {
                throw new Error("rebalance");
            }
        }
        else {
            return tree_mk(t1, k, v, t2);
        }
    }
}
function tree_add(comparer, k, v, m) {
    if (m.Case === "MapOne") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return new MapTree("MapNode", [k, v, new MapTree("MapEmpty", []), m, 2]);
        }
        else if (c === 0) {
            return new MapTree("MapOne", [k, v]);
        }
        return new MapTree("MapNode", [k, v, m, new MapTree("MapEmpty", []), 2]);
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_rebalance(tree_add(comparer, k, v, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
        }
        else if (c === 0) {
            return new MapTree("MapNode", [k, v, m.Fields[2], m.Fields[3], m.Fields[4]]);
        }
        return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_add(comparer, k, v, m.Fields[3]));
    }
    return new MapTree("MapOne", [k, v]);
}
function tree_find(comparer, k, m) {
    var res = tree_tryFind(comparer, k, m);
    if (res != null)
        return res;
    throw new Error("key not found");
}
function tree_tryFind(comparer, k, m) {
    if (m.Case === "MapOne") {
        var c = comparer.Compare(k, m.Fields[0]);
        return c === 0 ? m.Fields[1] : null;
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_tryFind(comparer, k, m.Fields[2]);
        }
        else {
            if (c === 0) {
                return m.Fields[1];
            }
            else {
                return tree_tryFind(comparer, k, m.Fields[3]);
            }
        }
    }
    return null;
}
function tree_partition1(comparer, f, k, v, acc1, acc2) {
    return f(k, v) ? [tree_add(comparer, k, v, acc1), acc2] : [acc1, tree_add(comparer, k, v, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.Case === "MapOne") {
        return tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc[0], acc[1]);
    }
    else if (s.Case === "MapNode") {
        var acc_2 = tree_partitionAux(comparer, f, s.Fields[3], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.Fields[2], acc_3[0], acc_3[1]);
    }
    return acc;
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, tree_empty(), tree_empty());
}
function tree_filter1(comparer, f, k, v, acc) {
    return f(k, v) ? tree_add(comparer, k, v, acc) : acc;
}
function tree_filterAux(comparer, f, s, acc) {
    return s.Case === "MapOne" ? tree_filter1(comparer, f, s.Fields[0], s.Fields[1], acc) : s.Case === "MapNode" ? tree_filterAux(comparer, f, s.Fields[3], tree_filter1(comparer, f, s.Fields[0], s.Fields[1], tree_filterAux(comparer, f, s.Fields[2], acc))) : acc;
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, tree_empty());
}
function tree_spliceOutSuccessor(m) {
    if (m.Case === "MapOne") {
        return [m.Fields[0], m.Fields[1], new MapTree("MapEmpty", [])];
    }
    else if (m.Case === "MapNode") {
        if (m.Fields[2].Case === "MapEmpty") {
            return [m.Fields[0], m.Fields[1], m.Fields[3]];
        }
        else {
            var kvl = tree_spliceOutSuccessor(m.Fields[2]);
            return [kvl[0], kvl[1], tree_mk(kvl[2], m.Fields[0], m.Fields[1], m.Fields[3])];
        }
    }
    throw new Error("internal error: Map.spliceOutSuccessor");
}
function tree_remove(comparer, k, m) {
    if (m.Case === "MapOne") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c === 0) {
            return new MapTree("MapEmpty", []);
        }
        else {
            return m;
        }
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_rebalance(tree_remove(comparer, k, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
        }
        else {
            if (c === 0) {
                var matchValue = [m.Fields[2], m.Fields[3]];
                if (matchValue[0].Case === "MapEmpty") {
                    return m.Fields[3];
                }
                else {
                    if (matchValue[1].Case === "MapEmpty") {
                        return m.Fields[2];
                    }
                    else {
                        var patternInput = tree_spliceOutSuccessor(m.Fields[3]);
                        var sv = patternInput[1];
                        var sk = patternInput[0];
                        var r_ = patternInput[2];
                        return tree_mk(m.Fields[2], sk, sv, r_);
                    }
                }
            }
            else {
                return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_remove(comparer, k, m.Fields[3]));
            }
        }
    }
    else {
        return tree_empty();
    }
}
function tree_mem(comparer, k, m) {
    if (m.Case === "MapOne") {
        return comparer.Compare(k, m.Fields[0]) === 0;
    }
    else if (m.Case === "MapNode") {
        var c = comparer.Compare(k, m.Fields[0]);
        if (c < 0) {
            return tree_mem(comparer, k, m.Fields[2]);
        }
        else {
            if (c === 0) {
                return true;
            }
            else {
                return tree_mem(comparer, k, m.Fields[3]);
            }
        }
    }
    else {
        return false;
    }
}
function tree_iter(f, m) {
    if (m.Case === "MapOne") {
        f(m.Fields[0], m.Fields[1]);
    }
    else if (m.Case === "MapNode") {
        tree_iter(f, m.Fields[2]);
        f(m.Fields[0], m.Fields[1]);
        tree_iter(f, m.Fields[3]);
    }
}
function tree_tryPick(f, m) {
    if (m.Case === "MapOne") {
        return f(m.Fields[0], m.Fields[1]);
    }
    else if (m.Case === "MapNode") {
        var matchValue = tree_tryPick(f, m.Fields[2]);
        if (matchValue == null) {
            var matchValue_1 = f(m.Fields[0], m.Fields[1]);
            if (matchValue_1 == null) {
                return tree_tryPick(f, m.Fields[3]);
            }
            else {
                var res = matchValue_1;
                return res;
            }
        }
        else {
            var res = matchValue;
            return res;
        }
    }
    else {
        return null;
    }
}
function tree_exists(f, m) {
    return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_exists(f, m.Fields[2]) ? true : f(m.Fields[0], m.Fields[1])) ? true : tree_exists(f, m.Fields[3]) : false;
}
function tree_forall(f, m) {
    return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_forall(f, m.Fields[2]) ? f(m.Fields[0], m.Fields[1]) : false) ? tree_forall(f, m.Fields[3]) : false : true;
}
function tree_mapi(f, m) {
    return m.Case === "MapOne" ? new MapTree("MapOne", [m.Fields[0], f(m.Fields[0], m.Fields[1])]) : m.Case === "MapNode" ? new MapTree("MapNode", [m.Fields[0], f(m.Fields[0], m.Fields[1]), tree_mapi(f, m.Fields[2]), tree_mapi(f, m.Fields[3]), m.Fields[4]]) : tree_empty();
}
function tree_foldBack(f, m, x) {
    return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1], x) : m.Case === "MapNode" ? tree_foldBack(f, m.Fields[2], f(m.Fields[0], m.Fields[1], tree_foldBack(f, m.Fields[3], x))) : x;
}
function tree_fold(f, x, m) {
    return m.Case === "MapOne" ? f(x, m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? tree_fold(f, f(tree_fold(f, x, m.Fields[2]), m.Fields[0], m.Fields[1]), m.Fields[3]) : x;
}
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value[0], cur.value[1], acc);
        cur = e.next();
    }
    return acc;
}
function tree_ofSeq(comparer, c) {
    var ie = c[Symbol.iterator]();
    return tree_mkFromEnumerator(comparer, tree_empty(), ie);
}
function tree_collapseLHS(stack) {
    if (stack.tail != null) {
        if (stack.head.Case === "MapOne") {
            return stack;
        }
        else if (stack.head.Case === "MapNode") {
            return tree_collapseLHS(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* ofArray */])([
                stack.head.Fields[2],
                new MapTree("MapOne", [stack.head.Fields[0], stack.head.Fields[1]]),
                stack.head.Fields[3]
            ], stack.tail));
        }
        else {
            return tree_collapseLHS(stack.tail);
        }
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]();
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](s, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]())), started: false };
}
function tree_moveNext(i) {
    function current(i) {
        if (i.stack.tail == null) {
            return null;
        }
        else if (i.stack.head.Case === "MapOne") {
            return [i.stack.head.Fields[0], i.stack.head.Fields[1]];
        }
        throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        }
        else {
            if (i.stack.head.Case === "MapOne") {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            }
            else {
                throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
            }
        }
    }
    else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
    ;
}
var FableMap = (function () {
    function FableMap() {
    }
    FableMap.prototype.ToString = function () {
        return "map [" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* toString */]).join("; ") + "]";
    };
    FableMap.prototype.Equals = function (m2) {
        return this.CompareTo(m2) === 0;
    };
    FableMap.prototype.CompareTo = function (m2) {
        var _this = this;
        return this === m2 ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["e" /* compareWith */])(function (kvp1, kvp2) {
            var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
            return c !== 0 ? c : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["h" /* compare */])(kvp1[1], kvp2[1]);
        }, this, m2);
    };
    FableMap.prototype[Symbol.iterator] = function () {
        var i = tree_mkIterator(this.tree);
        return {
            next: function () { return tree_moveNext(i); }
        };
    };
    FableMap.prototype.entries = function () {
        return this[Symbol.iterator]();
    };
    FableMap.prototype.keys = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["d" /* map */])(function (kv) { return kv[0]; }, this);
    };
    FableMap.prototype.values = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["d" /* map */])(function (kv) { return kv[1]; }, this);
    };
    FableMap.prototype.get = function (k) {
        return tree_find(this.comparer, k, this.tree);
    };
    FableMap.prototype.has = function (k) {
        return tree_mem(this.comparer, k, this.tree);
    };
    FableMap.prototype.set = function (k, v) {
        throw new Error("not supported");
    };
    FableMap.prototype.delete = function (k) {
        throw new Error("not supported");
    };
    FableMap.prototype.clear = function () {
        throw new Error("not supported");
    };
    Object.defineProperty(FableMap.prototype, "size", {
        get: function () {
            return tree_size(this.tree);
        },
        enumerable: true,
        configurable: true
    });
    FableMap.prototype[__WEBPACK_IMPORTED_MODULE_3__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "Microsoft.FSharp.Collections.FSharpMap",
            interfaces: ["System.IEquatable", "System.IComparable", "System.Collections.Generic.IDictionary"]
        };
    };
    return FableMap;
}());
/* harmony default export */ __webpack_exports__["b"] = FableMap;
function from(comparer, tree) {
    var map = new FableMap();
    map.tree = tree;
    map.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_2__GenericComparer__["a" /* default */]();
    return map;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_2__GenericComparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : tree_empty());
}
function add(k, v, map) {
    return from(map.comparer, tree_add(map.comparer, k, v, map.tree));
}
function remove(item, map) {
    return from(map.comparer, tree_remove(map.comparer, item, map.tree));
}
function containsValue(v, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["a" /* fold */])(function (acc, k) { return acc || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["i" /* equals */])(map.get(k), v); }, false, map.keys());
}
function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function exists(f, map) {
    return tree_exists(f, map.tree);
}
function find(k, map) {
    return tree_find(map.comparer, k, map.tree);
}
function tryFind(k, map) {
    return tree_tryFind(map.comparer, k, map.tree);
}
function filter(f, map) {
    return from(map.comparer, tree_filter(map.comparer, f, map.tree));
}
function fold(f, seed, map) {
    return tree_fold(f, seed, map.tree);
}
function foldBack(f, map, seed) {
    return tree_foldBack(f, map.tree, seed);
}
function forAll(f, map) {
    return tree_forall(f, map.tree);
}
function isEmpty(map) {
    return tree_isEmpty(map.tree);
}
function iterate(f, map) {
    tree_iter(f, map.tree);
}
function map(f, map) {
    return from(map.comparer, tree_mapi(f, map.tree));
}
function partition(f, map) {
    var rs = tree_partition(map.comparer, f, map.tree);
    return [from(map.comparer, rs[0]), from(map.comparer, rs[1])];
}
function findKey(f, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["f" /* pick */])(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
}
function tryFindKey(f, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["g" /* tryPick */])(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
}
function pick(f, map) {
    var res = tryPick(f, map);
    if (res != null)
        return res;
    throw new Error("key not found");
}
function tryPick(f, map) {
    return tree_tryPick(f, map.tree);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evaluator_hmrpDataStructure__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EvaluationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RegisterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return InputAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RunAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Action; });
/* unused harmony export createDefaultModel */
/* harmony export (immutable) */ __webpack_exports__["h"] = createSimpleLoopModel;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Register = function () {
  function Register(enabled, value, uIIndex) {
    _classCallCheck(this, Register);

    this.Enabled = enabled;
    this.Value = value;
    this.UIIndex = uIIndex;
  }

  _createClass(Register, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.Register",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Enabled: "boolean",
          Value: "number",
          UIIndex: "number"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["k" /* compareRecords */])(this, other);
    }
  }]);

  return Register;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.Register", Register);
var Input = function () {
  function Input(uIIndex, value) {
    _classCallCheck(this, Input);

    this.UIIndex = uIIndex;
    this.Value = value;
  }

  _createClass(Input, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.Input",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          UIIndex: "number",
          Value: "number"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["k" /* compareRecords */])(this, other);
    }
  }]);

  return Input;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.Input", Input);
var EvaluationResult = function () {
  function EvaluationResult(causeOfStop, evaluationStates, currentlySelectedState) {
    _classCallCheck(this, EvaluationResult);

    this.CauseOfStop = causeOfStop;
    this.EvaluationStates = evaluationStates;
    this.CurrentlySelectedState = currentlySelectedState;
  }

  _createClass(EvaluationResult, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.EvaluationResult",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          CauseOfStop: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["j" /* Option */])("string"),
          EvaluationStates: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
            T: __WEBPACK_IMPORTED_MODULE_3__evaluator_hmrpDataStructure__["b" /* MachineState */]
          }),
          CurrentlySelectedState: "number"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["k" /* compareRecords */])(this, other);
    }
  }]);

  return EvaluationResult;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.EvaluationResult", EvaluationResult);
var RegisterAction = function () {
  function RegisterAction(caseName, fields) {
    _classCallCheck(this, RegisterAction);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(RegisterAction, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.RegisterAction",
        interfaces: ["FSharpUnion", "System.IEquatable"],
        cases: {
          CreateRegister: [],
          MoveRegisterValueDown: ["number"],
          MoveRegisterValueUp: ["number"],
          RemoveRegisterValue: ["number"],
          UpdateRegisterState: ["number", __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */]],
          UpdateRegisterValue: ["number", __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */]]
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
    }
  }]);

  return RegisterAction;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.RegisterAction", RegisterAction);
var InputAction = function () {
  function InputAction(caseName, fields) {
    _classCallCheck(this, InputAction);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(InputAction, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.InputAction",
        interfaces: ["FSharpUnion", "System.IEquatable"],
        cases: {
          CreateInput: [],
          MoveInputValueDown: ["number"],
          MoveInputValueUp: ["number"],
          RemoveInputValue: ["number"],
          UpdateInputValue: ["number", __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */]]
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
    }
  }]);

  return InputAction;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.InputAction", InputAction);
var RunAction = function () {
  function RunAction(caseName, fields) {
    _classCallCheck(this, RunAction);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(RunAction, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.RunAction",
        interfaces: ["FSharpUnion", "System.IEquatable"],
        cases: {
          ChangeBrowsedState: [__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */]],
          Run: []
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
    }
  }]);

  return RunAction;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.RunAction", RunAction);
var Panel = function () {
  function Panel(caseName, fields) {
    _classCallCheck(this, Panel);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(Panel, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.Panel",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: {
          Debug: [],
          Help: [],
          Input: [],
          Register: []
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* compareUnions */])(this, other);
    }
  }]);

  return Panel;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.Panel", Panel);
var Model = function () {
  function Model(registers, inputs, evaluationResult, isRunning, selectedPanel) {
    _classCallCheck(this, Model);

    this.Registers = registers;
    this.Inputs = inputs;
    this.EvaluationResult = evaluationResult;
    this.IsRunning = isRunning;
    this.SelectedPanel = selectedPanel;
  }

  _createClass(Model, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.Model",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Registers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
            T: Register
          }),
          Inputs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
            T: Input
          }),
          EvaluationResult: EvaluationResult,
          IsRunning: "boolean",
          SelectedPanel: Panel
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["k" /* compareRecords */])(this, other);
    }
  }]);

  return Model;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.Model", Model);
var Action = function () {
  function Action(caseName, fields) {
    _classCallCheck(this, Action);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(Action, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "View.ViewModel.Action",
        interfaces: ["FSharpUnion", "System.IEquatable"],
        cases: {
          InputAction: [InputAction],
          RegisterAction: [RegisterAction],
          RunAction: [RunAction],
          SelectedPanelChangedAction: [Panel],
          WorkerAction: [__WEBPACK_IMPORTED_MODULE_3__evaluator_hmrpDataStructure__["a" /* InstructionEvaluationResult */]]
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
    }
  }]);

  return Action;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("View.ViewModel.Action", Action);
function createDefaultModel() {
  return new Model(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](), new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](), new EvaluationResult(null, new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](), 0), false, new Panel("Help", []));
}
function createSimpleLoopModel() {
  return new Model(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([new Register(false, 0, 0)]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([new Input(0, 10)]), new EvaluationResult(null, new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](), 0), false, new Panel("Help", []));
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(9)

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegExp__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Date__ = __webpack_require__(4);
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export indexOfAny */
/* harmony export (immutable) */ __webpack_exports__["a"] = fsFormat;
/* unused harmony export format */
/* unused harmony export endsWith */
/* unused harmony export initialize */
/* unused harmony export insert */
/* unused harmony export isNullOrEmpty */
/* unused harmony export isNullOrWhiteSpace */
/* harmony export (immutable) */ __webpack_exports__["b"] = join;
/* unused harmony export newGuid */
/* unused harmony export padLeft */
/* unused harmony export padRight */
/* unused harmony export remove */
/* unused harmony export replace */
/* unused harmony export replicate */
/* unused harmony export split */
/* unused harmony export trim */









var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
var StringComparison = {
    CurrentCulture: 0,
    CurrentCultureIgnoreCase: 1,
    InvariantCulture: 2,
    InvariantCultureIgnoreCase: 3,
    Ordinal: 4,
    OrdinalIgnoreCase: 5,
};
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true ||
            i === StringComparison.CurrentCultureIgnoreCase ||
            i === StringComparison.InvariantCultureIgnoreCase ||
            i === StringComparison.OrdinalIgnoreCase;
    }
    function isOrdinal(i) {
        return i === StringComparison.Ordinal ||
            i === StringComparison.OrdinalIgnoreCase;
    }
    if (x == null)
        return y == null ? 0 : -1;
    if (y == null)
        return 1;
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return (x === y) ? 0 : (x < y ? -1 : 1);
    }
    else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    switch (args.length) {
        case 2: return cmp(args[0], args[1], false);
        case 3: return cmp(args[0], args[1], args[2]);
        case 4: return cmp(args[0], args[1], args[2] === true);
        case 5: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default: throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareTo(x, y) {
    return cmp(x, y, false);
}
function indexOfAny(str, anyOf) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (str == null || str === "")
        return -1;
    var startIndex = (args.length > 0) ? args[0] : 0;
    if (startIndex < 0)
        throw new Error("String.indexOfAny: Start index cannot be negative");
    var length = (args.length > 1) ? args[1] : str.length - startIndex;
    if (length < 0)
        throw new Error("String.indexOfAny: Length cannot be negative");
    if (length > str.length - startIndex)
        throw new Error("String.indexOfAny: Invalid startIndex and length");
    str = str.substr(startIndex, length);
    for (var _a = 0, anyOf_1 = anyOf; _a < anyOf_1.length; _a++) {
        var c = anyOf_1[_a];
        var index = str.indexOf(c);
        if (index > -1)
            return index + startIndex;
    }
    return -1;
}
function toHex(value) {
    return value < 0
        ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16)
        : value.toString(16);
}
function fsFormat(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var _cont;
    function isObject(x) {
        return x !== null && typeof x === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
    }
    function formatOnce(str, rep) {
        return str.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
            switch (format) {
                case "f":
                case "F":
                    rep = rep.toFixed(precision || 6);
                    break;
                case "g":
                case "G":
                    rep = rep.toPrecision(precision);
                    break;
                case "e":
                case "E":
                    rep = rep.toExponential(precision);
                    break;
                case "O":
                    rep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* toString */])(rep);
                    break;
                case "A":
                    try {
                        rep = JSON.stringify(rep, function (k, v) {
                            return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v)
                                : v && typeof v.ToString === "function" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["g" /* toString */])(v) : v;
                        });
                    }
                    catch (err) {
                        rep = "{" + Object.getOwnPropertyNames(rep).map(function (k) { return k + ": " + String(rep[k]); }).join(", ") + "}";
                    }
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
            }
            var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
            if (!isNaN(pad = parseInt(pad))) {
                var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
                rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
            }
            var once = prefix + (plusPrefix ? "+" + rep : rep);
            return once.replace(/%/g, "%%");
        });
    }
    function makeFn(str) {
        return function (rep) {
            var str2 = formatOnce(str, rep);
            return fsFormatRegExp.test(str2)
                ? makeFn(str2) : _cont(str2.replace(/%%/g, "%"));
        };
    }
    if (args.length === 0) {
        return function (cont) {
            _cont = cont;
            return fsFormatRegExp.test(str) ? makeFn(str) : _cont(str);
        };
    }
    else {
        for (var i = 0; i < args.length; i++) {
            str = formatOnce(str, args[i]);
        }
        return str.replace(/%%/g, "%");
    }
}
function format(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return str.replace(formatRegExp, function (match, idx, pad, format) {
        var rep = args[idx], padSymbol = " ";
        if (typeof rep === "number") {
            switch ((format || "").substring(0, 1)) {
                case "f":
                case "F":
                    rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
                    break;
                case "g":
                case "G":
                    rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
                    break;
                case "e":
                case "E":
                    rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
                    break;
                case "p":
                case "P":
                    rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
                default:
                    var m = /^(0+)(\.0+)?$/.exec(format);
                    if (m != null) {
                        var decs = 0;
                        if (m[2] != null)
                            rep = rep.toFixed(decs = m[2].length - 1);
                        pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
                        padSymbol = "0";
                    }
                    else if (format) {
                        rep = format;
                    }
            }
        }
        else if (rep instanceof Date) {
            if (format.length === 1) {
                switch (format) {
                    case "D":
                        rep = rep.toDateString();
                        break;
                    case "T":
                        rep = rep.toLocaleTimeString();
                        break;
                    case "d":
                        rep = rep.toLocaleDateString();
                        break;
                    case "t":
                        rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
                        break;
                    case "o":
                    case "O":
                        if (rep.kind === 2) {
                            var offset = rep.getTimezoneOffset() * -1;
                            rep = format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["a" /* second */])(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
                        }
                        else {
                            rep = rep.toISOString();
                        }
                }
            }
            else {
                rep = format.replace(/\w+/g, function (match2) {
                    var rep2 = match2;
                    switch (match2.substring(0, 1)) {
                        case "y":
                            rep2 = match2.length < 4 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* year */])(rep) % 100 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* year */])(rep);
                            break;
                        case "h":
                            rep2 = rep.getHours() > 12 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep) % 12 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep);
                            break;
                        case "M":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["d" /* month */])(rep);
                            break;
                        case "d":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["e" /* day */])(rep);
                            break;
                        case "H":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* hour */])(rep);
                            break;
                        case "m":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["f" /* minute */])(rep);
                            break;
                        case "s":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["a" /* second */])(rep);
                            break;
                    }
                    if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
                        rep2 = "0" + rep2;
                    }
                    return rep2;
                });
            }
        }
        if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
            rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    var idx = str.lastIndexOf(search);
    return idx >= 0 && idx == str.length - search.length;
}
function initialize(n, f) {
    if (n < 0)
        throw new Error("String length must be non-negative");
    var xs = new Array(n);
    for (var i = 0; i < n; i++)
        xs[i] = f(i);
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length == 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function join(delimiter, xs) {
    xs = typeof xs == "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["m" /* getRestParams */])(arguments, 1) : xs;
    return (Array.isArray(xs) ? xs : Array.from(xs)).join(delimiter);
}
function newGuid() {
    var uuid = "";
    for (var i = 0; i < 32; i++) {
        var random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20)
            uuid += "-";
        uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }
    return uuid;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    str = String(str);
    len = len - str.length;
    for (var i = -1; ++i < len;)
        str = isRight ? str + ch : ch + str;
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && (startIndex + count) > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, function () { return x; });
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count == "number" ? count : null;
    removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
    if (count < 0)
        throw new Error("Count cannot be less than zero");
    if (count === 0)
        return [];
    splitters = Array.isArray(splitters) ? splitters : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["m" /* getRestParams */])(arguments, 1);
    splitters = splitters.map(function (x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(x); });
    splitters = splitters.length > 0 ? splitters : [" "];
    var m;
    var i = 0;
    var splits = [];
    var reg = new RegExp(splitters.join("|"), "g");
    while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
        if (!removeEmpty || (m.index - i) > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || (str.length - i) > 0)
        splits.push(str.substring(i));
    return splits;
}
function trim(str, side) {
    var chars = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        chars[_i - 2] = arguments[_i];
    }
    if (side == "both" && chars.length == 0)
        return str.trim();
    if (side == "start" || side == "both") {
        var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+");
        str = str.replace(reg, "");
    }
    if (side == "end" || side == "both") {
        var reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["a" /* escape */])(chars.join("")) + "]+$");
        str = str.replace(reg, "");
    }
    return str;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_Seq__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_String__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["d"] = listToString;
/* unused harmony export maybeToString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MachineState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionEvaluationResult; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







function listToString(listOfElem) {
    var nbElem = listOfElem.length;

    if (nbElem === 0) {
        return "[]";
    } else {
        var elemsAsString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Seq__["a" /* fold */])(function (accum, elem) {
            return accum + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["g" /* toString */])(elem) + ", ";
        }, "", listOfElem);
        var fixedString = elemsAsString.substr(0, elemsAsString.length - 2);
        return "[" + fixedString + "]";
    }
}
function maybeToString(maybeAThing) {
    if (maybeAThing != null) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["g" /* toString */])(maybeAThing);
    } else {
        return "None";
    }
}
var Register = function () {
    function Register(index, registerValue) {
        _classCallCheck(this, Register);

        this.Index = index;
        this.RegisterValue = registerValue;
    }

    _createClass(Register, [{
        key: __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "Hmrp.HmrpEvaluator.Register",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Index: "number",
                    RegisterValue: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["j" /* Option */])("number")
                }
            };
        }
    }, {
        key: "Equals",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["k" /* compareRecords */])(this, other);
        }
    }, {
        key: "ToString",
        value: function () {
            return "Register at " + String(this.Index);
        }
    }]);

    return Register;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.Register", Register);
var MachineState = function () {
    function MachineState(inputs, outputs, registers, humanValue, currentInstructionLine) {
        _classCallCheck(this, MachineState);

        this.Inputs = inputs;
        this.Outputs = outputs;
        this.Registers = registers;
        this.HumanValue = humanValue;
        this.CurrentInstructionLine = currentInstructionLine;
    }

    _createClass(MachineState, [{
        key: __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "Hmrp.HmrpEvaluator.MachineState",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Inputs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["l" /* Array */])(Int32Array, true),
                    Outputs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["l" /* Array */])(Int32Array, true),
                    Registers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["l" /* Array */])(Register),
                    HumanValue: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["j" /* Option */])("number"),
                    CurrentInstructionLine: "number"
                }
            };
        }
    }, {
        key: "Equals",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["k" /* compareRecords */])(this, other);
        }
    }, {
        key: "ToString",
        value: function () {
            var inputsAsString = listToString(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])(this.Inputs));
            var outputsAsString = listToString(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])(this.Outputs));
            var registersAsStringList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["e" /* map */])(function (r) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_String__["a" /* fsFormat */])("\n        {Index : %i, Value : %s}")(function (x) {
                    return x;
                })(r.Index)(maybeToString(r.RegisterValue));
            }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])(this.Registers));
            var registersAsString = listToString(registersAsStringList);
            var humanValueAsString = this.HumanValue != null ? String(this.HumanValue) : "None";
            var result = "State" + "\n" + "    Inputs: " + inputsAsString + "\n" + "    Outputs: " + outputsAsString + "\n" + "    Registers: " + registersAsString + "\n" + "    Human Value: " + humanValueAsString + "\n" + "    Current Line: " + String(this.CurrentInstructionLine);
            return result;
        }
    }]);

    return MachineState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.MachineState", MachineState);
var InstructionEvaluationResult = function () {
    function InstructionEvaluationResult(caseName, fields) {
        _classCallCheck(this, InstructionEvaluationResult);

        this.Case = caseName;
        this.Fields = fields;
    }

    _createClass(InstructionEvaluationResult, [{
        key: __WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "Hmrp.HmrpEvaluator.InstructionEvaluationResult",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: {
                    End: ["string"],
                    NewState: [MachineState]
                }
            };
        }
    }, {
        key: "Equals",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* compareUnions */])(this, other);
        }
    }]);

    return InstructionEvaluationResult;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.InstructionEvaluationResult", InstructionEvaluationResult);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Symbol__ = __webpack_require__(3);


var GenericComparer = (function () {
    function GenericComparer(f) {
        this.Compare = f || __WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */];
    }
    GenericComparer.prototype[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] = function () {
        return { interfaces: ["System.IComparer"] };
    };
    return GenericComparer;
}());
/* harmony default export */ __webpack_exports__["a"] = GenericComparer;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(3);
/* unused harmony export Long */
/* unused harmony export isLong */
/* unused harmony export fromInt */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromNumber;
/* unused harmony export fromBits */
/* unused harmony export fromString */
/* unused harmony export fromValue */
/* unused harmony export ZERO */
/* unused harmony export UZERO */
/* unused harmony export ONE */
/* unused harmony export UONE */
/* unused harmony export NEG_ONE */
/* unused harmony export MAX_VALUE */
/* unused harmony export MAX_UNSIGNED_VALUE */
/* unused harmony export MIN_VALUE */

var Long = (function () {
    function Long(low, high, unsigned) {
        this.eq = this.equals;
        this.neq = this.notEquals;
        this.lt = this.lessThan;
        this.lte = this.lessThanOrEqual;
        this.gt = this.greaterThan;
        this.gte = this.greaterThanOrEqual;
        this.comp = this.compare;
        this.neg = this.negate;
        this.abs = this.absolute;
        this.sub = this.subtract;
        this.mul = this.multiply;
        this.div = this.divide;
        this.mod = this.modulo;
        this.shl = this.shiftLeft;
        this.shr = this.shiftRight;
        this.shru = this.shiftRightUnsigned;
        this.Equals = this.equals;
        this.CompareTo = this.compare;
        this.ToString = this.toString;
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
    }
    Long.prototype.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
    };
    Long.prototype.toNumber = function () {
        if (this.unsigned)
            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    Long.prototype.toString = function (radix) {
        if (radix === void 0) { radix = 10; }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');
        if (this.isZero())
            return '0';
        if (this.isNegative()) {
            if (this.eq(MIN_VALUE)) {
                var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            }
            else
                return '-' + this.neg().toString(radix);
        }
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = '';
        while (true) {
            var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero())
                return digits + result;
            else {
                while (digits.length < 6)
                    digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    };
    Long.prototype.getHighBits = function () {
        return this.high;
    };
    Long.prototype.getHighBitsUnsigned = function () {
        return this.high >>> 0;
    };
    Long.prototype.getLowBits = function () {
        return this.low;
    };
    Long.prototype.getLowBitsUnsigned = function () {
        return this.low >>> 0;
    };
    Long.prototype.getNumBitsAbs = function () {
        if (this.isNegative())
            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--)
            if ((val & (1 << bit)) != 0)
                break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };
    Long.prototype.isZero = function () {
        return this.high === 0 && this.low === 0;
    };
    Long.prototype.isNegative = function () {
        return !this.unsigned && this.high < 0;
    };
    Long.prototype.isPositive = function () {
        return this.unsigned || this.high >= 0;
    };
    Long.prototype.isOdd = function () {
        return (this.low & 1) === 1;
    };
    Long.prototype.isEven = function () {
        return (this.low & 1) === 0;
    };
    Long.prototype.equals = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
            return false;
        return this.high === other.high && this.low === other.low;
    };
    Long.prototype.notEquals = function (other) {
        return !this.eq(other);
    };
    Long.prototype.lessThan = function (other) {
        return this.comp(other) < 0;
    };
    Long.prototype.lessThanOrEqual = function (other) {
        return this.comp(other) <= 0;
    };
    Long.prototype.greaterThan = function (other) {
        return this.comp(other) > 0;
    };
    Long.prototype.greaterThanOrEqual = function (other) {
        return this.comp(other) >= 0;
    };
    Long.prototype.compare = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.eq(other))
            return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
            return -1;
        if (!thisNeg && otherNeg)
            return 1;
        if (!this.unsigned)
            return this.sub(other).isNegative() ? -1 : 1;
        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
    };
    Long.prototype.negate = function () {
        if (!this.unsigned && this.eq(MIN_VALUE))
            return MIN_VALUE;
        return this.not().add(ONE);
    };
    Long.prototype.absolute = function () {
        if (!this.unsigned && this.isNegative())
            return this.negate();
        else
            return this;
    };
    Long.prototype.add = function (addend) {
        if (!isLong(addend))
            addend = fromValue(addend);
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xFFFF;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xFFFF;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 + b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };
    Long.prototype.subtract = function (subtrahend) {
        if (!isLong(subtrahend))
            subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };
    Long.prototype.multiply = function (multiplier) {
        if (this.isZero())
            return ZERO;
        if (!isLong(multiplier))
            multiplier = fromValue(multiplier);
        if (multiplier.isZero())
            return ZERO;
        if (this.eq(MIN_VALUE))
            return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE))
            return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative())
                return this.neg().mul(multiplier.neg());
            else
                return this.neg().mul(multiplier).neg();
        }
        else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xFFFF;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xFFFF;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };
    Long.prototype.divide = function (divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);
        if (divisor.isZero())
            throw Error('division by zero');
        if (this.isZero())
            return this.unsigned ? UZERO : ZERO;
        var approx = 0, rem = ZERO, res = ZERO;
        if (!this.unsigned) {
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                    return MIN_VALUE;
                else if (divisor.eq(MIN_VALUE))
                    return ONE;
                else {
                    var halfThis = this.shr(1);
                    var approx_1 = halfThis.div(divisor).shl(1);
                    if (approx_1.eq(ZERO)) {
                        return divisor.isNegative() ? ONE : NEG_ONE;
                    }
                    else {
                        rem = this.sub(divisor.mul(approx_1));
                        res = approx_1.add(rem.div(divisor));
                        return res;
                    }
                }
            }
            else if (divisor.eq(MIN_VALUE))
                return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative())
                    return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            }
            else if (divisor.isNegative())
                return this.div(divisor.neg()).neg();
            res = ZERO;
        }
        else {
            if (!divisor.unsigned)
                divisor = divisor.toUnsigned();
            if (divisor.gt(this))
                return UZERO;
            if (divisor.gt(this.shru(1)))
                return UONE;
            res = UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            if (approxRes.isZero())
                approxRes = ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };
    Long.prototype.modulo = function (divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);
        return this.sub(this.div(divisor).mul(divisor));
    };
    ;
    Long.prototype.not = function () {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };
    ;
    Long.prototype.and = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    Long.prototype.or = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    Long.prototype.xor = function (other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    Long.prototype.shiftLeft = function (numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0)
            return this;
        else if (numBits < 32)
            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
        else
            return fromBits(0, this.low << (numBits - 32), this.unsigned);
    };
    Long.prototype.shiftRight = function (numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0)
            return this;
        else if (numBits < 32)
            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
        else
            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    };
    Long.prototype.shiftRightUnsigned = function (numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits = numBits & 63;
        if (numBits === 0)
            return this;
        else {
            var high = this.high;
            if (numBits < 32) {
                var low = this.low;
                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
            }
            else if (numBits === 32)
                return fromBits(high, 0, this.unsigned);
            else
                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    };
    Long.prototype.toSigned = function () {
        if (!this.unsigned)
            return this;
        return fromBits(this.low, this.high, false);
    };
    Long.prototype.toUnsigned = function () {
        if (this.unsigned)
            return this;
        return fromBits(this.low, this.high, true);
    };
    Long.prototype.toBytes = function (le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };
    Long.prototype.toBytesLE = function () {
        var hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            (lo >>> 8) & 0xff,
            (lo >>> 16) & 0xff,
            (lo >>> 24) & 0xff,
            hi & 0xff,
            (hi >>> 8) & 0xff,
            (hi >>> 16) & 0xff,
            (hi >>> 24) & 0xff
        ];
    };
    Long.prototype.toBytesBE = function () {
        var hi = this.high, lo = this.low;
        return [
            (hi >>> 24) & 0xff,
            (hi >>> 16) & 0xff,
            (hi >>> 8) & 0xff,
            hi & 0xff,
            (lo >>> 24) & 0xff,
            (lo >>> 16) & 0xff,
            (lo >>> 8) & 0xff,
            lo & 0xff
        ];
    };
    Long.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "System.Int64",
            interfaces: ["FSharpRecord", "System.IComparable"],
            properties: {
                low: "number",
                high: "number",
                unsigned: "boolean"
            }
        };
    };
    return Long;
}());

var INT_CACHE = {};
var UINT_CACHE = {};
function isLong(obj) {
    return (obj && obj instanceof Long);
}
function fromInt(value, unsigned) {
    if (unsigned === void 0) { unsigned = false; }
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    }
    else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}
function fromNumber(value, unsigned) {
    if (unsigned === void 0) { unsigned = false; }
    if (isNaN(value) || !isFinite(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    }
    else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
var pow_dbl = Math.pow;
function fromString(str, unsigned, radix) {
    if (unsigned === void 0) { unsigned = false; }
    if (radix === void 0) { radix = 10; }
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        radix = unsigned,
            unsigned = false;
    }
    else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        }
        else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
function fromValue(val) {
    if (val instanceof Long)
        return val;
    if (typeof val === 'number')
        return fromNumber(val);
    if (typeof val === 'string')
        return fromString(val);
    return fromBits(val.low, val.high, val.unsigned);
}
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
var ZERO = fromInt(0);
var UZERO = fromInt(0, true);
var ONE = fromInt(1);
var UONE = fromInt(1, true);
var NEG_ONE = fromInt(-1);
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Set__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Seq__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Reflection__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Date__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__String__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["b"] = toJson;
/* unused harmony export inflate */
/* harmony export (immutable) */ __webpack_exports__["a"] = ofJson;
/* unused harmony export toJsonWithTypeInfo */
/* unused harmony export ofJsonWithTypeInfo */















function toJson(o) {
    return JSON.stringify(o, function (k, v) {
        if (ArrayBuffer.isView(v)) {
            return Array.from(v);
        }
        else if (v != null && typeof v === "object") {
            var properties = typeof v[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function" ? v[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().properties : null;
            if (v instanceof __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */] || v instanceof __WEBPACK_IMPORTED_MODULE_2__Set__["a" /* default */] || v instanceof Set) {
                return Array.from(v);
            }
            else if (v instanceof __WEBPACK_IMPORTED_MODULE_3__Map__["b" /* default */] || v instanceof Map) {
                var stringKeys_1 = null;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Seq__["a" /* fold */])(function (o, kv) {
                    if (stringKeys_1 === null) {
                        stringKeys_1 = typeof kv[0] === "string";
                    }
                    o[stringKeys_1 ? kv[0] : toJson(kv[0])] = kv[1];
                    return o;
                }, {}, v);
            }
            else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["n" /* hasInterface */])(v, "FSharpRecord") && properties) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Seq__["a" /* fold */])(function (o, prop) {
                    return o[prop] = v[prop], o;
                }, {}, Object.getOwnPropertyNames(properties));
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["n" /* hasInterface */])(v, "FSharpUnion")) {
                if (!v.Fields || !v.Fields.length) {
                    return v.Case;
                }
                else if (v.Fields.length === 1) {
                    var fieldValue = typeof v.Fields[0] === 'undefined' ? null : v.Fields[0];
                    return _a = {}, _a[v.Case] = fieldValue, _a;
                }
                else {
                    return _b = {}, _b[v.Case] = v.Fields, _b;
                }
            }
        }
        return v;
        var _a, _b;
    });
}
function combine(path1, path2) {
    return typeof path2 === "number"
        ? path1 + "[" + path2 + "]"
        : (path1 ? path1 + "." : "") + path2;
}
function isNullable(typ) {
    if (typeof typ === "string") {
        return typ !== "boolean" && typ !== "number";
    }
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_4__Util__["o" /* NonDeclaredType */]) {
        return typ.kind !== "Array" && typ.kind !== "Tuple";
    }
    else {
        var info = typeof typ.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function"
            ? typ.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]() : null;
        return info ? info.nullable : true;
    }
}
function invalidate(val, typ, path) {
    throw new Error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__String__["a" /* fsFormat */])("%A", val) + " " + (path ? "(" + path + ")" : "") + " is not of type " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["a" /* getTypeFullName */])(typ));
}
function needsInflate(enclosing) {
    var typ = enclosing.head;
    if (typeof typ === "string") {
        return false;
    }
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_4__Util__["o" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Option":
            case "Array":
                return typ.definition != null || needsInflate(new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](typ.generics, enclosing));
            case "Tuple":
                return typ.generics.some(function (x) {
                    return needsInflate(new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](x, enclosing));
                });
            case "GenericParam":
                return needsInflate(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(typ.definition, enclosing.tail));
            case "GenericType":
                return true;
            default:
                return false;
        }
    }
    return true;
}
function inflateArray(arr, enclosing, path) {
    if (!Array.isArray) {
        invalidate(arr, "array", path);
    }
    return needsInflate(enclosing)
        ? arr.map(function (x, i) { return inflate(x, enclosing, combine(path, i)); })
        : arr;
}
function inflateMap(obj, keyEnclosing, valEnclosing, path) {
    var inflateKey = keyEnclosing.head !== "string";
    var inflateVal = needsInflate(valEnclosing);
    return Object
        .getOwnPropertyNames(obj)
        .map(function (k) {
        var key = inflateKey ? inflate(JSON.parse(k), keyEnclosing, combine(path, k)) : k;
        var val = inflateVal ? inflate(obj[k], valEnclosing, combine(path, k)) : obj[k];
        return [key, val];
    });
}
function inflateList(val, enclosing, path) {
    var ar = [], li = new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](), cur = val, inf = needsInflate(enclosing);
    while (cur.tail != null) {
        ar.push(inf ? inflate(cur.head, enclosing, path) : cur.head);
        cur = cur.tail;
    }
    ar.reverse();
    for (var i = 0; i < ar.length; i++) {
        li = new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](ar[i], li);
    }
    return li;
}
function inflate(val, typ, path) {
    var enclosing = null;
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */]) {
        enclosing = typ;
        typ = typ.head;
    }
    else {
        enclosing = new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](typ, new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */]());
    }
    if (val == null) {
        if (!isNullable(typ)) {
            invalidate(val, typ, path);
        }
        return val;
    }
    else if (typeof typ === "string") {
        if ((typ === "boolean" || typ === "number" || typ === "string") && (typeof val !== typ)) {
            invalidate(val, typ, path);
        }
        return val;
    }
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_4__Util__["o" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Unit":
                return null;
            case "Option":
                return inflate(val, new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](typ.generics, enclosing), path);
            case "Array":
                if (typ.definition != null) {
                    return new typ.definition(val);
                }
                else {
                    return inflateArray(val, new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](typ.generics, enclosing), path);
                }
            case "Tuple":
                return typ.generics.map(function (x, i) {
                    return inflate(val[i], new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](x, enclosing), combine(path, i));
                });
            case "GenericParam":
                return inflate(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(typ.definition, enclosing.tail), path);
            case "GenericType":
                var def = typ.definition;
                if (def === __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */]) {
                    return Array.isArray(val)
                        ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])(inflateArray(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path))
                        : inflateList(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path);
                }
                if (def === __WEBPACK_IMPORTED_MODULE_2__Set__["a" /* default */]) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Set__["b" /* create */])(inflateArray(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path));
                }
                if (def === Set) {
                    return new Set(inflateArray(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path));
                }
                if (def === __WEBPACK_IMPORTED_MODULE_3__Map__["b" /* default */]) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Map__["c" /* create */])(inflateMap(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(1, enclosing), path));
                }
                if (def === Map) {
                    return new Map(inflateMap(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(1, enclosing), path));
                }
                return inflate(val, new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](typ.definition, enclosing), path);
            default:
                return val;
        }
    }
    else if (typeof typ === "function") {
        if (typ === Date) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Date__["g" /* parse */])(val);
        }
        var info = typeof typ.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function" ? typ.prototype[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]() : {};
        if (info.cases) {
            var uCase = void 0, uFields = [];
            if (typeof val === "string") {
                uCase = val;
            }
            else if (typeof val.Case === "string" && Array.isArray(val.Fields)) {
                uCase = val.Case;
                uFields = val.Fields;
            }
            else {
                var caseName = Object.getOwnPropertyNames(val)[0];
                var fieldTypes = info.cases[caseName];
                if (Array.isArray(fieldTypes)) {
                    var fields = fieldTypes.length > 1 ? val[caseName] : [val[caseName]];
                    uCase = caseName;
                    path = combine(path, caseName);
                    for (var i = 0; i < fieldTypes.length; i++) {
                        uFields.push(inflate(fields[i], new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](fieldTypes[i], enclosing), combine(path, i)));
                    }
                }
            }
            if (uCase in info.cases === false) {
                invalidate(val, typ, path);
            }
            return new typ(uCase, uFields);
        }
        if (info.properties) {
            var newObj = new typ();
            var properties = info.properties;
            var ks = Object.getOwnPropertyNames(properties);
            for (var i = 0; i < ks.length; i++) {
                var k = ks[i];
                newObj[k] = inflate(val[k], new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](properties[k], enclosing), combine(path, k));
            }
            return newObj;
        }
        return val;
    }
    throw new Error("Unexpected type when deserializing JSON: " + typ);
}
function inflatePublic(val, genArgs) {
    return inflate(val, genArgs ? genArgs.T : null, "");
}

function ofJson(json, genArgs) {
    return inflate(JSON.parse(json), genArgs ? genArgs.T : null, "");
}
function toJsonWithTypeInfo(o) {
    return JSON.stringify(o, function (k, v) {
        if (ArrayBuffer.isView(v)) {
            return Array.from(v);
        }
        else if (v != null && typeof v === "object") {
            var typeName = typeof v[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection] === "function" ? v[__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection]().type : null;
            if (v instanceof __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */] || v instanceof __WEBPACK_IMPORTED_MODULE_2__Set__["a" /* default */] || v instanceof Set) {
                return {
                    $type: typeName || "System.Collections.Generic.HashSet",
                    $values: Array.from(v)
                };
            }
            else if (v instanceof __WEBPACK_IMPORTED_MODULE_3__Map__["b" /* default */] || v instanceof Map) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Seq__["a" /* fold */])(function (o, kv) { o[kv[0]] = kv[1]; return o; }, { $type: typeName || "System.Collections.Generic.Dictionary" }, v);
            }
            else if (typeName) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["n" /* hasInterface */])(v, "FSharpUnion") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["n" /* hasInterface */])(v, "FSharpRecord")) {
                    return Object.assign({ $type: typeName }, v);
                }
                else {
                    var proto = Object.getPrototypeOf(v), props = Object.getOwnPropertyNames(proto), o_1 = { $type: typeName };
                    for (var i = 0; i < props.length; i++) {
                        var prop = Object.getOwnPropertyDescriptor(proto, props[i]);
                        if (prop.get)
                            o_1[props[i]] = prop.get.apply(v);
                    }
                    return o_1;
                }
            }
        }
        return v;
    });
}
function ofJsonWithTypeInfo(json, genArgs) {
    var parsed = JSON.parse(json, function (k, v) {
        if (v == null)
            return v;
        else if (typeof v === "object" && typeof v.$type === "string") {
            var type = v.$type.replace('+', '.'), i = type.indexOf('`');
            if (i > -1) {
                type = type.substr(0, i);
            }
            else {
                i = type.indexOf(',');
                type = i > -1 ? type.substr(0, i) : type;
            }
            if (type === "System.Collections.Generic.List" || (type.indexOf("[]") === type.length - 2)) {
                return v.$values;
            }
            if (type === "Microsoft.FSharp.Collections.FSharpList") {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__List__["b" /* ofArray */])(v.$values);
            }
            else if (type == "Microsoft.FSharp.Collections.FSharpSet") {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Set__["b" /* create */])(v.$values);
            }
            else if (type == "System.Collections.Generic.HashSet") {
                return new Set(v.$values);
            }
            else if (type == "Microsoft.FSharp.Collections.FSharpMap") {
                delete v.$type;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Map__["c" /* create */])(Object.getOwnPropertyNames(v)
                    .map(function (k) { return [k, v[k]]; }));
            }
            else if (type == "System.Collections.Generic.Dictionary") {
                delete v.$type;
                return new Map(Object.getOwnPropertyNames(v)
                    .map(function (k) { return [k, v[k]]; }));
            }
            else {
                var T = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Symbol__["c" /* getType */])(type);
                if (T) {
                    delete v.$type;
                    return Object.assign(new T(), v);
                }
            }
        }
        else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[+-]\d{2}:\d{2}|Z)$/.test(v))
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Date__["g" /* parse */])(v);
        else
            return v;
    });
    var expected = genArgs ? genArgs.T : null;
    if (parsed != null && typeof expected === "function"
        && !(parsed instanceof __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["p" /* getDefinition */])(expected))) {
        throw new Error("JSON is not of type " + expected.name + ": " + json);
    }
    return parsed;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericComparer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Seq__ = __webpack_require__(2);
/* unused harmony export distinctBy */
/* unused harmony export distinct */
/* unused harmony export SetTree */
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* unused harmony export isEmpty */
/* unused harmony export add */
/* unused harmony export addInPlace */
/* unused harmony export remove */
/* unused harmony export union */
/* unused harmony export op_Addition */
/* unused harmony export unionInPlace */
/* unused harmony export unionMany */
/* unused harmony export difference */
/* unused harmony export op_Subtraction */
/* unused harmony export differenceInPlace */
/* unused harmony export intersect */
/* unused harmony export intersectInPlace */
/* unused harmony export intersectMany */
/* unused harmony export isProperSubsetOf */
/* unused harmony export isProperSubset */
/* unused harmony export isSubsetOf */
/* unused harmony export isSubset */
/* unused harmony export isProperSupersetOf */
/* unused harmony export isProperSuperset */
/* unused harmony export isSupersetOf */
/* unused harmony export isSuperset */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* unused harmony export filter */
/* unused harmony export map */
/* unused harmony export exists */
/* unused harmony export forAll */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export iterate */
/* unused harmony export minimumElement */
/* unused harmony export minElement */
/* unused harmony export maximumElement */
/* unused harmony export maxElement */












function distinctBy(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["h" /* choose */])(function (tup) { return tup[0]; }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["i" /* scan */])(function (tup, x) {
        var acc = tup[1];
        var k = f(x);
        return acc.has(k) ? [null, acc] : [x, add(k, acc)];
    }, [null, create()], xs));
}
function distinct(xs) {
    return distinctBy(function (x) { return x; }, xs);
}
var SetTree = (function () {
    function SetTree(caseName, fields) {
        this.Case = caseName;
        this.Fields = fields;
    }
    return SetTree;
}());

var tree_tolerance = 2;
function tree_countAux(s, acc) {
    return s.Case === "SetOne" ? acc + 1 : s.Case === "SetEmpty" ? acc : tree_countAux(s.Fields[1], tree_countAux(s.Fields[2], acc + 1));
}
function tree_count(s) {
    return tree_countAux(s, 0);
}
function tree_SetOne(n) {
    return new SetTree("SetOne", [n]);
}
function tree_SetNode(x, l, r, h) {
    return new SetTree("SetNode", [x, l, r, h]);
}
function tree_height(t) {
    return t.Case === "SetOne" ? 1 : t.Case === "SetNode" ? t.Fields[3] : 0;
}
function tree_mk(l, k, r) {
    var matchValue = [l, r];
    var $target1 = function () {
        var hl = tree_height(l);
        var hr = tree_height(r);
        var m = hl < hr ? hr : hl;
        return tree_SetNode(k, l, r, m + 1);
    };
    if (matchValue[0].Case === "SetEmpty") {
        if (matchValue[1].Case === "SetEmpty") {
            return tree_SetOne(k);
        }
        else {
            return $target1();
        }
    }
    else {
        return $target1();
    }
}
function tree_rebalance(t1, k, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + tree_tolerance) {
        if (t2.Case === "SetNode") {
            if (tree_height(t2.Fields[1]) > t1h + 1) {
                if (t2.Fields[1].Case === "SetNode") {
                    return tree_mk(tree_mk(t1, k, t2.Fields[1].Fields[1]), t2.Fields[1].Fields[0], tree_mk(t2.Fields[1].Fields[2], t2.Fields[0], t2.Fields[2]));
                }
                else {
                    throw new Error("rebalance");
                }
            }
            else {
                return tree_mk(tree_mk(t1, k, t2.Fields[1]), t2.Fields[0], t2.Fields[2]);
            }
        }
        else {
            throw new Error("rebalance");
        }
    }
    else {
        if (t1h > t2h + tree_tolerance) {
            if (t1.Case === "SetNode") {
                if (tree_height(t1.Fields[2]) > t2h + 1) {
                    if (t1.Fields[2].Case === "SetNode") {
                        return tree_mk(tree_mk(t1.Fields[1], t1.Fields[0], t1.Fields[2].Fields[1]), t1.Fields[2].Fields[0], tree_mk(t1.Fields[2].Fields[2], k, t2));
                    }
                    else {
                        throw new Error("rebalance");
                    }
                }
                else {
                    return tree_mk(t1.Fields[1], t1.Fields[0], tree_mk(t1.Fields[2], k, t2));
                }
            }
            else {
                throw new Error("rebalance");
            }
        }
        else {
            return tree_mk(t1, k, t2);
        }
    }
}
function tree_add(comparer, k, t) {
    if (t.Case === "SetOne") {
        var c = comparer.Compare(k, t.Fields[0]);
        if (c < 0) {
            return tree_SetNode(k, new SetTree("SetEmpty", []), t, 2);
        }
        else if (c === 0) {
            return t;
        }
        else {
            return tree_SetNode(k, t, new SetTree("SetEmpty", []), 2);
        }
    }
    else if (t.Case === "SetEmpty") {
        return tree_SetOne(k);
    }
    else {
        var c = comparer.Compare(k, t.Fields[0]);
        if (c < 0) {
            return tree_rebalance(tree_add(comparer, k, t.Fields[1]), t.Fields[0], t.Fields[2]);
        }
        else if (c === 0) {
            return t;
        }
        else {
            return tree_rebalance(t.Fields[1], t.Fields[0], tree_add(comparer, k, t.Fields[2]));
        }
    }
}
function tree_balance(comparer, t1, k, t2) {
    var matchValue = [t1, t2];
    var $target1 = function (t1_1) { return tree_add(comparer, k, t1_1); };
    var $target2 = function (k1, t2_1) { return tree_add(comparer, k, tree_add(comparer, k1, t2_1)); };
    if (matchValue[0].Case === "SetOne") {
        if (matchValue[1].Case === "SetEmpty") {
            return $target1(matchValue[0]);
        }
        else {
            if (matchValue[1].Case === "SetOne") {
                return $target2(matchValue[0].Fields[0], matchValue[1]);
            }
            else {
                return $target2(matchValue[0].Fields[0], matchValue[1]);
            }
        }
    }
    else {
        if (matchValue[0].Case === "SetNode") {
            if (matchValue[1].Case === "SetOne") {
                var k2 = matchValue[1].Fields[0];
                var t1_1 = matchValue[0];
                return tree_add(comparer, k, tree_add(comparer, k2, t1_1));
            }
            else {
                if (matchValue[1].Case === "SetNode") {
                    var h1 = matchValue[0].Fields[3];
                    var h2 = matchValue[1].Fields[3];
                    var k1 = matchValue[0].Fields[0];
                    var k2 = matchValue[1].Fields[0];
                    var t11 = matchValue[0].Fields[1];
                    var t12 = matchValue[0].Fields[2];
                    var t21 = matchValue[1].Fields[1];
                    var t22 = matchValue[1].Fields[2];
                    if (h1 + tree_tolerance < h2) {
                        return tree_rebalance(tree_balance(comparer, t1, k, t21), k2, t22);
                    }
                    else {
                        if (h2 + tree_tolerance < h1) {
                            return tree_rebalance(t11, k1, tree_balance(comparer, t12, k, t2));
                        }
                        else {
                            return tree_mk(t1, k, t2);
                        }
                    }
                }
                else {
                    return $target1(matchValue[0]);
                }
            }
        }
        else {
            var t2_1 = matchValue[1];
            return tree_add(comparer, k, t2_1);
        }
    }
}
function tree_split(comparer, pivot, t) {
    if (t.Case === "SetOne") {
        var c = comparer.Compare(t.Fields[0], pivot);
        if (c < 0) {
            return [t, false, new SetTree("SetEmpty", [])];
        }
        else if (c === 0) {
            return [new SetTree("SetEmpty", []), true, new SetTree("SetEmpty", [])];
        }
        else {
            return [new SetTree("SetEmpty", []), false, t];
        }
    }
    else if (t.Case === "SetEmpty") {
        return [new SetTree("SetEmpty", []), false, new SetTree("SetEmpty", [])];
    }
    else {
        var c = comparer.Compare(pivot, t.Fields[0]);
        if (c < 0) {
            var patternInput = tree_split(comparer, pivot, t.Fields[1]);
            return [patternInput[0], patternInput[1], tree_balance(comparer, patternInput[2], t.Fields[0], t.Fields[2])];
        }
        else if (c === 0) {
            return [t.Fields[1], true, t.Fields[2]];
        }
        else {
            var patternInput = tree_split(comparer, pivot, t.Fields[2]);
            return [tree_balance(comparer, t.Fields[1], t.Fields[0], patternInput[0]), patternInput[1], patternInput[2]];
        }
    }
}
function tree_spliceOutSuccessor(t) {
    if (t.Case === "SetOne") {
        return [t.Fields[0], new SetTree("SetEmpty", [])];
    }
    else if (t.Case === "SetNode") {
        if (t.Fields[1].Case === "SetEmpty") {
            return [t.Fields[0], t.Fields[2]];
        }
        else {
            var patternInput = tree_spliceOutSuccessor(t.Fields[1]);
            return [patternInput[0], tree_mk(patternInput[1], t.Fields[0], t.Fields[2])];
        }
    }
    else {
        throw new Error("internal error: Map.spliceOutSuccessor");
    }
}
function tree_remove(comparer, k, t) {
    if (t.Case === "SetOne") {
        var c = comparer.Compare(k, t.Fields[0]);
        if (c === 0) {
            return new SetTree("SetEmpty", []);
        }
        else {
            return t;
        }
    }
    else if (t.Case === "SetNode") {
        var c = comparer.Compare(k, t.Fields[0]);
        if (c < 0) {
            return tree_rebalance(tree_remove(comparer, k, t.Fields[1]), t.Fields[0], t.Fields[2]);
        }
        else if (c === 0) {
            var matchValue = [t.Fields[1], t.Fields[2]];
            if (matchValue[0].Case === "SetEmpty") {
                return t.Fields[2];
            }
            else if (matchValue[1].Case === "SetEmpty") {
                return t.Fields[1];
            }
            else {
                var patternInput = tree_spliceOutSuccessor(t.Fields[2]);
                return tree_mk(t.Fields[1], patternInput[0], patternInput[1]);
            }
        }
        else {
            return tree_rebalance(t.Fields[1], t.Fields[0], tree_remove(comparer, k, t.Fields[2]));
        }
    }
    else {
        return t;
    }
}
function tree_mem(comparer, k, t) {
    if (t.Case === "SetOne") {
        return comparer.Compare(k, t.Fields[0]) === 0;
    }
    else if (t.Case === "SetEmpty") {
        return false;
    }
    else {
        var c = comparer.Compare(k, t.Fields[0]);
        if (c < 0) {
            return tree_mem(comparer, k, t.Fields[1]);
        }
        else if (c === 0) {
            return true;
        }
        else {
            return tree_mem(comparer, k, t.Fields[2]);
        }
    }
}
function tree_iter(f, t) {
    if (t.Case === "SetOne") {
        f(t.Fields[0]);
    }
    else {
        if (t.Case === "SetEmpty") { }
        else {
            tree_iter(f, t.Fields[1]);
            f(t.Fields[0]);
            tree_iter(f, t.Fields[2]);
        }
    }
}
function tree_foldBack(f, m, x) {
    return m.Case === "SetOne" ? f(m.Fields[0], x) : m.Case === "SetEmpty" ? x : tree_foldBack(f, m.Fields[1], f(m.Fields[0], tree_foldBack(f, m.Fields[2], x)));
}
function tree_fold(f, x, m) {
    if (m.Case === "SetOne") {
        return f(x, m.Fields[0]);
    }
    else if (m.Case === "SetEmpty") {
        return x;
    }
    else {
        var x_1 = tree_fold(f, x, m.Fields[1]);
        var x_2 = f(x_1, m.Fields[0]);
        return tree_fold(f, x_2, m.Fields[2]);
    }
}
function tree_forall(f, m) {
    return m.Case === "SetOne" ? f(m.Fields[0]) : m.Case === "SetEmpty" ? true : (f(m.Fields[0]) ? tree_forall(f, m.Fields[1]) : false) ? tree_forall(f, m.Fields[2]) : false;
}
function tree_exists(f, m) {
    return m.Case === "SetOne" ? f(m.Fields[0]) : m.Case === "SetEmpty" ? false : (f(m.Fields[0]) ? true : tree_exists(f, m.Fields[1])) ? true : tree_exists(f, m.Fields[2]);
}
function tree_isEmpty(m) {
    return m.Case === "SetEmpty" ? true : false;
}
function tree_subset(comparer, a, b) {
    return tree_forall(function (x) { return tree_mem(comparer, x, b); }, a);
}
function tree_psubset(comparer, a, b) {
    return tree_forall(function (x) { return tree_mem(comparer, x, b); }, a) ? tree_exists(function (x) { return !tree_mem(comparer, x, a); }, b) : false;
}
function tree_filterAux(comparer, f, s, acc) {
    if (s.Case === "SetOne") {
        if (f(s.Fields[0])) {
            return tree_add(comparer, s.Fields[0], acc);
        }
        else {
            return acc;
        }
    }
    else if (s.Case === "SetEmpty") {
        return acc;
    }
    else {
        var acc_1 = f(s.Fields[0]) ? tree_add(comparer, s.Fields[0], acc) : acc;
        return tree_filterAux(comparer, f, s.Fields[1], tree_filterAux(comparer, f, s.Fields[2], acc_1));
    }
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, new SetTree("SetEmpty", []));
}
function tree_diffAux(comparer, m, acc) {
    return m.Case === "SetOne" ? tree_remove(comparer, m.Fields[0], acc) : m.Case === "SetEmpty" ? acc : tree_diffAux(comparer, m.Fields[1], tree_diffAux(comparer, m.Fields[2], tree_remove(comparer, m.Fields[0], acc)));
}
function tree_diff(comparer, a, b) {
    return tree_diffAux(comparer, b, a);
}
function tree_union(comparer, t1, t2) {
    var matchValue = [t1, t2];
    var $target2 = function (t) { return t; };
    var $target3 = function (k1, t2_1) { return tree_add(comparer, k1, t2_1); };
    if (matchValue[0].Case === "SetEmpty") {
        var t = matchValue[1];
        return t;
    }
    else {
        if (matchValue[0].Case === "SetOne") {
            if (matchValue[1].Case === "SetEmpty") {
                return $target2(matchValue[0]);
            }
            else {
                if (matchValue[1].Case === "SetOne") {
                    return $target3(matchValue[0].Fields[0], matchValue[1]);
                }
                else {
                    return $target3(matchValue[0].Fields[0], matchValue[1]);
                }
            }
        }
        else {
            if (matchValue[1].Case === "SetEmpty") {
                return $target2(matchValue[0]);
            }
            else {
                if (matchValue[1].Case === "SetOne") {
                    var k2 = matchValue[1].Fields[0];
                    var t1_1 = matchValue[0];
                    return tree_add(comparer, k2, t1_1);
                }
                else {
                    var h1 = matchValue[0].Fields[3];
                    var h2 = matchValue[1].Fields[3];
                    var k1 = matchValue[0].Fields[0];
                    var k2 = matchValue[1].Fields[0];
                    var t11 = matchValue[0].Fields[1];
                    var t12 = matchValue[0].Fields[2];
                    var t21 = matchValue[1].Fields[1];
                    var t22 = matchValue[1].Fields[2];
                    if (h1 > h2) {
                        var patternInput = tree_split(comparer, k1, t2);
                        var lo = patternInput[0];
                        var hi = patternInput[2];
                        return tree_balance(comparer, tree_union(comparer, t11, lo), k1, tree_union(comparer, t12, hi));
                    }
                    else {
                        var patternInput = tree_split(comparer, k2, t1);
                        var lo = patternInput[0];
                        var hi = patternInput[2];
                        return tree_balance(comparer, tree_union(comparer, t21, lo), k2, tree_union(comparer, t22, hi));
                    }
                }
            }
        }
    }
}
function tree_intersectionAux(comparer, b, m, acc) {
    if (m.Case === "SetOne") {
        if (tree_mem(comparer, m.Fields[0], b)) {
            return tree_add(comparer, m.Fields[0], acc);
        }
        else {
            return acc;
        }
    }
    else if (m.Case === "SetEmpty") {
        return acc;
    }
    else {
        var acc_1 = tree_intersectionAux(comparer, b, m.Fields[2], acc);
        var acc_2 = tree_mem(comparer, m.Fields[0], b) ? tree_add(comparer, m.Fields[0], acc_1) : acc_1;
        return tree_intersectionAux(comparer, b, m.Fields[1], acc_2);
    }
}
function tree_intersection(comparer, a, b) {
    return tree_intersectionAux(comparer, b, a, new SetTree("SetEmpty", []));
}
function tree_partition1(comparer, f, k, acc1, acc2) {
    return f(k) ? [tree_add(comparer, k, acc1), acc2] : [acc1, tree_add(comparer, k, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.Case === "SetOne") {
        var acc1 = acc[0];
        var acc2 = acc[1];
        return tree_partition1(comparer, f, s.Fields[0], acc1, acc2);
    }
    else {
        if (s.Case === "SetEmpty") {
            return acc;
        }
        else {
            var acc_2 = tree_partitionAux(comparer, f, s.Fields[2], acc[0], acc[1]);
            var acc_3 = tree_partition1(comparer, f, s.Fields[0], acc_2[0], acc_2[1]);
            return tree_partitionAux(comparer, f, s.Fields[1], acc_3[0], acc_3[1]);
        }
    }
}
function tree_partition(comparer, f, s) {
    var seed = [new SetTree("SetEmpty", []), new SetTree("SetEmpty", [])];
    var arg30_ = seed[0];
    var arg31_ = seed[1];
    return tree_partitionAux(comparer, f, s, arg30_, arg31_);
}
function tree_minimumElementAux(s, n) {
    return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? n : tree_minimumElementAux(s.Fields[1], s.Fields[0]);
}
function tree_minimumElementOpt(s) {
    return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? null : tree_minimumElementAux(s.Fields[1], s.Fields[0]);
}
function tree_maximumElementAux(s, n) {
    return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? n : tree_maximumElementAux(s.Fields[2], s.Fields[0]);
}
function tree_maximumElementOpt(s) {
    return s.Case === "SetOne" ? s.Fields[0] : s.Case === "SetEmpty" ? null : tree_maximumElementAux(s.Fields[2], s.Fields[0]);
}
function tree_minimumElement(s) {
    var matchValue = tree_minimumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    }
    else {
        return matchValue;
    }
}
function tree_maximumElement(s) {
    var matchValue = tree_maximumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    }
    else {
        return matchValue;
    }
}
function tree_collapseLHS(stack) {
    return stack.tail != null
        ? stack.head.Case === "SetOne"
            ? stack
            : stack.head.Case === "SetNode"
                ? tree_collapseLHS(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([
                    stack.head.Fields[1],
                    tree_SetOne(stack.head.Fields[0]),
                    stack.head.Fields[2]
                ], stack.tail))
                : tree_collapseLHS(stack.tail)
        : new __WEBPACK_IMPORTED_MODULE_0__List__["c" /* default */]();
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_0__List__["c" /* default */](s, new __WEBPACK_IMPORTED_MODULE_0__List__["c" /* default */]())), started: false };
}
;
function tree_moveNext(i) {
    function current(i) {
        if (i.stack.tail == null) {
            return null;
        }
        else if (i.stack.head.Case === "SetOne") {
            return i.stack.head.Fields[0];
        }
        throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        }
        else {
            if (i.stack.head.Case === "SetOne") {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            }
            else {
                throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
            }
        }
    }
    else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
    ;
}
function tree_compareStacks(comparer, l1, l2) {
    var $target8 = function (n1k, t1) { return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([new SetTree("SetEmpty", []), tree_SetOne(n1k)], t1), l2); };
    var $target9 = function (n1k, n1l, n1r, t1) { return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([n1l, tree_SetNode(n1k, new SetTree("SetEmpty", []), n1r, 0)], t1), l2); };
    var $target11 = function (n2k, n2l, n2r, t2) { return tree_compareStacks(comparer, l1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([n2l, tree_SetNode(n2k, new SetTree("SetEmpty", []), n2r, 0)], t2)); };
    if (l1.tail != null) {
        if (l2.tail != null) {
            if (l2.head.Case === "SetOne") {
                if (l1.head.Case === "SetOne") {
                    var n1k = l1.head.Fields[0], n2k = l2.head.Fields[0], t1 = l1.tail, t2 = l2.tail, c = comparer.Compare(n1k, n2k);
                    if (c !== 0) {
                        return c;
                    }
                    else {
                        return tree_compareStacks(comparer, t1, t2);
                    }
                }
                else {
                    if (l1.head.Case === "SetNode") {
                        if (l1.head.Fields[1].Case === "SetEmpty") {
                            var emp = l1.head.Fields[1], n1k = l1.head.Fields[0], n1r = l1.head.Fields[2], n2k = l2.head.Fields[0], t1 = l1.tail, t2 = l2.tail, c = comparer.Compare(n1k, n2k);
                            if (c !== 0) {
                                return c;
                            }
                            else {
                                return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([n1r], t1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([emp], t2));
                            }
                        }
                        else {
                            return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
                        }
                    }
                    else {
                        var n2k = l2.head.Fields[0], t2 = l2.tail;
                        return tree_compareStacks(comparer, l1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([new SetTree("SetEmpty", []), tree_SetOne(n2k)], t2));
                    }
                }
            }
            else {
                if (l2.head.Case === "SetNode") {
                    if (l2.head.Fields[1].Case === "SetEmpty") {
                        if (l1.head.Case === "SetOne") {
                            var n1k = l1.head.Fields[0], n2k = l2.head.Fields[0], n2r = l2.head.Fields[2], t1 = l1.tail, t2 = l2.tail, c = comparer.Compare(n1k, n2k);
                            if (c !== 0) {
                                return c;
                            }
                            else {
                                return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([new SetTree("SetEmpty", [])], t1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([n2r], t2));
                            }
                        }
                        else {
                            if (l1.head.Case === "SetNode") {
                                if (l1.head.Fields[1].Case === "SetEmpty") {
                                    var n1k = l1.head.Fields[0], n1r = l1.head.Fields[2], n2k = l2.head.Fields[0], n2r = l2.head.Fields[2], t1 = l1.tail, t2 = l2.tail, c = comparer.Compare(n1k, n2k);
                                    if (c !== 0) {
                                        return c;
                                    }
                                    else {
                                        return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([n1r], t1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([n2r], t2));
                                    }
                                }
                                else {
                                    return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
                                }
                            }
                            else {
                                return $target11(l2.head.Fields[0], l2.head.Fields[1], l2.head.Fields[2], l2.tail);
                            }
                        }
                    }
                    else {
                        if (l1.head.Case === "SetOne") {
                            return $target8(l1.head.Fields[0], l1.tail);
                        }
                        else {
                            if (l1.head.Case === "SetNode") {
                                return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
                            }
                            else {
                                return $target11(l2.head.Fields[0], l2.head.Fields[1], l2.head.Fields[2], l2.tail);
                            }
                        }
                    }
                }
                else {
                    if (l1.head.Case === "SetOne") {
                        return $target8(l1.head.Fields[0], l1.tail);
                    }
                    else {
                        if (l1.head.Case === "SetNode") {
                            return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
                        }
                        else {
                            return tree_compareStacks(comparer, l1.tail, l2.tail);
                        }
                    }
                }
            }
        }
        else {
            return 1;
        }
    }
    else {
        if (l2.tail != null) {
            return -1;
        }
        else {
            return 0;
        }
    }
}
function tree_compare(comparer, s1, s2) {
    if (s1.Case === "SetEmpty") {
        if (s2.Case === "SetEmpty") {
            return 0;
        }
        else {
            return -1;
        }
    }
    else {
        if (s2.Case === "SetEmpty") {
            return 1;
        }
        else {
            return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([s1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["b" /* ofArray */])([s2]));
        }
    }
}
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value, acc);
        cur = e.next();
    }
    return acc;
}
function tree_ofSeq(comparer, c) {
    var ie = c[Symbol.iterator]();
    return tree_mkFromEnumerator(comparer, new SetTree("SetEmpty", []), ie);
}
var FableSet = (function () {
    function FableSet() {
    }
    FableSet.prototype.ToString = function () {
        return "set [" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["g" /* toString */]).join("; ") + "]";
    };
    FableSet.prototype.Equals = function (s2) {
        return this.CompareTo(s2) === 0;
    };
    FableSet.prototype.CompareTo = function (s2) {
        return this === s2 ? 0 : tree_compare(this.comparer, this.tree, s2.tree);
    };
    FableSet.prototype[Symbol.iterator] = function () {
        var i = tree_mkIterator(this.tree);
        return {
            next: function () { return tree_moveNext(i); }
        };
    };
    FableSet.prototype.values = function () {
        return this[Symbol.iterator]();
    };
    FableSet.prototype.has = function (v) {
        return tree_mem(this.comparer, v, this.tree);
    };
    FableSet.prototype.add = function (v) {
        throw new Error("not supported");
    };
    FableSet.prototype.delete = function (v) {
        throw new Error("not supported");
    };
    FableSet.prototype.clear = function () {
        throw new Error("not supported");
    };
    Object.defineProperty(FableSet.prototype, "size", {
        get: function () {
            return tree_count(this.tree);
        },
        enumerable: true,
        configurable: true
    });
    FableSet.prototype[__WEBPACK_IMPORTED_MODULE_3__Symbol__["a" /* default */].reflection] = function () {
        return {
            type: "Microsoft.FSharp.Collections.FSharpSet",
            interfaces: ["System.IEquatable", "System.IComparable"]
        };
    };
    return FableSet;
}());
/* harmony default export */ __webpack_exports__["a"] = FableSet;
function from(comparer, tree) {
    var s = new FableSet();
    s.tree = tree;
    s.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_2__GenericComparer__["a" /* default */]();
    return s;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_2__GenericComparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : new SetTree("SetEmpty", []));
}
function isEmpty(s) {
    return tree_isEmpty(s.tree);
}
function add(item, s) {
    return from(s.comparer, tree_add(s.comparer, item, s.tree));
}
function addInPlace(item, s) {
    return s.has(item) ? false : (s.add(item), true);
}
function remove(item, s) {
    return from(s.comparer, tree_remove(s.comparer, item, s.tree));
}
function union(set1, set2) {
    return set2.tree.Case === "SetEmpty"
        ? set1
        : set1.tree.Case === "SetEmpty"
            ? set2
            : from(set1.comparer, tree_union(set1.comparer, set1.tree, set2.tree));
}
function op_Addition(set1, set2) {
    return union(set1, set2);
}
function unionInPlace(set1, set2) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["j" /* iterate */])(function (x) { set1.add(x); }, set2);
}
function unionMany(sets) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["a" /* fold */])(function (acc, s) { return union(s, acc); }, create(), sets);
}
function difference(set1, set2) {
    return set1.tree.Case === "SetEmpty"
        ? set1
        : set2.tree.Case === "SetEmpty"
            ? set1
            : from(set1.comparer, tree_diff(set1.comparer, set1.tree, set2.tree));
}
function op_Subtraction(set1, set2) {
    return difference(set1, set2);
}
function differenceInPlace(set1, set2) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["j" /* iterate */])(function (x) { set1.delete(x); }, set2);
}
function intersect(set1, set2) {
    return set2.tree.Case === "SetEmpty"
        ? set2
        : set1.tree.Case === "SetEmpty"
            ? set1
            : from(set1.comparer, tree_intersection(set1.comparer, set1.tree, set2.tree));
}
function intersectInPlace(set1, set2) {
    var set2_ = set2 instanceof Set ? set2 : new Set(set2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["j" /* iterate */])(function (x) { if (!set2_.has(x)) {
        set1.delete(x);
    } }, set1);
}
function intersectMany(sets) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["k" /* reduce */])(function (s1, s2) { return intersect(s1, s2); }, sets);
}
function isProperSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set1.tree, set2.tree);
    }
    else {
        set2 = set2 instanceof Set ? set2 : new Set(set2);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["l" /* forAll */])(function (x) { return set2.has(x); }, set1) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["m" /* exists */])(function (x) { return !set1.has(x); }, set2);
    }
}
function isProperSubset(set1, set2) {
    return isProperSubsetOf(set1, set2);
}
function isSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set1.tree, set2.tree);
    }
    else {
        set2 = set2 instanceof Set ? set2 : new Set(set2);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["l" /* forAll */])(function (x) { return set2.has(x); }, set1);
    }
}
function isSubset(set1, set2) {
    return isSubsetOf(set1, set2);
}
function isProperSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set2.tree, set1.tree);
    }
    else {
        return isProperSubset(set2 instanceof Set ? set2 : new Set(set2), set1);
    }
}
function isProperSuperset(set1, set2) {
    return isProperSupersetOf(set1, set2);
}
function isSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set2.tree, set1.tree);
    }
    else {
        return isSubset(set2 instanceof Set ? set2 : new Set(set2), set1);
    }
}
function isSuperset(set1, set2) {
    return isSupersetOf(set1, set2);
}
function copyTo(xs, arr, arrayIndex, count) {
    if (!Array.isArray(arr) && !ArrayBuffer.isView(arr))
        throw new Error("Array is invalid");
    count = count || arr.length;
    var i = arrayIndex || 0;
    var iter = xs[Symbol.iterator]();
    while (count--) {
        var el = iter.next();
        if (el.done)
            break;
        arr[i++] = el.value;
    }
}
function partition(f, s) {
    if (s.tree.Case === "SetEmpty") {
        return [s, s];
    }
    else {
        var tuple = tree_partition(s.comparer, f, s.tree);
        return [from(s.comparer, tuple[0]), from(s.comparer, tuple[1])];
    }
}
function filter(f, s) {
    if (s.tree.Case === "SetEmpty") {
        return s;
    }
    else {
        return from(s.comparer, tree_filter(s.comparer, f, s.tree));
    }
}
function map(f, s) {
    var comparer = new __WEBPACK_IMPORTED_MODULE_2__GenericComparer__["a" /* default */]();
    return from(comparer, tree_fold(function (acc, k) { return tree_add(comparer, f(k), acc); }, new SetTree("SetEmpty", []), s.tree));
}
function exists(f, s) {
    return tree_exists(f, s.tree);
}
function forAll(f, s) {
    return tree_forall(f, s.tree);
}
function fold(f, seed, s) {
    return tree_fold(f, seed, s.tree);
}
function foldBack(f, s, seed) {
    return tree_foldBack(f, s.tree, seed);
}
function iterate(f, s) {
    tree_iter(f, s.tree);
}
function minimumElement(s) {
    return tree_minimumElement(s.tree);
}
function minElement(s) {
    return tree_minimumElement(s.tree);
}
function maximumElement(s) {
    return tree_maximumElement(s.tree);
}
function maxElement(s) {
    return tree_maximumElement(s.tree);
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(62);

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24)
var isHook = __webpack_require__(13)

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(23)

var applyProperties = __webpack_require__(25)

var isVNode = __webpack_require__(8)
var isVText = __webpack_require__(14)
var isWidget = __webpack_require__(5)
var handleThunk = __webpack_require__(27)

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isVNode = __webpack_require__(8)
var isVText = __webpack_require__(14)
var isWidget = __webpack_require__(5)
var isThunk = __webpack_require__(12)

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(9)
var isVNode = __webpack_require__(8)
var isWidget = __webpack_require__(5)
var isThunk = __webpack_require__(12)
var isVHook = __webpack_require__(13)

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(9)

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(9)

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inputUI__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registerUI__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewModel__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runUI__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpUI__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fable_arch_Fable_Arch_App__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fable_core_Serialize__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__evaluator_hmrpDataStructure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_fable_arch_Fable_Arch_Virtualdom__ = __webpack_require__(34);
/* unused harmony export defaultLines */
/* unused harmony export update */
/* unused harmony export generateDebugUI */
/* unused harmony export getSelectedPanelUI */
/* unused harmony export view */
/* harmony export (immutable) */ __webpack_exports__["a"] = main;












var defaultLines = "-- Simple loop that counts to 0\n" + " INBOX\n" + " COPYTO 0\n" + " JUMPZ b\n" + " JUMPN d\n" + "c:\n" + " JUMPZ b\n" + " OUTBOX\n" + " BUMPDN 0\n" + " JUMP c\n" + "d:\n" + " JUMPZ b\n" + " OUTBOX\n" + " BUMPUP 0\n" + " JUMP d\n" + "b:\n" + " OUTBOX\n" + "a:\n";
function update(model, action) {
  if (action.Case === "InputAction") {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__inputUI__["a" /* processInputAction */])(model, action.Fields[0]);
  } else if (action.Case === "RegisterAction") {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__registerUI__["a" /* processRegisterAction */])(model, action.Fields[0]);
  } else if (action.Case === "SelectedPanelChangedAction") {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["a" /* Model */](model.Registers, model.Inputs, model.EvaluationResult, model.IsRunning, action.Fields[0]);
  } else if (action.Case === "WorkerAction") {
    var newModel = void 0;

    if (action.Fields[0].Case === "NewState") {
      var evaluationResult = void 0;
      var EvaluationStates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["a" /* append */])(model.EvaluationResult.EvaluationStates, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([action.Fields[0].Fields[0]]));
      var CurrentlySelectedState = model.EvaluationResult.EvaluationStates.length;
      evaluationResult = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["b" /* EvaluationResult */](model.EvaluationResult.CauseOfStop, EvaluationStates, CurrentlySelectedState);
      newModel = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["a" /* Model */](model.Registers, model.Inputs, evaluationResult, model.IsRunning, model.SelectedPanel);
    } else {
      var evaluationResult_1 = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["b" /* EvaluationResult */](action.Fields[0].Fields[0], model.EvaluationResult.EvaluationStates, model.EvaluationResult.CurrentlySelectedState);
      var IsRunning = false;
      newModel = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["a" /* Model */](model.Registers, model.Inputs, evaluationResult_1, IsRunning, model.SelectedPanel);
    }

    return newModel;
  } else {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__runUI__["a" /* processRunAction */])(model, action.Fields[0]);
  }
}

function generateMenu(model) {
  var helpMenuClasses = model.SelectedPanel.Case === "Help" ? "active item" : "item";
  var registerMenuClasses = model.SelectedPanel.Case === "Register" ? "active item" : "item";
  var inputsMenuClasses = model.SelectedPanel.Case === "Input" ? "active item" : "item";
  var debugMenuClasses = model.SelectedPanel.Case === "Debug" ? "active item" : "item";
  return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui thin left vertical inverted labeled visible sidebar menu")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].a(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy(helpMenuClasses), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (e) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("SelectedPanelChangedAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["d" /* Panel */]("Help", [])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-question-circle block layout"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "font-size: large;width: 2em;")]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Help")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].a(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy(registerMenuClasses), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (e_1) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("SelectedPanelChangedAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["d" /* Panel */]("Register", [])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("block layout fa fa-cube"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "font-size: large;width: 2em;")]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Registers")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].a(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy(inputsMenuClasses), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (e_2) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("SelectedPanelChangedAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["d" /* Panel */]("Input", [])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("block layout fa fa-arrow-right"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "font-size: large;width: 2em;")]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Inputs")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].a(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy(debugMenuClasses), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (e_3) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("SelectedPanelChangedAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["d" /* Panel */]("Debug", [])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("block layout fa fa-bug"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "font-size: large;width: 2em;")]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Run/Debug")]))]));
}

function generateRegisterUI(model) {
  return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("column"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "height: 100%;overflow: auto")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].h2(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Registers")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Add a register: "), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui button"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (e) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["e" /* RegisterAction */]("CreateRegister", [])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-plus"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("aria-hidden", "true")]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].table(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui table")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["a" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].thead(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Index")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Enabled")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Value")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Move")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Delete")]))]))]))]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__registerUI__["b" /* viewRegisters */])(model)))]))]));
}

function generateInputUI(model) {
  return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("id", "leftColumn"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("column"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "height: 100%;overflow: auto")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].h2(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Inputs")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Add an input: "), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui button"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (e) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("InputAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["f" /* InputAction */]("CreateInput", [])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-plus"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("aria-hidden", "true")]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].table(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui table")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["a" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].thead(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Index")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Value")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Move")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Delete")]))]))]))]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__inputUI__["b" /* viewInputs */])(model)))]))]));
}

function generateDebugUI(model) {
  var runButtonClass = model.IsRunning ? __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-stop") : __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-play");
  return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("id", "leftColumn"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("column"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "height: 100%;overflow: auto")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].h2(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Run/Debug")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Run the program: "), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui button"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (e) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("RunAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["g" /* RunAction */]("Run", [])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([runButtonClass, __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("aria-hidden", "true")]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]()), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__runUI__["b" /* viewRun */])(model)]))]));
}

function generateCodeUI(model) {
  return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("column"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding: 0;")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ide"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("id", "ide"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].hook("hook", function () {
    var Hook = function Hook() {};

    Hook.prototype.hook = function (node, propName, otherNode) {
      var codeConfig = {
        theme: "monokai",
        value: defaultLines,
        mode: "hmrp",
        lineNumbers: true
      };

      if (!window.HasInit) {
        window.setTimeout(function (w) {
          window.HasInit = true;
          window.myCodeMirror = window.CodeMirror(node, codeConfig);
          return window;
        }, 0);
      }
    };

    return new Hook();
  }())]))(new __WEBPACK_IMPORTED_MODULE_3_fable_core_List__["c" /* default */]())]))]));
}

function getSelectedPanelUI(model) {
  if (model.SelectedPanel.Case === "Debug") {
    return generateDebugUI(model);
  } else if (model.SelectedPanel.Case === "Register") {
    return generateRegisterUI(model);
  } else if (model.SelectedPanel.Case === "Input") {
    return generateInputUI(model);
  } else {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpUI__["a" /* generateHelpUI */])(model);
  }
}
function view(model) {
  return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "height:100%;")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([generateMenu(model), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("pusher"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("id", "content")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui two column grid container"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("id", "innerContainer"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "margin-bottom: 0;margin-top: 0;")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_List__["b" /* ofArray */])([getSelectedPanelUI(model), generateCodeUI(model)]))]))]));
}
function main(argv) {
  var initModel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__viewModel__["h" /* createSimpleLoopModel */])();
  __WEBPACK_IMPORTED_MODULE_7_fable_arch_Fable_Arch_App__["a" /* AppApi */].start(__WEBPACK_IMPORTED_MODULE_7_fable_arch_Fable_Arch_App__["a" /* AppApi */].withProducer(function (a) {
    window.evaluatorWorkerCallback = function (b) {
      var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_fable_core_Serialize__["a" /* ofJson */])(b, {
        T: __WEBPACK_IMPORTED_MODULE_9__evaluator_hmrpDataStructure__["a" /* InstructionEvaluationResult */]
      });
      return a(new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("WorkerAction", [result]));
    };
  }, __WEBPACK_IMPORTED_MODULE_7_fable_arch_Fable_Arch_App__["a" /* AppApi */].withStartNodeSelector("#app", __WEBPACK_IMPORTED_MODULE_7_fable_arch_Fable_Arch_App__["a" /* AppApi */].createSimpleApp(initModel, function (model) {
    return view(model);
  }, function (model_1) {
    return function (action) {
      return update(model_1, action);
    };
  })(function (selector) {
    return function (handler) {
      return function (view_1) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_fable_arch_Fable_Arch_Virtualdom__["a" /* createRender */])(selector, handler, view_1);
      };
    };
  }))));
  var returnCode = 0;
  return returnCode;
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__ = __webpack_require__(2);
/* unused harmony export Types */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApi; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Types = function (__exports) {
    var ModelChanged = __exports.ModelChanged = function () {
        function ModelChanged(previousState, message, currentState) {
            _classCallCheck(this, ModelChanged);

            this.PreviousState = previousState;
            this.Message = message;
            this.CurrentState = currentState;
        }

        _createClass(ModelChanged, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.App.Types.ModelChanged",
                    interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                    properties: {
                        PreviousState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TModel"),
                        Message: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage"),
                        CurrentState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TModel")
                    }
                };
            }
        }, {
            key: "Equals",
            value: function (other) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
            }
        }, {
            key: "CompareTo",
            value: function (other) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["k" /* compareRecords */])(this, other);
            }
        }]);

        return ModelChanged;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.App.Types.ModelChanged", ModelChanged);

    var AppEvent = __exports.AppEvent = function () {
        function AppEvent(caseName, fields) {
            _classCallCheck(this, AppEvent);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(AppEvent, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.App.Types.AppEvent",
                    interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                    cases: {
                        ActionReceived: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")],
                        ModelChanged: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(ModelChanged, {
                            TMessage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage"),
                            TModel: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TModel")
                        })],
                        Replayed: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TModel")])
                        })]
                    }
                };
            }
        }, {
            key: "Equals",
            value: function (other) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
            }
        }, {
            key: "CompareTo",
            value: function (other) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* compareUnions */])(this, other);
            }
        }]);

        return AppEvent;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.App.Types.AppEvent", AppEvent);

    var AppMessage = __exports.AppMessage = function () {
        function AppMessage(caseName, fields) {
            _classCallCheck(this, AppMessage);

            this.Case = caseName;
            this.Fields = fields;
        }

        _createClass(AppMessage, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.App.Types.AppMessage",
                    interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                    cases: {
                        Message: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")],
                        Replay: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TModel"), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["t" /* Tuple */])(["string", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TMessage")])
                        })]
                    }
                };
            }
        }, {
            key: "Equals",
            value: function (other) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
            }
        }, {
            key: "CompareTo",
            value: function (other) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* compareUnions */])(this, other);
            }
        }]);

        return AppMessage;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.App.Types.AppMessage", AppMessage);

    var Plugin = __exports.Plugin = function () {
        function Plugin(producer, subscriber) {
            _classCallCheck(this, Plugin);

            this.Producer = producer;
            this.Subscriber = subscriber;
        }

        _createClass(Plugin, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.App.Types.Plugin",
                    interfaces: ["FSharpRecord"],
                    properties: {
                        Producer: "function",
                        Subscriber: "function"
                    }
                };
            }
        }]);

        return Plugin;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.App.Types.Plugin", Plugin);

    var AppSpecification = __exports.AppSpecification = function () {
        function AppSpecification(initState, view, update, initMessage, createRenderer, nodeSelector, producers, subscribers) {
            _classCallCheck(this, AppSpecification);

            this.InitState = initState;
            this.View = view;
            this.Update = update;
            this.InitMessage = initMessage;
            this.CreateRenderer = createRenderer;
            this.NodeSelector = nodeSelector;
            this.Producers = producers;
            this.Subscribers = subscribers;
        }

        _createClass(AppSpecification, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.App.Types.AppSpecification",
                    interfaces: ["FSharpRecord"],
                    properties: {
                        InitState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TModel"),
                        View: "function",
                        Update: "function",
                        InitMessage: "function",
                        CreateRenderer: "function",
                        NodeSelector: "string",
                        Producers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: "function"
                        }),
                        Subscribers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: "function"
                        })
                    }
                };
            }
        }]);

        return AppSpecification;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.App.Types.AppSpecification", AppSpecification);

    var App = __exports.App = function () {
        function App(model, actions, render, subscribers) {
            _classCallCheck(this, App);

            this.Model = model;
            this.Actions = actions;
            this.Render = render;
            this.Subscribers = subscribers;
        }

        _createClass(App, [{
            key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
            value: function () {
                return {
                    type: "Fable.Arch.App.Types.App",
                    interfaces: ["FSharpRecord"],
                    properties: {
                        Model: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["r" /* GenericParam */])("TModel"),
                        Actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: "function"
                        }),
                        Render: "function",
                        Subscribers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["s" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */], {
                            T: "function"
                        })
                    }
                };
            }
        }]);

        return App;
    }();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Fable.Arch.App.Types.App", App);

    var application = __exports.application = function (initMessage, handleMessage, handleReplay, configureProducers, createInitApp) {
        var state = null;

        var notifySubs = function notifySubs(msg) {
            if (state == null) {} else {
                var s = state;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["j" /* iterate */])(function (sub) {
                    sub(msg);
                }, s.Subscribers);
            }
        };

        var handleEvent = function handleEvent(evt) {
            var patternInput = evt.Case === "Replay" ? handleReplay(handleEvent)(notifySubs)([evt.Fields[0], evt.Fields[1]])(state) : handleMessage(handleEvent)(notifySubs)(evt.Fields[0])(state);
            state = patternInput[0];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["j" /* iterate */])(function (x) {
                x(null);
            }, patternInput[1]);
        };

        var post = function post($var2) {
            return handleEvent(function (arg0) {
                return new AppMessage("Message", [arg0]);
            }($var2));
        };

        state = createInitApp(post);
        initMessage(post);
        configureProducers(handleEvent);
        return handleEvent;
    };

    var render = __exports.render = function (post, viewFn, app) {
        var view = viewFn(app.Model);
        app.Render(function ($var3) {
            return post(function (arg0) {
                return new AppMessage("Message", [arg0]);
            }($var3));
        })(view);
        return app;
    };

    var createActions = __exports.createActions = function (post) {
        var mapping = function mapping(a) {
            return function () {
                return a(function ($var4) {
                    return post(function (arg0) {
                        return new AppMessage("Message", [arg0]);
                    }($var4));
                });
            };
        };

        return function (list) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(mapping, list);
        };
    };

    var handleMessage = __exports.handleMessage = function (update, viewFn, post, notifySubs, message, app) {
        notifySubs(new AppEvent("ActionReceived", [message]));
        var patternInput = update(app.Model)(message);
        var modelChanged = new AppEvent("ModelChanged", [new ModelChanged(app.Model, message, patternInput[0])]);
        var actions = createActions(post)(patternInput[1]);

        var app_ = function (app_1) {
            return render(post, viewFn, app_1);
        }(new App(patternInput[0], app.Actions, app.Render, app.Subscribers));

        return [app_, new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](function () {
            notifySubs(modelChanged);
        }, actions)];
    };

    var calculateModelChanges = __exports.calculateModelChanges = function (initState, update, actions) {
        var execUpdate = function execUpdate(r) {
            return function (a) {
                var m = r.tail != null ? r.head[1] : initState;
                var msg = a[1];
                var patternInput = update(m)(a[1]);
                var id = a[0];
                return [id, patternInput[0]];
            };
        };

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["a" /* fold */])(function (s, a_1) {
            return new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](execUpdate(s)(a_1), s);
        }, new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](), actions);
    };

    var handleReplay = __exports.handleReplay = function (viewFn, updateFn, post, notifySubs, fromModel, actions, app) {
        var result = calculateModelChanges(fromModel, updateFn, actions);
        var model = result.tail == null ? fromModel : result.head[1];

        var app_ = function (app_1) {
            return render(post, viewFn, app_1);
        }(new App(model, app.Actions, app.Render, app.Subscribers));

        return [app_, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([function () {
            return notifySubs(new AppEvent("Replayed", [result]));
        }])];
    };

    return __exports;
}({});
var AppApi = function (__exports) {
    var mapAction = __exports.mapAction = function (mapping, action, x) {
        action(function ($var5) {
            return x(mapping($var5));
        });
    };

    var mapAppMessage = __exports.mapAppMessage = function (map, _arg1) {
        if (_arg1.Case === "Replay") {
            return new Types.AppMessage("Replay", [_arg1.Fields[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (tupledArg) {
                return [tupledArg[0], map(tupledArg[1])];
            }, _arg1.Fields[1])]);
        } else {
            return new Types.AppMessage("Message", [map(_arg1.Fields[0])]);
        }
    };

    var mapProducer = __exports.mapProducer = function (map, p) {
        return function (x) {
            mapAction(map, p, x);
        };
    };

    var mapSubscriber = __exports.mapSubscriber = function (mapModelChanged, mapAction_1, sub, _arg1) {
        if (_arg1.Case === "ActionReceived") {
            (function (option) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["j" /* iterate */])(sub, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["u" /* defaultArg */])(option, [], function (x) {
                    return [x];
                }));
            })(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["u" /* defaultArg */])(mapAction_1(function (x) {
                return x;
            })(_arg1.Fields[0]), null, function (arg0) {
                return new Types.AppEvent("ActionReceived", [arg0]);
            }));
        } else if (_arg1.Case === "Replayed") {
            sub(new Types.AppEvent("Replayed", [_arg1.Fields[0]]));
        } else {
            (function (option_1) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["j" /* iterate */])(sub, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["u" /* defaultArg */])(option_1, [], function (x) {
                    return [x];
                }));
            })(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["u" /* defaultArg */])(mapModelChanged(_arg1.Fields[0]), null, function (arg0_1) {
                return new Types.AppEvent("ModelChanged", [arg0_1]);
            }));
        }
    };

    var mapActions = __exports.mapActions = function (m) {
        var mapping = function mapping(action) {
            return function (x) {
                mapAction(m, action, x);
            };
        };

        return function (list) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(mapping, list);
        };
    };

    var toActionList = __exports.toActionList = function (a) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([a]);
    };

    var createApp = __exports.createApp = function (state, view, update, createRenderer) {
        return new Types.AppSpecification(state, view, update, function (_arg1) {}, createRenderer, "body", new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](), new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]());
    };

    var createSimpleApp = __exports.createSimpleApp = function (model, view, update) {
        var update_1 = function update_1(x) {
            return function (y) {
                return [update(x)(y), new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]()];
            };
        };

        return function (createRenderer) {
            return createApp(model, view, update_1, createRenderer);
        };
    };

    var withStartNodeSelector = __exports.withStartNodeSelector = function (selector, app) {
        return new Types.AppSpecification(app.InitState, app.View, app.Update, app.InitMessage, app.CreateRenderer, selector, app.Producers, app.Subscribers);
    };

    var withInitMessage = __exports.withInitMessage = function (msg, app) {
        return new Types.AppSpecification(app.InitState, app.View, app.Update, msg, app.CreateRenderer, app.NodeSelector, app.Producers, app.Subscribers);
    };

    var withInstrumentationProducer = function withInstrumentationProducer(p, app) {
        var Producers = new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](p, app.Producers);
        return new Types.AppSpecification(app.InitState, app.View, app.Update, app.InitMessage, app.CreateRenderer, app.NodeSelector, Producers, app.Subscribers);
    };

    var withProducer = __exports.withProducer = function (producer, app) {
        var lift = function lift(h) {
            return function ($var6) {
                return h(function (arg0) {
                    return new Types.AppMessage("Message", [arg0]);
                }($var6));
            };
        };

        var producer_ = function producer_($var7) {
            return producer(lift($var7));
        };

        return withInstrumentationProducer(producer_, app);
    };

    var withInstrumentationSubscriber = __exports.withInstrumentationSubscriber = function (subscriber, app) {
        var Subscribers = new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](subscriber, app.Subscribers);
        return new Types.AppSpecification(app.InitState, app.View, app.Update, app.InitMessage, app.CreateRenderer, app.NodeSelector, app.Producers, Subscribers);
    };

    var withSubscriber = __exports.withSubscriber = function (subscriber, app) {
        var subscriber_ = function subscriber_(_arg1) {
            if (_arg1.Case === "ModelChanged") {
                subscriber(_arg1.Fields[0]);
            }
        };

        return withInstrumentationSubscriber(subscriber_, app);
    };

    var withPlugin = __exports.withPlugin = function (plugin) {
        return function ($var8) {
            return withInstrumentationProducer(plugin.Producer, withInstrumentationSubscriber(plugin.Subscriber, $var8));
        };
    };

    var configureProducers = __exports.configureProducers = function (producers, post) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["j" /* iterate */])(function (p) {
            p(post);
        }, producers);
    };

    var startAndExposeMessageSink = __exports.startAndExposeMessageSink = function (appSpec) {
        var createInitApp = function createInitApp(post) {
            var view = appSpec.View(appSpec.InitState);
            var render = appSpec.CreateRenderer(appSpec.NodeSelector)(post)(view);
            return new Types.App(appSpec.InitState, new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](), render, appSpec.Subscribers);
        };

        var handleMessage_ = function handleMessage_(post_1) {
            return function (notifySubs) {
                return function (message) {
                    return function (app) {
                        return Types.handleMessage(appSpec.Update, appSpec.View, post_1, notifySubs, message, app);
                    };
                };
            };
        };

        var handleReplay_ = function handleReplay_(post_2) {
            return function (notifySubs_1) {
                return function (tupledArg) {
                    return function (app_1) {
                        return Types.handleReplay(appSpec.View, appSpec.Update, post_2, notifySubs_1, tupledArg[0], tupledArg[1], app_1);
                    };
                };
            };
        };

        var configureProducers_ = function configureProducers_(post_3) {
            configureProducers(appSpec.Producers, post_3);
        };

        return Types.application(appSpec.InitMessage, handleMessage_, handleReplay_, configureProducers_, createInitApp);
    };

    var start = __exports.start = function (appSpec) {
        startAndExposeMessageSink(appSpec);
    };

    return __exports;
}({});
//# sourceMappingURL=Fable.Arch.App.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_virtual_dom__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_virtual_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_virtual_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Symbol__ = __webpack_require__(3);
/* unused harmony export h */
/* unused harmony export diff */
/* unused harmony export patch */
/* unused harmony export createElement */
/* unused harmony export createTree */
/* unused harmony export RenderState */
/* unused harmony export ViewState */
/* unused harmony export renderSomething */
/* unused harmony export render */
/* harmony export (immutable) */ __webpack_exports__["a"] = createRender;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var h = __WEBPACK_IMPORTED_MODULE_0_virtual_dom__["h"];
var diff = __WEBPACK_IMPORTED_MODULE_0_virtual_dom__["diff"];
var patch = __WEBPACK_IMPORTED_MODULE_0_virtual_dom__["patch"];
var createElement = __WEBPACK_IMPORTED_MODULE_0_virtual_dom__["create"];
function createTree(handler, tag, attributes, children) {
    var toAttrs = function toAttrs(attrs) {
        var elAttributes = function (_arg2) {
            return _arg2.tail == null ? null : ["attributes", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["a" /* createObj */])(_arg2)];
        }(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["d" /* choose */])(function (x) {
            return x;
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (_arg1) {
            if (_arg1.Case === "Attribute") {
                var v = _arg1.Fields[0][1];
                var k = _arg1.Fields[0][0];
                return [k, v];
            } else {
                return null;
            }
        }, attrs)));

        var props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (_arg4) {
            if (_arg4.Case === "Style") {
                return ["style", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["a" /* createObj */])(_arg4.Fields[0])];
            } else if (_arg4.Case === "Property") {
                var v_1 = _arg4.Fields[0][1];
                var k_1 = _arg4.Fields[0][0];
                return [k_1, v_1];
            } else if (_arg4.Case === "EventHandler") {
                var f = _arg4.Fields[0][1];
                var ev = _arg4.Fields[0][0];
                return [ev, function ($var9) {
                    return handler(f($var9));
                }];
            } else if (_arg4.Case === "Hook") {
                return [_arg4.Fields[0], _arg4.Fields[1]];
            } else {
                throw new Error("Shouldn't happen");
            }
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["f" /* filter */])(function (_arg3) {
            return _arg3.Case === "Attribute" ? false : true;
        }, attrs));
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["a" /* createObj */])(elAttributes != null ? new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */](elAttributes, props) : props);
    };

    var elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_virtual_dom__["h"])(tag, toAttrs(attributes), Array.from(children));
    return elem;
}
var RenderState = function () {
    function RenderState(caseName, fields) {
        _classCallCheck(this, RenderState);

        this.Case = caseName;
        this.Fields = fields;
    }

    _createClass(RenderState, [{
        key: __WEBPACK_IMPORTED_MODULE_3_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "Fable.Arch.Virtualdom.RenderState",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: {
                    ExtraRequest: [],
                    NoRequest: [],
                    PendingRequest: []
                }
            };
        }
    }, {
        key: "Equals",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["b" /* equalsUnions */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["c" /* compareUnions */])(this, other);
        }
    }]);

    return RenderState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Symbol__["b" /* setType */])("Fable.Arch.Virtualdom.RenderState", RenderState);
var ViewState = function () {
    function ViewState(currentTree, nextTree, node, renderState) {
        _classCallCheck(this, ViewState);

        this.CurrentTree = currentTree;
        this.NextTree = nextTree;
        this.Node = node;
        this.RenderState = renderState;
    }

    _createClass(ViewState, [{
        key: __WEBPACK_IMPORTED_MODULE_3_fable_core_Symbol__["a" /* default */].reflection,
        value: function () {
            return {
                type: "Fable.Arch.Virtualdom.ViewState",
                interfaces: ["FSharpRecord", "System.IEquatable"],
                properties: {
                    CurrentTree: __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */],
                    NextTree: __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* Any */],
                    Node: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["e" /* Interface */])("Fable.Import.Browser.Node"),
                    RenderState: RenderState
                }
            };
        }
    }, {
        key: "Equals",
        value: function (other) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["f" /* equalsRecords */])(this, other);
        }
    }]);

    return ViewState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Symbol__["b" /* setType */])("Fable.Arch.Virtualdom.ViewState", ViewState);
function renderSomething(handler, node) {
    var $var10 = node.Case === "Svg" ? [0, node.Fields[0][1], node.Fields[1], node.Fields[0][0]] : node.Case === "VoidElement" ? [1] : node.Case === "Text" ? [2] : node.Case === "WhiteSpace" ? [3] : node.Case === "VirtualNode" ? [4] : [0, node.Fields[0][1], node.Fields[1], node.Fields[0][0]];

    switch ($var10[0]) {
        case 0:
            return createTree(handler, $var10[3], $var10[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (node_1) {
                return renderSomething(handler, node_1);
            }, $var10[2]));

        case 1:
            var tag = node.Fields[0][0];
            var attrs = node.Fields[0][1];
            return createTree(handler, tag, attrs, new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]());

        case 2:
            return node.Fields[0];

        case 3:
            return node.Fields[0];

        case 4:
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_virtual_dom__["h"])(node.Fields[0], node.Fields[1], node.Fields[2]);
    }
}
function render(handler, view, viewState) {
    var tree = renderSomething(handler, view);
    return new ViewState(viewState.CurrentTree, tree, viewState.Node, viewState.RenderState);
}
function createRender(selector, handler, view) {
    var node = document.body.querySelector(selector);
    var tree = renderSomething(handler, view);
    var vdomNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_virtual_dom__["create"])(tree);
    node.appendChild(vdomNode);
    var viewState = new ViewState(tree, tree, vdomNode, new RenderState("NoRequest", []));

    var raf = function raf(cb) {
        return window.requestAnimationFrame(function (fb) {
            cb(null);
        });
    };

    var render_ = function render_(handler_1) {
        return function (view_1) {
            var viewState_ = render(handler_1, view_1, viewState);
            viewState = viewState_;

            var callBack = function callBack() {
                var matchValue = viewState.RenderState;

                if (matchValue.Case === "ExtraRequest") {
                    var RenderState_1 = new RenderState("NoRequest", []);
                    viewState = new ViewState(viewState.CurrentTree, viewState.NextTree, viewState.Node, RenderState_1);
                } else if (matchValue.Case === "NoRequest") {
                    throw new Error("Shouldn't happen");
                } else {
                    raf(callBack);
                    var RenderState_2 = new RenderState("ExtraRequest", []);
                    viewState = new ViewState(viewState.CurrentTree, viewState.NextTree, viewState.Node, RenderState_2);
                    var patches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_virtual_dom__["diff"])(viewState.CurrentTree, viewState.NextTree);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_virtual_dom__["patch"])(viewState.Node, patches);
                    viewState = new ViewState(viewState.NextTree, viewState.NextTree, viewState.Node, viewState.RenderState);
                }
            };

            var matchValue_1 = viewState.RenderState;

            if (matchValue_1.Case === "NoRequest") {
                raf(callBack);
            }

            var RenderState_3 = new RenderState("PendingRequest", []);
            viewState = new ViewState(viewState.CurrentTree, viewState.NextTree, viewState.Node, RenderState_3);
        };
    };

    return render_;
}
//# sourceMappingURL=Fable.Arch.Virtualdom.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addRangeInPlace */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* harmony export (immutable) */ __webpack_exports__["a"] = permute;
/* unused harmony export removeInPlace */
/* unused harmony export setSlice */
/* unused harmony export sortInPlaceBy */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export getSubArray */
/* unused harmony export fill */
function addRangeInPlace(range, xs) {
    var iter = range[Symbol.iterator]();
    var cur = iter.next();
    while (!cur.done) {
        xs.push(cur.value);
        cur = iter.next();
    }
}
function copyTo(source, sourceIndex, target, targetIndex, count) {
    while (count--)
        target[targetIndex++] = source[sourceIndex++];
}
function partition(f, xs) {
    var ys = [], zs = [], j = 0, k = 0;
    for (var i = 0; i < xs.length; i++)
        if (f(xs[i]))
            ys[j++] = xs[i];
        else
            zs[k++] = xs[i];
    return [ys, zs];
}
function permute(f, xs) {
    var ys = xs.map(function () { return null; });
    var checkFlags = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        var j = f(i);
        if (j < 0 || j >= xs.length)
            throw new Error("Not a valid permutation");
        ys[j] = xs[i];
        checkFlags[j] = 1;
    }
    for (var i = 0; i < xs.length; i++)
        if (checkFlags[i] != 1)
            throw new Error("Not a valid permutation");
    return ys;
}
function removeInPlace(item, xs) {
    var i = xs.indexOf(item);
    if (i > -1) {
        xs.splice(i, 1);
        return true;
    }
    return false;
}
function setSlice(target, lower, upper, source) {
    var length = (upper || target.length - 1) - lower;
    if (ArrayBuffer.isView(target) && source.length <= length)
        target.set(source, lower);
    else
        for (var i = lower | 0, j = 0; j <= length; i++, j++)
            target[i] = source[j];
}
function sortInPlaceBy(f, xs, dir) {
    if (dir === void 0) { dir = 1; }
    return xs.sort(function (x, y) {
        x = f(x);
        y = f(y);
        return (x < y ? -1 : x == y ? 0 : 1) * dir;
    });
}
function unzip(xs) {
    var bs = new Array(xs.length), cs = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
    }
    return [bs, cs];
}
function unzip3(xs) {
    var bs = new Array(xs.length), cs = new Array(xs.length), ds = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
        ds[i] = xs[i][2];
    }
    return [bs, cs, ds];
}
function getSubArray(xs, startIndex, count) {
    return xs.slice(startIndex, startIndex + count);
}
function fill(target, targetIndex, count, value) {
    target.fill(value, targetIndex, targetIndex + count);
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Symbol__ = __webpack_require__(3);
/* unused harmony export MemberInfo */
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveGeneric;
/* unused harmony export getType */
/* harmony export (immutable) */ __webpack_exports__["a"] = getTypeFullName;
/* unused harmony export getName */
/* unused harmony export getPrototypeOfType */
/* unused harmony export getProperties */
/* unused harmony export getUnionCases */
/* unused harmony export getPropertyValues */
/* unused harmony export getUnionFields */
/* unused harmony export makeUnion */
/* unused harmony export getTupleElements */
/* unused harmony export isTupleType */



var MemberInfo = (function () {
    function MemberInfo(name, index, declaringType, propertyType, unionFields) {
        this.name = name;
        this.index = index;
        this.declaringType = declaringType;
        this.propertyType = propertyType;
        this.unionFields = unionFields;
    }
    MemberInfo.prototype.getUnionFields = function () {
        var _this = this;
        return this.unionFields.map(function (fi, i) { return new MemberInfo("unknown", i, _this.declaringType, fi); });
    };
    return MemberInfo;
}());

function resolveGeneric(idx, enclosing) {
    try {
        var t = enclosing.head;
        if (t.generics == null) {
            return resolveGeneric(idx, enclosing.tail);
        }
        else {
            var name_1 = typeof idx === "string"
                ? idx : Object.getOwnPropertyNames(t.generics)[idx];
            var resolved = t.generics[name_1];
            if (resolved == null) {
                return resolveGeneric(idx, enclosing.tail);
            }
            else if (resolved instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["o" /* NonDeclaredType */] && resolved.kind === "GenericParam") {
                return resolveGeneric(resolved.definition, enclosing.tail);
            }
            else {
                return new __WEBPACK_IMPORTED_MODULE_1__List__["c" /* default */](resolved, enclosing);
            }
        }
    }
    catch (err) {
        throw new Error("Cannot resolve generic argument " + idx + ": " + err);
    }
}
function getType(obj) {
    var t = typeof obj;
    switch (t) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return t;
        default:
            return Object.getPrototypeOf(obj).constructor;
    }
}
function getTypeFullName(typ, option) {
    function trim(fullName, option) {
        if (typeof fullName !== "string") {
            return "unknown";
        }
        if (option === "name") {
            var i = fullName.lastIndexOf('.');
            return fullName.substr(i + 1);
        }
        if (option === "namespace") {
            var i = fullName.lastIndexOf('.');
            return i > -1 ? fullName.substr(0, i) : "";
        }
        return fullName;
    }
    if (typeof typ === "string") {
        return typ;
    }
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["o" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Unit":
                return "unit";
            case "Option":
                return getTypeFullName(typ.generics, option) + " option";
            case "Array":
                return getTypeFullName(typ.generics, option) + "[]";
            case "Tuple":
                return typ.generics.map(function (x) { return getTypeFullName(x, option); }).join(" * ");
            case "GenericParam":
            case "Interface":
                return typ.definition;
            case "GenericType":
                return getTypeFullName(typ.definition, option);
            case "Any":
            default:
                return "unknown";
        }
    }
    else {
        var proto = typ.prototype;
        return trim(typeof proto[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection] === "function"
            ? proto[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection]().type : null, option);
    }
}
function getName(x) {
    if (x instanceof MemberInfo) {
        return x.name;
    }
    return getTypeFullName(x, "name");
}
function getPrototypeOfType(typ) {
    if (typeof typ === "string") {
        return null;
    }
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["o" /* NonDeclaredType */]) {
        return typ.kind === "GenericType" ? typ.definition.prototype : null;
    }
    else {
        return typ.prototype;
    }
}
function getProperties(typ) {
    var proto = getPrototypeOfType(typ);
    if (proto != null && typeof proto[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection] === "function") {
        var info_1 = proto[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection]();
        if (info_1.properties) {
            return Object.getOwnPropertyNames(info_1.properties)
                .map(function (k, i) { return new MemberInfo(k, i, typ, info_1.properties[k]); });
        }
    }
    throw new Error("Type " + getTypeFullName(typ) + " doesn't contain property info.");
}
function getUnionCases(typ) {
    var proto = getPrototypeOfType(typ);
    if (proto != null && typeof proto[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection] === "function") {
        var info_2 = proto[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection]();
        if (info_2.cases) {
            return Object.getOwnPropertyNames(info_2.cases)
                .map(function (k, i) { return new MemberInfo(k, i, typ, null, info_2.cases[k]); });
        }
    }
    throw new Error("Type " + getTypeFullName(typ) + " doesn't contain union case info.");
}
function getPropertyValues(obj) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["q" /* getPropertyNames */])(obj).map(function (k) { return obj[k]; });
}
function getUnionFields(obj, typ) {
    if (obj != null && typeof obj[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection] === "function") {
        var info = obj[__WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection]();
        if (info.cases) {
            var uci = null, cases = Object.getOwnPropertyNames(info.cases);
            for (var i = 0; i < cases.length; i++) {
                if (cases[i] === obj.Case) {
                    uci = new MemberInfo(cases[i], i, typ, null, info.cases[cases[i]]);
                    break;
                }
            }
            if (uci != null) {
                return [uci, obj.Fields];
            }
        }
    }
    throw new Error("Not an F# union type.");
}
function makeUnion(caseInfo, args) {
    var Cons = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["p" /* getDefinition */])(caseInfo.declaringType);
    return new (Cons.bind.apply(Cons, [void 0, caseInfo.name].concat(args)))();
}
function getTupleElements(typ) {
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["o" /* NonDeclaredType */] && typ.kind === "Tuple") {
        return typ.generics;
    }
    throw new Error("Type " + getTypeFullName(typ) + " is not a tuple type.");
}
function isTupleType(typ) {
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["o" /* NonDeclaredType */]) {
        return typ.kind === "Tuple";
    }
    return false;
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;
/* unused harmony export unescape */
/* unused harmony export isMatch */
/* unused harmony export match */
/* unused harmony export matches */
/* unused harmony export options */
/* unused harmony export replace */
/* unused harmony export split */
function create(pattern, options) {
    var flags = "g";
    flags += options & 1 ? "i" : "";
    flags += options & 2 ? "m" : "";
    return new RegExp(pattern, flags);
}
function escape(str) {
    return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern, options) {
    if (options === void 0) { options = 0; }
    var reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern, options) {
    if (options === void 0) { options = 0; }
    var reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern, options) {
    if (options === void 0) { options = 0; }
    var reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    if (!reg.global)
        throw new Error("Non-global RegExp");
    var m;
    var matches = [];
    while ((m = reg.exec(str)) !== null)
        matches.push(m);
    return matches;
}
function options(reg) {
    var options = 256;
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit, offset) {
    if (offset === void 0) { offset = 0; }
    function replacer() {
        var res = arguments[0];
        if (limit !== 0) {
            limit--;
            var match_1 = [];
            var len = arguments.length;
            for (var i = 0; i < len - 2; i++)
                match_1.push(arguments[i]);
            match_1.index = arguments[len - 2];
            match_1.input = arguments[len - 1];
            res = replacement(match_1);
        }
        return res;
    }
    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement == "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    }
    else {
        if (limit != null) {
            var m = void 0;
            var sub1 = input.substring(offset);
            var _matches = matches(reg, sub1);
            var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        }
        else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit, offset) {
    if (offset === void 0) { offset = 0; }
    if (typeof reg == "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Long__ = __webpack_require__(20);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export fromTicks */
/* unused harmony export fromDays */
/* unused harmony export fromHours */
/* unused harmony export fromMinutes */
/* unused harmony export fromSeconds */
/* unused harmony export days */
/* unused harmony export hours */
/* unused harmony export minutes */
/* unused harmony export seconds */
/* unused harmony export milliseconds */
/* unused harmony export ticks */
/* unused harmony export totalDays */
/* unused harmony export totalHours */
/* unused harmony export totalMinutes */
/* unused harmony export totalSeconds */
/* unused harmony export negate */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export duration */


function create(d, h, m, s, ms) {
    if (d === void 0) { d = 0; }
    if (h === void 0) { h = 0; }
    if (m === void 0) { m = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    switch (arguments.length) {
        case 1:
            return fromTicks(arguments[0]);
        case 3:
            d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
            break;
        default:
            d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] || 0;
            break;
    }
    return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
}
function fromTicks(ticks) {
    return ticks.div(10000).toNumber();
}
function fromDays(d) {
    return create(d, 0, 0, 0);
}
function fromHours(h) {
    return create(h, 0, 0);
}
function fromMinutes(m) {
    return create(0, m, 0);
}
function fromSeconds(s) {
    return create(0, 0, s);
}
function days(ts) {
    return Math.floor(ts / 86400000);
}
function hours(ts) {
    return Math.floor(ts % 86400000 / 3600000);
}
function minutes(ts) {
    return Math.floor(ts % 3600000 / 60000);
}
function seconds(ts) {
    return Math.floor(ts % 60000 / 1000);
}
function milliseconds(ts) {
    return Math.floor(ts % 1000);
}
function ticks(ts) {
    return __WEBPACK_IMPORTED_MODULE_1__Long__["a" /* fromNumber */](ts).mul(10000);
}
function totalDays(ts) {
    return ts / 86400000;
}
function totalHours(ts) {
    return ts / 3600000;
}
function totalMinutes(ts) {
    return ts / 60000;
}
function totalSeconds(ts) {
    return ts / 1000;
}
function negate(ts) {
    return ts * -1;
}
function add(ts1, ts2) {
    return ts1 + ts2;
}
function subtract(ts1, ts2) {
    return ts1 - ts2;
}
function compare(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["h" /* compare */])(x, y);
}
function duration(x) {
    return Math.abs(x);
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_List__ = __webpack_require__(1);
/* unused harmony export generateInstructionTable */
/* harmony export (immutable) */ __webpack_exports__["a"] = generateHelpUI;



function generateInstructionTable() {
    return __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].table(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui table")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].thead(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Name")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Argument")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Meaning")]))]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("INBOX")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("None")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Take an input and put in the 'Human' register. Stop the program if no input is available.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("OUTBOX")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("None")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Put the value in the 'Human' register to the output Queue. Stop the program if the is no value in the 'Human' register.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("JUMP")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A label name")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Jump to the label given as argument if the value in the 'Human' register is equal to 0. Stop the program if the label does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("JUMPZ")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A label name")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Jump to the label given as argument if the value in the 'Human' register is equal to 0. Stop the program if the is no value in the 'Human' register or the label does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("JUMPN")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A label name")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Jump to the label given as argument if the value in the 'Human' register is negative. Stop the program if the is no value in the 'Human' register or the label does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("COPYTO")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A register index")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Copy the value in the 'Human' register to the register given as argument. Stop the program if the is no value in the 'Human' register or the register does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("COPYFROM")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A register index")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Copy the value of the register given as argument to the 'Human' register. Stop the program if the register does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("BUMPUP")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A register index")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Increment the value of the register given as argument and put a copy into the 'Human' register. Stop the program if the register does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("BUMPDN")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A register index")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Decrement the value of the register given as argument and put a copy into the 'Human' register. Stop the program if the register does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("ADD")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A register index")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Add the value in the 'Human' register with the one in the register given as argument. Stop the program if the is no value in the 'Human' register or the register does not exist.")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("SUB")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("A register index")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Subtract the value in the 'Human' register with the one in the register given as argument. Stop the program if the is no value in the 'Human' register or the register does not exist.")]))]))]));
}
function generateHelpUI(model) {
    return __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("column"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("id", "leftColumn"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "height: 100%;overflow: auto")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h2(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Help")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].a(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("href", "https://tomorrowcorporation.com/humanresourcemachine")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Human Resource Machine")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(" is a fun game about assembly programming with a human taking the role of the CPU."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(" This application can be used to develop and debug such programs."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h3(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Usage")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("The application is quite easy to use. You should type your program in the left panel, configure the registers initial states and the inputs that your CPU may consume and then run it to see what happens."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(" Usually, the goal in HRM is to consume the inputs and output the appropriate value."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(" For example, you may take 2 inputs and output the biggest one to implement the max function."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h3(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Panels")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("This application is split in 4 panels. Each one serves a precise purpose."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h4(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Help panel")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("The first (this one) contains the help to get you started. Moreover, all instructions are explained."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h4(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Register panel")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("The next panel is used to define registers. Each register contains at best a single integral numeric value or nothing at all. They serve as readable/writable memory."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h4(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Input panel")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("The input panel is used to set the input that can be consumed by the CPU. Each input is an integral numeric value."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h4(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Run/Debug panel")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("The Run/Debug panel is used to run the program and show all the states that the CPU went through to help you debug your program."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h3(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Program syntax")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("The program is defined by the lines that composed it. Each line is one of the following line: "), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].ul(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].li(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Comment")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].li(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Label")])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].li(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Instruction")]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Since there is no formal grammar for the language each line that cannot be treated as a label or an instruction would be treated as a comment."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(" A label define a place is the code where you can go using a jump instruction. A label is defined by a group of characters followed by the character ':'"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(" An instruction would change the CPU state and have different side effect depending on the instruction executed. An instruction is a specific word preceded by a whitespace and optionally followed by a label name or a register index."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(" And probably like you expect a comment does nothing."), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].h3(new __WEBPACK_IMPORTED_MODULE_1_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Instructions")])), generateInstructionTable()]))]));
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewModel__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = processInputAction;
/* harmony export (immutable) */ __webpack_exports__["b"] = viewInputs;







function extractInputsFromList(aList, myElem) {
  var otherInputs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["f" /* filter */])(function (a) {
    return a.UIIndex !== myElem.UIIndex;
  }, aList);
  return [myElem, otherInputs];
}

function sortInputs(inputs) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["c" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["o" /* sortWith */])(function (a, b) {
    return a.UIIndex - b.UIIndex;
  }, inputs));
}

function moveElements(elemToMoveDown, elemToMoveUp, otherElems, model) {
  var first = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["i" /* Input */](elemToMoveDown.UIIndex + 1, elemToMoveDown.Value);
  var second = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["i" /* Input */](elemToMoveUp.UIIndex - 1, elemToMoveUp.Value);
  var elemToMoveUp_1 = sortInputs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([second]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([first]), otherElems)));
  return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["a" /* Model */](model.Registers, elemToMoveUp_1, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
}

function handleCreateInput(model) {
  var newUIIndex = model.Inputs.length > 0 ? function (x) {
    return x + 1;
  }(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["k" /* reduce */])(function (x, y) {
    return Math.max(x, y);
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["e" /* map */])(function (a) {
    return a.UIIndex;
  }, model.Inputs))) : 0;
  var newInput = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["i" /* Input */](newUIIndex, 0);
  var updatedInputs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(model.Inputs, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([newInput]));
  return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["a" /* Model */](model.Registers, updatedInputs, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
}

function handleRemoveInputValue(index, model) {
  var patternInput = extractInputsFromList(model.Inputs, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["p" /* item */])(index, model.Inputs));
  var updatedList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["e" /* map */])(function (e) {
    return e.UIIndex <= index ? e : new __WEBPACK_IMPORTED_MODULE_2__viewModel__["i" /* Input */](e.UIIndex - 1, e.Value);
  }, patternInput[1]);
  return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["a" /* Model */](model.Registers, updatedList, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
}

function handleMoveInputValueDown(index, model) {
  var patternInput = extractInputsFromList(model.Inputs, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["p" /* item */])(index, model.Inputs));
  var patternInput_1 = extractInputsFromList(patternInput[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["p" /* item */])(index + 1, model.Inputs));
  return moveElements(patternInput[0], patternInput_1[0], patternInput_1[1], model);
}

function handleMoveInputValueUp(index, model) {
  var patternInput = extractInputsFromList(model.Inputs, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["p" /* item */])(index, model.Inputs));
  var patternInput_1 = extractInputsFromList(patternInput[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["p" /* item */])(index - 1, model.Inputs));
  return moveElements(patternInput_1[0], patternInput[0], patternInput_1[1], model);
}

function handleUpdateInputValue(index, obj, model) {
  var strValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Util__["g" /* toString */])(obj.target.value);

  if (strValue === "") {
    return model;
  } else {
    var patternInput = extractInputsFromList(model.Inputs, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Seq__["p" /* item */])(index, model.Inputs));
    var newElem = void 0;
    var Value = Number.parseInt(strValue);
    newElem = new __WEBPACK_IMPORTED_MODULE_2__viewModel__["i" /* Input */](patternInput[0].UIIndex, Value);
    var newInputs = sortInputs(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(patternInput[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([newElem])));
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["a" /* Model */](model.Registers, newInputs, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
  }
}

function getInputValuesAttributes(input_model) {
  var onInputValueChange = __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["c" /* Events */].onChange(function (a) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("InputAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["f" /* InputAction */]("UpdateInputValue", [input_model.UIIndex, a])]);
  });
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([onInputValueChange, __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("type", "number"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("value", String(input_model.Value)), new __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["d" /* Types */].Attribute("Style", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([["width", "80px"]])]), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].hook("hook", function () {
    var Hook = function Hook() {};

    Hook.prototype.hook = function (node, propName) {
      node.value = String(input_model.Value);
    };

    return new Hook();
  }())]);
}

function viewSingleInput(input_model, nbOfInputs) {
  var inputValueAttributes = getInputValuesAttributes(input_model);
  var upButtonAttributes = input_model.UIIndex === 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("disabled", "true"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compatc button"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("InputAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["f" /* InputAction */]("MoveInputValueUp", [input_model.UIIndex])]);
  })]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compact button"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_1) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("InputAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["f" /* InputAction */]("MoveInputValueUp", [input_model.UIIndex])]);
  })]);
  var downButtonAttributes = input_model.UIIndex === nbOfInputs - 1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("disabled", "true"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compact button"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_2) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("InputAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["f" /* InputAction */]("MoveInputValueDown", [input_model.UIIndex])]);
  })]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compact button"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_3) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("InputAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["f" /* InputAction */]("MoveInputValueDown", [input_model.UIIndex])]);
  })]);
  return __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("" + String(input_model.UIIndex))])), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui form")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("inline field")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui range")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].input(inputValueAttributes), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("")]))]))]))]))])), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui vertical icon buttons")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(upButtonAttributes)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-arrow-up")]))(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())])), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(downButtonAttributes)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-arrow-down")]))(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())]))]))])), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui button"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_4) {
    return new __WEBPACK_IMPORTED_MODULE_2__viewModel__["c" /* Action */]("InputAction", [new __WEBPACK_IMPORTED_MODULE_2__viewModel__["f" /* InputAction */]("RemoveInputValue", [input_model.UIIndex])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-trash-o"), __WEBPACK_IMPORTED_MODULE_4_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("aria-hidden", "true")]))(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())]))]))]));
}

function processInputAction(model, action) {
  if (action.Case === "MoveInputValueUp") {
    return handleMoveInputValueUp(action.Fields[0], model);
  } else if (action.Case === "CreateInput") {
    return handleCreateInput(model);
  } else if (action.Case === "RemoveInputValue") {
    return handleRemoveInputValue(action.Fields[0], model);
  } else if (action.Case === "UpdateInputValue") {
    return handleUpdateInputValue(action.Fields[0], action.Fields[1], model);
  } else {
    return handleMoveInputValueDown(action.Fields[0], model);
  }
}
function viewInputs(model) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["e" /* map */])(function (a) {
    return viewSingleInput(a, model.Inputs.length);
  }, model.Inputs);
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewModel__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_Util__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = processRegisterAction;
/* harmony export (immutable) */ __webpack_exports__["b"] = viewRegisters;







function getInputValuesAttributes(register) {
  var onRegisterValueChange = __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["c" /* Events */].onChange(function (a) {
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_1__viewModel__["e" /* RegisterAction */]("UpdateRegisterValue", [register.UIIndex, a])]);
  });
  var basicAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([onRegisterValueChange, __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("type", "number"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("value", String(register.Value)), new __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["d" /* Types */].Attribute("Style", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([["width", "80px"]])]), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].hook("hook", function () {
    var Hook = function Hook() {};

    Hook.prototype.hook = function (node, propName) {
      node.value = String(register.Value);
    };

    return new Hook();
  }())]);
  var moreAttributes = register.Enabled ? new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("disabled", "true")]);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["a" /* append */])(basicAttributes, moreAttributes);
}

function getInputStateAttributes(register) {
  var callback = __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["c" /* Events */].onChange(function (a) {
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_1__viewModel__["e" /* RegisterAction */]("UpdateRegisterState", [register.UIIndex, a])]);
  });
  var checkboxAttribute = __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("type", "checkbox");

  if (register.Enabled) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([checkboxAttribute, callback, __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].property("checked", "true")]);
  } else {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([checkboxAttribute, callback]);
  }
}

function viewSingleRegister(register, nbOfRegister) {
  var inputValueAttributes = getInputValuesAttributes(register);
  var inputStateAttributes = getInputStateAttributes(register);
  var upButtonAttributes = register.UIIndex === 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("disabled", "true"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compact button"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a) {
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_1__viewModel__["e" /* RegisterAction */]("MoveRegisterValueUp", [register.UIIndex])]);
  })]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compact button"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_1) {
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_1__viewModel__["e" /* RegisterAction */]("MoveRegisterValueUp", [register.UIIndex])]);
  })]);
  var downButtonAttributes = register.UIIndex === nbOfRegister - 1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("disabled", "true"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compact button"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_2) {
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_1__viewModel__["e" /* RegisterAction */]("MoveRegisterValueDown", [register.UIIndex])]);
  })]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding-top:1px;padding-bottom:1px;font-size:small;"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui compact button"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_3) {
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_1__viewModel__["e" /* RegisterAction */]("MoveRegisterValueDown", [register.UIIndex])]);
  })]);
  return __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("" + String(register.UIIndex))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui form")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("inline field")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui checkbox")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].input(inputStateAttributes), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("")]))]))]))]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui form")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("inline field")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui range")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].input(inputValueAttributes), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("")]))]))]))]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "padding:0;")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui vertical icon buttons")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(upButtonAttributes)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-arrow-up")]))(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(downButtonAttributes)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-arrow-down")]))(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())]))]))])), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].button(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui button"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["c" /* Events */].onMouseClick(function (a_4) {
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["c" /* Action */]("RegisterAction", [new __WEBPACK_IMPORTED_MODULE_1__viewModel__["e" /* RegisterAction */]("RemoveRegisterValue", [register.UIIndex])]);
  })]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["a" /* Tags */].i(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("fa fa-trash-o"), __WEBPACK_IMPORTED_MODULE_0_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("aria-hidden", "true")]))(new __WEBPACK_IMPORTED_MODULE_2_fable_core_List__["c" /* default */]())]))]))]));
}

function extractRegisterFromList(aList, myElem) {
  var otherRegisters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["f" /* filter */])(function (a) {
    return a.UIIndex !== myElem.UIIndex;
  }, aList);
  return [myElem, otherRegisters];
}

function sortRegisters(registers) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["c" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["o" /* sortWith */])(function (a, b) {
    return a.UIIndex - b.UIIndex;
  }, registers));
}

function moveElements(elemToMoveDown, elemToMoveUp, otherRegisters, model) {
  var first = void 0;
  var UIIndex = elemToMoveDown.UIIndex + 1;
  first = new __WEBPACK_IMPORTED_MODULE_1__viewModel__["j" /* Register */](elemToMoveDown.Enabled, elemToMoveDown.Value, UIIndex);
  var second = void 0;
  var UIIndex_1 = elemToMoveUp.UIIndex - 1;
  second = new __WEBPACK_IMPORTED_MODULE_1__viewModel__["j" /* Register */](elemToMoveUp.Enabled, elemToMoveUp.Value, UIIndex_1);
  var newRegisters = sortRegisters(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["a" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([second]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["a" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([first]), otherRegisters)));
  return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["a" /* Model */](newRegisters, model.Inputs, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
}

function handleMoveRegisterValueDown(index, model) {
  var patternInput = extractRegisterFromList(model.Registers, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["p" /* item */])(index, model.Registers));
  var patternInput_1 = extractRegisterFromList(patternInput[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["p" /* item */])(index + 1, model.Registers));
  return moveElements(patternInput[0], patternInput_1[0], patternInput_1[1], model);
}

function handleMoveRegisterValueUp(index, model) {
  var patternInput = extractRegisterFromList(model.Registers, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["p" /* item */])(index, model.Registers));
  var patternInput_1 = extractRegisterFromList(patternInput[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["p" /* item */])(index - 1, model.Registers));
  return moveElements(patternInput_1[0], patternInput[0], patternInput_1[1], model);
}

function handleCreateRegister(model) {
  var newUIIndex = model.Registers.length > 0 ? function (x) {
    return x + 1;
  }(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["k" /* reduce */])(function (x, y) {
    return Math.max(x, y);
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (a) {
    return a.UIIndex;
  }, model.Registers))) : 0;
  var newRegister = void 0;
  var Value = 0;
  newRegister = new __WEBPACK_IMPORTED_MODULE_1__viewModel__["j" /* Register */](false, Value, newUIIndex);
  return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["a" /* Model */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["a" /* append */])(model.Registers, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([newRegister])), model.Inputs, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
}

function handleUpdateRegisterState(index, obj, model) {
  var isChecked = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_Util__["g" /* toString */])(obj.target.checked) === "true";
  var patternInput = extractRegisterFromList(model.Registers, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["p" /* item */])(index, model.Registers));
  var newElem = new __WEBPACK_IMPORTED_MODULE_1__viewModel__["j" /* Register */](isChecked, patternInput[0].Value, patternInput[0].UIIndex);
  var newRegisters = sortRegisters(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["a" /* append */])(patternInput[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([newElem])));
  return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["a" /* Model */](newRegisters, model.Inputs, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
}

function handleUpdateRegisterValue(index, obj, model) {
  var strValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_Util__["g" /* toString */])(obj.target.value);

  if (strValue === "") {
    return model;
  } else {
    var patternInput = extractRegisterFromList(model.Registers, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["p" /* item */])(index, model.Registers));
    var newElem = void 0;
    var Value = Number.parseInt(strValue);
    newElem = new __WEBPACK_IMPORTED_MODULE_1__viewModel__["j" /* Register */](patternInput[0].Enabled, Value, patternInput[0].UIIndex);
    var newRegisters = sortRegisters(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["a" /* append */])(patternInput[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["b" /* ofArray */])([newElem])));
    return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["a" /* Model */](newRegisters, model.Inputs, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
  }
}

function handleRemoveRegisterValue(index, model) {
  var patternInput = extractRegisterFromList(model.Registers, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["p" /* item */])(index, model.Registers));
  var updatedList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (e) {
    if (e.UIIndex <= index) {
      return e;
    } else {
      var UIIndex = e.UIIndex - 1;
      return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["j" /* Register */](e.Enabled, e.Value, UIIndex);
    }
  }, patternInput[1]);
  return new __WEBPACK_IMPORTED_MODULE_1__viewModel__["a" /* Model */](updatedList, model.Inputs, model.EvaluationResult, model.IsRunning, model.SelectedPanel);
}

function processRegisterAction(model, action) {
  if (action.Case === "MoveRegisterValueUp") {
    return handleMoveRegisterValueUp(action.Fields[0], model);
  } else if (action.Case === "CreateRegister") {
    return handleCreateRegister(model);
  } else if (action.Case === "UpdateRegisterState") {
    return handleUpdateRegisterState(action.Fields[0], action.Fields[1], model);
  } else if (action.Case === "UpdateRegisterValue") {
    return handleUpdateRegisterValue(action.Fields[0], action.Fields[1], model);
  } else if (action.Case === "RemoveRegisterValue") {
    return handleRemoveRegisterValue(action.Fields[0], model);
  } else {
    return handleMoveRegisterValueDown(action.Fields[0], model);
  }
}
function viewRegisters(model) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_List__["e" /* map */])(function (a) {
    return viewSingleRegister(a, model.Registers.length);
  }, model.Registers);
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_List__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluator_hmrpDataStructure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewModel__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_Serialize__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = processRunAction;
/* harmony export (immutable) */ __webpack_exports__["b"] = viewRun;









function getLines() {
  var lines = new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]();
  var w = window.myCodeMirror.doc;
  w.eachLine(function (l) {
    var lineText = l.text;
    lines = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(lines, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["g" /* toString */])(lineText)]));
  });
  return lines;
}

function buildRegisters(model) {
  var result = new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = model.Registers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var register = _step.value;
      var modelRegister = register.Enabled ? new __WEBPACK_IMPORTED_MODULE_2__evaluator_hmrpDataStructure__["c" /* Register */](register.UIIndex, register.Value) : new __WEBPACK_IMPORTED_MODULE_2__evaluator_hmrpDataStructure__["c" /* Register */](register.UIIndex, null);
      result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(result, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([modelRegister]));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

function buildInputs(model) {
  var result = new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = model.Inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var inputUIModel = _step2.value;
      result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(result, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([inputUIModel.Value]));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
}

function handleChangeBrowsedState(obj, model) {
  var newIndex = window.parseInt(obj.target.value);
  newIndex = newIndex - 1;

  if ((newIndex < 0 ? true : newIndex >= model.EvaluationResult.EvaluationStates.length) ? true : newIndex !== newIndex) {
    return model;
  } else {
    var evalResult = new __WEBPACK_IMPORTED_MODULE_3__viewModel__["b" /* EvaluationResult */](model.EvaluationResult.CauseOfStop, model.EvaluationResult.EvaluationStates, newIndex);
    return new __WEBPACK_IMPORTED_MODULE_3__viewModel__["a" /* Model */](model.Registers, model.Inputs, evalResult, model.IsRunning, model.SelectedPanel);
  }
}

function handleRun(model) {
  if (model.IsRunning !== true) {
    var lines = getLines();
    var registers = buildRegisters(model);
    var inputs = buildInputs(model);
    var result = {
      lines: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_Serialize__["b" /* toJson */])(lines),
      registers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_Serialize__["b" /* toJson */])(registers),
      inputs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_Serialize__["b" /* toJson */])(inputs)
    };
    window.hmrpEvaluatorWebWorker.postMessage(result);
    var EvaluationResult = new __WEBPACK_IMPORTED_MODULE_3__viewModel__["b" /* EvaluationResult */](null, new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */](), 0);
    var IsRunning = true;
    return new __WEBPACK_IMPORTED_MODULE_3__viewModel__["a" /* Model */](model.Registers, model.Inputs, EvaluationResult, IsRunning, model.SelectedPanel);
  } else {
    window.hmrpEvaluatorWebWorker.postMessage("STOP");
    var IsRunning_1 = false;
    return new __WEBPACK_IMPORTED_MODULE_3__viewModel__["a" /* Model */](model.Registers, model.Inputs, model.EvaluationResult, IsRunning_1, model.SelectedPanel);
  }
}

function processRunAction(model, action) {
  if (action.Case === "Run") {
    return handleRun(model);
  } else {
    return handleChangeBrowsedState(action.Fields[0], model);
  }
}

function row(xs) {
  return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__["c" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__["n" /* delay */])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__["d" /* map */])(function (x) {
      return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].td(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([x]));
    }, xs);
  })));
}

function getRegistersUILines(aState) {
  var registers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__["c" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__["o" /* sortWith */])(function (x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* compare */])(function (register) {
      return register.Index;
    }(x), function (register) {
      return register.Index;
    }(y));
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__["c" /* toList */])(aState.Registers)));

  var optionToStr = function optionToStr(a) {
    if (a != null) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["g" /* toString */])(a);
    } else {
      return "None";
    }
  };

  var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["e" /* map */])(function (st) {
    return row(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(String(st.Index)), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(optionToStr(st.RegisterValue))]));
  }, registers);
  return result;
}

var titleAttribute = __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("style", "font-weight:bold;font-size: 1.2rem");
function viewRun(model) {
  if (model.EvaluationResult.EvaluationStates.length > 0 ? model.EvaluationResult.CurrentlySelectedState < model.EvaluationResult.EvaluationStates.length : false) {
    var selectedState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Seq__["p" /* item */])(model.EvaluationResult.CurrentlySelectedState, model.EvaluationResult.EvaluationStates);
    var outputs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__evaluator_hmrpDataStructure__["d" /* listToString */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])(selectedState.Outputs));
    var inputs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__evaluator_hmrpDataStructure__["d" /* listToString */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])(selectedState.Inputs));
    var humanValueAsStr = selectedState.HumanValue != null ? String(selectedState.HumanValue) : "None";
    var causeOfStopAsStr = void 0;
    var matchValue = model.EvaluationResult.CauseOfStop;

    if (matchValue != null) {
      causeOfStopAsStr = matchValue;
    } else {
      causeOfStopAsStr = "Not stopped yet.";
    }

    var head = __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].thead(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].tr(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Index ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].th(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Value ")]))]))]));

    var registersUI = function registersUI(selectedState_1) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["a" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([head]), getRegistersUILines(selectedState_1));
    };

    var myDiv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([titleAttribute]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Stop cause: ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(causeOfStopAsStr)]))])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([titleAttribute]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("States")]))])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui form")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("inline field")]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].input(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("type", "range"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("min", "1"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("max", function () {
      var copyOfStruct = model.EvaluationResult.EvaluationStates.length;
      return String(copyOfStruct);
    }()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("value", function () {
      var copyOfStruct_1 = model.EvaluationResult.CurrentlySelectedState + 1;
      return String(copyOfStruct_1);
    }()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onInput(function (a) {
      return new __WEBPACK_IMPORTED_MODULE_3__viewModel__["c" /* Action */]("RunAction", [new __WEBPACK_IMPORTED_MODULE_3__viewModel__["g" /* RunAction */]("ChangeBrowsedState", [a])]);
    }), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].hook("hook", function () {
      var Hook = function Hook() {};

      Hook.prototype.hook = function (node, propName) {
        var copyOfStruct_2 = model.EvaluationResult.EvaluationStates.length;
        node.max = String(copyOfStruct_2);
        var copyOfStruct_3 = model.EvaluationResult.CurrentlySelectedState + 1;
        node.value = String(copyOfStruct_3);
      };

      return new Hook();
    }())])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].input(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("type", "number"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("min", "1"), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("max", function () {
      var copyOfStruct_4 = model.EvaluationResult.EvaluationStates.length;
      return String(copyOfStruct_4);
    }()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].attribute("value", function () {
      var copyOfStruct_5 = model.EvaluationResult.CurrentlySelectedState + 1;
      return String(copyOfStruct_5);
    }()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["c" /* Events */].onChange(function (a_1) {
      return new __WEBPACK_IMPORTED_MODULE_3__viewModel__["c" /* Action */]("RunAction", [new __WEBPACK_IMPORTED_MODULE_3__viewModel__["g" /* RunAction */]("ChangeBrowsedState", [a_1])]);
    }), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].hook("hook2", function () {
      var Hook = function Hook() {};

      Hook.prototype.hook = function (node_1, propName_1) {
        var copyOfStruct_6 = model.EvaluationResult.EvaluationStates.length;
        node_1.max = String(copyOfStruct_6);
        var copyOfStruct_7 = model.EvaluationResult.CurrentlySelectedState + 1;
        node_1.value = String(copyOfStruct_7);
      };

      return new Hook();
    }())])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("/" + function () {
      var copyOfStruct_8 = model.EvaluationResult.EvaluationStates.length;
      return String(copyOfStruct_8);
    }())]))]))])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([titleAttribute]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Outputs: ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(outputs)]))])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([titleAttribute]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Inputs: ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(inputs)]))])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([titleAttribute]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Human Value: ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(humanValueAsStr)]))])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([titleAttribute]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Current Line: ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(function () {
      var copyOfStruct_9 = selectedState.CurrentInstructionLine + 1;
      return String(copyOfStruct_9);
    }())]))])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].br(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]()), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].h3(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Registers: ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].table(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["b" /* Attributes */].classy("ui table")]))(registersUI(selectedState))]);
    return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(myDiv);
  } else if (model.EvaluationResult.CauseOfStop != null) {
    var causeOfStopAsStr_1 = void 0;
    var matchValue_1 = model.EvaluationResult.CauseOfStop;

    if (matchValue_1 != null) {
      causeOfStopAsStr_1 = matchValue_1;
    } else {
      causeOfStopAsStr_1 = "This message should never appear.";
    }

    return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([titleAttribute]))(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text("Stop cause: ")])), __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].label(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_List__["b" /* ofArray */])([__WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].text(causeOfStopAsStr_1)]))]));
  } else {
    return __WEBPACK_IMPORTED_MODULE_5_fable_arch_Fable_Arch_Html__["a" /* Tags */].div(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]())(new __WEBPACK_IMPORTED_MODULE_0_fable_core_List__["c" /* default */]());
  }
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(26)

module.exports = createElement


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(61)

module.exports = diff


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var h = __webpack_require__(58)

module.exports = h


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(44)
var patch = __webpack_require__(51)
var h = __webpack_require__(45)
var create = __webpack_require__(43)
var VNode = __webpack_require__(28)
var VText = __webpack_require__(30)

module.exports = {
    diff: diff,
    patch: patch,
    h: h,
    create: create,
    VNode: VNode,
    VText: VText
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OneVersionConstraint = __webpack_require__(50);

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Individual = __webpack_require__(49);

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var patch = __webpack_require__(54)

module.exports = patch


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var applyProperties = __webpack_require__(25)

var isWidget = __webpack_require__(5)
var VPatch = __webpack_require__(29)

var updateWidget = __webpack_require__(55)

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(23)
var isArray = __webpack_require__(17)

var render = __webpack_require__(26)
var domIndex = __webpack_require__(52)
var patchOp = __webpack_require__(53)
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isWidget = __webpack_require__(5)

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvStore = __webpack_require__(48);

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(17);

var VNode = __webpack_require__(28);
var VText = __webpack_require__(30);
var isVNode = __webpack_require__(8);
var isVText = __webpack_require__(14);
var isWidget = __webpack_require__(5);
var isHook = __webpack_require__(13);
var isVThunk = __webpack_require__(12);

var parseTag = __webpack_require__(59);
var softSetHook = __webpack_require__(57);
var evHook = __webpack_require__(56);

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (typeof c === 'number') {
        childNodes.push(new VText(String(c)));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var split = __webpack_require__(47);

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24)
var isHook = __webpack_require__(13)

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(17)

var VPatch = __webpack_require__(29)
var isVNode = __webpack_require__(8)
var isVText = __webpack_require__(14)
var isWidget = __webpack_require__(5)
var isThunk = __webpack_require__(12)
var handleThunk = __webpack_require__(27)

var diffProps = __webpack_require__(60)

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_viewMain__ = __webpack_require__(31);


(function (argv) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ui_viewMain__["a" /* main */])(argv);
})(process.argv.slice(2));

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(32)))

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map