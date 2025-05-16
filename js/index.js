
document.querySelector(".fade-layer").addEventListener("click", ShowMenu)
document.querySelector(".menu-button").addEventListener("click", ShowMenu)
document.querySelector(".close").addEventListener("click", ShowMenu)

function ShowMenu() {

    let close = document.querySelector("div.close")
    let button = document.querySelector("div.menu-button")

    let menu = document.querySelector("div.menu")
    close.classList.toggle("visible"), menu.classList.toggle("show"), button.classList.toggle("invisible")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}

document.addEventListener('DOMContentLoaded', function() {
    
    initHeaderScroll();
    
});

/**
 * Header scroll effect - changes header appearance on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.height = '60px';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.height = '80px';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
}
