$('.wrap-content-flash-info').owlCarousel({
    items:1,
    loop:true,
    dots:false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayHoverPause:true,
    autoplaySpeed: 1000,
    smartSpeed: 2000,
    navText:["<div class='nav-btn prev-slide'><i class=\"fa fa-angle-left\"></i></div>","<div class='nav-btn next-slide'><i class=\"fa fa-angle-right\"></i></div>"],
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
});




window.onscroll = function() {myFunction()};

var header = document.getElementById("wrapper-bottom-header");
var sticky = 100;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


$(document).ready(function name() {
    $(".icon_bar").click(function name() {
        $('.widget_menu.content_panel_menu_mobile').css("visibility", "visible");
        $('.widget_menu.content_panel_menu_mobile').css("opacity", 1);
        $('.widget_menu.content_panel_menu_mobile').css("left", 0);
    });

    $(".contentclose").click(function name() {
        $('.widget_menu.content_panel_menu_mobile').css("visibility", "hidden");
        $('.widget_menu.content_panel_menu_mobile').css("opacity", 0);
        $('.widget_menu.content_panel_menu_mobile').css("left", "-100%");
    });
});

function showInfoCompte(){
    $('#infoCompteUser').toggle('slow');
}




$('#serach_icon_top').click(function(){
    $(".bloc-search-bar--").addClass('show-search-bar---');
});

$('#close').click(function(){
    $(".bloc-search-bar--").removeClass('show-search-bar---');
});

$("select").live("change", function(){
    if (trim($(this).val()) != "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeOut("slow");
            error = true;
    }
})

$("#pays-inscription").live("change", function(){
  var reference=$(this).find(':selected').data('code');
    $("#fixed-indicatif").html("+ "+reference);
    $("#indicatif-inscription").val(reference);
})

$("#ville-inscription").live("change", function(){
    Select_quartier('<?php echo base64_encode("traitement_ajax/main.php") ?>', '<?php echo $_SESSION["token"] ?>');
})
