gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Page detection

var currentPage = window.location.pathname;
var navAnimations = document.getElementsByClassName("nav-link-hover-container");

if (currentPage == "/index.html") {
    for (let i = 0; i < navAnimations.length; i++) {
        navAnimations[i].classList.remove("active");
    };
    navAnimations[0].classList.add("active");
}

// Mouse movemement

var mX = 0;
var mY = 0;

onmousemove = function(e){
    mX = e.clientX;
    mY = e.clientY;
}

// Page animation
let pt1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-me",
        start: "top center",
        end: "top top",
        scrub: 4,
        markers: true,
    },
});

pt1.fromTo(".about-me-main", {
    height: 0,
    ease: "power1.out"
},{
    height: 100 + "vh"
}).to(".about-me-main", {
    duration: 2,
    width: 100 + "vw"
});

// Button animation 1

const btn_elements = document.querySelectorAll("button");

let btna1 = gsap.to(".btna1-inner", {
    duration: 0.75,
    paused: true,
    height: 100,
    width: 100,
    scale: 5,
    ease: "power1.in",
}); 

btn_elements.forEach((e) => {
    if (e.classList.contains("btna1")) {
        e.addEventListener("mouseenter", () => {
            let inner;
            for (var i = 0; i < e.childNodes.length; i++) {
                if (e.childNodes[i].className == "btna1-inner") {
                    inner = e.childNodes[i];
                }
            }
            inner.style.top = (mY - e.getBoundingClientRect().top) + "%";
            inner.style.left = (mX - e.getBoundingClientRect().left) + "px";
            btna1.play();
        });
        e.addEventListener("mouseout", () => {
            btna1.reverse();
        });
    }
});

