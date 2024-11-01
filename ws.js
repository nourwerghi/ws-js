 //String Manipulation Functions

 //1 Reverse a String

function reverseString(str) {
    const strRev =  str.split('').reverse().join('');
    console.log(strRev);
}

reverseString("JavaScript");

//2 Count Characters
function countCharacters(str) {
    return str.length;
}
let exampleString = "welcome";
console.log(countCharacters(exampleString));

//3 Capitalize Words

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const input = " capitalize words function.";
const output = capitalizeWords(input);
console.log(output);
//Array Functions

//1 Find Maximum and Minimum
function findMaxMin(nbrs){
    var max=nbrs[0];
    var min=nbrs[0];
    for(var i=1;i<nbrs.length;i++){
    if(nbrs[i]>max){
        max=nbrs[i];    
    }else if (nbrs[i]<min){
        min=nbrs[i];   
    }
    }   
   return `Max: ${max}, Min:${min}`;
 }
 var numbers1 = [3, 5, 1, 9, -2, 4];
 console.log(findMaxMin(numbers1)); 
 
 //2 Sum of Array 
 function SumArray(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
       sum += arr[i];
    }
    return sum;
 }

 var myArray = [1, 2, 3, 4, 5];
 var result = SumArray(myArray);
 console.log(result);

 //3 Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);

}
const numbers = [1, 44, 75, 10, 51, 36, 77];
const npair = (num) => num % 2 === 0;
const evenNumbers = filterArray(numbers, npair);
console.log(evenNumbers); 

//Mathematical Functions:

//1 Factorial
function Factorial(num){
    var res=1;
    for( var i=2; i<=num;i++){
      res*=i;
    }
   
    if (num<0){
       return  'Factorial is not defined for negative numbers';
    }
     return res;
  }
  console.log(Factorial(7)); 

//2Prime Number
function PrimeNum(num){
    if (num<=1) return false;
    for(var i=2;i<num;i++){
        if (num % i === 0){
        return false;
    }
    }  
    return true;
 }
 console.log(PrimeNum(7));  

 //3Fibonacci Sequence:
 function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(7): " + fibonacci(7));
console.log("Fibonacci(9): " + fibonacci(10));

