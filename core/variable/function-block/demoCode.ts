function block()
{

    if (true)
    {
        const localVar = 1000 

        console.log(localVar)

    }

    console.log(localVar)

    function nested()
    {
        console.log(localVar)
    }

    nested()
}

block()