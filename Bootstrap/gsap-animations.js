$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    

    document.querySelectorAll("header .nav .col-9 button").forEach((btn, index) => {
        btn.addEventListener("click", () => {
        gsap.to(window, {
            duration: .2, 
            scrollTo: {
                y:"#section" + (index + 1), 
                offsetY:220}});
        });
    });

/*
    $(".projects").on("click", function() {
        var targetProjects = $("#projects");
        var scrollOffset = 120;
    
        gsap.to(window, {
        duration: 0.1,
        ease: "easeInOut",
        scrollTo: {
                y: targetProjects.offset().top - scrollOffset
            }
        });
    });
    
    $(".contact").on("click", function() {
        var targetContact = $("#contact");
        var scrollOffset = 500;
        gsap.to(window, {
        duration: 0.1,
        ease: "easeInOut",
        scrollTo: {
                y: targetContact.offset().top - scrollOffset
            }
        });
    });
    
    $(".about").on("click", function() {
        var targetAbout = $("#about");
        var scrollOffset = 120;
        gsap.to(window, {
        duration: 0.1,
        ease: "easeInOut",
        scrollTo: {
                y: targetAbout.offset().top - scrollOffset
            }
        });
    });
*/

    const elementLeft = document.querySelectorAll('.element-left');
    elementLeft.forEach((element) => {
        gsap.fromTo(element,
            {
                x: "-=80px",
                y: "50px",
                opacity: 0
            },
            {
                x: "0px",
                y: "0px",
                opacity: 1,
                duration: 1,
                visibility: "visible",
                ease: "easeInOut",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    markers: true
                }
            }
        );
    });

    const elementRight = document.querySelectorAll('.element-right');
    elementRight.forEach((element) => {
        gsap.fromTo(element,
            {
                x: "+=80px",
                y: "50px",
                opacity: 0
            },
            {
                x: "0px",
                y: "0px",
                opacity: 1,
                duration: 1,
                visibility: "visible",
                ease: "easeInOut",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    markers: true
                }
            }
        );
    });

    const text = document.querySelectorAll('#text-fade');
    text.forEach((element) => {
        gsap.fromTo(element,
            {
                duration: 1,
                color: "red",
            },
            {
                duration: 1,
                color: "blue",
                repeat: -1,
                yoyo: true,
            }
        );
    });
    
    const aboutText = document.querySelectorAll(".about-container > div");
    aboutText.forEach((el) => {
        gsap.to(el, {
            duration: 1,
            color: "red",
            scrollTrigger: {
                trigger: el,
                scrub: true,
                start: "-=100px center",
                end: "120px 80%",
                markers: true,
                onScrubComplete: () => {
                    innaFunkcja(el);
                }
            }
        });
    });
    
    function innaFunkcja(el) {
        gsap.to(el, {
            color: "rgba(197, 197, 197, 0.808)"
        });
    }

    gsap.to("text", {
        duration: 0.75,
        y: [-80],
        rotation: [-30], // Poprawione wartości rotacji w stopniach
        ease: "back.inOut",
        stagger: {
          from: "center",
          amount: 0.2
        },
        scale: 1.5,
        transformOrigin: "center center",
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.5
      });
});
