function factorial(n){
   
    let factorial_Val = 1;
    let i = 1; 
    do{
        factorial_Val = factorial_Val * i;
        i++;
    }
    while(i<=n)
    console.log(factorial_Val);
    
}

factorial(15);