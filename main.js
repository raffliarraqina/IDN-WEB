// Navbar Toggle Button
const toggleButton = document.getElementsByClassName('toggle') [0];
const navbarItem = document.getElementsByClassName('navbar-item');
toggleButton.addEventListener('click', function(){
    for (let i = 0; 1 < navbarItem.length; i++) {
        navbarItem[i].classList.toggle('active');
    }
});
