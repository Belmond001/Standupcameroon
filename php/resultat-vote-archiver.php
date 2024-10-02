

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

      <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Statistiques :STANDUPCAMEROON</title>
    <link rel="icon" type="image/x-icon" href="images/icons/favicon.png">

    <!-- css styles -->
    <link rel="stylesheet" type="text/css" href="css/header/header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/interne.css">
    <link rel="stylesheet" type="text/css" href="css/resultat/resultat-vote.css">


    <!-- responsive styles -->
    <link rel="stylesheet" type="text/css" href="css/header/responsive-header-footer.css">
    <link rel="stylesheet" type="text/css" href="css/responsive-interne.css">
    <link rel="stylesheet" type="text/css" href="css/index/responsive-index.css">

    


    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://code.highcharts.com/modules/drilldown.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
     <!-- JS files -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'></script>

</head>
<body>

        <?php include 'includes/header.php';?>

        
        <section class="biography-wrapper">
            <div class="container">


                <div class="wrap-biography">
                
                    <div class="content-text-center">
                        <h3 class="title-banner-center detail-tit ">Les élections en chiffres : Analyse des résultats par candidat</h3>
                        <ol class="breadcrumblist " >
                            <li><a href="./">Accueil</a></li> &raquo;
                            <li>Les élections en chiffres : Analyse des résultats par candidat</li>
                        </ol>
                    </div>
                
                </div>
            </div>
        </section>

        <div  class="wrapper-sondage">
            <div class="sondage container">
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
                            <div class="input-form industry border-none">

                                <div class="wrap-select">
                                    <span>
                                        <i class="fa fa-list"></i>
                                    </span>
                                    <select id="type-election" name="categorie-search">
                                        <option value="">Type d'élections</option>
                                        <option value="">Présidentielles</option>
                                        <option value="">Législatives</option>
                                        <option value="">Municipales</option>
                                                                        
                                    </select>
                                    <span><i class="fas fa-angle-left"></i></span>
                                </div>
                                
                                
                            </div>
                            <!-- <div class="input-form types">
                                <div class="wrap-select">
                                    <span><i class="far fa-calendar"></i> </span>
                                    <input type="date" name="date-search" id="date-search">-<input type="date" name="date-search" id="date-search">
                                </div>
                            </div> -->
                        
                            <div class="input-form industry border-none">

                                <div class="wrap-select">
                                    <span>
                                        <i class="fa fa-list"></i>
                                    </span>
                                    <select id="categorie-search" name="categorie-search">
                                        <option value="">Ville</option>
                                                                        
                                    </select>
                                    <span><i class="fas fa-angle-left"></i></span>
                                </div>
                                
                                
                            </div>

                            <div class="btn btn-primary">
                                    <button type="button" onclick="Rechercher('dHJhaXRlbWVudF9hamF4L21haW4ucGhwP3RyYWl0ZW1lbnQ9cmVjaGVyY2hlci12aWRlbw==','form-recherche','liste-video','loader',InitVideo)">Rechercher</button>
                            </div>
                            <input type="hidden" name="token" id="token" value="739a921b6074442c6941a6e848bdee11">
                            <input type="hidden" name="form" id="form" value="form-recherche">
                            <input type="hidden" name="conteneur-resultat" id="conteneur-resultat" value="liste-video">

                        </div>
                    </form>
                </div>

                <div  class="wrap-sondage">

                    <div  class="item-graphe">
                        <figure class="highcharts-figure">
                            <div id="container1"></div>
                            <p class="highcharts-description">
                               Repartition des voix en fonction des candidats
                            </p>
                            <table id="datatable1" style="display:none;">
                                <thead>
                                    <th></th>
                                    <th> Repartition des voix en fonction des candidats</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Candidat A</th>
                                        <td>938899</td>
                                    </tr>
                                    <tr>
                                        <th>Candidat B</th>
                                        <td>1229600</td>
                                    </tr>
                                    <tr></tr>
                                        <th>Candidat C</th>
                                        <td>325251</td>
                                    </tr>
                                    <tr></tr>
                                    <th>Candidat D</th>
                                    <td>238751</td>
                                </tr>
                                </tbody>
                                
                            </table>
                        </figure>
                    </div>
                    <div class="item-graphe">
                        <figure class="highcharts-figure">
                        <div id="container2"></div>
                        <p class="highcharts-description">
                             Répartition des voix par ville 
                        </p>
                        <table id="datatable2" style="display:none;">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Candidat A</th>
                                    <th>Candidat B</th>
                                    <th>Candidat C</th>
                                    <th>Candidat D</th>
                                    <th>Candidat E</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Ville 1</th>
                                    <td>28 430</td>
                                    <td>26 690</td>
                                    <td>28 430</td>
                                    <td>26 690</td>
                                    <td>28 430</td>
                                   
                                </tr>
                                <tr>
                                    <th>Ville 2</th>
                                    <td>28 042</td>
                                    <td>26 453</td>
                                    <td>28 042</td>
                                    <td>26 453</td>
                                    <td>26 453</td>
                                </tr>
                                <tr>
                                    <th>Ville 3</th>
                                    <td>27 063</td>
                                    <td>25 916</td>
                                    <td>27 063</td>
                                    <td>25 916</td>
                                    <td>27 063</td>

                                </tr>
                                <tr>
                                    <th>Ville 4</th>
                                    <td>28 684</td>
                                    <td>27 376</td>
                                    <td>28 684</td>
                                    <td>27 376</td>
                                    <td>27 376</td>

                                </tr>
                               
                            </tbody>
                        </table>
                        </figure>
                    </div>

                    <div class="item-graphe">

                        <figure class="highcharts-figure">
                            <div id="container3"></div>
                            <p class="highcharts-description">
                               cette étude analyse les tendances de participation aux élections auprès de la population camerounaise , en distinguant les hommes et les femmes répartis en différentes tranches d'âge.
                            </p>
                            </p>
                            <table id="datatable3" style="display:none;">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Homme</th>
                                        <th>Femme</th>
                                       
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>17 à 29 ans</th>
                                        <td>10</td>
                                        <td>30</td>
                                       
                                       
                                    </tr>
                                    <tr>
                                        <th>30 à 44 ans</th>
                                        <td>6</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <th>45 à 59 ans</th>
                                        <td>20</td>
                                        <td>40</td>

                                    </tr>
                                    <tr>
                                        <th>60 à 74 ans</th>
                                        <td>50</td>
                                        <td>90</td>
                                       
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </figure>
                    </div>


                    <div class="item-graphe">

                        <figure class="highcharts-figure">
                            <div id="container4"></div>
                            <p class="highcharts-description">
                              Taux de paricipation aux sondages en fonction des villes
                            </p>
                            
                            <table id="datatable4" style="display:none;">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Taux de participation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Douala</th>
                                        <td>63.06</td>
                                        
                                    </tr>
                                    <tr>
                                        <th>Yaounde</th>
                                        <td>19.84</td>
                                    </tr>
                                    <tr>
                                        <th>Buéa</th>
                                        <td>4.18</td>
                                    </tr>
                                    <tr>
                                        <th>Maroua</th>
                                        <td>4.12</td>
                                    </tr>
                                    <tr>
                                        <th>Ebolowa</th>
                                        <td>2.33</td>
                                    </tr>
                                    <tr>
                                        <th>Mbouda</th>
                                        <td>0.45</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </figure>
                    </div>
                   
                
                </div>
            </div>
        </div>

        <?php include 'includes/footer.php';?>

        
        <script src="js/footer.js"></script>

        <script type="text/javascript" src="js/resultat-vote.js"></script>

</body>
</html>