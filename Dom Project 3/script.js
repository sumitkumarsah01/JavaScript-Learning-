let team=['CSK','MI','RCB','SRH','LSG','GT','KKR','PBKS','RR','DC'];


let h2=document.querySelector("h2");
let btn=document.querySelector("button");


btn.addEventListener("click",function(){
    let num =Math.floor(Math.random()*team.length);
    let result=team[num];
    h2.innerHTML=result;
})