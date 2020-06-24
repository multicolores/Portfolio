console.log("ca ne marche pas et je sais pas pk ( même l'exemple ne marche pas");

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('.bio_paragraphe', .5, {x:200, opacity: 0});

const scene = new ScrollMagic.Scene({
    triggerElement: ".logo",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".logo")
    .setTween(tl)
    .addTo(controller);

function updatePercentage() {
    tl.progress();
    console.log(tl.progress());
}

