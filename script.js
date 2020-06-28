//icons
feather.replace();
//scroll to top
const scroll_to_top = document.getElementById("scroll_top");
let dataShow = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 60 && !dataShow) {
    scroll_to_top.setAttribute("data-show", "true");
    dataShow = false;
  }
  if (window.scrollY <= 60 && !dataShow) {
    scroll_to_top.setAttribute("data-show", "false");
    dataShow = false;
  }
});

scroll_to_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// biographie
var tl = new TimelineMax({ onUpdate: updatePercentage });

const controller = new ScrollMagic.Controller();

tl.from(".bio_paragraphe", 0.5, { y: 1, opacity: 0 });
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

observer_textanim = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      document.getElementById("textanim").classList.add("textanim_true");
      console.log("yes");
    } else {
    }
  });
});
textanim.forEach((image) => {
  observer_textanim.observe(image);
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
