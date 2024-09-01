
var tab_photo=[{src:'images/actu/actu3.jpg'},{src:'images/actu/actu2.jpg'}];

//console.log(tab_photo);
$('#show_photo').magnificPopup({
    items: tab_photo,
    gallery: {
        enabled: true
    },
    type: 'image' // this is a default type
});


var new_tab_video=[{src:'S_xH7noaqTA&list=RDCtgayAry54k',type:'iframe'}];   

//console.log(new_tab_video);
$('#show_video').magnificPopup({
    items: new_tab_video,
    gallery: {
    enabled: true
    },
    type: 'image' // this is a default type
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