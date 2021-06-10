var orderTotal=0;



function collectOrder(numOrdered) {
    if (numOrdered>0){
    
    orderTotal = numOrdered * 5;
    }
    alert("You ordered " + orderTotal);
    return orderTotal;
}


var total = collectOrder(5);
console.log(total);
