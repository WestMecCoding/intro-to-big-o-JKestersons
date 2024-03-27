//create a function that will take a argument that stands for the maximum interger you want to count to
    function linearSum(n) {
//initialize a starting value for the total sum
        let sum = 0;
//run a for loop that starts at the first number and counts up to the maximum sum the numbers in the loop
        for (let i = 1; i <= n; i++) {
//return the final total sum
        sum = sum + i;
        //sum +- i;
        //same thing
        }
        return sum;
    }
//log the final output
console.log(linearSum(100));