// Iteration 1: Names and Input
console.log("I'm ready!");
var hacker1 = `Esther`
var statement = `The driver's name is ${hacker1}`;
console.log(statement);
var hacker2 = `Gaston`
var statement2 = `The navigator's name is ${hacker2}`;
console.log(statement2);







// Iteration 2: Conditionals
var spaced = "";
 
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
    } else (hacker1.length === hacker2.length)
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
    for(var i=0; i< hacker1.length; i++){
     spaced += hacker1.toUpperCase().charAt(i) + " ";
    }

    console.log(spaced);



// Iteration 3: Loops



let navigatorReversed = '';
for (let i = hacker2.length-1; i >= 0; i--) {
  if (navigatorReversed.length !== hacker2.length - 1) navigatorReversed += hacker2[i];
  else navigatorReversed += hacker2[i].toUpperCase();
}
console.log(navigatorReversed);
if (hacker1 < hacker2) console.log(`${hacker1} goes first.`);
else if (hacker1 > hacker2) console.log(`Yo, ${hacker2} goes first definitely.`);
else console.log('You have same names');



