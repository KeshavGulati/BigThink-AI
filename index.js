const hamburgerDiv = document.querySelector(".hamburger-div");
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
        hamburgerDiv.setAttribute("status", "close");
        navBar.setAttribute("data-visible", "false");
        document.body.style.overflowY = "scroll";
    } else {
        hamburgerDiv.setAttribute("status", "open");
        navBar.setAttribute("data-visible", "true");
        document.body.style.overflowY = "hidden";
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const href = link.getAttribute("href");
        hamburgerDiv.setAttribute("status", "close");
        navBar.setAttribute("data-visible", "false");
        document.getElementById(href).scrollIntoView();
        document.body.style.overflowY = "scroll";
    });
});

setInterval(() => {
    // console.log(dsDiv.getAttribute("status"));
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
}, 2500);