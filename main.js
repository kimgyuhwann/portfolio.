'ues strict'

const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    console.log(window.scrollY);
    console.log(navbarHeight);
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})

const navbarmenu=document.querySelector('.navbar_menu');
navbarmenu.addEventListener('click',(event) => {
 const target =event.target;
 const link= target.dataset.link;
    if(link == null){
     return;
 }
    console.log(event.target.dataset.link);
    scrollIntoView(link);
});

const contactme=document.querySelector('.home_contect');
contactme.addEventListener('click',() =>{
    scrollIntoView("#contact");
});

const home=document.querySelector('.home-1');
const homeheight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity=1-window.scrollY/homeheight;
});

const arrow=document.querySelector('.Arrow');
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeheight /2){
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
});

arrow.addEventListener('click',()=>{
    scrollIntoView('#home');
});







function scrollIntoView(selector){
    const scroll=document.querySelector(selector);
    scroll.scrollIntoView({behavior:'smooth'});
}

