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
	  
	   });// JavaScript Document