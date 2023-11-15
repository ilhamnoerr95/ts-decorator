function Logger(cb: string) {
  return function test(constructor: Function) {
    console.log("test");
    console.log(constructor);
    console.log(cb);
  };
}

function TestLagi(ele: string, hookId: string) {
  return function cb(constructor: any) {
    const clasObject = new constructor();
    const hookEle = document.getElementById(hookId);
    if (hookEle) {
      hookEle.innerHTML = ele;
      hookEle.querySelector("h1")!.textContent = clasObject.name;
    }
    console.log(constructor);
  };
}
// decorator menambah fungsi, properti element dll yg di ikuti dengan fungsi berikutnya,
// dimaana fungsi setelahnya akan diambil secara otomatis oleh decorator
// decorator memperpanjang fungsi yg ada di fungsi berikutnya dimana tidak mengubah fungsi asli didepannya
@Logger("ayam gorenbig")
@TestLagi("<h1>test element</h1>", "test")
class Person {
  constructor(public name = "bab") {
    console.log("extract ....");
  }
}

const prsn = new Person();

console.log(prsn);
