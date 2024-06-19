const header = document.querySelector("header");

const first_skill=document.querySelector(".skill:first-child");
const sk_counters=document.querySelectorAll(".counter span");
const progress_bars=document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () =>{
    skillsCounter();
})
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

/*--------------Skills Progress Bar Animation------------*/

function hasReached(el){
    let topPosition=el.getBoundingClientRect().top;
    console.log(topPosition);
}
function skillsCounter(){
    console.log("Here I am");
    hasReached(first_skill);
}