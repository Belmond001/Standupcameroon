

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
    <link rel="stylesheet" type="text/css" href="css/galerie/galerie-photos.css">


    <!-- CSS styles -->
    <link rel="stylesheet" type="text/css" href="css/header/responsive-header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/interne.css">
    <link rel="stylesheet" type="text/css" href="css/responsive-interne.css">
    <link rel="stylesheet" type="text/css" href="css/galerie/responsive-galerie-photo.css">
    <link rel="stylesheet" type="text/css" href="css/index/responsive-index.css">

    <!-- Magnific popup -->
    <link href="css/magnific-popup.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/modal-photo.min.css">
    <!-- JS files -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'></script>
    
    <script src="js/phpjs.js"></script>
    <script src="js/app-mesfonctions.js"></script>
    <script src="js/app.js"></script>


    <script src="js/jquery-modal-photo.js" type="text/javascript"></script>
</head>

<body>

    <?php include 'includes/header.php';?>

  
    <!-- Banniere interne -->
    <section class="biography-wrapper">
        <div class="container">
            <div class="wrap-biography">

                <div class="content-text-center">
                    <h3 class="title-banner-center ">Galerie photos</h3>
                    <ol class="breadcrumblist aos-init aos-animate">
                        <li><a href="./">Accueil</a></li> /
                        <li>Multim&eacute;dia</li> /
                        <li>Galerie photos</li>
                    </ol>
                </div>

            </div>
        </div>
    </section>
     <!-- Fin -->
   

     <div class="wrapper-etudes-de-cas">
        <div class="container">
            <!-- RECHERCHER -->

            <div class="wrapper-form">
                <form id="form-recherche" onsubmit="return false()">
                    <div class="form">

                        <div class="input-form mot-cles">
                            <div class="wrap-input">
                                <span>
                                    <i class="fas fa-search"></i>
                                </span>
                                <input type="text" id="libelle-search" name="libelle-search" placeholder="Mot clé">
                            </div>

                        </div>

                        <div class="input-form types">
                            <div class="wrap-select">
                                <span><i class="far fa-calendar"></i> </span>
                                <input type="date" name="date-search" id="date-search">
                            </div>
                        </div>

                        <div class="input-form industry">

                            <div class="wrap-select">
                                <span>
                                    <i class="fa fa-list"></i>
                                </span>
                                <select id="categorie-search" name="categorie-search">
                                    <option value="">catégories</option>
                                                                           
                                </select>
                                <span><i class="fas fa-angle-left"></i></span>
                            </div>
                            
                        </div>

                        <div class="btn btn-primary">
                                <button type="button" onclick="">Rechercher</button>
                        </div>
                     

                    </div>
                </form>
            </div>
            <div id="liste-photo">
                <div class="wrap-etudes-de-cas row-container">

                                        
                    <div class="wrapper-parent-etudes-de-cas js-photo-button" id='1' data-photo-id='B3wkEGXJ1SM'>
                        <div class="parent-etudes-de-cas">

                            <div class="item-top-right-galerie">
                                <div class="wrap-item-top-right-photo">
                                    <div class="img-item-right-photo">
                                       <img src="images/galerie/galerie2.jpg">
                                    </div>
                                <div class="btn-photo-item-right-photo">
                                    <i class="fas fa-plus"></i>
                                </div>
                            
                                <div class="title-photo-item-right-photo " >
                                    <h3>Opinions des citoyens sur la corruption et les mesures nécessaires pour y mettre fin.</h3>
                                    <span> <i class="fas fa-clock"></i>Bamenda </span>
                                </div>
                                 <div class="category-item-right-photo">
                                    Corruption
                                </div>
                               
                                </div>
                            </div>
                        </div>
                       
                    </div>

                    <div class="wrapper-parent-etudes-de-cas js-photo-button" id='2' data-photo-id='IQxp4Iv1Owc' >
                        <div class="parent-etudes-de-cas">
                            <div class="item-top-right-galerie ">
                                <div class="wrap-item-top-right-photo">
                                    <div class="img-item-right-photo">
                                        <img src="images/galerie/galerie3.jpg">
                                    </div>
                                <div class="btn-photo-item-right-photo">
                                    <i class="fas fa-plus"></i>
                                </div>
                            
                                <div class="title-photo-item-right-photo">
                                    <h3>Sondage vidéo sur l'importance de l'innovation technologique selon les citoyens.</h3>
                                    <span> <i class="fas fa-clock"></i>Maroua</span>
                                </div>
                                 <div class="category-item-right-photo">
                                     Innovation Technologique
                                </div>
                               
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    
                </div>

                <div class="wrapper-pagination">
                    <div class="pagination">

                        <div class="wrapper-pagination-left">
                            <span class="nb-result">1</span> résulats - Page <span class="number-page">1</span> sur <span class="total-page">1</span>
                        </div>

                        <div class="wrapper-pagination-right">
                                                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <?php include 'includes/footer.php';?>

<script>
     $(".js-photo-button").modalVideo({
            youtube:{
                controls:0,
                nocookie: true,
                autoplay:1
            }

        });
</script>


</body>
</html>
