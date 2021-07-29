//DO WHILE LOOP
let i = 1;
let n =100;
do {
    console.log(i);
    i++;
} while(i <= n);



// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);