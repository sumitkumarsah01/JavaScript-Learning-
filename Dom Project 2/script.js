let box=document.querySelector(".box");
let btn=document.querySelector("button");


btn.addEventListener("click",function(){
    let c1=Math.floor(Math.random()*256);
    let c2=Math.floor(Math.random()*256);
    let c3=Math.floor(Math.random()*256);
    box.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    changeBordercolor();
})
function changeBordercolor(){
    let borderc1=Math.floor(Math.random()*256);
    let borderc2=Math.floor(Math.random()*256);
    let borderc3=Math.floor(Math.random()*256);
    
    box.style.borderColor=`rgb(${borderc1},${borderc2},${borderc3})`;


}