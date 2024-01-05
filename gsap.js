function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}


init()










var page1 = document.querySelector("#page1")
var circle = document.querySelector("#circle")
var h1 = document.querySelector("h1")
var h6 = document.querySelector("h6")
var prt2 = document.querySelector("#prt2")


page1.addEventListener("mousemove",function(dets){
 circle.style.left = `${dets.x -40}px`
 circle.style.top = `${dets.y  -40}px`


})


h1.addEventListener("mouseenter",function(){
    circle.style.scale = 1.5
})

h1.addEventListener("mouseleave",function(){
    circle.style.scale = 1
})

prt2.addEventListener("mouseenter",function(){
    circle.style.scale = .5
})

prt2.addEventListener("mouseleave",function(){
    circle.style.scale = 1
})

var tl = gsap.timeline()

tl.from("#nav h1",{
    y : -200,
    opacity : 0,
    duration : 1

})

.from("#nav h4",{
    y : -200,
    stagger : 0.25
})

.from("#left h1",{
    x : -200,
    opacity : 0,
    duration : .5
})

.from("#left h6",{
    x : -200,
    opacity : 0,
    duration : .5,
    scale : 0
},"2.2")

.from("#center img",{
    scale : 0,
    x : 200
},"2.2")

.from("button",{
    scale : 0,
    opacity : 0
})

gsap.from("#page2 h1",{
    y : 100,
    opacity: 0,
    scrollTrigger :{
        top : "30%",
        trigger: "#page2 h1",
        scroller: "#main",
        scrub: 2
    }
})

gsap.from(".elem",{
    stagger: 0.1,
    opacity: 0,
    x: -100,
    scrollTrigger :{
        trigger: ".elem",
        scroller: "#main",
        top : "30%",

        scrub: 2
        

    }

})

gsap.from("#page3 img",{
    opacity:0,
   
    x:-300,
    scrollTrigger :{
        trigger: "#page3 img",
        scroller: "#main",
        top : "30%",
        
        scrub: 2
    }
})

















       
       
