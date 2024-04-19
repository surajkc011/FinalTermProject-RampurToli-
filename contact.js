document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');
    const closeSearchBtn = document.getElementById('close-search');

    searchBtn.addEventListener('click', function() {
        searchForm.classList.add('active');
    });

    closeSearchBtn.addEventListener('click', function() {
        searchForm.classList.remove('active');
    });
});
