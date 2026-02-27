const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');

menuBtn.addEventListener('click',()=>navMenu.classList.toggle('open'));

document.getElementById('year').textContent=new Date().getFullYear();
