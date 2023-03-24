const hamburgerDiv = document.querySelector(".hamburger-div");
const navBar = document.querySelector(".nav__nav-items");
const navLinks = document.querySelectorAll(".nav__nav-items__a");

hamburgerDiv.addEventListener('click', () => {
    const status = hamburgerDiv.getAttribute("status");
    if (status === "open") {
        hamburgerDiv.setAttribute("status", "close");
        navBar.setAttribute("data-visible", "false");
        document.querySelector("body").style.overflowY = "scroll";
    } else {
        hamburgerDiv.setAttribute("status", "open");
        navBar.setAttribute("data-visible", "true");
        document.querySelector("body").style.overflowY = "hidden";
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const href = link.getAttribute("href");
        hamburgerDiv.setAttribute("status", "close");
        navBar.setAttribute("data-visible", "false");
        document.getElementById(href).scrollIntoView();
    });
});