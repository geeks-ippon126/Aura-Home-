var crsr = document.querySelector("#cursor")
var b = document.querySelector("#c-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    b.style.left = dets.x - 250 + "px"
    b.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll("ul a")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #8f0185"
        crsr.style.backgroundColor = "#8f0185"
    })
})



function loadSVG() {
    fetch("city.svg")
        .then((response) => { return response.text(); })
        .then((svg) => {
            document.getElementById('bg_city').innerHTML = svg;
            document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
            setAnimationScroll();
        })
}
loadSVG();
function setAnimationScroll() {
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });

    runAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.5
        }),
        gsap.to("#full_city", 2, {
            opacity: 0
        })
    ])
        .add([
            gsap.to("#building_top", 2, {
                y: -200,
                opacity: 0
            }),
            gsap.to("#wall_side", 2, {
                x: -200,
                opacity: 0
            }),
            gsap.to("#wall_front", 2, {
                x: 200, y: 200,
                opacity: 0
            })
        ])
        .add([
            gsap.to("#interior_wall_side", 2, {
                x: -200,
                opacity: 0
            }),
            gsap.to("#interior_wall_top", 2, {
                y: -200,
                opacity: 0
            }),
            gsap.to("#interior_wall_side_2", 2, {
                opacity: 0
            }),
            gsap.to("#interior_wall_front", 2, {
                opacity: 0
            })
        ]);
}