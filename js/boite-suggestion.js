$(document).ready(function name() {
    $("#btn-valider-candidature-spontanee").on('click',()=>{
        Enregistrer_Message_Boite_Suggestion(base64_encode("traitement_ajax/main.php"));
    });

    $("#nom").keyup(function(){
        verif_saisie_champs('nom', 'btn-valider-candidature-spontanee');
    });

    $("#nom").change(function(){
        verif_saisie_champs('nom', 'btn-valider-candidature-spontanee');
    });

    $("#prenom").keyup(function(){
        verif_saisie_champs('prenom', 'btn-valider-candidature-spontanee');
    });
    $("#prenom").change(function(){
        verif_saisie_champs('prenom', 'btn-valider-candidature-spontanee');
    });

    $("#telephone").keyup(function(){
        verif_saisie_champs('telephone', 'btn-valider-candidature-spontanee');
    });

    $("#telephone").change(function(){
        verif_saisie_champs('telephone', 'btn-valider-candidature-spontanee');
    });

    $("#telephone").on("input",function(){
        this.value = this.value.replace(/\D/g,'');
    });

    $("#email").keyup(function(){
        verif_saisie_champs('email', 'btn-valider-candidature-spontanee');
    });

    $("#email").change(function(){
        verif_saisie_champs('email', 'btn-valider-candidature-spontanee');
    });

    $("#objet").keyup(function(){
        verif_saisie_champs('objet', 'btn-valider-candidature-spontanee');
    });

    $("#objet").change(function(){
        verif_saisie_champs('objet', 'btn-valider-candidature-spontanee');
    });

    $("#message").keyup(function(){
        verif_saisie_champs('message', 'btn-valider-candidature-spontanee');
    });

    $("#message").change(function(){
        verif_saisie_champs('message', 'btn-valider-candidature-spontanee');
    });

    // $('#form-boite-suggestion').bind('keypress keydown keyup', function(e){
    //     if(e.keyCode == 13) { 
    //         e.preventDefault();
    //         $("#btn-valider-candidature-spontanee").click();
    //     }
    // });
    

    function Enregistrer_Message_Boite_Suggestion(traitement) {
        var email=trim($("#email").val());
        var nom=trim($("#nom").val());
        var prenom=trim($("#prenom").val());

        var error = false;
        $("#form-boite-suggestion .message-erreur ").fadeOut("slow");
    
    
    
        $(".mandatory").each(function() {
            if (trim($(this).val()) == "") {
                var conteneur_erreur = $(this).attr("data-error-contener");
                $("#" + conteneur_erreur).fadeIn("slow");
                error = true;
            }
        });
        $("select").each(function() {
            if (trim($(this).val()) == null) {
                var conteneur_erreur = $(this).attr("data-error-contener");
                $("#" + conteneur_erreur).fadeIn("slow");
                error = true;
            }
        });

        if( !validateEmail(email)){
            var conteneur_erreur=$(this).attr("data-error-contener");
            $("#"+conteneur_erreur).fadeIn("slow");
            error=true;
        }
    
        if (error == false) {
            var destination_traitement = base64_decode(traitement);
            var data_to_send = $("#form-boite-suggestion").serialize(); //alert(data_to_send);
    
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
                            AfficherNotification("CONFIRMATION","loader","M/Mme "+nom+" "+prenom+",<br>Votre message a &eacute;t&eacute; enregistr&eacute; avec succès.<br> Nous allons vous contacter dans un bref d&eacute;lai. <br> MERCI POUR VOTRE CONFIANCE .","OK","","","","1");
                    document.getElementById("form-boite-suggestion").reset();
                        
                    }
                },
    
                error: function(resultat, statut, erreur) {
                    AfficherNotification("INFORMATION", "loader2", "Une erreur r&eacute;seau est survenue. votre connexion internet ne semble pas active", "OK", "javascript:location.reload()", "", "", "0");
                }
            });
    
        }
    
    
    }
    
    
});