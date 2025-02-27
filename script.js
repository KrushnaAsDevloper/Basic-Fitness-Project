
const animatedText = document.querySelector('.gym-name');
const hiddenContent = document.getElementById('content');

animatedText.addEventListener('animationend', () => {
  hiddenContent.classList.add('visible');
})

const sidebar = document.querySelector(".ham").addEventListener("click",()=>{
document.querySelector(".sidebar").classList.toggle("sidebarGo")
})