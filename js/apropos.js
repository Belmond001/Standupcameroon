
$(".wrap-team").owlCarousel({
    items:4,
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
            items: 4
        },
        1300: {
            items: 4
        }
    }

});
$(".wrap-right-cf").owlCarousel({
    items:3,
    padding:0,
    dots: false,
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
            items: 3
        },
        1000: {
            items: 2
        },
        1200: {
            items: 2
        },
        1300: {
            items: 3
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
    autoplayHoverPause: true,
    lazyLoad: true,
    nav: false,
    // navText:["<div class='nav-btn prev-slide'><i class=\"fa fa-angle-left\"></i></div>","<div class='nav-btn next-slide'><i class=\"fa fa-angle-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        700: {
            items: 1
        },
        1024: {
            items: 2
        },
        1300: {
            items: 2
        }
    }
});  

$('.wrap-partenaire').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay:false,
    dots: true,
    autoplaySpeed: 3000,
    prevArrow: '<div class="slick-btn slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-btn slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});



$(".js-video-button").modalVideo({
    youtube:{
        controls:0,
        nocookie: true,
        autoplay:1
    }

});