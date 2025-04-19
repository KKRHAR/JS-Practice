let count= 0;
let counterValue= document.getElementById("value");
let btn = document.querySelector(".btn-container")

btn.addEventListener("click",(e)=>{
if(e.target.classList.contains('increase')){
    count++;
}else if(e.target.classList.contains("decrease")){
    count--
}else if(e.target.classList.contains("reset")){
    count = 0;
}
counterValue.textContent= count;
});
