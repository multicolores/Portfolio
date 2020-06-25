

// biographie
var tl = new TimelineMax({onUpdate:updatePercentage});

const controller = new ScrollMagic.Controller();

tl.from('.bio_paragraphe', 0.5, {y:700, opacity: 0});
tl.from('.ma_tete', 99, {opacity: 0.8, x: 0});
tl.from('.logo path', 99, {opacity: 1});


const scene = new ScrollMagic.Scene({
    triggerElement: ".biographie_section",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setPin(".biographie_section")
    .setTween(tl)
    .addTo(controller);

function updatePercentage() {
    tl.progress();
}


// apparition on scroll
const textanim = document.querySelectorAll('.textanim');

observer_textanim = new IntersectionObserver((entries) =>{

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            document.getElementById('textanim').classList.add('textanim_true');
            console.log("yes");
        }
        else{

        }
    })
    })
    textanim.forEach(image => {
    observer_textanim.observe(image)
})

// portfolio

var tl2 = new TimelineMax({onUpdate:updatePercentage2});

const controller2 = new ScrollMagic.Controller();

tl2.from('.h3_portfolio', 0.5, {width: 0, opacity: 0.2});
tl2.from('.projet_architecture', 5, {y: '100vh'});
tl2.from('.projet_login', 5, {y: '100vh', x: '-10vw'});
tl2.from('.projet_drone', 5, {y: '100vh', x:'5vw'});

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".portfolio",
    triggerHook: "onLeave",
    duration: "400%"
})
    .setPin(".portfolio")
    .setTween(tl2)
    .addTo(controller2);

function updatePercentage2() {
    tl2.progress();
}




