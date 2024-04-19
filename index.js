// Existing code for handling navbar and search form interactions
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
};
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
};

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
};
document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

// Additional functionality for enhanced interactions

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let targetElement = document.querySelector(this.getAttribute('href'));
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Handle external links - open in new tab
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// Dynamic content loading for pages
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let url = this.getAttribute('href');
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.querySelector('main').innerHTML = html;
            })
            .catch(error => console.error('Error loading the page: ', error));
    });
});

// Responsive adjustments for resizing the window
window.onresize = () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }
};

// Existing code for handling navbar and search form interactions
// Keep this part unchanged

// Additional functionality for enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling, external links, and dynamic content loading code
    // Keep this part unchanged

    // Login and registration navigation handling
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const closeLoginBtn = document.getElementById('close-login');
    const closeRegisterBtn = document.getElementById('close-register');

    // Function to open/close the login form
    function toggleLoginForm() {
        loginForm.classList.toggle('active');
    }

    // Function to open/close the registration form
    function toggleRegisterForm() {
        registerForm.classList.toggle('active');
    }

    // Event listener for the login button in the navigation bar
    loginBtn.addEventListener('click', toggleLoginForm);

    // Event listener for the close button in the login form
    closeLoginBtn.addEventListener('click', toggleLoginForm);

    // Event listener for the registration button in the navigation bar
    registerBtn.addEventListener('click', toggleRegisterForm);

    // Event listener for the close button in the registration form
    closeRegisterBtn.addEventListener('click', toggleRegisterForm);
});

document.getElementById('login-btn').classList.add('btn-back-home');

// After successful registration in register.js
document.getElementById('register-btn').classList.add('btn-back-home');