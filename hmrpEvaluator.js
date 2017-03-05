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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return NonDeclaredType; });
/* unused harmony export Any */
/* unused harmony export Unit */
/* harmony export (immutable) */ __webpack_exports__["e"] = Option;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FableArray; });
/* unused harmony export Tuple */
/* harmony export (immutable) */ __webpack_exports__["a"] = GenericParam;
/* unused harmony export Interface */
/* unused harmony export makeGeneric */
/* unused harmony export isGeneric */
/* harmony export (immutable) */ __webpack_exports__["k"] = getDefinition;
/* unused harmony export extendInfo */
/* harmony export (immutable) */ __webpack_exports__["i"] = hasInterface;
/* harmony export (immutable) */ __webpack_exports__["n"] = getPropertyNames;
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["o"] = getRestParams;
/* harmony export (immutable) */ __webpack_exports__["d"] = toString;
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["m"] = equals;
/* harmony export (immutable) */ __webpack_exports__["l"] = compare;
/* harmony export (immutable) */ __webpack_exports__["f"] = equalsRecords;
/* harmony export (immutable) */ __webpack_exports__["g"] = compareRecords;
/* harmony export (immutable) */ __webpack_exports__["b"] = equalsUnions;
/* harmony export (immutable) */ __webpack_exports__["c"] = compareUnions;
/* unused harmony export createDisposable */
/* unused harmony export createObj */
/* unused harmony export toPlainJsObj */
/* unused harmony export round */
/* unused harmony export randomNext */
/* unused harmony export defaultArg */

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListClass__ = __webpack_require__(5);
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* harmony export (immutable) */ __webpack_exports__["d"] = toList;
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* unused harmony export collect */
/* harmony export (immutable) */ __webpack_exports__["j"] = choose;
/* harmony export (immutable) */ __webpack_exports__["f"] = compareWith;
/* unused harmony export delay */
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* harmony export (immutable) */ __webpack_exports__["o"] = exists;
/* unused harmony export exists2 */
/* unused harmony export filter */
/* unused harmony export where */
/* harmony export (immutable) */ __webpack_exports__["a"] = fold;
/* harmony export (immutable) */ __webpack_exports__["p"] = foldBack;
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* harmony export (immutable) */ __webpack_exports__["n"] = forAll;
/* unused harmony export forAll2 */
/* unused harmony export tryHead */
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* harmony export (immutable) */ __webpack_exports__["e"] = item;
/* harmony export (immutable) */ __webpack_exports__["l"] = iterate;
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* unused harmony export last */
/* unused harmony export count */
/* harmony export (immutable) */ __webpack_exports__["g"] = map;
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
/* harmony export (immutable) */ __webpack_exports__["m"] = reduce;
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* harmony export (immutable) */ __webpack_exports__["k"] = scan;
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* unused harmony export skip */
/* unused harmony export skipWhile */
/* unused harmony export sortWith */
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* unused harmony export take */
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* unused harmony export tryFind */
/* harmony export (immutable) */ __webpack_exports__["c"] = find;
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* unused harmony export tryFindIndex */
/* harmony export (immutable) */ __webpack_exports__["b"] = findIndex;
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* harmony export (immutable) */ __webpack_exports__["i"] = tryPick;
/* harmony export (immutable) */ __webpack_exports__["h"] = pick;
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
        return new __WEBPACK_IMPORTED_MODULE_2__ListClass__["b" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_2__ListClass__["b" /* default */]());
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
    var testIsNotInExclusionItems = function (element) { return !exclusionItems.some(function (excludedItem) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["m" /* equals */])(excludedItem, element); }); };
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
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["l" /* compare */])(acc, x) === 1 ? acc : x; }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["l" /* compare */])(f(acc), f(x)) === 1 ? acc : x; }, xs);
}
function min(xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["l" /* compare */])(acc, x) === -1 ? acc : x; }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["l" /* compare */])(f(acc), f(x)) === -1 ? acc : x; }, xs);
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
/* 2 */
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(17)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimeSpan__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Long__ = __webpack_require__(8);
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
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
/* harmony export (immutable) */ __webpack_exports__["f"] = day;
/* harmony export (immutable) */ __webpack_exports__["d"] = hour;
/* unused harmony export millisecond */
/* harmony export (immutable) */ __webpack_exports__["g"] = minute;
/* harmony export (immutable) */ __webpack_exports__["e"] = month;
/* harmony export (immutable) */ __webpack_exports__["b"] = second;
/* harmony export (immutable) */ __webpack_exports__["c"] = year;
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["l" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["l" /* compare */])(x, y);
}
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Seq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Map__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ListClass__["a"]; });
/* harmony export (immutable) */ __webpack_exports__["c"] = append;
/* unused harmony export choose */
/* unused harmony export collect */
/* unused harmony export concat */
/* harmony export (immutable) */ __webpack_exports__["d"] = filter;
/* unused harmony export where */
/* unused harmony export initialize */
/* harmony export (immutable) */ __webpack_exports__["b"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export partition */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export singleton */
/* unused harmony export slice */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export groupBy */






/* harmony default export */ __webpack_exports__["e"] = __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */];

function append(xs, ys) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](x, acc); }, ys, reverse(xs));
}
function choose(f, xs) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) {
        var y = f(x);
        return y != null ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](y, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), xs);
    return reverse(r);
}
function collect(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return append(acc, f(x)); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), xs);
}
function concat(xs) {
    return collect(function (x) { return x; }, xs);
}
function filter(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return f(x) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](x, acc) : acc; }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), xs));
}
function where(f, xs) {
    return filter(f, xs);
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("List length must be non-negative");
    }
    var xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */]();
    for (var i = 1; i <= n; i++) {
        xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](f(n - i), xs);
    }
    return xs;
}
function map(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](f(x), acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), xs));
}
function mapIndexed(f, xs) {
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x, i) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](f(i, x), acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), xs));
}
function partition(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) {
        var lacc = acc[0], racc = acc[1];
        return f(x) ? [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](x, lacc), racc] : [lacc, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](x, racc)];
    }, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */]()], reverse(xs));
}
function replicate(n, x) {
    return initialize(n, function () { return x; });
}
function reverse(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x) { return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](x, acc); }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), xs);
}
function singleton(x) {
    return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](x, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */]());
}
function slice(lower, upper, xs) {
    var noLower = (lower == null);
    var noUpper = (upper == null);
    return reverse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["a" /* fold */])(function (acc, x, i) { return (noLower || lower <= i) && (noUpper || i <= upper) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](x, acc) : acc; }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), xs));
}
function unzip(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["p" /* foldBack */])(function (xy, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](xy[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](xy[1], acc[1])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */]()]);
}
function unzip3(xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["p" /* foldBack */])(function (xyz, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](xyz[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](xyz[1], acc[1]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](xyz[2], acc[2])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */]()]);
}
function groupBy(f, xs) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["d" /* toList */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["g" /* map */])(function (k) { return [k[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Seq__["d" /* toList */])(k[1])]; }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Map__["c" /* groupBy */])(f, xs)));
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = ofArray;




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
        return "[" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["d" /* toString */]).join("; ") + "]";
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
                else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["m" /* equals */])(cur1.value, cur2.value))
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
                    acc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["l" /* compare */])(cur1.value, cur2.value);
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
/* harmony default export */ __webpack_exports__["b"] = List;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericComparer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Seq__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["c"] = groupBy;
/* unused harmony export countBy */
/* unused harmony export MapTree */
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
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
            return tree_collapseLHS(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* ofArray */])([
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
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */]();
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */](s, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* default */]())), started: false };
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
        return "map [" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["d" /* toString */]).join("; ") + "]";
    };
    FableMap.prototype.Equals = function (m2) {
        return this.CompareTo(m2) === 0;
    };
    FableMap.prototype.CompareTo = function (m2) {
        var _this = this;
        return this === m2 ? 0 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["f" /* compareWith */])(function (kvp1, kvp2) {
            var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
            return c !== 0 ? c : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["l" /* compare */])(kvp1[1], kvp2[1]);
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["g" /* map */])(function (kv) { return kv[0]; }, this);
    };
    FableMap.prototype.values = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["g" /* map */])(function (kv) { return kv[1]; }, this);
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
/* harmony default export */ __webpack_exports__["a"] = FableMap;
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["a" /* fold */])(function (acc, k) { return acc || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Util__["m" /* equals */])(map.get(k), v); }, false, map.keys());
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["h" /* pick */])(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
}
function tryFindKey(f, map) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["i" /* tryPick */])(function (kv) { return f(kv[0], kv[1]) ? kv[0] : null; }, map);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Symbol__ = __webpack_require__(2);


var GenericComparer = (function () {
    function GenericComparer(f) {
        this.Compare = f || __WEBPACK_IMPORTED_MODULE_0__Util__["l" /* compare */];
    }
    GenericComparer.prototype[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] = function () {
        return { interfaces: ["System.IComparer"] };
    };
    return GenericComparer;
}());
/* harmony default export */ __webpack_exports__["a"] = GenericComparer;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["d"] = escape;
/* unused harmony export unescape */
/* harmony export (immutable) */ __webpack_exports__["b"] = isMatch;
/* harmony export (immutable) */ __webpack_exports__["c"] = match;
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericComparer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Seq__ = __webpack_require__(1);
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["j" /* choose */])(function (tup) { return tup[0]; }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["k" /* scan */])(function (tup, x) {
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
                ? tree_collapseLHS(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([
                    stack.head.Fields[1],
                    tree_SetOne(stack.head.Fields[0]),
                    stack.head.Fields[2]
                ], stack.tail))
                : tree_collapseLHS(stack.tail)
        : new __WEBPACK_IMPORTED_MODULE_0__List__["e" /* default */]();
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_0__List__["e" /* default */](s, new __WEBPACK_IMPORTED_MODULE_0__List__["e" /* default */]())), started: false };
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
    var $target8 = function (n1k, t1) { return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([new SetTree("SetEmpty", []), tree_SetOne(n1k)], t1), l2); };
    var $target9 = function (n1k, n1l, n1r, t1) { return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([n1l, tree_SetNode(n1k, new SetTree("SetEmpty", []), n1r, 0)], t1), l2); };
    var $target11 = function (n2k, n2l, n2r, t2) { return tree_compareStacks(comparer, l1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([n2l, tree_SetNode(n2k, new SetTree("SetEmpty", []), n2r, 0)], t2)); };
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
                                return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([n1r], t1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([emp], t2));
                            }
                        }
                        else {
                            return $target9(l1.head.Fields[0], l1.head.Fields[1], l1.head.Fields[2], l1.tail);
                        }
                    }
                    else {
                        var n2k = l2.head.Fields[0], t2 = l2.tail;
                        return tree_compareStacks(comparer, l1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([new SetTree("SetEmpty", []), tree_SetOne(n2k)], t2));
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
                                return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([new SetTree("SetEmpty", [])], t1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([n2r], t2));
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
                                        return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([n1r], t1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([n2r], t2));
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
            return tree_compareStacks(comparer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([s1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__List__["a" /* ofArray */])([s2]));
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
        return "set [" + Array.from(this).map(__WEBPACK_IMPORTED_MODULE_1__Util__["d" /* toString */]).join("; ") + "]";
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["l" /* iterate */])(function (x) { set1.add(x); }, set2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["l" /* iterate */])(function (x) { set1.delete(x); }, set2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["l" /* iterate */])(function (x) { if (!set2_.has(x)) {
        set1.delete(x);
    } }, set1);
}
function intersectMany(sets) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["m" /* reduce */])(function (s1, s2) { return intersect(s1, s2); }, sets);
}
function isProperSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set1.tree, set2.tree);
    }
    else {
        set2 = set2 instanceof Set ? set2 : new Set(set2);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["n" /* forAll */])(function (x) { return set2.has(x); }, set1) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["o" /* exists */])(function (x) { return !set1.has(x); }, set2);
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Seq__["n" /* forAll */])(function (x) { return set2.has(x); }, set1);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegExp__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Date__ = __webpack_require__(3);
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
/* unused harmony export join */
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
                    rep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["d" /* toString */])(rep);
                    break;
                case "A":
                    try {
                        rep = JSON.stringify(rep, function (k, v) {
                            return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v)
                                : v && typeof v.ToString === "function" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["d" /* toString */])(v) : v;
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
                            rep = format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* second */])(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
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
                            rep2 = match2.length < 4 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* year */])(rep) % 100 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["c" /* year */])(rep);
                            break;
                        case "h":
                            rep2 = rep.getHours() > 12 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["d" /* hour */])(rep) % 12 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["d" /* hour */])(rep);
                            break;
                        case "M":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["e" /* month */])(rep);
                            break;
                        case "d":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["f" /* day */])(rep);
                            break;
                        case "H":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["d" /* hour */])(rep);
                            break;
                        case "m":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["g" /* minute */])(rep);
                            break;
                        case "s":
                            rep2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* second */])(rep);
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
    xs = typeof xs == "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["o" /* getRestParams */])(arguments, 1) : xs;
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
    return str.replace(new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["d" /* escape */])(search), "g"), replace);
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
    splitters = Array.isArray(splitters) ? splitters : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["o" /* getRestParams */])(arguments, 1);
    splitters = splitters.map(function (x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["d" /* escape */])(x); });
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
        var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["d" /* escape */])(chars.join("")) + "]+");
        str = str.replace(reg, "");
    }
    if (side == "end" || side == "both") {
        var reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__RegExp__["d" /* escape */])(chars.join("")) + "]+$");
        str = str.replace(reg, "");
    }
    return str;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fable_core_RegExp__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fable_core_List__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fable_core_String__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fable_core_Serialize__ = __webpack_require__(15);
/* unused harmony export ResultF */
/* unused harmony export ResultFbind */
/* unused harmony export LabelRegex */
/* unused harmony export InstructionRegex */
/* unused harmony export listToString */
/* unused harmony export maybeToString */
/* unused harmony export Register */
/* unused harmony export Label */
/* unused harmony export Instruction */
/* unused harmony export ProgramLine */
/* unused harmony export MachineState */
/* unused harmony export InstructionEvaluationResult */
/* unused harmony export runInstruction */
/* harmony export (immutable) */ __webpack_exports__["b"] = runStep;
/* unused harmony export printState */
/* unused harmony export printStates */
/* unused harmony export stringArrayToProgramList */
/* unused harmony export stringListToProgramList */
/* unused harmony export defaultMachineState */
/* unused harmony export buildEmptyRegisters */
/* unused harmony export printProgramLines */
/* harmony export (immutable) */ __webpack_exports__["a"] = runFirstStep;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var ResultF = function () {
  function ResultF(caseName, fields) {
    _classCallCheck(this, ResultF);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(ResultF, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Hmrp.HmrpEvaluator.ResultF",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: {
          ErrorF: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["a" /* GenericParam */])("b")],
          OkF: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["a" /* GenericParam */])("a")]
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

  return ResultF;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.ResultF", ResultF);
function ResultFbind(f, result) {
  if (result.Case === "ErrorF") {
    return new ResultF("ErrorF", [result.Fields[0]]);
  } else {
    var application = f(result.Fields[0]);

    if (application.Case === "ErrorF") {
      return new ResultF("ErrorF", [application.Fields[0]]);
    } else {
      return new ResultF("OkF", [application.Fields[0]]);
    }
  }
}
var LabelRegex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_RegExp__["a" /* create */])("^(\\w+):$");
var InstructionRegex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_RegExp__["a" /* create */])("^(\\s+)(\\w+)(\\s*)(\\w*)$");
function listToString(listOfElem) {
  var nbElem = listOfElem.length;

  if (nbElem === 0) {
    return "[]";
  } else {
    var elemsAsString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["a" /* fold */])(function (accum, elem) {
      return accum + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(elem) + ", ";
    }, "", listOfElem);
    var fixedString = elemsAsString.substr(0, elemsAsString.length - 2);
    return "[" + fixedString + "]";
  }
}
function maybeToString(maybeAThing) {
  if (maybeAThing != null) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(maybeAThing);
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
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Hmrp.HmrpEvaluator.Register",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Index: "number",
          RegisterValue: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["e" /* Option */])("number")
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
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["g" /* compareRecords */])(this, other);
    }
  }, {
    key: "ToString",
    value: function () {
      return "Register at " + String(this.Index);
    }
  }]);

  return Register;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.Register", Register);
var Label = function () {
  function Label(name, line) {
    _classCallCheck(this, Label);

    this.Name = name;
    this.Line = line;
  }

  _createClass(Label, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Hmrp.HmrpEvaluator.Label",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Name: "string",
          Line: "number"
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
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["g" /* compareRecords */])(this, other);
    }
  }, {
    key: "ToString",
    value: function () {
      return "Label named " + this.Name + " at line " + String(this.Line);
    }
  }]);

  return Label;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.Label", Label);
var Instruction = function () {
  function Instruction(caseName, fields) {
    _classCallCheck(this, Instruction);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(Instruction, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Hmrp.HmrpEvaluator.Instruction",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: {
          Add: ["number"],
          CopyFrom: ["number"],
          CopyTo: ["number"],
          Decrement: ["number"],
          Inbox: [],
          Increment: ["number"],
          Jump: ["string"],
          JumpIfNegative: ["string"],
          JumpIfZero: ["string"],
          Outbox: [],
          Subtract: ["number"]
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
  }, {
    key: "ToString",
    value: function () {
      if (this.Case === "Outbox") {
        return "Outbox";
      } else if (this.Case === "JumpIfNegative") {
        return "Jump if negative to : " + this.Fields[0];
      } else if (this.Case === "JumpIfZero") {
        return "Jump if zero to : " + this.Fields[0];
      } else if (this.Case === "Jump") {
        return "Jump to : " + this.Fields[0];
      } else if (this.Case === "CopyTo") {
        return "Copy to : " + String(this.Fields[0]);
      } else if (this.Case === "CopyFrom") {
        return "Copy from : " + String(this.Fields[0]);
      } else if (this.Case === "Increment") {
        return "Increment : " + String(this.Fields[0]);
      } else if (this.Case === "Decrement") {
        return "Decrement : " + String(this.Fields[0]);
      } else if (this.Case === "Add") {
        return "Add with : " + String(this.Fields[0]);
      } else if (this.Case === "Subtract") {
        return "Subtract with : " + String(this.Fields[0]);
      } else {
        return "Inbox";
      }
    }
  }]);

  return Instruction;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.Instruction", Instruction);
var ProgramLine = function () {
  function ProgramLine(caseName, fields) {
    _classCallCheck(this, ProgramLine);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(ProgramLine, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Hmrp.HmrpEvaluator.ProgramLine",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: {
          InstructionLine: [Instruction],
          LabelLine: [Label],
          MeaningLessLine: []
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
  }, {
    key: "ToString",
    value: function () {
      if (this.Case === "InstructionLine") {
        return "Line is an instruction : " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(this.Fields[0]);
      } else if (this.Case === "LabelLine") {
        return "Line is a label : " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(this.Fields[0]);
      } else {
        return "Line is meaningless and can be skipped";
      }
    }
  }]);

  return ProgramLine;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.ProgramLine", ProgramLine);
var MachineState = function () {
  function MachineState(inputs, outputs, registers, humanValue, programLines, currentInstructionLine) {
    _classCallCheck(this, MachineState);

    this.Inputs = inputs;
    this.Outputs = outputs;
    this.Registers = registers;
    this.HumanValue = humanValue;
    this.ProgramLines = programLines;
    this.CurrentInstructionLine = currentInstructionLine;
  }

  _createClass(MachineState, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
    value: function () {
      return {
        type: "Hmrp.HmrpEvaluator.MachineState",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Inputs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* Array */])(Int32Array, true),
          Outputs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* Array */])(Int32Array, true),
          Registers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* Array */])(Register),
          HumanValue: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["e" /* Option */])("number"),
          ProgramLines: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* Array */])(ProgramLine),
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
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["g" /* compareRecords */])(this, other);
    }
  }, {
    key: "ToString",
    value: function () {
      var inputsAsString = listToString(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(this.Inputs));
      var outputsAsString = listToString(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(this.Outputs));
      var registersAsStringList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["b" /* map */])(function (r) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("\n        {Index : %i, Value : %s}")(function (x) {
          return x;
        })(r.Index)(maybeToString(r.RegisterValue));
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(this.Registers));
      var registersAsString = listToString(registersAsStringList);
      var humanValueAsString = this.HumanValue != null ? String(this.HumanValue) : "None";
      var result = "State" + "\n" + "    Inputs: " + inputsAsString + "\n" + "    Outputs: " + outputsAsString + "\n" + "    Registers: " + registersAsString + "\n" + "    Human Value: " + humanValueAsString + "\n" + "    Current Line: " + String(this.CurrentInstructionLine);
      return result;
    }
  }]);

  return MachineState;
}();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.MachineState", MachineState);
var InstructionEvaluationResult = function () {
  function InstructionEvaluationResult(caseName, fields) {
    _classCallCheck(this, InstructionEvaluationResult);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(InstructionEvaluationResult, [{
    key: __WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["a" /* default */].reflection,
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
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fable_core_Symbol__["b" /* setType */])("Hmrp.HmrpEvaluator.InstructionEvaluationResult", InstructionEvaluationResult);

function toInstruction(instructionName, argument, lineNumber) {
  var instructionUpperCase = instructionName.toLocaleUpperCase();

  try {
    switch (instructionUpperCase) {
      case "INBOX":
        return new ProgramLine("InstructionLine", [new Instruction("Inbox", [])]);

      case "OUTBOX":
        return new ProgramLine("InstructionLine", [new Instruction("Outbox", [])]);

      case "JUMPZ":
        return new ProgramLine("InstructionLine", [new Instruction("JumpIfZero", [argument])]);

      case "JUMPN":
        return new ProgramLine("InstructionLine", [new Instruction("JumpIfNegative", [argument])]);

      case "JUMP":
        return new ProgramLine("InstructionLine", [new Instruction("Jump", [argument])]);

      case "COPYTO":
        var value = Number.parseInt(argument);
        return new ProgramLine("InstructionLine", [new Instruction("CopyTo", [value])]);

      case "COPYFROM":
        var value_1 = Number.parseInt(argument);
        return new ProgramLine("InstructionLine", [new Instruction("CopyFrom", [value_1])]);

      case "BUMPUP":
        var value_2 = Number.parseInt(argument);
        return new ProgramLine("InstructionLine", [new Instruction("Increment", [value_2])]);

      case "BUMPDN":
        var value_3 = Number.parseInt(argument);
        return new ProgramLine("InstructionLine", [new Instruction("Decrement", [value_3])]);

      case "ADD":
        var value_4 = Number.parseInt(argument);
        return new ProgramLine("InstructionLine", [new Instruction("Add", [value_4])]);

      case "SUB":
        var value_5 = Number.parseInt(argument);
        return new ProgramLine("InstructionLine", [new Instruction("Subtract", [value_5])]);

      default:
        return new ProgramLine("MeaningLessLine", []);
    }
  } catch (matchValue) {
    var argumentToString = argument != null ? argument : "None";
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot parse line %i which instruction is %s and argument %s.")(function (x) {
      console.log(x);
    })(lineNumber)(instructionName)(argumentToString);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Line will be interpreted as a comment.")(function (x) {
      console.log(x);
    });
    return new ProgramLine("MeaningLessLine", []);
  }
}

function parseLine(line, lineNumber) {
  var isLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_RegExp__["b" /* isMatch */])(LabelRegex, line);
  var isInstruction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_RegExp__["b" /* isMatch */])(InstructionRegex, line);

  if (isLabel) {
    var regexMatch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_RegExp__["c" /* match */])(LabelRegex, line);
    var label = new Label(regexMatch[1], lineNumber);
    return new ProgramLine("LabelLine", [label]);
  } else if (isInstruction) {
    var regexMatch_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_fable_core_RegExp__["c" /* match */])(InstructionRegex, line);
    var instructionName = regexMatch_1[2];
    var hasArgument = regexMatch_1.length >= 4;
    var argument = hasArgument ? regexMatch_1[4] : null;
    return toInstruction(instructionName, argument, lineNumber);
  } else {
    return new ProgramLine("MeaningLessLine", []);
  }
}

function skipLine(machineState) {
  var result = void 0;
  var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
  result = new MachineState(machineState.Inputs, machineState.Outputs, machineState.Registers, machineState.HumanValue, machineState.ProgramLines, CurrentInstructionLine);
  return result;
}

function getLineIndexByLabelName(program, labelToFind) {
  var filterFunc = function filterFunc(programLine) {
    if (programLine.Case === "InstructionLine") {
      return false;
    } else if (programLine.Case === "LabelLine") {
      return programLine.Fields[0].Name === labelToFind;
    } else {
      return false;
    }
  };

  try {
    return new ResultF("OkF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["b" /* findIndex */])(filterFunc, program)]);
  } catch (matchValue) {
    return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot find line with the given label %s.")(function (x) {
      return x;
    })(labelToFind)]);
  }
}

function getRegisterByIndex(registers, registerIndex) {
  var filterFunc = function filterFunc(register) {
    return register.Index === registerIndex;
  };

  try {
    return new ResultF("OkF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["c" /* find */])(filterFunc, registers)]);
  } catch (matchValue) {
    return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot find register with the given index %i.")(function (x) {
      return x;
    })(registerIndex)]);
  }
}

function runInboxInstruction(machineState) {
  if (machineState.Inputs.length > 0) {
    var firstElemOfInput = machineState.Inputs[0];
    var restOfInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Inputs).tail;
    var result = void 0;
    var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
    var HumanValue = firstElemOfInput;
    result = new MachineState(Int32Array.from(restOfInput), machineState.Outputs, machineState.Registers, HumanValue, machineState.ProgramLines, CurrentInstructionLine);
    return new ResultF("OkF", [result]);
  } else {
    return new ResultF("ErrorF", ["Cannot get an input because the input list is empty."]);
  }
}

function runOutBoxInstruction(machineState) {
  if (machineState.HumanValue == null) {
    return new ResultF("ErrorF", ["Cannot set output since there is no value in the human register."]);
  } else {
    var newOutputs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["c" /* append */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Outputs), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])([machineState.HumanValue]));
    var result = void 0;
    var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
    var HumanValue = null;
    var Outputs = Int32Array.from(newOutputs);
    result = new MachineState(machineState.Inputs, Outputs, machineState.Registers, HumanValue, machineState.ProgramLines, CurrentInstructionLine);
    return new ResultF("OkF", [result]);
  }
}

function runJumpIfNegativeInstruction(machineState, labelToJumpTo) {
  if (machineState.HumanValue == null) {
    return new ResultF("ErrorF", ["Cannot test to jump since there is no value in the human register."]);
  } else {
    var shouldJump = machineState.HumanValue < 0;
    var nextLineIndexOrError = shouldJump ? getLineIndexByLabelName(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.ProgramLines), labelToJumpTo) : new ResultF("OkF", [machineState.CurrentInstructionLine + 1]);

    var f = function f(nextLineIndex) {
      return new ResultF("OkF", [new MachineState(machineState.Inputs, machineState.Outputs, machineState.Registers, machineState.HumanValue, machineState.ProgramLines, nextLineIndex)]);
    };

    return ResultFbind(f, nextLineIndexOrError);
  }
}

function runJumpIfZeroInstruction(machineState, labelToJumpTo) {
  if (machineState.HumanValue == null) {
    return new ResultF("ErrorF", ["Cannot test to jump since there is no value in the human register."]);
  } else {
    var shouldJump = machineState.HumanValue === 0;
    var nextLineIndexOrError = shouldJump ? getLineIndexByLabelName(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.ProgramLines), labelToJumpTo) : new ResultF("OkF", [machineState.CurrentInstructionLine + 1]);

    var f = function f(nextLineIndex) {
      return new ResultF("OkF", [new MachineState(machineState.Inputs, machineState.Outputs, machineState.Registers, machineState.HumanValue, machineState.ProgramLines, nextLineIndex)]);
    };

    return ResultFbind(f, nextLineIndexOrError);
  }
}

function runJumpInstruction(machineState, labelToJumpTo) {
  var nextLineIndexOrError = getLineIndexByLabelName(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.ProgramLines), labelToJumpTo);

  var f = function f(nextLineIndex) {
    return new ResultF("OkF", [new MachineState(machineState.Inputs, machineState.Outputs, machineState.Registers, machineState.HumanValue, machineState.ProgramLines, nextLineIndex)]);
  };

  return ResultFbind(f, nextLineIndexOrError);
}

function runCopyToInstruction(machineState, registerIndex) {
  var oldRegisterOrError = getRegisterByIndex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers), registerIndex);

  var f = function f(oldRegister) {
    if (machineState.HumanValue == null) {
      return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot copy to register %i because there is no value in the human register.")(function (x) {
        return x;
      })(oldRegister.Index)]);
    } else {
      var newRegister = void 0;
      var RegisterValue = machineState.HumanValue;
      newRegister = new Register(oldRegister.Index, RegisterValue);
      var allRegisterExceptOne = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* filter */])(function (register) {
        return !register.Equals(oldRegister);
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers));
      var allRegistersUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["c" /* append */])(allRegisterExceptOne, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])([newRegister]));
      return new ResultF("OkF", [function () {
        var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
        var Registers = Array.from(allRegistersUpdate);
        return new MachineState(machineState.Inputs, machineState.Outputs, Registers, machineState.HumanValue, machineState.ProgramLines, CurrentInstructionLine);
      }()]);
    }
  };

  return ResultFbind(f, oldRegisterOrError);
}

function runCopyFromInstruction(machineState, registerIndex) {
  var registerOrError = getRegisterByIndex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers), registerIndex);

  var f = function f(register) {
    if (register.RegisterValue == null) {
      return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot copy from register %i because register has no value.")(function (x) {
        return x;
      })(register.Index)]);
    } else {
      return new ResultF("OkF", [function () {
        var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
        var HumanValue = register.RegisterValue;
        return new MachineState(machineState.Inputs, machineState.Outputs, machineState.Registers, HumanValue, machineState.ProgramLines, CurrentInstructionLine);
      }()]);
    }
  };

  return ResultFbind(f, registerOrError);
}

function runAddInstruction(machineState, registerIndex) {
  var registerOrError = getRegisterByIndex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers), registerIndex);

  var f = function f(register) {
    if (register.RegisterValue == null) {
      return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot add with register %i because register has no value.")(function (x) {
        return x;
      })(register.Index)]);
    } else if (machineState.HumanValue == null) {
      return new ResultF("ErrorF", ["Cannot add with register %i because there is no value in the human register"]);
    } else {
      return new ResultF("OkF", [function () {
        var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
        var HumanValue = register.RegisterValue + machineState.HumanValue;
        return new MachineState(machineState.Inputs, machineState.Outputs, machineState.Registers, HumanValue, machineState.ProgramLines, CurrentInstructionLine);
      }()]);
    }
  };

  return ResultFbind(f, registerOrError);
}

function runSubtractInstruction(machineState, registerIndex) {
  var registerOrError = getRegisterByIndex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers), registerIndex);

  var f = function f(register) {
    if (register.RegisterValue == null) {
      return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot subtract from register %i because register has no value.")(function (x) {
        return x;
      })(register.Index)]);
    } else if (machineState.HumanValue == null) {
      return new ResultF("ErrorF", ["Cannot add with register %i because there is no value in the human register"]);
    } else {
      return new ResultF("OkF", [function () {
        var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
        var HumanValue = machineState.HumanValue - register.RegisterValue;
        return new MachineState(machineState.Inputs, machineState.Outputs, machineState.Registers, HumanValue, machineState.ProgramLines, CurrentInstructionLine);
      }()]);
    }
  };

  return ResultFbind(f, registerOrError);
}

function runIncrementInstruction(machineState, registerIndex) {
  var oldRegisterOrError = getRegisterByIndex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers), registerIndex);

  var f = function f(oldRegister) {
    if (oldRegister.RegisterValue == null) {
      return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot increment from register %i because register has no value.")(function (x) {
        return x;
      })(oldRegister.Index)]);
    } else {
      var newValue = oldRegister.RegisterValue + 1;
      var newRegister = void 0;
      var RegisterValue = newValue;
      newRegister = new Register(oldRegister.Index, RegisterValue);
      var allRegisterExceptOne = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* filter */])(function (register) {
        return !register.Equals(oldRegister);
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers));
      var allRegistersUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["c" /* append */])(allRegisterExceptOne, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])([newRegister]));
      return new ResultF("OkF", [function () {
        var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
        var Registers = Array.from(allRegistersUpdate);
        var HumanValue = newValue;
        return new MachineState(machineState.Inputs, machineState.Outputs, Registers, HumanValue, machineState.ProgramLines, CurrentInstructionLine);
      }()]);
    }
  };

  return ResultFbind(f, oldRegisterOrError);
}

function runDecrementInstruction(machineState, registerIndex) {
  var oldRegisterOrError = getRegisterByIndex(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers), registerIndex);

  var f = function f(oldRegister) {
    if (oldRegister.RegisterValue == null) {
      return new ResultF("ErrorF", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Cannot increment from register %i because register has no value.")(function (x) {
        return x;
      })(oldRegister.Index)]);
    } else {
      var newValue = oldRegister.RegisterValue - 1;
      var newRegister = void 0;
      var RegisterValue = newValue;
      newRegister = new Register(oldRegister.Index, RegisterValue);
      var allRegisterExceptOne = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["d" /* filter */])(function (register) {
        return !register.Equals(oldRegister);
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])(machineState.Registers));
      var allRegistersUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["c" /* append */])(allRegisterExceptOne, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])([newRegister]));
      return new ResultF("OkF", [function () {
        var CurrentInstructionLine = machineState.CurrentInstructionLine + 1;
        var Registers = Array.from(allRegistersUpdate);
        var HumanValue = newValue;
        return new MachineState(machineState.Inputs, machineState.Outputs, Registers, HumanValue, machineState.ProgramLines, CurrentInstructionLine);
      }()]);
    }
  };

  return ResultFbind(f, oldRegisterOrError);
}

function runInstruction(machineState, instruction) {
  var nextStep = instruction.Case === "Outbox" ? runOutBoxInstruction(machineState) : instruction.Case === "JumpIfNegative" ? runJumpIfNegativeInstruction(machineState, instruction.Fields[0]) : instruction.Case === "JumpIfZero" ? runJumpIfZeroInstruction(machineState, instruction.Fields[0]) : instruction.Case === "Jump" ? runJumpInstruction(machineState, instruction.Fields[0]) : instruction.Case === "CopyTo" ? runCopyToInstruction(machineState, instruction.Fields[0]) : instruction.Case === "CopyFrom" ? runCopyFromInstruction(machineState, instruction.Fields[0]) : instruction.Case === "Add" ? runAddInstruction(machineState, instruction.Fields[0]) : instruction.Case === "Subtract" ? runSubtractInstruction(machineState, instruction.Fields[0]) : instruction.Case === "Increment" ? runIncrementInstruction(machineState, instruction.Fields[0]) : instruction.Case === "Decrement" ? runDecrementInstruction(machineState, instruction.Fields[0]) : runInboxInstruction(machineState);

  if (nextStep.Case === "OkF") {
    return new InstructionEvaluationResult("NewState", [nextStep.Fields[0]]);
  } else {
    return new InstructionEvaluationResult("End", [nextStep.Fields[0]]);
  }
}
function runStep(machineState) {
  if (machineState.CurrentInstructionLine < machineState.ProgramLines.length) {
    var currentInstruction = machineState.ProgramLines[machineState.CurrentInstructionLine];
    var result = currentInstruction.Case === "LabelLine" ? new InstructionEvaluationResult("NewState", [skipLine(machineState)]) : currentInstruction.Case === "InstructionLine" ? runInstruction(machineState, currentInstruction.Fields[0]) : new InstructionEvaluationResult("NewState", [skipLine(machineState)]);
    return result;
  } else {
    return new InstructionEvaluationResult("End", ["There is no more line to run."]);
  }
}
function printState(state) {
  var stateToString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(state);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("%s\n")(function (x) {
    console.log(x);
  })(stateToString);
}
function printStates(states) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = states[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var state = _step.value;
      printState(state);
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
}
function stringArrayToProgramList(lines) {
  var results = [];

  for (var i = 0; i <= lines.length - 1; i++) {
    var line = lines[i];
    var result = parseLine(line, i);
    results.push(result);
  }

  var returnedValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["d" /* toList */])(results);
  return returnedValue;
}
function stringListToProgramList(lines) {
  var results = [];

  for (var i = 0; i <= lines.length - 1; i++) {
    var line = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["e" /* item */])(i, lines);
    var result = parseLine(line, i);
    results.push(result);
  }

  var returnedValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["d" /* toList */])(results);
  return returnedValue;
}
var defaultMachineState = new MachineState(new Int32Array([]), new Int32Array([]), [], null, [], 0);
function buildEmptyRegisters(nbOfRegisters) {
  var registers = new __WEBPACK_IMPORTED_MODULE_4_fable_core_List__["e" /* default */]();

  for (var i = 0; i <= nbOfRegisters; i++) {
    var newRegister = new Register(i, null);
    registers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["c" /* append */])(registers, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fable_core_List__["a" /* ofArray */])([newRegister]));
  }

  return registers;
}
function printProgramLines(programLines) {
  var i = 1;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = programLines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var result = _step2.value;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_fable_core_String__["a" /* fsFormat */])("Line %i %s")(function (x) {
        console.log(x);
      })(i)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["d" /* toString */])(result));
      i = i + 1;
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
}
function runFirstStep(input) {
  var lines = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Serialize__["a" /* ofJson */])(input.lines, {
    T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* Array */])("string")
  });
  var registers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Serialize__["a" /* ofJson */])(input.registers, {
    T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* Array */])(Register)
  });
  var inputs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_fable_core_Serialize__["a" /* ofJson */])(input.inputs, {
    T: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_fable_core_Util__["h" /* Array */])(Int32Array, true)
  });
  var parsedLines = stringListToProgramList(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_fable_core_Seq__["d" /* toList */])(lines));
  var programInitialState = defaultMachineState;
  var state = void 0;
  var ProgramLines = Array.from(parsedLines);
  state = new MachineState(inputs, programInitialState.Outputs, registers, programInitialState.HumanValue, ProgramLines, programInitialState.CurrentInstructionLine);
  var nextStepResult = runStep(state);
  return nextStepResult;
}

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Symbol__ = __webpack_require__(2);
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
            else if (resolved instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["j" /* NonDeclaredType */] && resolved.kind === "GenericParam") {
                return resolveGeneric(resolved.definition, enclosing.tail);
            }
            else {
                return new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](resolved, enclosing);
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
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["j" /* NonDeclaredType */]) {
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
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["j" /* NonDeclaredType */]) {
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["n" /* getPropertyNames */])(obj).map(function (k) { return obj[k]; });
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
    var Cons = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["k" /* getDefinition */])(caseInfo.declaringType);
    return new (Cons.bind.apply(Cons, [void 0, caseInfo.name].concat(args)))();
}
function getTupleElements(typ) {
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["j" /* NonDeclaredType */] && typ.kind === "Tuple") {
        return typ.generics;
    }
    throw new Error("Type " + getTypeFullName(typ) + " is not a tuple type.");
}
function isTupleType(typ) {
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_0__Util__["j" /* NonDeclaredType */]) {
        return typ.kind === "Tuple";
    }
    return false;
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Set__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Map__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Seq__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Reflection__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__String__ = __webpack_require__(11);
/* unused harmony export toJson */
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
            if (v instanceof __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */] || v instanceof __WEBPACK_IMPORTED_MODULE_2__Set__["a" /* default */] || v instanceof Set) {
                return Array.from(v);
            }
            else if (v instanceof __WEBPACK_IMPORTED_MODULE_3__Map__["a" /* default */] || v instanceof Map) {
                var stringKeys_1 = null;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Seq__["a" /* fold */])(function (o, kv) {
                    if (stringKeys_1 === null) {
                        stringKeys_1 = typeof kv[0] === "string";
                    }
                    o[stringKeys_1 ? kv[0] : toJson(kv[0])] = kv[1];
                    return o;
                }, {}, v);
            }
            else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["i" /* hasInterface */])(v, "FSharpRecord") && properties) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Seq__["a" /* fold */])(function (o, prop) {
                    return o[prop] = v[prop], o;
                }, {}, Object.getOwnPropertyNames(properties));
            }
            else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["i" /* hasInterface */])(v, "FSharpUnion")) {
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
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_4__Util__["j" /* NonDeclaredType */]) {
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
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_4__Util__["j" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Option":
            case "Array":
                return typ.definition != null || needsInflate(new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](typ.generics, enclosing));
            case "Tuple":
                return typ.generics.some(function (x) {
                    return needsInflate(new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](x, enclosing));
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
    var ar = [], li = new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](), cur = val, inf = needsInflate(enclosing);
    while (cur.tail != null) {
        ar.push(inf ? inflate(cur.head, enclosing, path) : cur.head);
        cur = cur.tail;
    }
    ar.reverse();
    for (var i = 0; i < ar.length; i++) {
        li = new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](ar[i], li);
    }
    return li;
}
function inflate(val, typ, path) {
    var enclosing = null;
    if (typ instanceof __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */]) {
        enclosing = typ;
        typ = typ.head;
    }
    else {
        enclosing = new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](typ, new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */]());
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
    else if (typ instanceof __WEBPACK_IMPORTED_MODULE_4__Util__["j" /* NonDeclaredType */]) {
        switch (typ.kind) {
            case "Unit":
                return null;
            case "Option":
                return inflate(val, new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](typ.generics, enclosing), path);
            case "Array":
                if (typ.definition != null) {
                    return new typ.definition(val);
                }
                else {
                    return inflateArray(val, new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](typ.generics, enclosing), path);
                }
            case "Tuple":
                return typ.generics.map(function (x, i) {
                    return inflate(val[i], new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](x, enclosing), combine(path, i));
                });
            case "GenericParam":
                return inflate(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(typ.definition, enclosing.tail), path);
            case "GenericType":
                var def = typ.definition;
                if (def === __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */]) {
                    return Array.isArray(val)
                        ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__List__["a" /* ofArray */])(inflateArray(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path))
                        : inflateList(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path);
                }
                if (def === __WEBPACK_IMPORTED_MODULE_2__Set__["a" /* default */]) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Set__["b" /* create */])(inflateArray(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path));
                }
                if (def === Set) {
                    return new Set(inflateArray(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), path));
                }
                if (def === __WEBPACK_IMPORTED_MODULE_3__Map__["a" /* default */]) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Map__["b" /* create */])(inflateMap(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(1, enclosing), path));
                }
                if (def === Map) {
                    return new Map(inflateMap(val, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(0, enclosing), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Reflection__["b" /* resolveGeneric */])(1, enclosing), path));
                }
                return inflate(val, new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](typ.definition, enclosing), path);
            default:
                return val;
        }
    }
    else if (typeof typ === "function") {
        if (typ === Date) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Date__["a" /* parse */])(val);
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
                        uFields.push(inflate(fields[i], new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](fieldTypes[i], enclosing), combine(path, i)));
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
                newObj[k] = inflate(val[k], new __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */](properties[k], enclosing), combine(path, k));
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
            if (v instanceof __WEBPACK_IMPORTED_MODULE_1__List__["e" /* default */] || v instanceof __WEBPACK_IMPORTED_MODULE_2__Set__["a" /* default */] || v instanceof Set) {
                return {
                    $type: typeName || "System.Collections.Generic.HashSet",
                    $values: Array.from(v)
                };
            }
            else if (v instanceof __WEBPACK_IMPORTED_MODULE_3__Map__["a" /* default */] || v instanceof Map) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Seq__["a" /* fold */])(function (o, kv) { o[kv[0]] = kv[1]; return o; }, { $type: typeName || "System.Collections.Generic.Dictionary" }, v);
            }
            else if (typeName) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["i" /* hasInterface */])(v, "FSharpUnion") || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["i" /* hasInterface */])(v, "FSharpRecord")) {
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
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__List__["a" /* ofArray */])(v.$values);
            }
            else if (type == "Microsoft.FSharp.Collections.FSharpSet") {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Set__["b" /* create */])(v.$values);
            }
            else if (type == "System.Collections.Generic.HashSet") {
                return new Set(v.$values);
            }
            else if (type == "Microsoft.FSharp.Collections.FSharpMap") {
                delete v.$type;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Map__["b" /* create */])(Object.getOwnPropertyNames(v)
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
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__Date__["a" /* parse */])(v);
        else
            return v;
    });
    var expected = genArgs ? genArgs.T : null;
    if (parsed != null && typeof expected === "function"
        && !(parsed instanceof __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Util__["k" /* getDefinition */])(expected))) {
        throw new Error("JSON is not of type " + expected.name + ": " + json);
    }
    return parsed;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Long__ = __webpack_require__(8);
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["l" /* compare */])(x, y);
}
function compareTo(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Util__["l" /* compare */])(x, y);
}
function duration(x) {
    return Math.abs(x);
}


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hmrpEvaluator__ = __webpack_require__(12);


function guid() 
{
    function s4() 
    {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var computations = {};
var NEW_STATE_CASE = "NewState";
var END_CASE =  "End";

var postStop = function()
{
    var obj = {
        Case : END_CASE,
        Fields : ["Computation canceled."]
    };
    postMessage(obj);
}

var postData = function(msg)
{
    if (msg.Case === NEW_STATE_CASE)
    {
        var struct = msg.Fields[0];
        var newInputs = [];
        for(var i = 0; i < struct.Inputs.length; i++)
        {
            newInputs.push(struct.Inputs[i]);
        }
        struct.Inputs = newInputs;

        var newOutputs = [];
        for(var i = 0; i < struct.Outputs.length; i++)
        {
            newOutputs.push(struct.Outputs[i]);
        }
        struct.Outputs = newOutputs;

        var newRegisters = [];
        for(var i = 0; i < struct.Registers.length; i++)
        {
            newRegisters.push(struct.Registers[i]);
        }
        struct.Registers = newRegisters;
    }
    postMessage(msg);
};

onmessage = function(e) 
{
    var uuid = guid();

    if (e.data === "STOP")
    {
        for (var key in computations) 
        {
            if (!computations.hasOwnProperty(key)) continue;

            var obj = computations[key];
            obj.shouldContinue = false;
            obj.hasBeenStopped = true;
        }
    }
    else
    {
        var initialState = __WEBPACK_IMPORTED_MODULE_0__hmrpEvaluator__["a" /* runFirstStep */](e.data);
        postData(initialState);
        computations[uuid] = {
            shouldContinue : initialState.Case === NEW_STATE_CASE,
            state : initialState,
            hasBeenStopped : false,
        };

        var runRecursively = function() {
            if (computations[uuid].shouldContinue === true)
            {
                setTimeout(function ()  
                {
                    var newState = __WEBPACK_IMPORTED_MODULE_0__hmrpEvaluator__["b" /* runStep */](computations[uuid].state.Fields[0]);
                    postData(newState);
                    computations[uuid].shouldContinue = computations[uuid].shouldContinue && (newState.Case === NEW_STATE_CASE);
                    computations[uuid].state = newState;
                    if (computations[uuid].shouldContinue)
                    {
                        runRecursively();
                    }
                    else
                    {
                        if (newState.Case === NEW_STATE_CASE && computations[uuid].hasBeenStopped)
                        {
                            postStop();
                        }
                    }
                }, 0);
            }
        }

        runRecursively();
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=hmrpEvaluator.js.map