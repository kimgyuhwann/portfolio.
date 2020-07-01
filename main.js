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
    const scroll=document.querySelector(link);
    scroll.scrollIntoView({behavior:"smooth"});
});