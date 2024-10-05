// document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
// document.onkeydown = function(e) {
//      if (((e.keyCode == 85 || e.keyCode == 83 ) && e.ctrlKey) || e.keyCode==123) {
//          e.preventDefault();
//      }
//      //////alert(e.keyCode);
//  }


/******************** ACCES TABLEAU DE BORD***********************************/
function Acceder_compte(traitement) {

    var email = trim($("#email-identification").val()); //alert(email);
    var password = trim($("#mot_de_passe").val());
    var error = false;

    $(".message-erreur").fadeOut("slow");

    $(".mandatory-connexion").each(function() {
        if (trim($(this).val()) == "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeIn("slow");
            error = true;
        }
    });


    if (!validateEmail(email)) {
        $("#div-erreur-email").fadeIn("slow");
        error = true;
    }

    if (error == false) {

        var destination_traitement = base64_decode(traitement); //alert(destination_traitement);
        var data_to_send = $("#form-connexion").serialize(); //alert(data_to_send);

        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {
                    if (reponse.session == "0") {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "1");
                    }

                } else {
                    Cacher_loader("loader2");
                    Affichage_contenuLightBox64(reponse.next, 'loader');
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}



function Valider_code_authentification_a_deux_facteurs(traitement) {

    var error = false;
    $("#form-validation-code .message-erreur ").fadeOut("slow");
    // alert('heloo');
    $(".mandatory-code").each(function() {
        if (trim($(this).val()) == "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeIn("slow");
            error = true;
        }
    });



    if (error == false) {
        var destination_traitement = base64_decode(traitement); //alert(destination_traitement);
        var data_to_send = $("#form-validation-code").serialize(); //alert(data_to_send);
        var token = trim($("#token").val());

        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {

                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                    }
                } else {
                    Cacher_loader("loader2");

                    if(reponse.update_infos==1){
                      if(reponse.participation==1)Participer_programme(reponse.traitement, reponse.token);
                      else gotoURL(reponse.next, 'loader');
                    }else{
                      if(reponse.participation==1)AfficherNotification("INFORMATION", "loader2", reponse.message, "Compléter ma fiche", "javascript:gotoURL('"+reponse.next+"','loader')", "", "", "0");
                      else gotoURL(reponse.next, 'loader');
                    }
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}



function Renvoyer_SMS_connexion_membre(traitement) {

    var error = false;
    $("#form-validation-code .message-erreur ").fadeOut("slow");
    var token = trim($("#token").val());

    if (error == false) {
        var destination_traitement = base64_decode(traitement);
        var data_to_send = "traitement=renvoyer-code-authentification-a-deux-facteurs" + "&token=" + token;
        //alert(data_to_send);
        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);
                 if (reponse.erreur == "oui") {
                     if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                    }
                } else {
                     AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}


//***********************************INSCRIPTION*********************************//


function Enregistrer_utilisateur(traitement){
    var nom=trim($("#nom-inscription").val());
    var prenom=trim($("#prenom-inscription").val());
    var ville=trim($("#ville-inscription").val());
    var quartier=trim($("#quartier-inscription").val());
    var pwd=trim($("#mot_de_passe-inscription").val());
    var c_pwd=trim($("#con_mot_de_passe-inscription").val());
    var addresse=trim($("#addresse").val());
    var error=false;
    $(".message-erreur").fadeOut("slow");

    $(".mandatory-inscription").each(function() {
        if(trim($(this).val())==""){
            var conteneur_erreur=$(this).attr("data-error-contener");
            $("#"+conteneur_erreur).fadeIn("slow");
            error=true;
        }
    });
    var reference_pays=$("#pays-inscription").find(':selected').data('code');
    if(reference_pays=="257"){
      if (ville=="") $("#div-erreur-ville").fadeIn("slow");
      if (quartier=="") $("#div-erreur-quartier").fadeIn("slow");
    }else{
  		if (addresse=="") $("#div-erreur-addresse").fadeIn("slow");
  	}

    var email = trim($("#email-inscription").val());
    if (email!="" && !validateEmail(email)) {
      $("#div-erreur-email").fadeIn("slow");
      error = true;
    }


    if(pwd.length<8){
      $("#div-erreur-mot_de_passe").fadeIn("slow");
      error = true;
    }

    if(c_pwd!=pwd){
      $("#div-erreur-con_mot_de_passe").fadeIn("slow");
      error = true;
    }
     var message="";

    if(error==false){

        var destination_traitement=base64_decode(traitement);
        var data_to_send=$("#form-inscription").serialize(); //alert(data_to_send);

        Afficher_loader("loader2");

        $.ajax({
            url : destination_traitement,
            type : 'POST', // Le type de la requête HTTP, ici devenu POST
            data : data_to_send,
            success : function(data, statut){ // success est toujours en place, bien sûr !
          //alert(data);
            var reponse = JSON.parse(data);

            if(reponse.erreur=="oui"){
                if(reponse.session=="0"){
                    var message="Votre jeton de session semble invalide.";
                    AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                }else {
                    AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                }
            }else{
                Cacher_loader("loader2");
                Affichage_contenuLightBox64(reponse.next, 'loader');
            }
        },

            error : function(resultat, statut, erreur){
                alert(erreur);
            }
        });

    }


}

function Valider_inscription(traitement) {

    var error = false;
    var code=trim($("#code").val());
    $("#form-validation-code .message-erreur ").fadeOut("slow");
     //alert(code);
    $(".mandatory-code").each(function() {
        if (trim($(this).val()) == "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeIn("slow");
            error = true;
        }
    });

    if(code==""){
      $("#div-erreur-code").fadeIn("slow");
      error = true;
    }


    if (error == false) {
        var destination_traitement = base64_decode(traitement); //alert(destination_traitement);
        var data_to_send = $("#form-validation-code").serialize(); //alert(data_to_send);

        Afficher_loader("loader2");
         $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);
                 if (reponse.erreur == "oui") {
                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                    }
                } else {
                  Cacher_loader("loader2");

                  Affichage_contenuLightBox64(reponse.next, 'loader');
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}

function Renvoyer_SMS_validation_inscription(traitement) {

    var error = false;
    $("#form-validation-code .message-erreur ").fadeOut("slow");
    var token = trim($("#token").val());

    if (error == false) {
        var destination_traitement = base64_decode(traitement);
        var data_to_send = "traitement=renvoyer-code-validation-inscription&token=" + token;

        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
              //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {

                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                    }
                } else {

                    AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}

// ****************************PARTICIPER AU PROGRAMME **************************//

function Participer_programme(traitement, token) {
     var destination_traitement = base64_decode(traitement); //alert(destination_traitement);
    var data_to_send = "traitement=participer-programme&token=" + token; //alert(data_to_send);
     Afficher_loader("loader");
     $.ajax({
        url: destination_traitement,
        type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
        data: data_to_send,
        success: function(data, statut) { // success est toujours en place, bien s�r !
            //alert(data);
            var reponse = JSON.parse(data);
             if (reponse.erreur == "oui") {
                 if (reponse.session == "0") {
                    var message = "Votre jeton de session semble invalide.";
                    AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                }else {
                    AfficherNotification("INFORMATION", "loader", reponse.message, "OK", "", "", "", "0");
                }
            } else {

                Cacher_loader("loader");
                Affichage_contenuLightBox64(reponse.next, 'loader');
            }
        },
         error: function(resultat, statut, erreur) {
            AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
        }
    });
 }



//*************************************FERMER LA SESSION ************************//

function Notification_fermeture_session(traitement, token) {
     AfficherNotification("INFORMATION", "loader", "Vous &ecirc;tes sur le point de fermer votre session, voulez vous continuer ?", "OUI", "javascript:Fermer_session('" + traitement + "', '" + token + "')", "ANNULER", "", "0");
 }

function Fermer_session(traitement, token) {
     var destination_traitement = base64_decode(traitement);
    var data_to_send = "traitement=fermer-session&token=" + token;

    Afficher_loader("loader2");

    $.ajax({
        url: destination_traitement,
        type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
        data: data_to_send,
        success: function(data, statut) { // success est toujours en place, bien s�r !
             //alert(data);
            var reponse = JSON.parse(data);

            if (reponse.erreur == "oui") {

                if (reponse.session == "0") {
                    var message = "Votre jeton de session semble invalide.";
                    AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                } else {
                    AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                }
            } else {
              self.location = reponse.next;
            }


        },

        error: function(resultat, statut, erreur) {
            AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
        }
    });




}

function Fermeture_session_explicite(lightbox, now, lastvisitetime) {

    var marge = 1200;
    var periode = now - lastvisitetime;

    if (periode > marge) Affichage_contenuLightBox64(lightbox, 'loader');


}




function Verif_saisie(event, element, btn) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode == 13) {
        $("#" + btn).click();
    } else {
        var error = false;
        var conteneur_erreur = $("#" + element).attr("data-error-contener");
        if ($("#" + element).val().length == 0) error = true;

        if (element == "email-inscription" && !validateEmail($("#" + element).val())) {
            error = true;
            if ($("#" + element).val().match(/[^a-zA-Z0-9.@ ]/g)) {
                $("#" + element).val($("#" + element).val().replace(/[^a-zA-Z0-9.@ ]/g, ''));
                if (!validateEmail($("#" + element).val())) error = true;
                else error = false;
            }
        }

        if (element == "pwd" && $("#" + element).val().length < 8) {
            error = true;
        }

        if (error == true) $("#" + conteneur_erreur).fadeIn("slow");

        else if ($("#" + conteneur_erreur).is(':visible')) {
            $("#" + conteneur_erreur).fadeOut("slow");
        }
    }
}




function verif_saisie_champs(element, btn) {
    // verification saisie champs email mot de passe oubli&eacute;
    ////alert("6656");
    $("#"+element).keyup(function(event) {
        if (event.which == 13) {
            $("#" + btn).click();
        } else {
            var error = false;
            var conteneur_erreur = $("#" + element).attr("data-error-contener");
            if ($("#" + element).val().length == 0) error = true;

            if ($("#"+element).attr("type")=='email' && !validateEmail($("#" + element).val())) {
                error = true;
                if ($("#" + element).val().match(/[^a-zA-Z0-9.@ ]/g)) {
                    $("#" + element).val($("#" + element).val().replace(/[^a-zA-Z0-9.@ ]/g, ''));
                    if (!validateEmail($("#" + element).val())) error = true;
                    else error = false;
                }
            }

            if (element == "pwd" && $("#" + element).val().length < 8) {
                error = true;
            }

            if (error == true){
                $("#" + conteneur_erreur).fadeIn("slow");
                $(".login-icon-container."+element+" .login-icon.bad").show("slow");
                $(".login-icon-container."+element+" .login-icon.good").hide("slow");

            } 
            else if ($("#" + conteneur_erreur).is(':visible')) {
                $("#" + conteneur_erreur).fadeOut("slow");
                $(".login-icon-container."+element+" .login-icon.bad").hide("slow");
                $(".login-icon-container."+element+" .login-icon.good").show("slow");

            }
        }

    });
}




//************************************ENVOYER MESSAGE FORMULAIRE DE CONTACT index***********************//



function Envoyer_message_contact_index(traitement){
    var nom=trim($("#nom").val());
    var email=trim($("#email").val());
    var error=false;
    $(".message-erreur").fadeOut("slow");

    $(".mandatory").each(function() {

        if(trim($(this).val())==""){
            var conteneur_erreur=$(this).attr("data-error-contener");
            $("#"+conteneur_erreur).fadeIn("slow");
            error=true;
        }
    });


    if( !validateEmail(email)){
        var conteneur_erreur="div-erreur-champ-email-contact";
        $("#"+conteneur_erreur).fadeIn("slow");
        error=true;
    }
    if(error==false){

        var destination_traitement=base64_decode(traitement);
        var data_to_send=$("#form-contact").serialize();
        //alert(data_to_send);
        Afficher_loader("loader2");

        $.ajax({
            url : destination_traitement,
           type : 'POST', // Le type de la requ�te HTTP, ici devenu POST
           data : data_to_send,
           success : function(data, statut){ // success est toujours en place, bien s�r !
               // alert(data);
              var reponse = JSON.parse(data);

                if(reponse.erreur=="oui"){

                      if(reponse.session=="0"){
                          var message="Votre jeton de session semble invalide.";
                          // alert(message);
                          AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                      }
                }else{
                    Cacher_loader("loader2");
                            AfficherNotification("CONFIRMATION","loader","M/Mme "+nom+",<br>Votre message a &eacute;t&eacute; enregistr&eacute; avec succès.<br> Nous allons vous contacter dans un bref d&eacute;lai. <br> MERCI POUR VOTRE CONFIANCE .","OK","","","","1");
                    document.getElementById("form-contact").reset();
                }
            },

            error : function(resultat, statut, erreur){
                alert(erreur);
            }
        });

    }

    return false;

}


//************************************ENVOYER MESSAGE FORMULAIRE DE CONTACT***********************//



function Envoyer_message_contact(traitement){
    var nom=trim($("#nom").val());
    var prenom=trim($("#prenom").val());
    var email=trim($("#email").val());
    var objet=trim($("#objet").val());
    var numero=trim($("#numero").val());
    var message=trim($("#message").val());
    var error=false;
    $(".message-erreur").fadeOut("slow");

    $(".mandatory").each(function() {

        if(trim($(this).val())==""){
            var conteneur_erreur=$(this).attr("data-error-contener");
            $("#"+conteneur_erreur).fadeIn("slow");
            error=true;
        }
    });


    if( !validateEmail(email)){
        var conteneur_erreur="div-erreur-champ-email-contact";
        $("#"+conteneur_erreur).fadeIn("slow");
        error=true;
    }
    if(error==false){

        var destination_traitement=base64_decode(traitement);
        var myForm = document.getElementById('form-contact');
        var data_to_send = new FormData(myForm);

        // alert(data_to_send);
        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            contentType: false,
            cache: false,
            processData: false,
           success : function(data, statut){ // success est toujours en place, bien s�r !
               // alert(data);
              var reponse = JSON.parse(data);

                if(reponse.erreur=="oui"){

                    if(reponse.session=="0"){
                        var message="Votre jeton de session semble invalide.";
                        // alert(message);
                        AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                    }else{
                        var message=reponse.message;
                        AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                    }
                }else{
                    Cacher_loader("loader2");
                            AfficherNotification("CONFIRMATION","loader","M/Mme "+nom+" "+prenom+",<br>Votre message a &eacute;t&eacute; enregistr&eacute; avec succès.<br> Nous allons vous contacter dans un bref d&eacute;lai. <br> MERCI POUR VOTRE CONFIANCE .","OK","","","","1");
                    document.getElementById("form-contact").reset();
                }
            },

            error : function(resultat, statut, erreur){
                alert(erreur);
            }
        });

    }

    return false;

}




function Envoyer_message_contact_programme(traitement){
    var nom=trim($("#contact-candidate-name").val());
    var email=trim($("#contact-candidate-email").val());
    var message=trim($("#contact-candidate-message").val());
    var error=false;
    $(".message-erreur").fadeOut("slow");

    $(".mandatory").each(function() {

        if(trim($(this).val())==""){
            var conteneur_erreur=$(this).attr("data-error-contener");
            $("#"+conteneur_erreur).fadeIn("slow");
            error=true;
        }
    });


    if( !validateEmail(email)){
        var conteneur_erreur="div-erreur-champ-email-contact";
        $("#"+conteneur_erreur).fadeIn("slow");
        error=true;
    }
    if(error==false){

        var destination_traitement=base64_decode(traitement);
        var data_to_send = $("#form-contact").serialize();

        // alert(data_to_send);
        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,

           success : function(data, statut){ // success est toujours en place, bien s�r !
               // alert(data);
              var reponse = JSON.parse(data);

                if(reponse.erreur=="oui"){

                    if(reponse.session=="0"){
                        var message="Votre jeton de session semble invalide.";
                        // alert(message);
                        AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                    }else{
                        var message=reponse.message;
                        AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                    }
                }else{
                    Cacher_loader("loader2");
                            AfficherNotification("CONFIRMATION","loader","M/Mme "+nom+",<br>Votre message a &eacute;t&eacute; enregistr&eacute; avec succès.<br> Nous allons vous contacter dans un bref d&eacute;lai. <br> MERCI POUR VOTRE CONFIANCE .","OK","","","","1");
                    document.getElementById("form-contact").reset();
                }
            },

            error : function(resultat, statut, erreur){
                alert(erreur);
            }
        });

    }

    return false;

}



//************************************ENVOYER MESSAGE FORMULAIRE DE CONTACT***********************//



function Envoyer_demande_partenariat(traitement){
    var nom=trim($("#nom-requerant").val());
    var email=trim($("#email").val());
    var error=false;
    $(".message-erreur").fadeOut("slow");

    $(".mandatory").each(function() {

        if(trim($(this).val())==""){
            var conteneur_erreur=$(this).attr("data-error-contener");
            $("#"+conteneur_erreur).fadeIn("slow");
            error=true;
        }
    });


    if( !validateEmail(email)){
        var conteneur_erreur="div-erreur-champ-email";
        $("#"+conteneur_erreur).fadeIn("slow");
        error=true;
    }
    if(error==false){

        var destination_traitement=base64_decode(traitement);
        var myForm = document.getElementById('form-demande-partenariat');
        var data_to_send = new FormData(myForm);

        //alert(data_to_send);
        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            contentType: false,
            cache: false,
            processData: false,
           success : function(data, statut){ // success est toujours en place, bien s�r !
               // alert(data);
              var reponse = JSON.parse(data);

                if(reponse.erreur=="oui"){

                      if(reponse.session=="0"){
                          var message="Votre jeton de session semble invalide.";
                          // alert(message);
                          AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                      }
                }else{
                    Cacher_loader("loader2");
                            AfficherNotification("CONFIRMATION","loader","M/Mme "+nom+",<br>Votre demande de partenariat a &eacute;t&eacute; enregistr&eacute; avec succès.<br> Nous allons vous contacter dans un bref d&eacute;lai. <br> MERCI POUR VOTRE CONFIANCE .","OK","","","","1");
                    document.getElementById("form-demande-partenariat").reset();
                }
            },

            error : function(resultat, statut, erreur){
                alert(erreur);
            }
        });

    }

    return false;

}


//************************************ENREGISTRE NEWSLETTER***********************//



function Enregistrer_newsletter(traitement){
    var email=trim($("#email_newsletter").val());
    var error=false;
    $(".message-erreur").fadeOut("slow");

    $(".mandatory-newsletter").each(function() {

        if(trim($(this).val())==""){
            error=true;
        }
    });

    if( !validateEmail(email))error=true;

    if(error==false){

        var destination_traitement=base64_decode(traitement);
        var data_to_send=$("#newsletter").serialize();

        Afficher_loader("loader");

        $.ajax({
            url : destination_traitement,
           type : 'POST', // Le type de la requ�te HTTP, ici devenu POST
           data : data_to_send,
           success : function(data, statut){ // success est toujours en place, bien s�r !
              //alert(data);
              var reponse = JSON.parse(data);

               if(reponse.erreur=="oui"){

                      if(reponse.session=="0"){
                          var message="Votre jeton de session semble invalide.";
                          AfficherNotification("INFORMATION","loader",message,"OK","javascript:location.reload()","","","0");
                      }else{
                          var message="l'adresse Email ["+email+"] est d&eacute;j� enregistr�.";
                          AfficherNotification("INFORMATION","loader",message,"OK","javascript:location.reload()","","","0");

                      }
               }else{
                      Cacher_loader("loader2");
                      AfficherNotification("CONFIRMATION","loader","Votre  Email ["+email+"] a &eacute;t&eacute; enregistr&eacute; avec succ&egrave;s.<br> Vous aurez d�sormais l'essentiel de l'information de la cour p�nale sp�ciale dans votre boite E-mail.<br>Cordialement.","OK","","","","1");
                      document.getElementById("newsletter").reset();
                }
            },

            error : function(resultat, statut, erreur){
                alert(erreur);
            }
        });

    }else{
        AfficherNotification("INFORMATION","loader","Veuillez saisir une adresse Email valide.","OK","","","","1");
    }

}



function Retrouver_pwd(traitement) {

    var destination_traitement = base64_decode(traitement);
    var email = $("#email-recup").val();
    var data_to_send = "email=" + email;
    var error = false;
    //alert(data_to_send);
    if (!validateEmail(email)) {
        $("#div-erreur-champ-email-recup").fadeIn("slow");
        error = true;
    }


    if (error == false) {
        Afficher_loader('loader2');

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                var reponse = eval('(' + data + ')'); //alert(data);
                Cacher_loader("loader2");
                if (reponse.erreur == "oui") {
                    $("#connteneur-erreur-retrouver-pwd").css("display", "block");
                    $("#connteneur-erreur-retrouver-pwd").html(reponse.message);
                } else {
                    Affichage_contenuLightBox("lightbox-confirmation-retrouver-pwd.php", 'loader');
                }
            },

            error: function(resultat, statut, erreur) {
                alert(erreur);
            }
        });
    }

}


function Pagination(traitement, formulaire, conteneur_liste, page_encours, loader) {

    var destination_traitement = base64_decode(traitement);
    var data_to_send = $("#" + formulaire).serialize() + "&page_encours=" + page_encours; //alert(data_to_send);
    if (loader !== undefined) Afficher_loader(loader);

    $.ajax({
        url: destination_traitement,
        type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
        data: data_to_send,
        success: function(data, statut) { // success est toujours en place, bien s�r !
          //alert(data);
            var reponse = JSON.parse(data);
            if (reponse.erreur == "oui") {
                if (reponse.session == "0") {
                    var message = "Votre jeton de session semble invalide.";
                    AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                }
            } else {

                if (reponse.nbreponse == 0) $("#" + conteneur_liste).html("AUCUN RESULTAT");
                else {
                    $("#" + conteneur_liste).html(reponse.liste);
                }
                if (loader !== undefined) Cacher_loader(loader);
            }
        },

        error: function(resultat, statut, erreur) {
            AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
        }

    });

}


function Rechercher(traitement, formulaire, conteneur_liste, loader) {

    var destination_traitement = base64_decode(traitement);
    var data_to_send = $("#" + formulaire).serialize();
     //alert(data_to_send);
    if (loader !== undefined) Afficher_loader(loader);

    $.ajax({
        url: destination_traitement,
        type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
        data: data_to_send,
        success: function(data, statut) { // success est toujours en place, bien s�r !
             //alert(data);
            var reponse = JSON.parse(data);
            if (reponse.erreur == "oui") {
                if (reponse.session == "0") {
                    var message = "Votre jeton de session semble invalide.";
                    AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                }
            } else {

                if (reponse.nbreponse == 0) $("#" + conteneur_liste).html("<div style='text-align:center; margin-top:50px'> AUCUN RESULTAT</div>");
                else {

                    $("#" + conteneur_liste).html(reponse.liste);
                }
                if (loader !== undefined) Cacher_loader(loader);
            }
        },

        error: function(resultat, statut, erreur) {
            AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
        }

    });

}



function Rechercher_contenu(traitement) {

    var mot_cle= trim($('#search-contenu').val());
    var destination_traitement = base64_decode(traitement);
    var data_to_send = $("#search-bar").serialize();
    var erreur=false;
    if(mot_cle.length >= 3) {
    // alert(data_to_send);
        $('#loadercontenteur').show();

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                // alert(data);
                var reponse = JSON.parse(data);
                if (reponse.erreur == "oui") {
                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    }
                } else {

                    $('#loadercontenteur').hide();
                    $('#conteneur-resultat').show();
                    if (reponse.nbreponse == 0) $("#libelle_reponse").html("AUCUN RESULTAT");
                    else {
                        if (reponse.nbreponse == 1) $("#libelle_reponse").html(reponse.nbreponse + " r&eacute;sultat trouv&eacute;");
                        else $("#libelle_reponse").html(reponse.nbreponse + " r&eacute;sultats trouv&eacute;s");
                        $("#liste-resultat-recherche").html(reponse.liste);
                    }
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }

        });
    }else{
        if($("#conteneur-resultat").is(":visible")){ $('#conteneur-resultat').hide();}
    }

}


function Rechercher_via_detail_actualite() {

    var search = trim($("#libelle-search").val());

    if(search=="") AfficherNotification("INFORMATION", "loader2", "Veuillez saisir un mot clé. ", "OK", "", "", "", "0");
    else gotoURL("actualites/recherche/"+search+"/","loader");


}

function Rechercher_via_detail_realisation() {

    var search = trim($("#libelle-search").val());

    if(search=="") AfficherNotification("INFORMATION", "loader2", "Veuillez saisir un mot clé. ", "OK", "", "", "", "0");
    else gotoURL("realisations/recherche/"+search+"/","loader");


}

function Rechercher_via_detail_evenement() {

    var search = trim($("#libelle-search").val());

    if(search=="") AfficherNotification("INFORMATION", "loader2", "Veuillez saisir un mot clé. ", "OK", "", "", "", "0");
    else gotoURL("agendas/recherche/"+search+"/","loader");


}

//***************************ENREGISTRER COMMENTAIRE****************************************//
function Enregistrer_commentaire(traitement){
    var email=trim($("#email").val());
    var nom=trim($("#author").val());
    var error=false;
    // $(".message-erreur").fadeOut("slow");

    $(".mandatory").each(function() {
        if(trim($(this).val())==""){
            error=true;
        }
    });
    if(error==true){
        AfficherNotification("INFORMATION", "loader2", "Veuillez renseigner tous les champs obligatoires - Avec (*) ", "OK", "", "", "", "0");
    }else if( error==false && !validateEmail(email)){
        AfficherNotification("INFORMATION", "loader2", "Email invalide ", "OK", "", "", "", "0");
        error=true;
    }
    if(error==false){
        var destination_traitement=base64_decode(traitement);
        var data_to_send=$("#form-commentaire").serialize(); 
        //alert(data_to_send);

        Afficher_loader("loader2");

        $.ajax({
            url : destination_traitement,
            type : 'POST', // Le type de la requ�te HTTP, ici devenu POST
            data : data_to_send,
            success : function(data, statut){ // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);
                if(reponse.erreur=="oui"){
                    if(reponse.session=="0"){
                        var message="Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION","loader2",message,"OK","javascript:location.reload()","","","0");
                    }else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                    }
                }else{
                    Cacher_loader("loader2");
                    if($(".comments-area").is(":hidden")){ //alert("hidden");
                        $(".comments-area").css("display", "inline");
                        $(".comments-area").slideDown("slow");
                    }

                    $("#nbcommentaire").html(reponse.nbcommentaire);
                    $("#liste-commentaire").append(reponse.commentaire);
                    AfficherNotification("CONFIRMATION","loader","M/Mme. <strong>"+ucfirst(nom)+"</strong>,<br>Votre commentaire a &eacute;t&eacute; enregitr&eacute; avec succès. <br> MERCI POUR VOTRE CONFIANCE.","OK","","","","1");
                    $("#form-commentaire").find('input:text, textarea').val('');
                    $("#email").val('');

                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }

}

//*************************************PARTAGER**********************************************//

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


function Cocher_decocher(action, conteneur_liste) {

    if (action == "Cocher") {
        $("#" + conteneur_liste + " input[type=checkbox]").prop("checked", true);
    } else {
        $("#" + conteneur_liste + " input[type=checkbox]").prop("checked", false);
    }
}



//************************************************ESPACE CLIENT MON PROFIL *********************************************************************//


function Modifier_pwd(traitement) {

    var error = false;
    $("#form-modifier-pwd .message-erreur ").fadeOut("slow");
    var current_password = trim($("#pwd-user").val());
    var password = trim($("#new-pwd-user").val());
    var confirm_password = trim($("#cnew-pwd-user").val());


    if (password.length < 8) {
        $("#div-erreur-champ-new-pwd-user").fadeIn("slow");
        error = true;
    }

    if (password != confirm_password) {
        $("#div-erreur-champ-cnew-pwd-user").fadeIn("slow");
        error = true;
    }


    $(".mandatory-pwd").each(function() {
        if (trim($(this).val()) == "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeIn("slow");
            error = true;
        }
    });



    if (error == false) {
        $("#pwd-user").val(CryptoJS.MD5(current_password));
        var destination_traitement = base64_decode(traitement);
        var data_to_send = $("#form-modifier-pwd").serialize(); //alert(data_to_send);
        $("#pwd-user").val(current_password);

        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {

                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                    }
                } else {

                    Affichage_contenuLightBox64(reponse.next, 'loader2');
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}


function Valider_code_authentification_modif_pwd(traitement) {

    var error = false;
    $("#form-validation-code .message-erreur ").fadeOut("slow");

    $(".mandatory-code").each(function() {
        if (trim($(this).val()) == "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeIn("slow");
            error = true;
        }
    });


    var current_password = trim($("#pwd-user").val());
    var password = trim($("#new-pwd-user").val());

    if (error == false) {
        var destination_traitement = base64_decode(traitement);

        var crypted_current_password = CryptoJS.MD5(current_password);
        var data_to_send = $("#form-validation-code").serialize() + "&pwd-user=" + crypted_current_password + "&new-pwd-user=" + base64_encode(password);
        $("#pwd-user").val(current_password); //alert(data_to_send)

        Afficher_loader("loader3");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {

                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader3", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader3", reponse.message, "OK", "", "", "", "0");
                    }
                } else {

                    AfficherNotification("INFORMATION", "loader3", reponse.message, "OK", "javascript:location.reload()", "", "", "0");

                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}




function check_uncheck_all(name, action) {
    if (action == "check") $('[name="' + name + '"]').prop("checked", true);
    else if (action == "uncheck") $('[name="' + name + '"]').prop("checked", false);
}





function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
}



function Recuperer_pwd(traitement) {
    var email = trim($("#email-recup-pwd").val());
    var error = false;

    $("#forget-pass-form .message-erreur ").fadeOut("slow");

    if (!validateEmail(email)) {
        $("#div-erreur-champ-email").fadeIn("slow");
        error = true;
    }
    if (error == false) {
        var token=$("#token").val();
        var destination_traitement = base64_decode(traitement);
        var data_to_send = $("#forget-pass-form").serialize()+"&token="+token; //alert(data_to_send);

        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                // alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {
                    if (reponse.session == "0") {
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "1");
                    }

                } else {
                    // AfficherNotification("INFORMATION", "loader", reponse.message, "OK", "", "", "", "1");
                    Cacher_loader("loader2");
                    Affichage_contenuLightBox64(reponse.next, 'loader');
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}

function Reinitialiser_pwd(traitement) {
    var error = false;
    $("#form-init-pwd .message-erreur ").fadeOut("slow");

    $(".mandatory-pwd").each(function() {
        if (trim($(this).val()) == "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeIn("slow");
            error = true;
        }
    });
    var n_pwd=trim($("#nmdp").val());
    var c_pwd=trim($("#cnmdp").val());

    if(n_pwd.length<8){
      $("#div-erreur-nmdp").fadeIn("slow");
      error = true;
    }

    if(c_pwd!=n_pwd){
      $("#div-erreur-cnmdp").fadeIn("slow");
      error = true;
    }
    //alert(error);
    if (error == false) {
        var destination_traitement = base64_decode(traitement);
        var data_to_send = $("#form-init-pwd").serialize(); //alert(data_to_send);

        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {
                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                    }
                }else{
                  Cacher_loader("loader2");
                  AfficherNotification("INFORMATION", "loader", reponse.message, "OK", reponse.next, "", "", "0");
                 }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }
 }


function Valider_code_authentification_a_deux_facteurs_recuperation_pwd(traitement) {

    var error = false;
    $("#form-validation-code .message-erreur ").fadeOut("slow");
    // alert('heloo');
    $(".mandatory-code").each(function() {
        if (trim($(this).val()) == "") {
            var conteneur_erreur = $(this).attr("data-error-contener");
            $("#" + conteneur_erreur).fadeIn("slow");
            error = true;
        }
    });

    if (error == false) {
        var destination_traitement = base64_decode(traitement); //alert(destination_traitement);
        var data_to_send = $("#form-validation-code").serialize(); alert(data_to_send);

        Afficher_loader("loader3");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {

                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader3", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader3", reponse.message, "OK", "", "", "", "0");
                    }
                } else {
                    AfficherNotification("INFORMATION", "loader", reponse.message, "OK", "", "", "", "0");
                    Cacher_loader("loader2");
                    Cacher_loader("loader3");
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader3", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}



function Renvoyer_SMS_recuperation_pwd(traitement) {

    var error = false;
    $("#form-validation-code .message-erreur ").fadeOut("slow");
    var token = trim($("#token").val());


    if (error == false) {
        var destination_traitement = base64_decode(traitement);
        var data_to_send = "traitement=renvoyer-code-authentification-a-deux-facteurs-recuperation-pwd&token=" + token;
        //alert(data_to_send);
        Afficher_loader("loader2");

        $.ajax({
            url: destination_traitement,
            type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
            data: data_to_send,
            success: function(data, statut) { // success est toujours en place, bien s�r !
                //alert(data);
                var reponse = JSON.parse(data);

                if (reponse.erreur == "oui") {

                    if (reponse.session == "0") {
                        var message = "Votre jeton de session semble invalide.";
                        AfficherNotification("INFORMATION", "loader3", message, "OK", "javascript:location.reload()", "", "", "0");
                    } else {
                        AfficherNotification("INFORMATION", "loader3", reponse.message, "OK", "", "", "", "0");
                    }
                } else {

                    AfficherNotification("INFORMATION", "loader2", reponse.message, "OK", "", "", "", "0");
                }
            },

            error: function(resultat, statut, erreur) {
                AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
            }
        });

    }


}


function Select_quartier(traitement, token) {
    var idville=$("#ville-inscription").val();
  var destination_traitement = base64_decode(traitement);
  var data_to_send = "traitement=filtrer-quartier-enregistrement-utilisateur&idville=" + idville + "&token=" + token; //alert(data_to_send);
  //Afficher_loader("loader2");
  $.ajax({
    url: destination_traitement,
    type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
    data: data_to_send,
    success: function(data, statut) { // success est toujours en place, bien s�r !
      //alert(data);
      var reponse = JSON.parse(data);
      if (reponse.erreur == "oui") {
        if (reponse.session == "0") {
          var message = "Votre jeton de session semble invalide.";
          AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
        }
      } else {
        $("#quartier-inscription").replaceWith(reponse.quartier);

      }
    },
    error: function(resultat, statut, erreur) {
      AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
    }
  });
}


function Select_commune_inscription(traitement, token) {
  var idprovince=$("#province-inscription").val();  //alert(idprovince);
  var destination_traitement = base64_decode(traitement);
  var data_to_send = "traitement=filtrer-commune-enregistrement-utilisateur&idprovince=" + idprovince + "&token=" + token; //alert(data_to_send);
  Afficher_loader("loader2");
  if(idprovince!=0){
    $.ajax({
      url: destination_traitement,
      type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
      data: data_to_send,
      success: function(data, statut) { // success est toujours en place, bien s�r !
        //alert(data);
        var reponse = JSON.parse(data);
        if (reponse.erreur == "oui") {
          if (reponse.session == "0") {
            var message = "Votre jeton de session semble invalide.";
            AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
          }
        } else {
          $("#commune-inscription").replaceWith(reponse.commune);
          $('.zone option:not(:first)').remove();
          $('.colline option:not(:first)').remove();
          $(".zone").prop("selectedIndex", 0);
          $(".colline").prop("selectedIndex", 0);

        }
        Cacher_loader("loader2");
      },
      error: function(resultat, statut, erreur) {
        AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
      }
    });

  }
}

function Select_zone_inscription(traitement, token) {
  var idcommune=$("#commune-inscription").val();
  var destination_traitement = base64_decode(traitement);
  var data_to_send = "traitement=filtrer-zone-enregistrement-utilisateur&idcommune=" + idcommune + "&token=" + token; //alert(data_to_send);
  Afficher_loader("loader2");
  if(idcommune!=""){
      $.ajax({
        url: destination_traitement,
        type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
        data: data_to_send,
        success: function(data, statut) { // success est toujours en place, bien s�r !
          //alert(data);
          var reponse = JSON.parse(data);
          if (reponse.erreur == "oui") {
            if (reponse.session == "0") {
              var message = "Votre jeton de session semble invalide.";
              AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
            }
          } else {
            $("#zone-inscription").replaceWith(reponse.zone);
            $('.colline option:not(:first)').remove();
            $(".colline").prop("selectedIndex", 0);

          }
          Cacher_loader("loader2");
        },
        error: function(resultat, statut, erreur) {
          AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
        }
      });
  }
}

function Select_colline_inscription(traitement, token) {
  var idzone=$("#zone-inscription").val();
  var destination_traitement = base64_decode(traitement);
  var data_to_send = "traitement=filtrer-colline-enregistrement-utilisateur&idzone=" + idzone + "&token=" + token; //alert(data_to_send);
  Afficher_loader("loader2");
  if(idzone!=""){
      $.ajax({
        url: destination_traitement,
        type: 'POST', // Le type de la requ&ecirc;te HTTP, ici devenu POST
        data: data_to_send,
        success: function(data, statut) { // success est toujours en place, bien s�r !
          //alert(data);
          var reponse = JSON.parse(data);
          if (reponse.erreur == "oui") {
            if (reponse.session == "0") {
              var message = "Votre jeton de session semble invalide.";
              AfficherNotification("INFORMATION", "loader2", message, "OK", "javascript:location.reload()", "", "", "0");
            }
          } else {
            $("#colline-inscription").replaceWith(reponse.colline);
          }
          Cacher_loader("loader2");
        },
        error: function(resultat, statut, erreur) {
          AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
        }
      });
  }
}
