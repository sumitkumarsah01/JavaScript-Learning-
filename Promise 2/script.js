// Question No 1

// function getUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({id:1,name:"Sumit"});
//         },2000)
//     })
// }


// function getPosts(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(["title 1","title 2"])
//         },2000)
//     })
// }

// function getComments(cmts){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(["Amazing Content","Super","You Rocked"])
//         },2000)
//     })
// }



// getUser()
// .then(function(data){
//     console.log(data);
//    return getPosts(data.id);

// })
// .then(function(arr){

//      console.log(arr)
//       return getComments(arr)
// })
// .then(function(cmts){
//     console.log(cmts)
// })
// .finally(function(){
//     console.log("All Data fetch")
// })



//Question No 2

function fakeApi(endPoint){
    let data={
        users:["Sumit","Khushi","Kaushal"],
        posts:["Hey Champs","What Happened","Go head","Lets go"]
    }
    let delay=Math.random()*2000+100;
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data[endPoint])
        },delay)

    })
}

fakeApi("users").then(function(data){
    console.log(data);
})
fakeApi("posts").then(function(data){
    console.log(data);
})
