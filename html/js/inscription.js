$("#username").keyup(function(){
    verif_saisie_champs('username', 'btn-valider');
});
$("#username").change(function(){
    verif_saisie_champs('username', 'btn-valider');
});
$("#name").keyup(function(){
    verif_saisie_champs('name', 'btn-valider');
});
$("#name").change(function(){
    verif_saisie_champs('name', 'btn-valider');
});

$("#firstname").keyup(function(){
    verif_saisie_champs('firstname', 'btn-valider');
});
$("#firstname").change(function(){
    verif_saisie_champs('firstname', 'btn-valider');
});

$("#numero-tel").keyup(function(){
    verif_saisie_champs('numero-tel', 'btn-valider');
});
$("#numero-tel").change(function(){
    verif_saisie_champs('numero-tel', 'btn-valider');
});

$("#email").keyup(function(){
    verif_saisie_champs('email', 'btn-valider');
});
$("#email").change(function(){
    verif_saisie_champs('email', 'btn-valider');
});

$("#pwd").keyup(function(){
    verif_saisie_champs('pwd', 'btn-valider');
    if(($(this).val()).length<8){
        $("#div-erreur-pwd").fadeIn("slow");
        error = true;
      }
});
$("#pwd").change(function(){
    verif_saisie_champs('pwd', 'btn-valider');
    if(($(this).val()).length<8){
        $("#div-erreur-pwd").fadeIn("slow");
        error = true;
      }
});

$("#pwd-confirmation").keyup(function(){
    verif_saisie_champs('pwd-confirmation', 'btn-valider');
    var pwd=$("#pwd").val();
    if($(this).val()!=pwd){
      $("#div-erreur-conf-pwd").fadeIn("slow");
      error = true;
    }
});
$("#pwd-confirmation").change(function(){
    verif_saisie_champs('pwd-confirmation', 'btn-valider');
    var pwd=$("#pwd").val();
    if($(this).val()!=pwd){
      $("#div-erreur-conf-pwd").fadeIn("slow");
      error = true;
    }
});

