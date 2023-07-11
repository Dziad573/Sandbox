$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

    const elementLeft = document.querySelectorAll('.element-left');
        elementLeft.forEach((element) =>{
            gsap.fromTo(element, 
                {
                    x: "-=100px", 
                    y:"50px", 
                    opacity: 0},
                {
                    x: "0px",
                    y:"0px",
                    opacity: 1,
                    stagger: .2,
                    duration: 1,
                    visibility:"visible",
                    ease: "easeInOut",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%"
                        
                    }
                }
            );
        });
    const elementRight = document.querySelectorAll('.element-right');
        elementRight.forEach((element) =>{
            gsap.fromTo(element, 
                {
                    x: "+=100px", 
                    y:"50px", 
                    opacity: 0},
                {
                    x: "0px",
                    y:"0px",
                    opacity: 1,
                    stagger: .2,
                    duration: 1,
                    visibility:"visible",
                    ease: "easeInOut",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 60%"
                    }
                }
            );
        });

});
