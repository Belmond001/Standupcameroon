    var modal = document.getElementById("voteModal");
    var cancelBtn = document.getElementById("closeModal");
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    $('.item-element').eq().addClass('active').find('.entry-content').css('display','block');
    $('.entry-title').on('click',function(){
        $(this).siblings('.entry-content').slideToggle('fast');
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().children('.entry-content:visible').slideUp('fast');
        $(this).parent().siblings().children('.entry-content:visible').parent().removeClass('active');
    });
   

    

   function openContent(evt, content) {

        // declare variable
        var i, tabcontent, tablinks;

        // get all element with class=tabcontent and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display= "none";
        }

        // get all elements with class=tablinks and remove the class active
        tablinks =document.getElementsByClassName("tablink");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }

        // show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(content).style.display = "block";

        evt.currentTarget.className += " active";
        if(content=='onglet2'){
             // Nombre de questions
            const nb_question = document.querySelectorAll('.item-graphe').length;

            // Boucle pour chaque question
            for (let i = 1; i <= nb_question; i++) {
                const containerId = 'container' + i;
                const tableId = 'datatable' + i;

                // Vérifiez si le conteneur et la table existent avant de créer le graphique
                if (document.getElementById(containerId) && document.getElementById(tableId)) {

                    Highcharts.chart(containerId, {

                        data: {
                            table: tableId
                        },
                    
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                    
                        title: {
                            text: `Répartition des réponses relatives à la question ${i}`
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%'
                            }
                        },
                    plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                },
                                showInLegend: true
                            }
                        },
                    
                        //colors: ['#491d05', '#ff5252', '#background-color: #e37b03;','#910000', '#9ccc65','#fe2d01'],
                        colors: [  '#E37B03','#50B432', '#FE2D01','#F9C70C','#491d05', '#8839B9','#00AEEF'],
                        tooltip: {
                            formatter: function () {
                                return '<b>' + this.point.name + '</b><br/>' +
                                    this.point.y + ' Participants';
                            }
                        }
                    });
                } else {
                    console.warn(`Le conteneur ou la table manquant(e) pour la question ${i}.`);
                }
            }

        }

    }

    const accordion = document.getElementsByClassName('wrap-item-section-cirriculum');

    for (i=0; i<accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active');
        })
    }

    function setShareLinks() {
        var pageUrl = encodeURIComponent(document.URL);
        var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

        $("#btn-fb-share").on("click", function() {
            url="https://www.facebook.com/sharer.php?u=" + pageUrl;
            socialWindow(url);
        });

        $("#btn-tw-share").on("click", function() {
            url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
            socialWindow(url);
        });

        $("#btn-in-share").on("click", function() {
            url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
            socialWindow(url);
        })
        $("#btn-wh-share").on("click", function() {
            url = "https://web.whatsapp.com/send?text=" + pageUrl;
            socialWindow(url);
        })

    }
    setShareLinks();

