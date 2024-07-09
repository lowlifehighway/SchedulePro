const menuButton = document.getElementById('menu-button');
const hiddenNav = document.querySelector('.hidden-nav');
const menu1 = document.querySelector('.menu1');
const menu2 = document.querySelector('.menu2');
const menu3 = document.querySelector('.menu3');
// const accordionItems = document.querySelectorAll('.accordion-item');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !isExpanded);

  if (isExpanded) {
    hiddenNav.classList.remove('show');
    menu2.style.opacity = '';
    menu1.style.transform = 'rotate(0)';
    menu3.style.transform = 'rotate(0)';
  } else {
    hiddenNav.classList.add('show');
    menu2.style.opacity = '0';
    menu1.style.transform = 'rotate(-40deg)';
    menu3.style.transform = 'rotate(40deg)';
  }
});
