 // DIAGRAMME CIRCULAIRE
 // Repartition des voix en fonction des candidats




 Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

Highcharts.chart('container1', {
    data: {
        table: 'datatable1'
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Repartition des voix en fonction des candidats',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
                format: '<span style="font-size: 1.2em"><b>{point.name}</b>' +
                    '</span><br>' +
                    '<span style="opacity: 0.6">{point.percentage:.1f} ' +
                    '%</span>',
                connectorColor: 'rgba(128,128,128,0.5)'
            }
        }
    }
});

    // REPARTITION DES VOIX PAR VILLE ET CANDIDAT


    document.addEventListener('DOMContentLoaded', function () {
        Highcharts.chart('container2', {
            data: {
                table: 'datatable2'
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Répartition des voix par ville et candidat'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Nombre de voix'
                }
            },
	        colors: [  '#f8c22e','#f7be6d', '#83e1e9','#fd7504','#491d05', '#f44516','#add33f','#3fc155'],

            plotOptions: {
                column: {
                    borderRadius: 5,
                    // dataLabels: {
                    //     enabled: true,
                    //     format: '{point.y}' // Affiche le nom du candidat au-dessus des barres
                    // }
                }
            },
           
            
        });
    });




    // participation  aux  elections par sexe et age



    Highcharts.chart('container3', {
    data: {
        table: 'datatable3'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Analyse de la participation aux élections en fonction du sexe et de l'âge",
        align: 'left'
    },
    subtitle: {
        text:
            '',
        align: 'left'
    },
    xAxis: {
        type:'category'
         
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Taux de participation aux élections(%)'
        }
    },
    tooltip: {
        valueSuffix: ' (10)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    }
   
});




// Taux de participaation aux elections par  ville


    // Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container4', {
    data: {
        table: 'datatable4'
    },
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Taux de particpationn aux élections par villes.'
    },
    subtitle: {
        align: 'left',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'taux  de  participation'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
            '<b>{point.y:.2f}</b> au total<br/>'
    }
   
});


