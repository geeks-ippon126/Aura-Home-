var crsr = document.querySelector("#cursor")
var b = document.querySelector("#c-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    b.style.left = dets.x - 250 + "px"
    b.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
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


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from(".events img,.events-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".events",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
})


gsap.from(".card",{
    scale:0.5,
   // opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from("#dot1",{
    x:100,
    x:-70,
    scrollTrigger:{
        trigger:"#dot1",
        scroller:"body",
        //markers:true,
        start:"top 45%",
        end:"top 35%",
        scrub:4,
    }
})

gsap.from("#dot2",{
    x:-70,
    x:100,
    scrollTrigger:{
        trigger:"#dot1",
        scroller:"body",
        //markers:true,
        start:"top 45%",
        end:"top 35%",
        scrub:4,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})

gsap.from(".page4 h1",{
    y:80,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
      // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
})