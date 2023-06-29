function Log(target: any, prop: string){

    console.log("log 1",target, prop)
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

const Deco = (target: any)=>{
    console.log("deco paling bawah",target)
}

@Deco
class Coba {
    constructor(public name = "testimonial"){

    }
}



