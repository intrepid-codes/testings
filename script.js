function show() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
show();
function nav() {
  var x = document.querySelector("#icon");
  var y = 1;
  x.addEventListener("click", function(){
    if (y == 1) {
      document.querySelector("#nav-links").style.left = "0";
      x.style.transform = "rotate(180deg)";
      y = 0;
    }else{
      document.querySelector("#nav-links").style.left = "100%";
      x.style.transform = "rotate(0deg)";
      y = 1;
    }
  });
}
nav();
Shery.mouseFollower();
var tl = gsap.timeline();
Shery.textAnimate("#portfolio", {
  y: 10,
  opacity: 0,
  stagger: 0.1,
  duration: 2
});
tl.to("#loader",{
  delay: 1.4,
  opacity:0
});
tl.to("#loader",{
  delay: -.6,
  display: "none"
});
document.querySelector("#portfolioContent>img").addEventListener("mousemove", function(){
  gsap.to(".mousefollower", {
    scale: 4
    });
});
document.querySelector("#portfolioContent>img").addEventListener("mouseleave", function(){
  gsap.to(".mousefollower", {
    scale: 1
    });
});
gsap.from(".pText>h1>div>span", {
  rotate: "20deg",
  y:100,
  duration: 1,
  stagger:.1,
  rotate: '30deg',
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "1% bottom",
    end: "bottom top"
  },
});