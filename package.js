document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navClose = document.getElementById('nav-close');
    const navbar = document.querySelector('.navbar');
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');
    const closeSearch = document.getElementById('close-search');

    // Function to open/close the navigation menu
    function toggleMenu() {
        navbar.classList.toggle('active');
    }

    // Function to open/close the search form
    function toggleSearch() {
        searchForm.classList.toggle('active');
    }

    // Event listener for the menu button
    menuBtn.addEventListener('click', toggleMenu);

    // Event listener for the close button in the navigation menu
    navClose.addEventListener('click', toggleMenu);

    // Event listener for the search button
    searchBtn.addEventListener('click', toggleSearch);

    // Event listener for the close button in the search form
    closeSearch.addEventListener('click', toggleSearch);
});
