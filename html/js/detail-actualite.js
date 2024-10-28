
let nbLike=parseInt($(".post-like .total-like").html());
let nbDislike=parseInt($(".post-like .total-dislike").html());
let old_nb_like=nbLike;
let old_nb_dislike=nbDislike;

$(".post-like input").change(function() {

    if ($(this).is(':checked')) {
        $(this).prop('checked', true); // Définit checked sur true si coché
        if($(this).val()==1){
            $(".post-like .total-like").html(nbLike+1);
            $(".post-like .total-dislike").html(old_nb_dislike);
            // $(this).prop('disabled', true);
        }else{
            $(".post-like .total-dislike").html(nbDislike+1);
            $(".post-like .total-like").html(old_nb_like);
            // $(this).prop('disabled', true);
    
        }
    } else {
        $(this).prop('disabled', false);
        $(this).prop('checked', false); // Définit checked sur false si décoché
    }


    

});


var tab_photo=[{src:'images/actu/actu3.jpg'},{src:'images/actu/actu2.jpg'}];

//console.log(tab_photo);
$('#show_photo').magnificPopup({
    items: tab_photo,
    gallery: {
        enabled: true
    },
    type: 'image' // this is a default type
});


var new_tab_video = [
    {src: 'https://www.youtube.com/watch?v=S_xH7noaqTA', type: 'iframe'}
];

//console.log(new_tab_video);
$('#show_video').magnificPopup({
    items: new_tab_video,
    gallery: {
    enabled: true
    },
    type: 'iframe' // this is a default type
});

function socialWindow(url) {
    var left = (screen.width -570) / 2;
    var top = (screen.height -570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
  }
  
  function setShareLinks() {
      var pageUrl = encodeURIComponent(document.URL);
      var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));
  
          $("#btn-fb-share").on("click", function() { url="https://www.facebook.com/sharer.php?u=" + pageUrl;
          socialWindow(url);
          });
  
          $("#btn-tw-share").on("click", function() {
          url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
          socialWindow(url);
          });
  
          $("#btn-in-share").on("click", function() {
              url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
          socialWindow(url);
          })
          $("#btn-wh-share").on("click", function() {
              url = "https://web.whatsapp.com/send?text=" + pageUrl;
          socialWindow(url);
          })
  
  }
  setShareLinks();