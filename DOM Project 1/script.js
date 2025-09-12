let h5=document.querySelector("h5");
let button=document.querySelector("button");

let check=0;
button.addEventListener("click",function(){
   if(check==0){
     h5.innerHTML="Friends"
    h5.style.color="green"
    console.log("Request Accept ")
    button.innerHTML="Remove Friends"
    check=1;
   } else{
    h5.innerHTML="Strangers"
    h5.style.color="red"
    console.log("Request Declined")
    button.innerHTML="Add Friends"
    check=0;
   }
})