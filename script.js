//!icons
feather.replace();

/*
//!CURSOR
const cursor = document.querySelector(".cursor");
//const cursor = document.getElementsByClassName("cursor")[0];

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 7) + "px; left: " + (e.pageX - 7) + "px;"
  );
});

const on_hover = document.querySelectorAll("nav");
const on_hover_menu = document.querySelector("#menu_onclick");
const on_hover_img = document.getElementsByTagName("IMG")[1];

on_hover.forEach.onmouseover = (e) => {
  console.log("ouais tu me hover");
  cursor.classList.add("cursor_hover");
};
on_hover_menu.onmouseover = (e) => {
  console.log("ouais tu me hover");
  cursor.classList.add("cursor_hover");
};
on_hover_img.onmouseover = (e) => {
  console.log("ouais tu me hover");
  cursor.classList.add("cursor_hover");
};

on_hover.onmouseleave = (e) => {
  console.log("non tu me hover plus");
  cursor.classList.remove("cursor_hover");
};
on_hover_menu.onmouseleave = (e) => {
  console.log("non tu me hover plus");
  cursor.classList.remove("cursor_hover");
};
on_hover_img.onmouseleave = (e) => {
  console.log("non tu me hover plus");
  cursor.classList.remove("cursor_hover");
};
/*
on_hover.addEventListener("onmouseover", function(e) {
  console.log("ouais tu me hover");
  cursor.classList.add("cursor_hover");
})*/

//!scroll to top
const scroll_to_top = document.getElementById("scroll_top");
const menu_section = document.getElementById("menu_onclick");
let dataShow = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 60 && !dataShow) {
    scroll_to_top.setAttribute("data-show", "true");
    menu_section.setAttribute("data-show", "true");
    dataShow = false;
  }
  if (window.scrollY <= 60 && !dataShow) {
    scroll_to_top.setAttribute("data-show", "false");
    menu_section.setAttribute("data-show", "false");
    dataShow = false;
  }
});

scroll_to_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ! biographie
var tl = new TimelineMax({ onUpdate: updatePercentage });

const controller = new ScrollMagic.Controller();

tl.from(".bio_paragraphe", 0.5, { y: 1 });
tl.from(".logo path", 1.5, { opacity: 1 });
tl.from(".ma_tete", 1, { opacity: 0.8, x: 0 });

const scene = new ScrollMagic.Scene({
  triggerElement: ".biographie_section",
  triggerHook: "onLeave",
  duration: "200%",
})
  .setPin(".biographie_section")
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
}

// apparition on scroll
const textanim = document.querySelectorAll(".textanim");
const textanim_competences = document.querySelectorAll(".h3_competences");

observer_textanim = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      document.getElementById("textanim").classList.add("textanim_true");
      console.log("yes");
    } else {
      document.getElementById("textanim").classList.remove("textanim_true");
    }
  });
});
textanim.forEach((image) => {
  observer_textanim.observe(image);
});

observer_textanim_competences = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      document
        .getElementById("h3_competences")
        .classList.add("h3_competences_anim");
      console.log("yes");
    } else {
      document
        .getElementsByClassName("h3_competences")
        .classList.remove("h3_competences_anim");
    }
  });
});
textanim_competences.forEach((image) => {
  observer_textanim_competences.observe(image);
});
// portfolio

var tl2 = new TimelineMax({ onUpdate: updatePercentage2 });

const controller2 = new ScrollMagic.Controller();

tl2.from(".h3_portfolio", 3, { width: 0, opacity: 0 });
tl2.from(".projet_architecture", 5, { x: "-100vw" });
tl2.from(".projet_login", 5, { x: "-50vw" });
tl2.from(".projet_drone", 5, { x: "-95vw" });

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".portfolio",
  triggerHook: "onLeave",
  duration: "600%",
})
  .setPin(".portfolio")
  .setTween(tl2)
  .addTo(controller2);

function updatePercentage2() {
  tl2.progress();
}

//animation project image
/*
VanillaTilt.init(document.querySelectorAll("."), {
  max: 25,
  speed: 400,
});
*/
