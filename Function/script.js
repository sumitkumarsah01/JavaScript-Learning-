//function declaration
function abcd(){
    console.log("hello")

 }
// abcd();

// function expression 

const greet = function(sumu){
      return "hello"+sumu;
}
// console.log(greet("sumit"));


//default parameter

function abc(v=1,s=2){
    console.log(v,s);
}
// abc(3,5);

// rest operator 

function abcde(val1,val2,...val){
    console.log(val1,val2,val);
}

// abcde(1,2,3,4,5,6);


// IIFE function

let a=(function (){
     let a=2;

     return {
        increment: function(){
            a++;
            return a;
         }
     }
     
})();

// console.log(a.increment());

// Higher order function

function abcd(){
    return function(){
        console.log("Sumit kumar ");
    }
}

//  let fnc=abcd();
//  fnc();


 function abcdef(fnc){
    fnc();
 }

//  abcdef(function(){
//     console.log("lafariya")
//  })


// callback function

let call= function(){
    console.log("lafariya")
}

// call();

// function sayHello(name) {
//     return "Hello " + name;
// }

// function processUserInput(callback) {
//     const name = "Sumit";
//     console.log(callback(name));
// }

// processUserInput(sayHello); // Hello Sumit


// closures

function abch(){
    let s=20;
    return function(){
        console.log(s+20);
    }
}
abch()();