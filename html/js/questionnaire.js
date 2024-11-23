
       
$(document).ready(function() {
    var nb_reponse = $(".question-container .choices").length;

    var hidden_content = `<div class="choices">
                        <div class="wrap-form-item">
                            <div class="form-item">
                                <input type="text" required="" name="reponse[]" id="reponse${nb_reponse+1}" placeholder="Saisissez un choix de réponse" class="input-field " data-error-contener="div-erreur-reponse${nb_reponse+1}">
                                <div class="message-erreur" id="div-erreur-reponse${nb_reponse+1}" style="display: none;"> Vous devez proposer au moins un choix.</div>
                            </div>
                           
                            <div class="wrap-content-add-item">
                                <span class="add-bloc" ><i class="fa fa-plus"></i></span>
                                <span class="remove-bloc" ><i class="fa fa-minus"></i></span>
                            </div>
                        </div>
                    </div>`;


        

    function InitializeNumber() {
        $('input[type="number"]').niceNumber();
    }
    InitializeNumber();

    function addBloc(form,element) {
        $("#"+form+" .wrap-contener-add-block").append(element);
        nb_reponse++; // Update the count of choices after adding
        InitializeNumber();
    }


    function removeBloc(form) {
        $("#"+form+" .wrap-contener-add-block").children().last().remove();
        nb_reponse--; // Update the count after removal
        InitializeNumber();
    }

    $(document).on('click', '.add-bloc', function() {  // Fix class name
       
       let idform= $(this).closest('.form-sondage').attr('id');
        addBloc(idform,hidden_content);
    });

    $(document).on('click', '.remove-bloc', function() {
        let idform= $(this).closest('.form-sondage').attr('id');
        removeBloc(idform);
    });



    $(document).on('click', '.add-question', function() {  // Fix class name
        // document.getElementById("form-sondage").reset();
        

    });

   
});

       
