function emailValidator(email){
    let emailRegex = RegExp("^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9][@][a-zA-Z0-9]+");
    if(emailRegex.test(email))
        console.log("Valid");
    else 
        throw 'Email is not valid';
}


try{
    emailValidator("abc@bridgelabz");
}catch(e){
    console.error(e);
}


try{
    emailValidator("bridgelabz");
}catch(e){
    console.error(e);
}
