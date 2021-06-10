function signChecker(number){
    switch(number>0){
        case 1:
            console.log("The "+ number + " is positive number");
            break;
        case 0:
            console.log("The "+ number + " is negative number"); 
            break;
    }
}

function typeChecker(parameter){
    let type = typeof(parameter);
    switch(type){
        case "string":
            console.log("It's a string");
            break;
        case "number":
            console.log("It's a number");
            break;
        case "boolean":
            console.log("It's a boolean");
            break;
        case "null":
            console.log("It's a null");
            break;
        case "undefined":
            console.log("It's a undefined");
            break;
        case "symbol":
            console.log("It's a symbol");
            break;
    }
}

signChecker(5);

typeChecker("Hello World");