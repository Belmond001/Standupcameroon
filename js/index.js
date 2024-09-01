$('.toggle').eq().addClass('active').find('.toggle-content').css('display','block');
$('.accordion .toggle-title').on('click',function(){
    $(this).siblings('.toggle-content').slideToggle('fast');
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().children('.toggle-content:visible').slideUp('fast');
    $(this).parent().siblings().children('.toggle-content:visible').parent().removeClass('active');
});

let item_select=document.querySelectorAll(".button-fulltime");
for(let i=0;i<item_select.length;i++){
    item_select[i].addEventListener('click',()=>{
        item_select[i].classList.add('active')
        for(let j=0;j<item_select.length;j++){
            if(j!=i){
                item_select[j].classList.remove('active');
            }
        }
    })

}


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
            items: 2
        },
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