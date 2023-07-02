function Log(target: any, prop: string){

    console.log("log 1",target)
    console.log("nama", prop)
}

// ACCESSORS : saat penempata decorator diline yg ditentukan didalam class maka yg akan kebaca after 
// put on deco in the line 
function Log2 (target: any, name: string){
    console.log("ACCESORS")
    console.log(target)
    console.log("acc name",name)

}

function Log3 (target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Log 3")
    console.log("3",target)
    console.log("3",name)
    console.log("3",descriptor)

}

class Product {
    @Log
    name: string
    quantity: number
    price: number
    @Log2
    set pricevalue (value:number){
        if(value > 0 ){
            this.price = value
        }
        else {
            throw new Error("angka tidak boleh negatif")
        }
    }
    constructor(q: number) {
        this.name = "ayam"
        this.quantity =  q
        this.price = 0
    }
    
    @Log3
    get(){
        console.log("harga",this.price)
    }
}

const prod = new Product(44)
prod.pricevalue = 25
prod.get()
console.log(prod.quantity)

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

 enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
   
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
   type LogLevelStrings = keyof typeof LogLevel;
   
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    console.log(LogLevel)
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("ERROR", "This is a message");


  interface tryData {
    [props:string] : {
        [props:string] : string
    }
  }

  const dataKosong:tryData = {}

  dataKosong.biji = {
    a: "berak"
  }

  console.log("data kosong", dataKosong)


  // ---

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
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

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});
