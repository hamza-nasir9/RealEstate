gsap.to(".navbar", {
    backgroundColor: "#000",
    duration: .5,
    y: "-16px",
    scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -9%",
        end: "top -10%",
        scrub: 1
    }
});
gsap.from(".banner-title", {
    y: 120,
    duration: 1.5,
    Animation: "ease",
    opacity: 0,
});
gsap.to(".nav-link", {
    y: 5,
    stagger: .2,
    duration: .5,
    stagger: .2,
    opacity: 1,
});
gsap.from(".top", {
    y: 100,
    scale:1,
    opacity: 0,
    duration: 1,
    stagger: .2,
    scrollTrigger: {
        trigger: ".featured",
        scroller: "body",
        scrub: 2,
        start: "top 75%",
        end: "top 70%"
    }
});
gsap.from(".bottom", {
    y: 100,
    scale:1,
    opacity: 0,
    duration: 1.5,
    stagger: .2,
    scrollTrigger: {
        trigger: ".featured",
        scroller: "body",
        scrub: 2,
        start: "top 68%",
        end: "top 60%"
    }
});
gsap.from(".l-top", {
    y: 100,
    scale:1,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".l-top",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
});
gsap.from(".l-bottom", {
    y: 100,
    scale:1,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".l-bottom",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
});
gsap.from(".sell-img",{
    y:100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".sell-img",
        scroller:"body",
        scrub:2,
        start:"top 75%",
        end:"top 70%"
    }
})
gsap.from(".see-t", {
    y: 100,
    scale:1,
    opacity: 0,
    duration: 1.5,
    stagger: 1.2,
    scrollTrigger: {
        trigger: ".see-t",
        scroller: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 60%"
    }
});
gsap.from(".see-property-text a",
    {
        y: 100,
        scale:1,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".see-property-text a",
            scroller: "body",
            scrub: true,
            start: "top 70%",
            end: "top 65%"
        }
    });
    gsap.from(".w-top",{
        y:100,
        scale:1,
        opacity:0,
        duration:1,
        stagger:.2,
        scrollTrigger:{
            trigger:".w-top",
            scroller:"body",
            start:"top 80%",
            end:"top 70%",
            scrub:2
        }
    });
    gsap.from(".why-row",{
        y:100,
        scale:1,
        opacity:0,
        duration:1.5,
        stagger:.2,
        scrollTrigger:{
            trigger:".why-row",
            scroller:"body",
            scrub:2,
            start:"top 70%",
            end:"top 60%"
        }
    });
    gsap.from(".find",{
        y:100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".find",
            scroller:"body",
            scrub:2,
            start:"top 90%",
            end:"top 85%"
        }
    });
    gsap.from(".where-img",{
        x:100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".where-img",
            scroller:"body",
            scrub:2,
            start:"top 66%",
            end:"top 60%"
        }
    })
    gsap.from(".where-t",{
        x:-100,
        scale:1,
        opacity:0,
        duration:1.5,
        stagger:.5,
        scrollTrigger:{
            trigger:".where-t",
            scroller:"body",
            start:"top 60%",
            end:"top 55%",
            scrub:2

        }
    });
    gsap.from(".service-t",{
        y:-100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".service-t",
            scroller:"body",
            scrub:2,
            start:"top 80%",
            end:"top 75%"
        }
    });
    gsap.from(".t-1",{
        x:-100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-1",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".t-2",{
        x:100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-2",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".t-3",{
        x:-100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-3",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".t-4",{
        x:100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-4",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".t-5",{
        x:-100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-5",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".t-6",{
        x:100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-6",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".t-7",{
        x:-100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-7",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".t-8",{
        x:100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".t-8",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 70%"
        }
    });
    gsap.from(".image-1",{
        x:100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-1",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });
    gsap.from(".image-2",{
        x:-100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-2",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });gsap.from(".image-3",{
        x:100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-3",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });gsap.from(".image-4",{
        x:-100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-4",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });gsap.from(".image-5",{
        x:100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-5",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });gsap.from(".image-6",{
        x:-100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-6",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });gsap.from(".image-7",{
        x:100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-7",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });gsap.from(".image-8",{
        x:-100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".image-8",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:2

        }
    });
    gsap.from(".left",{
        x:-100,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".left",
            scroller:"body",
            scrub:2,
            start:"top 80%",
            end:"top 75%"
        }
    });
    gsap.from(".right",{
        x:100,
        opacity:0,
        duration:1.5,
        stagger:.4,
        scrollTrigger:{
            trigger:".right",
            scroller:"body",
            scrub:2,
            start:"top 75%",
            end:"top 72%"
        }
    });
    gsap.from(".footer",{
        scale:-1,
        opacity:0,
        scrollTrigger:{
            trigger:".footer",
            scroller:"body",
            start:"top 80%",
            end:"top 75%",
            scrub:2
        }
    })


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".location-slide", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});