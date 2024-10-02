

var content_cni=$(".conteneur-cni").html();
var content_permis=$(".conteneur-permis").html();

var content_mandatory_date_expiration=$(".contener-date-expiration").html();

var content_date_expiration=$("#display-date-expiration").html();

var content_passport=$(".conteneur-passport").html();

$("#conteneur-autre-handicap").html('');
$(".conteneur-passport").html('');
$(".conteneur-cni").html('');



if($("#type-piece-identite").val()=='cni'){
    $(".contener-generale").html(content_cni);
    $("#display-date-expiration").html(content_date_expiration);

}else if($("#type-piece-identite").val()=='passport'){
    $(".contener-generale").html(content_passport);
    $("#display-date-expiration").html(content_mandatory_date_expiration);

}else if($("#type-piece-identite").val()=='permis'){
  $(".contener-generale").html(content_permis);
  $("#display-date-expiration").html(content_mandatory_date_expiration);
}else{
    $(".contener-generale").html('');
    $("#display-date-expiration").html(content_date_expiration);


}




$('#type-piece-identite').change(function(){
    if($(this).val()=='cni'){
        $(".contener-generale").html(content_cni);
    $("#display-date-expiration").html(content_date_expiration);


    }else if($(this).val()=='passport'){
        $(".contener-generale").html(content_passport);
        $("#display-date-expiration").html(content_mandatory_date_expiration);

    }else if($(this).val()=='permis'){
      $(".contener-generale").html(content_permis);
      $("#display-date-expiration").html(content_mandatory_date_expiration);

    }
    else{
        $(".contener-generale").html('');
    $("#display-date-expiration").html(content_date_expiration);


    }
})



$("select").on("change", function(){
if (trim($(this).val())!= "") {
  var conteneur_erreur = $(this).attr("data-error-contener");
  $("#" + conteneur_erreur).fadeOut("slow");
  error = true;
}
})

$("input[type='date']").on("change", function(){
if (trim($(this).val())!= "") {
  var conteneur_erreur = $(this).attr("data-error-contener");
  $("#" + conteneur_erreur).fadeOut("slow");
  error = true;
}
})


$("#btn-valider-identite").click(function(){
    var error = false;var message="";
	$("#form-valider-identite .message-erreur ").fadeOut("slow");
	$("#form-valider-identite .mandatory").each(function() {
			if (trim($(this).val()) == "") {
					var conteneur_erreur = $(this).attr("data-error-contener");
					$("#" + conteneur_erreur).fadeIn("slow");
					error = true;
                    message="Veuillez renseigner tous les champs obligatoires - Avec (*) ";
			}
	});
    const fileInput = document.querySelector('input[type=file]');
    if (fileInput.files.length == 0){
        error = true;
        message="Veuillez renseigner tous les champs obligatoires - Avec (*) ";
    }

    if(error==false){
        AfficherNotification("success","INFORMATION", "loader2", "Soumission effectuée avec succès, nous vous revenons dans les plus bref délai", "OK", "", "", "", "0");
    }else{
        AfficherNotification("danger","INFORMATION", "loader2", message, "OK", "", "", "", "0");
    }

})



