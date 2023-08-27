let menu = document.getElementById("menu");
let close = document.getElementById("close");
let ham = document.getElementById("hamburger");
ham.style.right="-100%";
menu.addEventListener('click',()=>{
    ham.style.right="0%";
    menu.style.display="none";
    ham.style.display="block"
})
close.addEventListener('click',()=>{
    ham.style.right="-100%";
    menu.style.display="block";
    // ham.style.display="none"
})