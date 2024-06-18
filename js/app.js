const header = document.querySelector("header");

/*--------------Sticky Navbar------------*/

function stickyNavbar(){
    header.classList.toggle("scrolled",window.pageYOffset>0);
}
stickyNavbar
window.addEventListener("scroll",stickyNavbar);

/*--------------Reveal Animation------------*/

let sr=ScrollReveal({
    duration: 2500,
    distance: "600px",
});

sr.reveal(".showcase-info",{delay:300});
sr.reveal(".showcase-image",{origin: "top",delay:400});
