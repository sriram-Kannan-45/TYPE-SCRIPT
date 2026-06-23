function display(name : string , greeting : string = "hello") : String{

    return greeting +' '+ name + "!"
}

console.log(display('ram'))

console.log(display("ram","hi"))