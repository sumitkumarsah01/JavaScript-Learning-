let arr=[20,94,49,"sumit",true];
// console.log(arr);

//console.log(arr[4])


// Creating array two way

let fruits=["mango","orange","apple","papaya"];

// constructor syntax

let arr2=new Array(3,4,5,3);
// console.log(arr2);

//length properties

// console.log(fruits.length)

//you can change length
fruits.length=9
// console.log(fruits);

//turncates

fruits.length=2;
// console.log(fruits)

//basic methods

let arr3=[2,1,4];

arr3.push(5);
arr3.pop();
arr3.unshift(3);
arr3.shift();
// console.log(arr3)


let arr4=[3,0,2,5,0];

// console.log(arr4.indexOf(0));
// console.log(arr4.lastIndexOf(2));
// console.log(arr4.includes(0));

//slice 
// console.log(arr4.slice(2,5))
// console.log(arr4);

// splice

// console.log(arr4.splice(2,2,"x","r"))
// console.log(arr4)


// reverse
let newArr=[34,2,5,64,3,78,1];
// newArr.reverse();
// console.log(newArr)


//sort

// let s=newArr.sort(function(a,b){
//     return b-a;
// })
// console.log(s)

let newarr2=[2,3,4];
const [a,b,c]=newarr2;

// console.log(a);


let newarr3=[3,4,2]
let copy=[...newarr3]

// console.log(copy)

const newArr3=[1,2,3,4,5];

// newArr3.forEach(function(value){
//        console.log(value);
// });


// let doubled=newArr3.map(function(value){
//     return value*2;
// })

// console.log(doubled);


// let result2=newArr3.filter(function(value){
//     return value>2;
// })
// console.log(result2)


// let ans=newArr3.reduce(function(accu,key){
//     return accu+key;
// },0);

// console.log(ans);
