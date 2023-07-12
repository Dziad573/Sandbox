$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    

    document.querySelectorAll("header .nav .col-9 button:not(:first-child)").forEach((btn, index) => {
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

});
