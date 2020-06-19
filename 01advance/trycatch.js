const converttors = (dollar) =>  
{
    if (typeof dollar === 'number')
    {
        return    dollar * 64
    }
    else{
        throw Error('amount to be in nuber')
    }
}

try {
    const myvalue = converttors("5")

    console.log(myvalue);
     
} catch (e) {
    console.log(e);
    
}


console.log('i will no run if prog crashes');



