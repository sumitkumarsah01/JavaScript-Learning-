// function abcd(fn){
//     setTimeout(fn, 3000);

// }
// abcd(function(){
//     console.log("hey");
// })



// let arr=[1,2,3,4,5];

// function mapkicopy(arr,fn){

//     let  newArr=[];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;

// }

// let ans=mapkicopy(arr,function(value){
//     return value+3;
// })

// console.log(ans)



// function counter(){
//     let count=0;

//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let ans=counter();
// ans();
// ans();


// function limiter(fn,limit){
//     let count=0;
//     return function(){
//         if(count<limit){
//             count++;
//             fn();
//         }

//     }
// }
// let ans=limiter(function(){
//     console.log("hey");
// },3)
// ans();
// ans();
// ans();
