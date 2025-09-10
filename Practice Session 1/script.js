// 1. log "hello javascript "to the console in 3 different ways

// console.log("hello world");
// console.warn("hello world");
// console.error("hello javascript");
// console.info("hello javascript");

// console.groupCollapsed("All item is here");
//     console.log("aalo")
//     console.log("tamatr")
//     console.log("pyaz")
//     console.log("baiagin")
// console.groupEnd();


// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

// console.log(35 * 2 - (10 / 2) + 7);

// 3.Log the data type of "123", 123, true, and null using typeof.

// console.log(typeof("123"));
// console.log(typeof(123));
// console.log(typeof(true));
// console.log(typeof(null));

//4.Write a program that swaps the values of two variables.
  
let a=12;
let b=13;
// let c;

//  c=a;
//  a=b;
//  b=c;
//  console.log(a,b);

//  [a,b]=[b,a];
//  console.log(a,b);

// 5.  Declare a const object, modify its properties, and log the updated object.

// const obj={
//     name:"sumit",
//     age:23,
//     village:"banasbt"
// }

// obj.name="khushi";
// console.log(obj);


//6.Convert "50" (string) into a number using 3 different methods

let str="50"
// let num=Number(str);
// console.log(typeof(num))

// let num=parseInt(str);
// console.log(typeof(num))


// 7. Check if "JavaScript" contains "Script" without using .includes().

// let str1="javascript";

// if(str1.indexOf("script")===-1){
//     console.log("not include this string")
// }
// else{
//     console.log("this string is contain")
// }

// 8.Create an array of 5 numbers and log the sum using .reduce()

let arr=[1,2,3,4,5];
let result=arr.reduce(function(accu,value){
    return accu+value;

},0);
console.log(result);