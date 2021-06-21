const hamburguer = document.getElementById('hamburguer');
const navUL = document.getElementById('nav-ul');

hamburguer.addEventListener('click', () => {
    navUL.classList.toggle('show')
});