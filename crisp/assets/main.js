const nav = document.querySelectorAll(".close-search");
const menu = document.querySelector('.search-bar');
console.log(nav)
let isMenuOpen = false;
nav.forEach(navnew => {
  navnew.addEventListener('click', e => { 
    e.preventDefault();
    isMenuOpen =! isMenuOpen;
    if (isMenuOpen) {
      menu.classList.add('menu-show');
        
     
      } else {
        menu.classList.remove('menu-show');
      }
  })
})