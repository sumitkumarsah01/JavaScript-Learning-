function orderfood(){
    return new Promise((res,rej)=>{
       setTimeout(()=>{

        let change=Math.random()<.7;

        if(change) res()
        else rej();
        res();
       },2000)
    })
}

orderfood().then(()=>{
    console.log("Order Delivered");
})
.catch(()=>{
    console.log("Order Not delivered");
})