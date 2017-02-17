var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { setType } from "fable-core/Symbol";
import _Symbol from "fable-core/Symbol";
import { compareUnions, equalsUnions, GenericParam } from "fable-core/Util";
export var ResultF = function () {
  function ResultF(caseName, fields) {
    _classCallCheck(this, ResultF);

    this.Case = caseName;
    this.Fields = fields;
  }

  _createClass(ResultF, [{
    key: _Symbol.reflection,
    value: function () {
      return {
        type: "ResultF.ResultF.ResultF",
        interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
        cases: {
          ErrorF: [GenericParam("b")],
          OkF: [GenericParam("a")]
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return equalsUnions(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return compareUnions(this, other);
    }
  }]);

  return ResultF;
}();
setType("ResultF.ResultF.ResultF", ResultF);
export function bind(f, result) {
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