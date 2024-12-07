<?php 
 session_start();
//   if ($_SERVER['HTTPS'] != "on") {
//       $url = "https://". $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
//       header("Location: $url");
//       exit;
//   }

//   $token= md5(uniqid(rand(), true));
//   if(!isset($_SESSION['token'])) $_SESSION['token']=$token;

//   include("dashboard/connexionbd.php");
//   include("dashboard/mesfonctions.php");
//   $tab_mois=array("","Jan.","F&eacute;v.","Mars","Avril","Mai","Juin","Juil.","Ao&ucirc;t","Sept.","Oct.","Nov.","D&eacute;c.");

//   $page = "detail-projet";
  
//   $date_today=date("Y/m/d");

//   $base=Getbaseurl();
//   if(isset($_SESSION["login_membre"]))$lbeneficiaire=getbeneficiaireInformationsByemail($bdd,$_SESSION["login_membre"]);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<?php //echo $base ?>">    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Detail-projet:PNUD</title>
    <link rel="icon" type="image/x-icon" href="images/icons/favicon.png">

    <!-- css styles -->
    <link rel="stylesheet" type="text/css" href="css/header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/interne.css">
    <link rel="stylesheet" type="text/css" href="css/detail-sondage.css">
    <link href="css/notification.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css">


    <link rel="stylesheet" href="css/modal-video.min.css">

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">

    <!-- owlcarousel -->
    <link rel="stylesheet" href="css/owl.carousel.css">

    <!-- AOS Animate -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    
    <!-- responsive styles -->
    <link rel="stylesheet" type="text/css" href="css/responsive-header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/responsive-interne.css">
    <link rel="stylesheet" type="text/css" href="css/responsive-detail-projet.css">
   
        <!-- OWL Carousel  -->
        <link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
    <!-- Slick slider -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    

    <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js"></script>
    <script src="js/phpjs.js"></script>
    <script src="js/app-mesfonctions.js"></script>
    <script src="js/app.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script src="js/chiffres-cles.js"></script>
   <script src="js/index.js"></script>
   <script src="js/footer.js"></script>


</head>
<body>

    <div class="page-wrapper">

        <?php include 'includes/header.php';?>

        
        <section class="wrapper-banniere-interne">
            <div class="banniere-interne ">
                <div class="wrap-banniere-interne ">
                    <img class="img-fluid" src="images/banniere/banniere-interne.jpg" alt="...">
                </div>
            </div>
        </section> 

        <div class="wrapper-page-wrapper-detail">
            <div class="page-wrapper-detail container">
                <div class="wrap-page-wrapper-detail row-container">
                    <aside class="social-media">
                        <ul class="social-icons">
                            <a class="tw" href="javascript:void()" id="btn-tw-share"><i class="fab fa-twitter"></i></a>
                            <a class="fb" href="javascript:void()" id="btn-fb-share"><i class="fab fa-facebook-f"></i></a>
                            <a class="in" href="javascript:void()" id="btn-in-share"><i class="fab fa-linkedin-in"></i></a>
                            <a class="wh" href="javascript:void()" id="btn-wh-share"><i class="fab fa-whatsapp"></i></a>
                        </ul>
                    </aside>
                    
                    <div class="left-page-wrapper-detail">
                        <div class="wrap-left-page-wrapper-detail">

                            <div class="element-propriety on-banner">
                                <div class="titre-element-propriety">
                                    <h4>Éradiquer les insectes ravageurs dans le secteur horticole</h4>
                                </div>
                                <div class="content-element-propriety">
                                    <div class="wrap-content-element-propriety row-container">
                                        
                                        <p>Maîtriser les pertes dues à l’infestation par la mouche des fruits et à améliorer les revenus des producteurs de fruits et légumes.</p>

                                    </div>
                                </div>
                            </div>

                           
                            <div class="element-wrap-left-projet row-container">
                                <div class="item-wrap-left-projet">
                                    <div class="icon-wrap-left-projet">
                                        <i class="fa-solid fa-rectangle-list"></i>
                                    </div>
                                    <div class="info-wrap-left-projet">
                                        <div class="name">Thématique</div>
                                        <p class="value">Énergie </p>
                                    </div>
                                </div>
                                <div class="item-wrap-left-projet">
                                    <div class="icon-wrap-left-projet">
                                        <i class="fas fa-people-group"></i>
                                    </div>
                                    <div class="info-wrap-left-projet">
                                        <div class="name">Jeunes impactés</div>
                                        <p class="value">
                                            120           
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="item-wrap-left-projet">
                                    <div class="icon-wrap-left-projet">
                                       <i class="fas fa-person-dress"></i>
                                    </div>
                                    <div class="info-wrap-left-projet">
                                        <div class="name">Femmes impactés</div>
                                        <p class="value">30</p>
                                    </div>
                                </div>
                                
                            </div>

                            <!-- texte -->


                            <div class="item-bloc-left description-bloc">
                                <div class="wrap-item-bloc-left">
                                        
                                    <h2 class="entry-title"><i class="fas fa-align-left"></i>Description</h2>

                                    <div class="entry-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>

                                </div>
                            </div>

                            <div class="item-bloc-left description-bloc">
                                <div class="wrap-item-bloc-left">
                                        
                                    <h2 class="entry-title"><i class="fas fa-align-left"></i>Impact</h2>

                                    <div class="entry-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>

                                </div>
                            </div>

                            <div class="parent-bloc-attachrments">
                                <h3 class="entry-title">Documents joints</h3>
                                <div class="item-bloc-fichier-joint">
                                    <div  class="item-fichier-joint"><img src="images/icons/pdf.png">Dorem ispum dolor</div>
                                    <div  class="item-fichier-joint"><img src="images/icons/word.png">Dorem ispum dolor</div>
                                </div>
                            </div>


                            <!-- commentaire -->
                            <div class="bloc-content-form-comment">

                                <div class="btn-show-hide-comment-form primary-btn">Fermer <i class="fa-solid fa-angle-up"></i></div>
                        <!-- comment -->

                                <div class="element-propriety active" id="write-comment" >
                                        <div class="titre-element-propriety accordion">
                                            <h4 class="entry-title">Laisser un commentaire</h4>
                                        </div>
                                        <div class="content-element-propriety body-accordion" id="cmmenter-annonce">
                                            <form class="form-commentaire" id="form-evaluation-tour" onsubmit="return false;"  >

                                                <div class="wrap-content-element-propriety row-container">
                                                    
                                                        <div class="left-review-part">
                                                            <div class="wrap-left-review-part row-container">
                                                                <div class="item-left-review-part">
                                                                    <label>Innovation</label>
                                                                    <div class="rate-stars">
                                                                        <input type="radio" id="st5" name="correspond_caracteristique_annoncees" value="5" >
                                                                        <label for="st5"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" id="st4" name="correspond_caracteristique_annoncees" value="4">
                                                                        <label for="st4"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" id="st3" name="correspond_caracteristique_annoncees" value="3">
                                                                        <label for="st3"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" id="st2" name="correspond_caracteristique_annoncees" value="2">
                                                                        <label for="st2"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" id="st1" name="correspond_caracteristique_annoncees" value="1">
                                                                        <label for="st1"><i class="fa fa-star"></i></label>
                                                                    </div>
                                                                </div>
                                                                <div class="item-left-review-part">
                                                                    <label>Qualité du Produit ou Service</label>
                                                                    <div class="rate-stars">
                                                                        <input type="radio" name="qualite" id="vst5" value="5" >
                                                                        <label for="vst5"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="qualite" id="vst4" value="4">
                                                                        <label for="vst4"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="qualite" id="vst3" value="3">
                                                                        <label for="vst3"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" id="vst2" name="qualite" value="2">
                                                                        <label for="vst2"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" id="vst1" name="qualite" value="1">
                                                                        <label for="vst1"><i class="fa fa-star"></i></label>
                                                                    </div>
                                                                </div>
                                                                <div class="item-left-review-part">
                                                                    <label>Prix et Valeur</label>
                                                                    <div class="rate-stars">
                                                                        <input type="radio" name="prix" id="cst5" value="5" >
                                                                        <label for="cst5"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="prix" id="cst4" value="4">
                                                                        <label for="cst4"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="prix" id="cst3" value="3">
                                                                        <label for="cst3"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="prix" id="cst2" value="2">
                                                                        <label for="cst2"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="prix" id="cst1" value="1" required="">
                                                                        <label for="cst1"><i class="fa fa-star"></i></label>
                                                                    </div>
                                                                </div>
                                                                <div class="item-left-review-part">
                                                                    <label>Service et Expérience client</label>
                                                                    <div class="rate-stars">
                                                                        <input type="radio" name="packaging" id="lst5" value="5" >
                                                                        <label for="lst5"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="packaging" id="lst4" value="4">
                                                                        <label for="lst4"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="packaging" id="lst3" value="3">
                                                                        <label for="lst3"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="packaging" id="lst2" value="2">
                                                                        <label for="lst2"><i class="fa fa-star"></i></label>
                                                                        <input type="radio" name="packaging" id="lst1" value="1" required="">
                                                                        <label for="lst1"><i class="fa fa-star"></i></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="right-review-part">
                                                            <div class="avg-total-pilx">
                                                            <h4 class="high user_commnet_avg_rate" id="average-rate">0</h4>
                                                                <span>Moyenne de votre avis</span>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="wrap-content-element-propriety row-container">

                                                    <div class="ligne-form">
                                                        <div class="form-group two-items">
                                                            <input id="nom" class="form-control mandatory-avis"  name="nom" type="text" placeholder="Nom *" value="" aria-required="true" data-error-contener="div-erreur-name" onkeyup="Verif_saisie(event, 'nom', 'submit')" onchange="Verif_saisie(event, 'nom', 'submit')">
                                                            <div class="message-erreur" id="div-erreur-name" style="display: none;">Veuillez entrer votre nom</div>
                                                        </div>
                                                        <div class="form-group two-items">
                                                            <input id="email" name="email"  class="form-control mandatory-avis" type="email" placeholder="Email *" value="" aria-required="true" data-error-contener="div-erreur-email" onkeyup="Verif_saisie(event, 'email', 'submit')" onchange="Verif_saisie(event, 'email', 'submit')">
                                                            <div class="message-erreur" id="div-erreur-email" style="display: none;">Veuillez entrer votre email</div>
                                                        </div>
                                                    </div>
                                                    <div class="ligne-form">
                                                        <div class="form-group one-item">
                                                            <input id="titre" class="form-control mandatory-avis"  name="titre" type="text" placeholder="Titre *" value="" aria-required="true" data-error-contener="div-erreur-titre" onkeyup="Verif_saisie(event, 'titre', 'submit')" onchange="Verif_saisie(event, 'titre', 'submit')">
                                                            <div class="message-erreur" id="div-erreur-titre" style="display: none;">Veuillez entrer le titre</div>
                                                        </div>
                                                    </div>
                                                    <div class="ligne-form">
                                                        <div class="form-group one-item">
                                                            <textarea id="comment"  name="commentaire" class="form-control ht-80 mandatory-avis" placeholder="Messages *" aria-required="true" data-error-contener="div-erreur-comment" onkeyup="Verif_saisie(event, 'comment', 'submit')" onchange="Verif_saisie(event, 'comment', 'submit')"></textarea>
                                                            <div class="message-erreur" id="div-erreur-comment" style="display: none;">Veuillez saisir un commentaire</div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="ligne-form">
                                                        <div class="form-group review-submit-btn">
                                                            <input name="submit" type="submit" id="submit" class="btn btn-theme-light-2 rounded primary-btn" value="Envoyer mon commentaire">
                                                            <input type="hidden" name="token" id="token" value="" />
                                                            <input type="hidden" name="traitement" id="traitement-avis" value="enregistrer-avis-commentaire" />
                                
                                                            <input type="hidden" name="concerne" id="concerne" value="" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="right-page-wrapper-detail">
                        <div class="wrap-right-page-wrapper-detail">
                            
                            <div class="bloc-aside">
                                <div class="wrap-bloc-aside image-aside">
                                    
                                    <div class="image-panel-right js-video-button" data-video-id='8FqZZrbnwkM' >
                                        
                                         <div class="list-btn-activites">
                                            <div class="btn actualite-btn">
                                                <a href="#" class="btn-actualite-btn"><i class="fa fa-play"></i></a>
                                                <span class="nb-element-content video">0</span>
                                            </div>
                                            <div class="btn actualite-btn">
                                                <a href="#" class="btn-actualite-btn"><i class="fa fa-camera"></i></a>
                                                <span class="nb-element-content camera">0</span>
                                            </div>
                                                <div class="btn actualite-btn">
                                                <a href="#" class="btn-actualite-btn "><i class="fas fa-file"></i></a>
                                                <span class="nb-element-content documment">0</span>
                                            </div>
                                            
                                            
                                        </div>

                                        <img src="images/banniere/banniere-interne.jpg"> 
                                    </div>


                                    <div class="wrap-content-aside">
                                         <div class="element-propriety tutor-details">
                                            <div class="tutor-details-image">
                                                <div class="">
                                                    <img class="" alt="Tutor" src="images/tutor.jpeg"> 
                                                </div>
                                            </div>
                                            <div class="item-tutor-details">
                                                <h6>Promoteur/rice</h6>
                                                <a href="">Caroline ATANGANA - 30 ans</a> 
                                                <p>CEO  DIGITAL IMPACT</p>
                                                 <ul class="social-media-icons social-media-promoteur">
                                                         <a class="tw tooltip-color link_action link_edit" aria-label="site web" data-balloon-pos="up" href="javascript:void()" id="btn-web-share"><i class="fas fa-globe"></i></a> 
                                                        <a class="tw tooltip-color link_action link_edit" aria-label="Twitter" data-balloon-pos="up" href="javascript:void()" id="btn-tw-share"><i class="fab fa-x-twitter"></i></a>
                                                        <a class="fb tooltip-color link_action link_edit" aria-label="Facebook" data-balloon-pos="up" href="javascript:void()" id="btn-fb-share"><i class="fab fa-facebook-f"></i></a>
                                                        
                                                        <a class="wh tooltip-color link_action link_edit" aria-label="Youtube" data-balloon-pos="up" href="javascript:void()" id="btn-wh-share"><i class="fab fa-youtube"></i></a>
                                                    </ul>
                                            </div>
                                
                                        </div>
                                        <div class="detail-price-cours">
                                            
                                             <a href="" class="btn-enroll">Envoyer un message</a>
                                             <div class="btn-det-cours-actuel">
                                                <div class="item-btn-cours">
                                                    <div class="btn-wish">
                                                    <div class="background-white-color">Initiative soutenue par :
                                                    </div><p>La Banque d'Investissement et de Developpement pour les Femmes (BIDF)</p></div>
                                                    <ul class="social-media-icons">
                                                          <a class="tw tooltip-color link_action link_edit" aria-label="site web" data-balloon-pos="up" href="javascript:void()" id="btn-web-share"><i class="fas fa-globe"></i></a> 
                                                        <a class="tw tooltip-color link_action link_edit" aria-label="Twitter" data-balloon-pos="up" href="javascript:void()" id="btn-tw-share"><i class="fab fa-x-twitter"></i></a>
                                                        <a class="fb tooltip-color link_action link_edit" aria-label="Facebook" data-balloon-pos="up" href="javascript:void()" id="btn-fb-share"><i class="fab fa-facebook-f"></i></a>
                                                        
                                                        <a class="wh tooltip-color link_action link_edit" aria-label="Youtube" data-balloon-pos="up" href="javascript:void()" id="btn-wh-share"><i class="fab fa-youtube"></i></a>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <ul class="list-detail-cours">

                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                  <i class="fas fa-coins"></i>
                                                </div>
                                                <h6 class="">Montant octroyé :</h6>
                                                <span> 10 000 BIF</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                     <i class="fa-solid fa-table-list"></i>
                                                 </div>
                                                <h6 class="">Thématique </h6>
                                                <span>Énergie</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                     <i class="fa-solid fa-table-list"></i>                                       
                                                 </div>
                                                <h6 class="">Type de financement</h6>
                                                <span>Subvention</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                   <i class="fa-solid fa-calendar-days"></i>                                               
                                               </div>
                                                <h6 class="">Date </h6>
                                                <span>Juin 2024</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                   <i class="fa-solid fa-briefcase"></i>
                                                </div>
                                                <h6 class="">Emplois direct</h6>
                                                <span>10</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                   <i class="fa-solid fa-briefcase"></i>
                                                </div>
                                                <h6 class="">Emplois indirect</h6>
                                                <span>20</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                  <i class="fa-solid fa-location-dot"></i>
                                                </div>
                                                <h6 class="">Province </h6>
                                                <span>Rutana</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                   <i class="fa-solid fa-location-dot"></i>
                                                </div>
                                                <h6 class="">Commune </h6>
                                                <span>Rutana</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                </div>
                                                <h6 class="">Zone </h6>
                                                <span>Gitaba</span>
                                            </li>
                                            <li class="item-list-detail-cours">
                                                <div class="">
                                                   <i class="fa-solid fa-location-dot"></i>                                                </div>
                                                <h6 class="">Colline </h6>
                                                <span>Nyanzuki</span>
                                            </li>


                                        </ul>

                                    </div>

                                </div>
                            </div>   
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <?php include 'includes/footer-interne.php' ?>

    </div>

    <script src="js/jquery-modal-video.js" type="text/javascript"></script>
   
    <script type="text/javascript">
// show and hide comment

$(".btn-show-hide-comment-form").click(function(){
    $("#write-comment").toggleClass('active');
    if($("#write-comment").hasClass("active")){
        $(this).html("Fermer <i class=\"fa-solid fa-angle-up\"></i>"); 
    }else{               
        $(this).html("Ecrire un commentaire <i class=\"fa-solid fa-angle-down\"></i>");
    }

})

// show and hide content comment

$(".btn-event-description").click(function(){
    var content=$(this).data("content");
    $("#"+content).toggleClass('active');
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
        $(this).html("<span class=\"event-text\">Voir moins</span><i class=\"fa-solid fa-angle-up\"></i>"); 
    }else{
        $(this).html("<span class=\"event-text\">Voir plus</span><i class=\"fa-solid fa-angle-down\"></i>");
    }

})


    </script>
</body>
</html>

