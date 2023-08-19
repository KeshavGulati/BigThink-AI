const hamburgerDiv = document.querySelector(".hamburger-div");
const hamburgerTop = document.querySelector(".top");
const hamburgerMiddle = document.querySelector(".middle");
const hamburgerBottom = document.querySelector(".bottom");
const navBar = document.querySelector(".nav__nav-items");
const navLinks = document.querySelectorAll(".nav__nav-items__a");
const pyoneersDiv = document.querySelector(".pyoneers-div");
const edgeDiv = document.querySelector(".edge-div");
const aiDiv = document.querySelector(".AI-div");
const dsDiv = document.querySelector(".DS-div");
const pythonDiv = document.querySelector(".Python-div");
const pyoneersSubDiv = document.querySelector(".pyoneers-div__sub-div");
// const pyoneersSubDiv = document.querySelectorAll(".pyoneers-div__sub-div > div")

// Can add animations for borders of pyoneers' subdiv

function openHamburger() {
    hamburgerTop.setAttribute("y", "45");
    hamburgerMiddle.setAttribute("y", "45");
    hamburgerBottom.setAttribute("y", "45");
    setTimeout(() => {
        hamburgerDiv.setAttribute("status", "open");
    }, 500);

}

function closeHamburger() {
    hamburgerDiv.setAttribute("status", "close");
    setTimeout(() => {
        hamburgerTop.setAttribute("y", "25");
        hamburgerMiddle.setAttribute("y", "45");
        hamburgerBottom.setAttribute("y", "65");
    }, 500);

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // entry.target.classList.add("pyoneers-div-animation");
            // console.log("Intersecting");
            pyoneersDiv.style.transform = "translateX(0%)";
        }
    })
})

observer.observe(pyoneersDiv);

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // entry.target.classList.add("pyoneers-div-animation");
            // console.log("Intersecting");
            edgeDiv.style.transform = "translateX(0%)";
        }
    })
})

observer2.observe(edgeDiv);

// const observeList = document.querySelectorAll(".observe-div");
// observeList.forEach((el) => {
//     observer.observe(el)
// })

hamburgerDiv.addEventListener('click', () => {
    const status = hamburgerDiv.getAttribute("status");
    if (status === "open") {
        closeHamburger();
        navBar.setAttribute("data-visible", "false");
        document.body.style.overflowY = "scroll";
        setTimeout(() => {navBar.style.display = "none"}, 350);
    } else {
        openHamburger();
        navBar.style.display = "flex";
        setTimeout(() => {navBar.setAttribute("data-visible", "true");}, 1);
        document.body.style.overflowY = "hidden";
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        let href = link.getAttribute("href");
        closeHamburger();
        navBar.setAttribute("data-visible", "false");
        setTimeout(() => {
            navBar.style.display = "none";
            document.getElementById(href).scrollIntoView();
        }, 350);
        document.body.style.overflowY = "scroll";
    });
});

setInterval(() => {
    if (window.innerWidth > 1200) {
        return;
    }
    if (aiDiv.getAttribute("status") == "active") {
        pyoneersSubDiv.style.transform = "translateX(-33.33334%)";
        aiDiv.setAttribute("status", "inactive");
        dsDiv.setAttribute("status", "active");
    } else if (dsDiv.getAttribute("status") == "active") {
        pyoneersSubDiv.style.transform = "translateX(-66.66667%)";
        dsDiv.setAttribute("status", "inactive");
        pythonDiv.setAttribute("status", "active");
    } else {
        pyoneersSubDiv.style.transform = "translateX(0vw)";
        pythonDiv.setAttribute("status", "inactive");
        aiDiv.setAttribute("status", "active");
    }
}, 7000);

setInterval (() => {
    if (window.innerWidth > 1200) {
        pyoneersSubDiv.style.transform = "translateX(0vw)";
    }
}, 1);