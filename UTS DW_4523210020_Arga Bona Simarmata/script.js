const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');
const sidebar = document.querySelector('#sidebar');
const closeSidebar = document.querySelector('#close-sidebar');

hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
};

hamburgerMenu.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

closeSidebar.addEventListener('click', () => {
    sidebar.style.width = '0';
});

document.addEventListener('click', function(e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sidebar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        sidebar.style.width = '0';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        hamburgerMenu.style.display = 'none';
        sidebar.style.width = '0'; 
        navbarNav.classList.remove('active'); 
    } else {
        hamburgerMenu.style.display = 'block';
    }
});

window.addEventListener('load', function() {
    if (window.innerWidth > 768) {
        hamburgerMenu.style.display = 'none';
    } else {
        hamburgerMenu.style.display = 'block';
    }
});