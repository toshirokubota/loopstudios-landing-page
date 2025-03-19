const nav = document.getElementById('nav-bar');

const showMenu = () => {
    nav.classList.add('show');
}
const hideMenu = () => {
    nav.classList.remove('show');
}

document.getElementById('hamburger').addEventListener('click', showMenu);

document.getElementById('close-icon').addEventListener('click', hideMenu);

nav.querySelectorAll('.menu > a').forEach(elm => {
    elm.addEventListener('click', hideMenu)
});
