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
    navbarmenu.classList.remove('open');
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

const myworklist=document.querySelector('.my_Worklist');
const workproject=document.querySelector('.work_project');
const projects=document.querySelectorAll('.project');

myworklist.addEventListener('click',(e)=>{
    const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter;
    workproject.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter ==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        })
        workproject.classList.remove('anim-out');}, 300);
});

const toggleBtn=document.querySelector('.navbar_toggle-btn');
toggleBtn.addEventListener('click', ()=>{ 
    navbarmenu.classList.toggle('open');
});

arrow.addEventListener('click',()=>{
    scrollIntoView('#home');
});


function scrollIntoView(selector){
    const scroll=document.querySelector(selector);
    scroll.scrollIntoView({behavior:'smooth'});
}

