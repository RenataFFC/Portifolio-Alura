const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-link');
const links = document.querySelectorAll('nav-item');

hamburguer.addEventListener("click",() =>{
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
  })

  for (i=0; i<links.length; i++){
      links[i].onclick=function(){
      navMenu.classList.remove('active');
      hamburguer.classList.toggle('active');
     }
  }
