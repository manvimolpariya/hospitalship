let menu=document.getElementById('menu-btn');
let navbar=document.querySelector('.navbar');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
window.onscroll=() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}