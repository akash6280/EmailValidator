function emailValidator(email){
    let emailRegex = RegExp("[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]");
    if(emailRegex.test(email))
        console.log("Valid");
    else 
        throw 'Email is not valid';
}

let emailArray = new Array();
emailArray.push("abc");
emailArray.forEach(element => {
    try{
        emailValidator(element);
    }catch(e){
        console.error(e);
    }
});