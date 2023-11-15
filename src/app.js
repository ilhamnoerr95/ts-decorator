var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _this = this;
function Log(target, prop) {
    console.log("log 1", target);
    console.log("nama", prop);
}
// ACCESSORS : saat penempata decorator diline yg ditentukan didalam class maka yg akan kebaca after 
// put on deco in the line 
function Log2(target, name) {
    console.log("ACCESORS");
    console.log(target);
    console.log("acc name", name);
}
function Log3(target, name, descriptor) {
    console.log("Log 3");
    console.log("3", target);
    console.log("3", name);
    console.log("3", descriptor);
}
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _set_pricevalue_decorators;
    var _get_decorators;
    return _a = /** @class */ (function () {
            function Product(q) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.name = "ayam";
                this.quantity = q;
                this.price = 0;
            }
            Object.defineProperty(Product.prototype, "pricevalue", {
                set: function (value) {
                    if (value > 0) {
                        this.price = value;
                    }
                    else {
                        throw new Error("angka tidak boleh negatif");
                    }
                },
                enumerable: false,
                configurable: true
            });
            Product.prototype.get = function () {
                console.log("harga", this.price);
            };
            return Product;
        }()),
        (function () {
            _name_decorators = [Log];
            _set_pricevalue_decorators = [Log2];
            _get_decorators = [Log3];
            __esDecorate(_a, null, _set_pricevalue_decorators, { kind: "setter", name: "pricevalue", static: false, private: false, access: { has: function (obj) { return "pricevalue" in obj; }, set: function (obj, value) { obj.pricevalue = value; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_decorators, { kind: "method", name: "get", static: false, private: false, access: { has: function (obj) { return "get" in obj; }, get: function (obj) { return obj.get; } } }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
var prod = new Product(44);
prod.pricevalue = 25;
prod.get();
console.log(prod.quantity);
// const Deco = (target: any)=>{
//     console.log("deco paling bawah",target)
// }
// @Deco
// class Coba {
//     constructor(public name = "This Work Dude"){
//     }
//     get(){
//         console.log(this.name)
//     }
// }
//   /* tslint:disable:no-unused-variable */
// const _ = new Coba()
// const button = document.getElementById("btn")
// button.addEventListener("click", test.get)
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    console.log(LogLevel);
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");
var dataKosong = {};
dataKosong.biji = {
    a: "berak"
};
console.log("data kosong", dataKosong);
var registeredValidators = {};
function Required(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = ['required'], _a));
}
function PositiveNumber(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = ['positive'], _a));
}
function validate(obj) {
    var objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    var isValid = true;
    for (var prop in objValidatorConfig) {
        for (var _i = 0, _a = objValidatorConfig[prop]; _i < _a.length; _i++) {
            var validator = _a[_i];
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
var Course = function () {
    var _a;
    var _instanceExtraInitializers_1 = [];
    var _title_decorators;
    var _title_initializers = [];
    var _price_decorators;
    var _price_initializers = [];
    return _a = /** @class */ (function () {
            function Course(t, p) {
                this.title = (__runInitializers(this, _instanceExtraInitializers_1), __runInitializers(this, _title_initializers, void 0));
                this.price = __runInitializers(this, _price_initializers, void 0);
                this.title = t;
                this.price = p;
            }
            return Course;
        }()),
        (function () {
            _title_decorators = [Required];
            _price_decorators = [PositiveNumber];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } } }, _price_initializers, _instanceExtraInitializers_1);
        })(),
        _a;
}();
var courseForm = document.querySelector('form');
courseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var titleEl = document.getElementById('title');
    var priceEl = document.getElementById('price');
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});
