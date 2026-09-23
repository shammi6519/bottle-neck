document.documentElement.classList.remove('no-js');
document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => { const target = document.querySelector(link.getAttribute('href')); if (target) { event.preventDefault(); target.scrollIntoView({behavior: 'smooth'}); }}));
