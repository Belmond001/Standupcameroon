
       
$(document).ready(function() {
    var nb_reponse = $(".question-container .choices").length;

    var hidden_content = `<div class="choices">
                        <div class="wrap-form-item">
                            <div class="form-item">
                                <input type="checkbox" class="checkbox-choise" disabled>
                                <input type="text" required="" name="reponse[]" id="reponse${nb_reponse+1}" placeholder="Saisissez un choix de réponse" class="input-field " data-error-contener="div-erreur-reponse${nb_reponse+1}">
                                <div class="message-erreur" id="div-erreur-reponse${nb_reponse+1}" style="display: none;"> Vous devez proposer au moins un choix.</div>
                            </div>
                            <div class="wrap-mark-question">
                                <input type="number" min='0' name="note[]" value='0' class="note-reponse">
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

    function addQuestion(element) {
        $(".contener-add-question").append(element);
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

    $(document).on('click', '.remove-question', function() {
        let idform= $(this).data('form');
        alert(idform)
       $("#"+idform).remove();
    });

    $(document).on('click', '.add-question', function() {  // Fix class name
        var nb_question = $(".wrapper-question form").length;
        var item_question=`
         <form action="" class="form-sondage" id="form-question${nb_question+1}">
                            <div class="question-container">
                                <div class="question-header">
                                    <span class="question-number">Q${nb_question+1}</span>
                                    <input type="text" required="" name="question[]" class=" question-title" placeholder="Saisir une question">
                                    <select name="type_question[]" class="question-type">
                                        <option value="multiple">Choix multiple</option>
                                        <option value="case-cocher">Case à cocher</option>
                                        <option value="etoile">Evaluation par étoile</option>
                                        <option value="liste">Liste déroulante</option>
                                        <option value="date">Date et heure</option>
                                    </select>
                                </div>
                                
                        
                                <div class="choices">
                                    <div class="wrap-form-item">
                                        <div class="form-item">
                                            <input type="checkbox" class="checkbox-choise" disabled>
                                            <input type="text" required="" name="reponse[]" id="reponse1" placeholder="Saisissez un choix de réponse" class=" input-field mandatory" data-error-contener="div-erreur-reponse">
                                            <div class="message-erreur" id="div-erreur-reponse1" style="display: none;"> Vous devez proposer au moins un choix.</div>
                                        </div>
                                        <div class="wrap-mark-question">
                                            <input type="number" min='0' name="note[]" value='0' class="note-reponse">
                                        </div>
                                    </div>
                                
                                </div>

                                <div class="choices">
                                    <div class="wrap-form-item">
                                        <div class="form-item">
                                            <input type="checkbox" class="checkbox-choise" disabled>
                                            <input type="text" required="" name="reponse[]"  placeholder="Saisissez un choix de réponse" class=" input-field " data-error-contener="div-erreur-reponse">
                                            <div class="message-erreur" id="div-erreur-reponse2" style="display: none;"> Vous devez proposer au moins un choix.</div>
                                        </div>
                                        <div class="wrap-mark-question">
                                            <input type="number" min='0' name="note[]" value='0' class="note-reponse">
                                        </div>
                                        <div class="wrap-content-add-item">
                                            <span class="add-bloc" ><i class="fa fa-plus"></i></span>
                                        </div>
                                        
                                    </div>
                                
                                </div>
                                <div class="wrap-contener-add-block"></div>
                                
                        
                                <div class="options">
                
                                    <label>
                                        <input type="checkbox" name="reponse[]" value="autre">
                                        Ajouter une option de réponse "Autre" ou un champ de commentaire
                                    </label>
                                    <label>
                                        <input type="checkbox" name="reponse[]" value="aucun">
                                        Ajouter une option de réponse "Aucun des éléments ci-dessus"
                                    </label>
                                </div>
                        
                                <div class="action-buttons">
                                   
                                    <div class="right-action-btn">
                                        <button type="button" data-form="form-question${nb_question+1}" class="remove-question btn red small"> <i class="fa-solid fa-xmark"></i> Annuler</button>
                                        <button type="submit" data-form="form-question${nb_question+1}" class="btn green small"> <i class="fas fa-share"></i> Enregistrer</button>

                                    </div>
                                </div>
                            </div>
                        </form>`;
        addQuestion(item_question);

    });

   
});

       
