// function Add ( a : string , b : string) : string
// {
//     return a + b
// }

// function Add ( a : number , b : number) : number

// {
//     return a + b
// }

function Add ( a : any , b : any ) : any 

{
    return a + b
}

console.log(Add("Sriram" , "titoo"))
console.log(Add(1,"ram"))
console.log(Add("ram", 1))
console.log(typeof(Add(1,false)))
