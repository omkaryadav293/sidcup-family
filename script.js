let crsr = document.querySelector(".cursor");
let blurs = document.querySelector(".cursor-blur");
document.addEventListener("mousemove",(dets)=>{
crsr.style.left=dets.x+10 +"px";
crsr.style.top=dets.y+10+"px";
blurs.style.left=dets.x +"px";
blurs.style.top= dets.y+"px";
});

h4all = document.querySelectorAll(".nav h4");
h4all.forEach((elem) => {
    elem.addEventListener("mouseenter",()=>{
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent"
        crsr.style.scale="3";
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.border="0px solid rgb(187 255 0";
        crsr.style.backgroundColor="rgb(187 255 0)"
        crsr.style.scale="1";
    })
});


gsap.to(".nav",{
    backgroundColor: "rgba(0,0,0,0.77)",
    duration:0.5,
    height:"110px",
    cursor:"Pointer",
    scrollrTigger:{
        trigger:".nav",
        scroller:"body",
        scrub:1,  
    }
});

gsap.to(".main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25px",
        end:"top -70%",
        scrub:2
    }
})
