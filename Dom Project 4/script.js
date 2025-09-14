let img1=document.querySelector("#img1");
let img2=document.querySelector("#img2");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let getimg1=img1.getAttribute('src');
    let getimg2=img2.getAttribute('src');

    img1.setAttribute('src',getimg2);
    img2.setAttribute('src',getimg1);
})