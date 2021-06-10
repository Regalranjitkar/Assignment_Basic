var list = ["something", "somethingOne", "somethingTwo", "somethingThree", "somethingThree", "somethingFour", "somethingFive"];

// Question no 1

console.log(list.length);

// Q2

console.log(list.indexOf("somethingThree"));

// Q3

console.log(list.lastIndexOf("somethingThree"));

// Q4

var listOne = "A solem oath to not to giveup on me to not to stop to not to quit.";
console.log(listOne.indexOf("to", 21));

// Q5

console.log(list.slice(3,4));

// with nagative number
console.log(list.slice(-3,-2));

// Q6

console.log(list.slice(3));

// Q7

console.log(listOne.substring(2, 7));

// with nagative number
console.log(listOne.substring(-8, -1)); // as we know substring does not accept negative value so this line of code does not display any value

// Q8

console.log(listOne.substring(15));

// Q9

console.log(listOne.substr(2, 5));

// with nagative number
console.log(listOne.substr(-11, 11));

// Q10

console.log(listOne.substr(2));

// Q11

console.log(listOne.search("oath"));

// Q12

console.log(listOne.replace("to","for"));

// using case insensetivity

console.log(listOne.replace(/TO/i,"for"));

// Using global match

console.log(listOne.replace(/to/g,"for"));

// Q13

console.log(listOne.toUpperCase());

// Q14

var listOneUpper = "A SOLEM OATH TO NOT TO GIVEUP ON ME TO NOT TO STOP TO NOT TO QUIT";
console.log(listOne.toLowerCase());

// Q15

var outOfVarName = "You are natures greatest miracle";
console.log(listOne.concat(outOfVarName));

// concatination using "+"

console.log(listOne + outOfVarName);

// Q16

var trimTrile = "           Something            ";
console.log(trimTrile.trim());

// Q17

var examplePadStart = "0";
console.log(examplePadStart.padStart(5,5));

// Q18

var examplePadStart = "25";
console.log(examplePadStart.padEnd(3,8));
