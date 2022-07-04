const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.navmenu');

menuBtn.addEventListener('click',() => {
    navMenu.classList.toggle('mobile-menu');
})

let changeIcon = function(icon) {
    icon.classList.toggle('fa-times');
}



const navBtn1 = document.querySelector('.nav-btn1');
const navBtn2 = document.querySelector('.nav-btn2');
const navBtn3 = document.querySelector('.nav-btn3');
const navBtn = document.querySelector('.btn');

navBtn1.addEventListener('click',() => {
    navMenu.classList.toggle('mobile-menu');
})

navBtn2.addEventListener('click',() => {
    navMenu.classList.toggle('mobile-menu');
})

navBtn3.addEventListener('click',() => {
    navMenu.classList.toggle('mobile-menu');
})

navBtn.addEventListener('click',() => {
    navMenu.classList.toggle('mobile-menu');
})







// let show = true;
// const menuBtn = document.querySelector('.menu-btn')
// const navMenu = document.querySelector('.navmenu');

// menuBtn.addEventListener('click',()=>{
//     navMenu.classList.toggle('mobile-menu', show);

//     document.body.style.overflow = show ? "hidden" : "initial"
//     // Se o 'show' for true, coloca hidden. Senão, coloca initial.

//     show = !show;
//     // Diferente do 'show' atual, ou seja, falso.
// })


// let changeIcon = function(icon) {
//     icon.classList.toggle('fa-times');
// }
