
function Afficher_photo_type_chambre(div_conteneur){
    $(""+div_conteneur+" a:first-child").click();
}

function getPhotoAlbum(idalbum){
    // alert (idalbum);
    $.post( "traitement_ajax/traitement_photo_album.php/?idalbum="+idalbum)
    .done(function( data ) {
        // alert(data);
        $("#conteneur_photos_album").html(data);
        // $.getScript( "js/reload_galerie_photo.js" );
        $("#conteneur_photos_album").magnificPopup({
        		  delegate: 'a', // child items selector, by clicking on it popup will open
        		  type: 'image',
        		  // other options
        		  gallery:{
        		   enabled:true,
        		   navigateByImgClick: true,
        		   preload: [0,1]
        		  },
        		  image: {
        		   titleSrc: function(item) {
        			return item.el.attr('title') + '<small>'+item.el.attr('data-site')+'</small>';
        		   }
        		  },
        			// Delay in milliseconds before popup is removed
        				  removalDelay: 300,
        			// Class that is added to popup wrapper and background
        			// make it unique to apply your CSS animations just to this exact popup
        			mainClass: 'mfp-fade'

        	   });
             setTimeout(function() {
                 Afficher_photo_type_chambre('#conteneur_photos_album')
             }, 500);

        Cacher_loader('loader');
    })
    .fail(function( data ) {});
    Afficher_loader('loader');
}
