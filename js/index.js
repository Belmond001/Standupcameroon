


$('.banniere').owlCarousel({
    items:1,
    loop:true,
    dots:false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayHoverPause:true,
    autoplaySpeed: 1000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-arrow-left'></i></div>","<div class='nav-btn next-slide'><i class='fa-solid fa-arrow-right'></i></div>"],
});


$(".wrap-actualites").owlCarousel({
    items:2,
    padding:0,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
    nav: true,
    navText:["<div class='nav-btn prev-slide'><i class=\"fa fa-arrow-left\"></i></div>","<div class='nav-btn next-slide'><i class=\"fa fa-arrow-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1200: {
            items: 3
        },
        1300: {
            items: 3
        }
    }
});


$(".wrap-team").owlCarousel({
    items:3,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
    nav: true,
    navText:["<div class='nav-btn prev-slide'><i class=\"fa fa-angle-left\"></i></div>","<div class='nav-btn next-slide'><i class=\"fa fa-angle-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        },
        1200: {
            items: 3
        },
        1300: {
            items: 4
        }
    }

});


$(".wrap-temoignage").owlCarousel({
    items:3,
    padding:0,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    lazyLoad: true,
    nav: false,
    navText:["<div class='nav-btn prev-slide'><i class=\"fa fa-arrow-left\"></i></div>","<div class='nav-btn next-slide'><i class=\"fa fa-arrow-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1023: {
            items: 3
        },
    }
});



