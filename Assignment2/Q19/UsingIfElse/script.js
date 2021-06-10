function signChecker(number){
    if(number>=0){
        console.log("The "+ number + " is positive number");
    }
    else{
        console.log("The "+ number + " is negative number"); 
    }
}

function typeChecker(parameter){
    if(typeof(parameter) == "string"){
        console.log("It's a string");
    }
    else if(typeof(parameter) == "number"){
        console.log("It's a number");
    }
    else if(typeof(parameter) == "boolean"){
        console.log("It's a boolean");
    }
    else if(typeof(parameter) == "null"){
        console.log("It's a null");
    }
    else if(typeof(parameter) == "undefined"){
        console.log("It's a undefined");
    }
    else if(typeof(parameter) == "symbol"){
        console.log("It's a symbol");
    }
}

signChecker(5);

typeChecker("Hello World!!");