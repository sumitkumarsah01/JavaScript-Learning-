function stepOne(){
    return new Promise(function(resolve,reject){
        console.log("step 1")
        resolve();
    })
    

}

function stepTwo(){
    new Promise(function(resolve,reject){
        console.log("Step 2")
         resolve();
    })
   
}

function stepThree(){
    new Promise(function(resolve,reject){
         console.log("step 3")
         resolve()
    })
  
}

stepOne()
.then(stepTwo)
.then(stepThree)
.then(function(){
    console.log("All step complete")
})