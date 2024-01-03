/*Image Change*/
var myImages=document.querySelectorAll(".card img");
var MainImg=document.querySelector("#main");

for (let i = 0; i < myImages.length; i++) {
   myImages[i].addEventListener("click",function(e){
  var CurrentImg=e.target.getAttribute("src");
  gsap.fromTo(
    "#main",{ 
    width:0,
             },
    {
      width:"100%",
      height:"100vh",
      duration: 0.5,
      delay: 0.2,
    }
  );
    MainImg.style.backgroundImage=`url(${CurrentImg})`
   })
    
}

/*Nav Animation*/

gsap.registerPlugin(ScrollTrigger)
gsap.to("#Navbar-up", {
   scrollTrigger:{
    trigger:"#about",
    start:"top center",
    end:"top 100px",
    scrub:0
   },
   position: "fixed",
  width:"80%",
  height:"10%",
  x:130,
 
  duration:0.5

  });

  gsap.to("#ul-move", {
   
    scrollTrigger:{
     trigger:"#about",
     start:"top center",
     end:"top 100px",
     scrub:0
    },
    position: "fixed",
   display:"flex-row",
   flexDirection:"row",
   height:"10%",
   x:130,
   y:-170,
   
   duration:0.5,
 
   });
 
   gsap.to("#ul-move li", {
    scrollTrigger:{
     trigger:"#about",
     start:"top center",
     end:"top 100px",
     scrub:0
    },
   padding:"80px",
   
   duration:0.5
 
   });
 /*About */

        
gsap.to(".content-about", {
    x: 0,
    opacity: 1,
    ease: "bounce",
    duration: 2,
    immediateRender: false,
    scrollTrigger: {
      trigger: "#about",
      start: "top +=100px",
      end:"top center",
      scrub:1,
    }
  });

         
gsap.to(".video-about", {
    x: 0,
    opacity: 1,
    ease: "bounce",
    duration: 2,
    immediateRender: false,
    scrollTrigger: {
      trigger: "#about",
      start: "top +=100px",
      end:"top center",
      scrub:1,

    }
  });

  /*Heros */
 
  const Cards=Array.from(document.querySelectorAll(".jsCatcch .content"));
    gsap.registerPlugin(ScrollTrigger);
    const section=document.getElementById("horizontal-scoll");
    let horizontalSection = document.querySelector('.horizontal');
    
    gsap.to('.horizontal', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.horizontal',
        start: 'center center',
        end: "+=" + section.offsetWidth,
        pin: '#horizontal-scoll',
        scrub: 3,
        invalidateOnRefresh: true,
        snap:1 / (horizontalSection),

      }
    });


    for (let x = 0; x < Cards.length; x++) {
      Cards[x].addEventListener("mouseenter",(e)=>{
        console.log(e.target)
        gsap.fromTo(".content",{
          opacity:0,
        },{
          opacity:1,
        })
      })
    }


    /*Contact*/

    gsap.to(".conatct-img", {
      x: 0,
      opacity: 1,
      rotation:0,
      ease: "bounce",
      duration: 2,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#contact",
        start: "top +=100px",
        end:"top center",
        scrub:1,
      }
    });
  
    gsap.to(".conatct-info", {
      x: 0,
      opacity: 1,
      ease: "easeIn",
      duration: 2,
      immediateRender: false,
      scrollTrigger: {
        trigger: "#contact",
        start: "top +=100px",
        end:"top center",
        scrub:1,
  
      }
    });
             

 
/*Display All Index for a Landing Page With setTimeOut*/

//first Catch all Data in Index

var Navsection=document.getElementById("Navbar-up");
var MainSection=document.getElementById("main");
var aboutSection=document.getElementById("about");
var HoriSection=document.getElementById("horizontal-scoll");
var ContactSection=document.getElementById("contact");
var FooterSection=document.getElementById("footer");
var LandPage=document.getElementById("landPage");
var Html=document.getElementById("all")





anime({
  targets: '#svg path',
  strokeDashoffset: [anime.setDashoffset, 1],
  easing: 'easeInOutSine',
  duration: 2800,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 3.3,
    delay: 0.5,
  }
);

