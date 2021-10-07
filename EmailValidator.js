function emailValidator(email){
    let emailRegex = RegExp("^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9](([.+-_][a-zA-Z0-9]+)?)[@][a-zA-Z0-9]+[.]([a-z]{2,3})([.][a-zA-z]{2})?$");
    if(emailRegex.test(email))
        console.log("Valid");
    else 
        throw 'Email is not valid';
}


try{
    emailValidator("abc.xyz@bridgelabz.com.au");
}catch(e){
    console.error(e);
}


try{
    emailValidator("abc@bridgelabz.com");
}catch(e){
    console.error(e);
}

try{
    emailValidator("abc@bridgelabz");
}catch(e){
    console.error(e);
}
