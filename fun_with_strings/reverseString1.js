// initialize a variable called someStr to some string of your choice
let someStr = "Hello";
// create a named function that takes an argument 'str'
function reverseString(str) {
// In the function reverse 'str'
    str = str.split("").revers().join("");
// Return 'str'
    return str;
}
// Outside of the function log the function and pass someStr
console.log(reverseString(someStr));