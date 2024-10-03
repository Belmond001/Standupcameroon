<?php $page_active='aide';?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="">
    <meta http-equiv="Content-Type" content="text/html;" charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
     <link rel="icon" type="image/x-icon" href="images/icons/favicon.jpg">
    <title>Nous contacter - Standupcameroon : Site Officiel</title>

    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="keywords" content="">
    <meta name="description" content="" />
    <meta name="image" content="" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="noarchive" />

    <!-- CSS styles -->
    <link rel="stylesheet" type="text/css" href="css/header/header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/contact/contact.css">


    <!-- CSS styles -->
    <link rel="stylesheet" type="text/css" href="css/header/responsive-header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/contact/responsive-contact.css">
    <link rel="stylesheet" type="text/css" href="css/interne.css">
    <link rel="stylesheet" type="text/css" href="css/responsive-interne.css">
    <link rel="stylesheet" type="text/css" href="css/index/responsive-index.css">


    <script src="js/phpjs.js"></script>
    <script src="js/app-mesfonctions.js"></script>
    <script src="js/app.js"></script>

    <!-- JS files -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"></script>
</head>

<body>

    <?php include 'includes/header.php';?>
  
    <!-- Banniere interne -->
    <section class="biography-wrapper">
        <div class="container">
            <div class="wrap-biography">

                <div class="content-text-center">
                    <h3 class="title-banner-center detail-tit aos-init aos-animate" data-aos="fade-down" data-aos-delay="100" data-aos-duration="3000">Nous contacter</h3>
                    <ol class="breadcrumblist aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000">
                        <li><a href="./">Accueil</a></li> /
                        <li><a href="apropos.html">Contact</a></li>
                        
                                                

                    </ol>
                </div>

            </div>
        </div>
    </section>
     <!-- Fin -->
   
   

     <section class="wrapper-contact">
        <div class="container">
            <div class="wrap-contact">
                
                <div class="item-contact right">
                    <div class="wrap-item-contact">
                        <form action="notification-contact.php">
                            <h2 class="main-tilte">Nous écrire</h2>
                            <div class="half-input">
                                <div class="input-field">
                                    <input type="text" placeholder="Votre Nom">
                                    <span class="input-icon"><i class="far fa-user"></i></span>
                                </div>
                                <div class="input-field">
                                    <input type="text" placeholder="Votre Prénom">
                                    <span class="input-icon"><i class="far fa-user"></i></span>
                                </div>
                            </div>
                            <div class="half-input">
                                <div class="input-field">
                                    <input type="text" placeholder="Votre Téléphone">
                                    <span class="input-icon"><i class="fab fa-whatsapp"></i></span>
                                </div>
                                <div class="input-field">
                                    <input type="email" placeholder="Votre adresse E-mail">
                                    <span class="input-icon"><i class="far fa-envelope-open"></i></span>
                                </div>
                            </div>
                            <div class="input-field">
                                <input type="text" placeholder="Object de votre Message">
                                <span class="input-icon"><i class="far fa-edit"></i></span>
                            </div>
                            <div class="textarea-field">
                                <textarea placeholder="Votre Message..."></textarea>
                                <span class="input-icon"><i class="far fa-comment-dots"></i></span>
                            </div>
                            <button class="btn">ENVOYER VOTRE MESSAGE</button>

                        </form>
                    </div>
                </div>
                <div class="item-contact left">
                    <h2 class="main-title">Informations de Contact</h2>
                    <div class="contact-box">
                        <div class="item-contact-box">
                            <div class="wrap-item-contact-box">
                                <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                                <div class="contact-details">
                                    <h3 class="contact-details-title">Notre Adresse</h3>
                                    <p>6391 Logpom Douala, <br> Camerooun</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-contact-box">
                            <div class="wrap-item-contact-box">
                                <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                                <div class="contact-details">
                                    <h3 class="contact-details-title">Téléphone</h3>
                                    <p>+237 610 10 10 10 <br> +237 612 12 12 12</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-contact-box">
                            <div class="wrap-item-contact-box">
                                <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                                <div class="contact-details">
                                    <h3 class="contact-details-title">Adresse Email</h3>
                                    <p>info@gmail.com <br> logpom@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="secondary-title">Nos Réseaux sociaux</h3>
                    <p class="text">Pour toujours être informer de toute les actualités veillez-vous abonner sur nos differentes page.</p>
                    <div class="social-icon-box">
                        <a class="social-icon" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a class="social-icon" href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a class="social-icon" href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a class="social-icon" href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <?php include 'includes/footer.php';?>

 


</body>
</html>
