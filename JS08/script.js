
// checking a number

const checkNumber = (number) => {

    if (number > 100) {
        return true;
    } else {
        return false;
    }
};
console.log(checkNumber(200));
console.log(checkNumber(500));
console.log(checkNumber(99));
console.log(checkNumber(77));
console.log(checkNumber(100));
/* THis function is a function that is 
doing somethin. In this case comapring numbers.
*/

//Bouncer at a club with max number of 50 people .
const Brenda = (presentNumberPeople, age, maxNumberrPeople) => {
    if (age < 18)
        return 'This club is for adults.';
    if (maxNumberrPeople > 50) {
        return "it's too busy now, come back later";
    } else { return "Come in" }
};

console.log(Brenda(40, 30, 40));
console.log(Brenda(40, 17, 40));
console.log(Brenda(56, 18, 56));
console.log(Brenda(40, 18, 49));
console.log(Brenda(40, 19, 60));
/* Bouncer at a club with comparing max number of people alowed in the club
and present number of people in the club.
This is a function doing something.
*/
const Brenda1 = (presentNumberPeople, age, maxNumberrPeople) => {
    if (age < 18)
        return 'This club is for adults.';
    if (maxNumberrPeople < presentNumberPeople) {
        return "it's too busy now, come back later";
    } else { return "Come in" }
};

console.log(Brenda1(40, 30, 40));
console.log(Brenda1(40, 17, 40));
console.log(Brenda1(56, 18, 55));
console.log(Brenda1(40, 18, 49));
console.log(Brenda1(70, 19, 60));


/*Calculating the average
This a function produsing a result */

const averageSum = (number1, number2, number3, number4, number5) => {
    let sum = (number1 + number2 + number3 + number4 + number5) / 5;
    return sum;
};

let result = averageSum(5, 6, 7, 8, 9);
console.log(result);
let result1 = averageSum(10, 5, 10, 5, 10)
console.log(result1);