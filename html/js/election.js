$(document).ready(function(){
    $(".candidate input[type=radio]").change(function(){
        $(".candidate input[type=radio] + span").css('display','none');
        if($(this).is(':checked')){
            $(this).closest('.candidate').find('.check-select-answer').css('display','flex');
        }
        var name=$(this).data("name");
        $(".parent-item-candidat").hide();
        $("#"+name).slideDown();
        
    })
    $(".candidate input[type=checkbox]").change(function(){
        if($(this).is(':checked')){
            $(this).closest('.candidate').find('.check-select-answer').css('display','flex');
        }else{
            $(this).closest('.candidate').find('.check-select-answer').css('display','none');
        }
    })
     // Ouvrir la modale
     var modal = document.getElementById("voteModal");
     var btn = document.getElementById("btn-valider");
     var cancelBtn = document.getElementById("cancelVote");
     var confirmBtn = document.getElementById("confirmVote");
 
     btn.onclick = function() {
       
        if( $(".candidate input:checked").length==0){
            alert('Veillez effectuer un choix!');
        }else{
            modal.style.display = "block";
            // Fermer la modale en cas d'annulation
            cancelBtn.onclick = function() {
                modal.style.display = "none";
            }
        
            // Confirmer le vote et fermer la modale
            confirmBtn.onclick = function() {
                modal.style.display = "none";
                alert("Votre vote a été confirmé !");
            }
    
        }
     
     }
   


})

