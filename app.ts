const TryDecorator = (decorator: any) => {
  const test = new decorator();
  console.log("deco 1=>", test);
  return;
};

@TryDecorator
class TestDecorator {
  protected name: string;
  data: [];

  constructor(d: any, public age: number) {
    this.name = "beol";
    this.data = d;
  }
}
const dummy = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];
const test = new TestDecorator(dummy, 28);

// console.log(test.name);

const TryDeco2 = <T>(t: T) => {
  return (decocrator: any) => {
    const n = new decocrator(43, 99);
    console.log("Try Deco2=>", n);
  };
};

// const divingIntoClass = (t: any, u: string | number) => {
//   console.log("diving=>", u);
// };

@TryDeco2("Deco 2")
class TestDecorator2<NumType extends number> extends TestDecorator {
  //   @divingIntoClass
  numb: number;
  constructor(n: NumType, age: number) {
    super([{ id: 2 }], age);
    this.numb = n;
  }
  cobaProtected() {
    console.log("ini protected", this.name);
  }
}

const test2 = new TestDecorator2<number>(23, 30);
console.log("class extend 2=>", test2);

// ** param pada decorater flexible
const LogAccessor = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const MethodDeco = (
  target: any,
  name: string | string,
  descriptor: PropertyDescriptor
) => {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const ParamsDeco = (target: any, name: string | string, position: number) => {
  console.log("Params Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
};

class Accessor {
  _paramDecorator: string;

  @LogAccessor
  set beolan(val: number) {
    if (this._paramDecorator) {
      console.log(val);
    }
  }
  constructor() {
    this._paramDecorator = "tes accesor dan param decorator";
  }

  @MethodDeco
  getMethod(@ParamsDeco a: string) {
    return console.log(a);
  }
}

const acesor = new Accessor();
