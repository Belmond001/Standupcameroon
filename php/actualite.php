
<?php $page_active='actualite';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="">
    <meta http-equiv="Content-Type" content="text/html;" charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
     <link rel="icon" type="image/x-icon" href="images/icons/favicon.jpg">
    <title>Les actualités - Standupcameroon : Site Officiel</title>

    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="keywords" content="">
    <meta name="description" content="" />
    <meta name="image" content="" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="noarchive" />

    <!-- CSS styles -->
    <link rel="stylesheet" type="text/css" href="css/header/header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/actualite/actualite.css">


    <!-- CSS styles -->
    <link rel="stylesheet" type="text/css" href="css/header/responsive-header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/interne.css">
    <link rel="stylesheet" type="text/css" href="css/responsive-interne.css">
    <link rel="stylesheet" type="text/css" href="css/index/responsive-index.css">
    <link rel="stylesheet" type="text/css" href="css/actualite/responsive-actualite.css">


    <script src="js/app-mesfonctions.js"></script>
    <script src="js/app.js"></script>

    <!-- JS files -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'></script>
</head>

<body>

    <?php include 'includes/header.php';?>
  
    <!-- Banniere interne -->
    <section class="biography-wrapper">
        <div class="container">
            <div class="wrap-biography">

                <div class="content-text-center">
                    <h3 class="title-banner-center detail-tit aos-init aos-animate" data-aos="fade-down" data-aos-delay="100" data-aos-duration="3000">Actualités</h3>
                    <ol class="breadcrumblist aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000">
                        <li><a href="./">Accueil</a></li> /
                        <li><a href="actualite.html">Actualités</a></li>
                        
                                                

                    </ol>
                </div>

            </div>
        </div>
    </section>
     <!-- Fin -->
   

     <div class="wrapper-page-interne">
        <div class="container">
            <div class="wrap-page-interne row-container">
                
                <!-- left aside -->
                <aside class="aside_left" id="liste-actualite">
                    <div class="wrap-aside-left">
                        <article class="item-actualite formation">
                            <a class="wrap-item-actualite" href="#">
                                <div class="top-item-actualite">
                                    <div class="image-actualite">
                                        <img src="images/actu/actu2.jpg" alt="#">
                                    </div>
                                    <div class="date-actualite"><h3>03<span> Oct. 24</span></h3></div>
                                </div>
                                <div class="content-actualite row-container">
                                    <div class="categorie-actu"><i class="fas fa-star"></i>Emploi</div>
                                    <div class="titre-actu">
                                        <h3>La Jeunesse Exige des Opportunités d'Emploi</h3>
                                    </div>
                                    <p>65% des jeunes Camerounais considèrent le chômage comme le principal problème du pays. Ils appellent à des politiques actives pour favoriser l'emploi des jeunes et soutenir les initiatives entrepreneuriales.
                                </p>
                                    
                                </div>
                            </a>
                        </article>
                        <article class="item-actualite formation">
                                <a class="wrap-item-actualite" href="#">
                                    <div class="top-item-actualite">
                                        <div class="image-actualite">
                                            <img src="images/actu/actu3.jpg" alt="#">
                                        </div>
                                        <div class="date-actualite"><h3>03<span> Oct. 24</span></h3></div>
                                    </div>
                                    <div class="content-actualite row-container">
                                        <div class="categorie-actu"><i class="fas fa-star"></i>Corruption</div>
                                        <div class="titre-actu">
                                            <h3>La Lutte contre la Corruption : Une Priorité pour les citoyens</h3>
                                        </div>
                                        <p>Un sondage révèle que 85% des Camerounais veulent des mesures plus strictes pour combattre la corruption. Les citoyens soutiennent des initiatives telles que la transparence financière et l'indépendance du système judiciaire.
                                    </p>
                                        
                                    </div>
                                </a>
                        </article>
                        <article class="item-actualite formation">
                                <a class="wrap-item-actualite" href="#">
                                    <div class="top-item-actualite">
                                        <div class="image-actualite">
                                            <img src="images/actu/actu1.jpg" alt="#">
                                        </div>
                                        <div class="date-actualite"><h3>03<span> Oct. 23</span></h3></div>
                                    </div>
                                    <div class="content-actualite row-container">
                                        <div class="categorie-actu"><i class="fas fa-star"></i>Participation Citoyenne</div>
                                        <div class="titre-actu">
                                            <h3>La Participation Citoyenne : Un Élan pour la Démocratie Participative au Cameroun</h3>
                                        </div>
                                        <p>Un sondage montre que 78% des Camerounais souhaitent plus de plateformes pour exprimer leurs opinions et participer aux processus décisionnels. Ils voient en cela un moyen de renforcer la démocratie participative et de mieux représenter leurs intérêts.
                                    </p>
                                        
                                    </div>
                                </a>
                        </article>  
                    </div>
                </aside>
                <aside class="aside_right">
                    <div id="bloc_aside_page">

                        <div class="widget-aside widget_search">
                            <div class="widget-content">

                                <h2 class="widget-title">Rechercher</h2>
                                <form role="search" id="form-recherche" class="search-form" action="">
                                    <div class="searchform-wrap">
                                        <input type="search" name="libelle-search" id="libelle-search"  placeholder="Rechercher ici......" name="s" class="search-field">
                                        <button type="button" class="search-submit" onClick="Rechercher('dHJhaXRlbWVudF9hamF4L21haW4ucGhwP3RyYWl0ZW1lbnQ9cmVjaGVyY2hlci1hY3R1YWxpdGU=','form-recherche','liste-actualite','loader')"><i class="fa fa-search"></i></button>
                                        <input type="hidden" name="token" id="token" value="2fb9af12e7b65a2d3491b7510bc6f5a7">
                                        <input type="hidden" name="form" id="form" value="form-recherche">
                                        <input type="hidden" name="conteneur-resultat" id="conteneur-resultat" value="liste-actualite">
                                        <input type="hidden" name="annee-search" id="annee-search" value="">
                                        <input type="hidden" name="mois-search" id="mois-search" value="">
                                        <input type="hidden" name="categorie-search" id="categorie-search" value="">

                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="widget-aside widget_categories">
                            <div class="widget-content">

                                <h2 class="widget-title">Catégories</h2>
                                <ul class="list-categories">

                                        <li class="item-categorie active">
                                            <a href="actualites/par-categorie/actualit-s/5/">Actualités</a>
                                            <span>2</span>
                                        </li>

                                    
                                </ul>

                            </div>
                        </div>

                        <div class="widget-aside widget_archive">
                            <div class="widget-content">

                                <h2 class="widget-title">Publications récentes </h2>
                                <ul class="list-categories">
                                    <a href="" class="item-recent-post">
                                        <div class="content-recent-post">
                                            <div class="image-publication">
                                                <img src="images/actu/actu2.jpg" alt="#">
                                            </div>
                                            <div class="other-content-post">
                                                <div class="date-publication"><h3>03<span> Oct. 24</span></h3></div>
                                                <p class="titre-recent-post">La Jeunesse Exige des Opportunités d'Emploi</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="" class="item-recent-post">
                                        <div class="content-recent-post">
                                            <div class="image-publication">
                                                <img src="images/actu/actu3.jpg" alt="#">
                                            </div>
                                            <div class="other-content-post">
                                                <div class="date-publication"><h3>03<span> Oct. 24</span></h3></div>
                                                <p class="titre-recent-post">La Lutte contre la Corruption : Une Priorité pour les citoyens</p>
                                            </div>
                                        </div>
                                    </a>
                                    
                                </ul>

                            </div>
                        </div>

                    </div>
                </aside>

                <div class="wrapper-pagination">
                    <div class="pagination">

                        <div class="wrapper-pagination-left">
                            <span class="nb-result">02</span> résulats - Page <span class="number-page">1</span> sur <span class="total-page">1</span>
                        </div>

                        <div class="wrapper-pagination-right">
                                <a href="#" class="wrap-pagination actif">1</a>
                                <a href="#" class="wrap-pagination ">2</a>
                                <a href="#" class="wrap-pagination ">3</a>
                                <span class="void-pagination">...</span>
                                <a href="#"><i class="fa fa-angle-right"></i> </a>
                                <a href="#" class="wrap-pagination">Fin</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>


    <?php include 'includes/footer.php';?>


</body>
</html>
