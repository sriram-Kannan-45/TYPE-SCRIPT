function showDetails (id : number , name:String , email ?:String)
{
    console.log("ID ",id,"Name ",name);

    if (email != undefined)
    {
        console.log("Email-id ",email);
    }
}

showDetails(1,"ram")
showDetails(1,"ram","titooram123@gmail.com")