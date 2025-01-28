const header=document.querySelector("header");

const button=document.querySelector("header span")

const li=document.querySelectorAll("nav ul li");


const navul=document.querySelector("nav ul");
button.onclick=()=>{
    button.style.zIndex="1000";
   navul.classList.toggle("open");
    
}
document.onscroll=()=>{
    
    header.style.position="fixed";
    header.style.background="white";
    navul.classList.remove("open");
}

