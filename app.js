var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
var TryDecorator = function (decorator) {
    var test = new decorator();
    console.log("deco 1=>", test);
};
var TestDecorator = function () {
    var _classDecorators = [TryDecorator];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TestDecorator = _classThis = /** @class */ (function () {
        function TestDecorator_1(d, age) {
            this.age = age;
            this.name = "beol";
            this.data = d;
        }
        return TestDecorator_1;
    }());
    __setFunctionName(_classThis, "TestDecorator");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        TestDecorator = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TestDecorator = _classThis;
}();
var dummy = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
];
var test = new TestDecorator(dummy, 28);
// console.log(test.name);
// ---------------------------------------------------------------------------------
var TryDeco2 = function (t) {
    return function (decocrator) {
        var n = new decocrator(43, 99);
        console.log("Try Deco2=>", n);
    };
};
// const divingIntoClass = (t: any, u: string | number) => {
//   console.log("diving=>", u);
// };
var TestDecorator2 = function () {
    var _classDecorators_1 = [TryDeco2("Deco 2")];
    var _classDescriptor_1;
    var _classExtraInitializers_1 = [];
    var _classThis_1;
    var TestDecorator2 = _classThis_1 = /** @class */ (function (_super) {
        __extends(TestDecorator2_1, _super);
        function TestDecorator2_1(n, age) {
            var _this = _super.call(this, [{ id: 2 }], age) || this;
            _this.numb = n;
            return _this;
        }
        TestDecorator2_1.prototype.cobaProtected = function () {
            console.log("ini protected", this.name);
        };
        return TestDecorator2_1;
    }(TestDecorator));
    __setFunctionName(_classThis_1, "TestDecorator2");
    (function () {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        TestDecorator2 = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return TestDecorator2 = _classThis_1;
}();
var test2 = new TestDecorator2(23, 30);
console.log("class extend 2=>", test2);
// ---------------------------------------------------------------------------------
// ** param pada decorater flexible
var LogAccessor = function (target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
var MethodDeco = function (target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
var ParamsDeco = function (target, name, position) {
    console.log("Params Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
};
var Accessor = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _set_beolan_decorators;
    var _getMethod_decorators;
    return _a = /** @class */ (function () {
            function Accessor() {
                this._paramDecorator = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this._paramDecorator = "tes accesor dan param decorator";
            }
            Object.defineProperty(Accessor.prototype, "beolan", {
                set: function (val) {
                    if (this._paramDecorator) {
                        console.log(val);
                    }
                },
                enumerable: false,
                configurable: true
            });
            Accessor.prototype.getMethod = function (a) {
                return console.log(a);
            };
            return Accessor;
        }()),
        (function () {
            _set_beolan_decorators = [LogAccessor];
            _getMethod_decorators = [MethodDeco];
            __esDecorate(_a, null, _set_beolan_decorators, { kind: "setter", name: "beolan", static: false, private: false, access: { has: function (obj) { return "beolan" in obj; }, set: function (obj, value) { obj.beolan = value; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _getMethod_decorators, { kind: "method", name: "getMethod", static: false, private: false, access: { has: function (obj) { return "getMethod" in obj; }, get: function (obj) { return obj.getMethod; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var acesor = new Accessor();
// ----------------------------a class in class decorator-----------------------------------------------------
var classInClass = function () {
    console.log("berak");
    return function (originalDeco) {
        // const original = new originalDeco("uye");
        // console.log(original);
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                return _super.call(this, "class dalam class") || this;
            }
            class_1.prototype.get = function () {
                console.log(this._try);
            };
            return class_1;
        }(originalDeco));
    };
};
var TestClass = function () {
    var _classDecorators_2 = [classInClass()];
    var _classDescriptor_2;
    var _classExtraInitializers_2 = [];
    var _classThis_2;
    var TestClass = _classThis_2 = /** @class */ (function () {
        function TestClass_1(nama) {
            this.nama = nama;
            this._try = "test class in class deco";
        }
        return TestClass_1;
    }());
    __setFunctionName(_classThis_2, "TestClass");
    (function () {
        __esDecorate(null, _classDescriptor_2 = { value: _classThis_2 }, _classDecorators_2, { kind: "class", name: _classThis_2.name }, null, _classExtraInitializers_2);
        TestClass = _classThis_2 = _classDescriptor_2.value;
        __runInitializers(_classThis_2, _classExtraInitializers_2);
    })();
    return TestClass = _classThis_2;
}();
var Testis = new TestClass("bji");
console.log(Testis);
