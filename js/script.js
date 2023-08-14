function userScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 35) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-transparent');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-transparent');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);
