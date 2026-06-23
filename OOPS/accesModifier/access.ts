class car 
{
    public brand : string 

    private speed : number ;

    protected fule : string;

    constructor (brand:string , speed : number , fule : string)
    {
        this.brand = brand
        this.speed = speed
        this.fule = fule
    }

    public acclerate()
    {
        this.speed += 10
        console.log(`Accelerating to ${this.speed}km/h`)
    }

    private refule()
    {
        console.log(`refule. fule is now ${this.fule}`)
    }

    protected honk()
    {
        console.log("hong hong")
    }

    public displayed()
    {
        console.log(`brand : ${this.brand}`)
        console.log(`speed ${this.speed}`)
        console.log(`fule: ${this.fule}`)
        this.refule()
        this.honk()
    }

}

let Mycar = new car("BMW" , 120, "desel")
console.log(Mycar.brand)
Mycar.acclerate()
Mycar.displayed()

