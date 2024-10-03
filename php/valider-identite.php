<?php $page_active='';?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="">
    <meta http-equiv="Content-Type" content="text/html;" charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
     <link rel="icon" type="image/x-icon" href="images/icons/favicon.jpg">
    <title>Validation identité - Standupcameroon : Site Officiel</title>

    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="keywords" content="">
    <meta name="description" content="" />
    <meta name="image" content="" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="noarchive" />

    <!-- CSS styles -->
    <link rel="stylesheet" type="text/css" href="css/header/header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/identification/valider-identite.css">


    <!-- CSS styles -->
    <link rel="stylesheet" type="text/css" href="css/header/responsive-header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/interne.css">
    <link rel="stylesheet" type="text/css" href="css/responsive-interne.css">
    <link rel="stylesheet" type="text/css" href="css/index/responsive-index.css">
    <link rel="stylesheet" type="text/css" href="css/identification/responsive-validation-identite.css">


    <script src="js/app-mesfonctions.js"></script>
    <script src="js/app.js"></script>

    <!-- JS files -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'></script>
</head>

<body>

    <?php include 'includes/header.php';?>

  
    <!-- Banniere interne -->
    <section class="biography-wrapper">
        <div class="container">
            <div class="wrap-biography">

                <div class="content-text-center">
                    <h3 class="title-banner-center detail-tit aos-init aos-animate" data-aos="fade-down" data-aos-delay="100" data-aos-duration="3000">Validation identité</h3>
                    <ol class="breadcrumblist aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000">
                        <li><a href="./">Accueil</a></li> /
                        <li><a href="#">Je participe</a></li>
                        
                                                

                    </ol>
                </div>

            </div>
        </div>
    </section>
     <!-- Fin -->
   
    <div class="wrapper-validation-identite">
        <div class="container validation-identite">
            <div class="wrap-validation-identite">
                <div class="left-content-validation-identite">
                    <div class="section-title"> 
                        <span class="sub-title ">INFORMATION</span>
                        <h2 class="title-bloc">Qu'est-ce que vous devez savoir?</h2>
                        
                    </div>
                    
                    <div class="content-mission-vision">
                        <div class="item-left-faq">
                            <div class="item-left-faq__icon"><img src="images/icons/icon1.png"></div>
                            <h5 class="item-left-faq__title">Délai de traitement</h5>
                            <p class="item-left-faq__text">
                                Chers utilisateurs, le processus de vérification et de validation de votre identité sera effectué sous 24 heures. Une fois complété, vous recevrez une confirmation par SMS ou par e-mail.
                            </p>
                        </div>
                        <div class="item-left-faq">
                            <div class="item-left-faq__icon"><img src="images/icons/icon1.png"></div>
                            <h5 class="item-left-faq__title">Sécurité des données </h5>
                            <p class="item-left-faq__text">
                                Vos données sont traitées avec la plus stricte confidentialité et protégées par des technologies avancées. Elles ne seront jamais partagées sans votre consentement.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="right-validation-identite">
                    <form class="formulaire-validation-identite" id="form-valider-identite" enctype="multipart/form-data">
                        <div class="bloc-bon-savoir">
                            <div class="tile-bloc-bon-savoir">Bon à savoir</div>
                            <p>Inscription incomplète. Veuillez compléter les informations ci-dessous, en vous assurant qu'elles correspondent exactement à celles de votre pièce d'identité. Ces données seront vérifiées et validées.
                               <strong>En cas de non-conformité, vous ne serez pas autorisé à voter.</strong>
                            </p>
                        </div>
                        <div class="wrap-formulaire-projet">
                  
                            <div class="bloc-formulaire">
                                <div class="titre-bloc-formulaire"><h2  >Pièce d'identité </h2></div>

                                <div class=" field_double">

                                    <div class="field_input middle">
                                        <div class="element_field">
                                            <label for="type-piece-identite" class="label_field">Type de pièce d'identité <span class="requiere">*</span></label>
                                            <select name="type-piece-identite" class="class_select mandatory" id="type-piece-identite" data-error-contener="div-erreur-type-piece-identite">
                                            <option value="" selected>Sélectionnez</option>
                                            <option  value="cni" >CNI (carte Nationale d'Identité)</option>
                                            <option  value="passport">Passeport</option>
                                            <option  value="permis">Permis de conduire</option>
                                            </select>
                                            <div class="message-erreur" id="div-erreur-type-piece-identite" style="display: none;">Veuillez indiquer</div>
                                        </div>
                                    </div>
                                    <div class="field_input middle">
                                        <div class="element_field">
                                            <label for="numero_piece" class="label_field">Numéro de la pièce d'identité<span class="requiere">*</span></label>
                                            <input type="text" name="numero_piece" id="numero_piece" class="class_input mandatory" data-error-contener="div-erreur-numero_piece" onkeyup="Verif_saisie(event, 'numero_piece', 'btn-valider-identite')" >
                                            <div class="message-erreur" id="div-erreur-numero_piece" style="display: none;">Veuillez indiquer</div>
                                        </div>
                                    </div>
                                </div>

                                <div class=" field_double ">

                                    <div class="field_input three">

                                        <div class="element_field">
                                            <label for="" class="label_field">Date de délivrance <span class="requiere">*</span></label>
                                            <input type="date" name="date_delivrance"  id="date_delivrance" class="class_input mandatory" data-error-contener="div-erreur-date_delivrance" onkeyup="Verif_saisie(event, 'date_delivrance', 'btn-valider-identite')" >

                                            <div class="message-erreur" id="div-erreur-date_delivrance" style="display: none;">Veuillez indiquer une date valide</div>
                                        </div>

                                    </div>

                                    <div class="field_input three">
                                        <div class="element_field">
                                            <label for="lieu_delivrance" class="label_field">Lieu de délivrance <span class="requiere">*</span></label>
                                            <input type="text" name="lieu_delivrance" id="lieu_delivrance" class="class_input mandatory" data-error-contener="div-erreur-lieu_delivrance" onkeyup="Verif_saisie(event, 'lieu_delivrance', 'btn-valider-identite')">
                                            <div class="message-erreur" id="div-erreur-lieu_delivrance" style="display: none;">Veuillez renseigner</div>
                                        </div>
                                    </div>
                                    <div class="field_input three" id="display-date-expiration">

                                        <div class="element_field">
                                            <label for="" class="label_field">Date d'expiration </label>
                                            <input type="date" name="date_expiration" id="date_expiration" class="class_input" data-error-contener="div-erreur-date_expiration" onkeyup="Verif_saisie(event, 'date_expiration', 'btn-valider-identite')">

                                            <div class="message-erreur" id="div-erreur-date_expiration" style="display: none;">Veuillez indiquer une date valide</div>
                                        </div>

                                    </div>

                                </div>
                                <div class="contener-generale">

                                </div>

                            </div>




                            <div class="space_btn_submit">
                               
                                <button type="button" class="submit secondary-btn btn-style-two" id="btn-valider-identite">
                                    Soumettre<span class="fa-solid fa-reply-all"></span>
                                </button>
                                <input type="hidden" name="token" id="token" value="">
                                <input type="hidden" name="traitement" id="traitement" value="valider-identite">
                        
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <!--  -->

    
    <div class="contener-date-expiration" style="display:none;">
        <div class="element_field">
            <label for="" class="label_field">Date d'expiration <span class="requiere">*</span></label>
            <input type="date" name="date_expiration" id="date_expiration" class="class_input mandatory" data-error-contener="div-erreur-date_expiration" onkeyup="Verif_saisie(event, 'date_expiration', 'btn-valider-identite')">

            <div class="message-erreur" id="div-erreur-date_expiration" style="display: none;">Veuillez indiquer une date valide</div>
        </div>
    </div>                                                  


    <div class="conteneur-cni" style="display:none;">

        <div class="field_input full_line" >
            <div class="element_field">
                <label for="" class="label_field">Photo CNI recto (.png,.jpg,.jpeg,.pdf) <span class="requiere">*</span></label>
                <input type="file" name="cni_recto" id="cni_recto" class="class_input " data-error-contener="div-erreur-cni_recto" onkeyup="Verif_saisie(event, 'cni_recto', 'btn-valider-identite')" >
                <div class="message-erreur" id="div-erreur-cni_recto" style="display: none;">Veuillez renseigner</div>
            </div>
        </div>
        <div class="field_input full_line " >
            <div class="element_field">
                <label for="" class="label_field">Photo CNI verso (.png,.jpg,.jpeg,.pdf) <span class="requiere">*</span></label>
                <input type="file" name="cni_verso" id="cni_verso" class="class_input " data-error-contener="div-erreur-cni_verso" onkeyup="Verif_saisie(event, 'cni_verso', 'btn-valider-identite')" >
                <div class="message-erreur" id="div-erreur-cni_verso" style="display: none;">Veuillez renseigner</div>
            </div>
        </div>
    </div>

    <div class="conteneur-permis" style="display:none;">

        <div class="field_input full_line" >
            <div class="element_field">
                <label for="" class="label_field">Photo Permis recto (.png,.jpg,.jpeg,.pdf) <span class="requiere">*</span></label>
                <input type="file" name="permis_recto" id="permis_recto" class="class_input " data-error-contener="div-erreur-permis_recto" onkeyup="Verif_saisie(event, 'permis_recto', 'btn-valider-identite')" >
                <div class="message-erreur" id="div-erreur-permis_recto" style="display: none;">Veuillez renseigner</div>
            </div>
        </div>
        <div class="field_input full_line " >
            <div class="element_field">
                <label for="" class="label_field">Photo Permis verso (.png,.jpg,.jpeg,.pdf) <span class="requiere">*</span></label>
                <input type="file" name="permis_verso" id="permis_verso" class="class_input " data-error-contener="div-erreur-permis_verso" onkeyup="Verif_saisie(event, 'permis_verso', 'btn-valider-identite')" >
                <div class="message-erreur" id="div-erreur-permis_verso" style="display: none;">Veuillez renseigner</div>
            </div>
        </div>
    </div>

    <div class="conteneur-passport" style="display:none">
        <div class="field_input full_line " >
            <div class="element_field">
                <label for="" class="label_field">photo Passport (.png,.jpg,.jpeg,.pdf) <span class="requiere">*</span></label>
                <input type="file" name="passport" id="passport" class="class_input" data-error-contener="div-erreur-passport" onkeyup="Verif_saisie(event, 'passport', 'btn-valider-identite')">
                <div class="message-erreur" id="div-erreur-passport" style="display: none;">Veuillez renseigner</div>
            </div>
        </div>
    </div>

    <?php include 'includes/footer.php';?>

    <script src="js/valider-identite.js"></script>
    <script src="js/faq.js"></script>


</body>
</html>
