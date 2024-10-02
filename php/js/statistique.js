// Radialize the colors
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
Highcharts.chart('wrap-graphique', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Montant total des réalisations par domaine d'intervention"
    },
    subtitle: {
        text:
            'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Montant'
        }
    },
    plotOptions: {
        column: {
            borderRadius: 5
        }
    },
});


// Nbre personnes impactées

Highcharts.chart('wrap-graphique2', {
    data: {
        table: 'datatable2'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de femmes et jeunes impactés par domaines d'interventions"
    },
    subtitle: {
        text:
            'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Nombres personnes'
        }
    },
    plotOptions: {
        column: {
            borderRadius: 5
        }
    },
});

Highcharts.chart('wrap-graphique3', {
    data: {
        table: 'datatable3'
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: "Nombres de citoyens impactés par domaines d'interventions"
    },
    subtitle: {
        text:
            'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
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
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
});



Highcharts.chart('wrap-graphique4', {
    data: {
        table: 'datatable4'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres d'enfants et de personnes handicapées impactées par domaines d'interventions"
    },
    subtitle: {
        text:
            'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Nombres personnes'
        }
    },
    plotOptions: {
        column: {
            borderRadius: 5
        }
    },
});

Highcharts.chart('wrap-graphique5', {
    data: {
        table: 'datatable5'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de personnes agées impactées par domaines d'interventions"
    },
    subtitle: {
        text:
            'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        allowDecimals: true,
        title: {
            text: 'Nombres de personnes'
        }
    },
    plotOptions: {
        column: {
            borderRadius: 5
        }
    },
});

$("#search_btn").click(function(){
    const commune=$("#commune-search").val(), province=$("#province-search").val(), date_debut=$("#date-debut").val(), date_fin=$("#date-fin").val();
    if(province=="" && commune=="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/","loader");
    if(province!="" && commune=="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-province/"+province,"loader");
    if(commune!="" && province=="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-commune/"+commune,"loader");
    if(date_debut!="" && commune=="" && province=="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-date-debut/"+date_debut,"loader");
    if(date_fin!="" && commune=="" && date_debut=="" && province=="") gotoURL("./statistique-par-domaine-intervention/par-date-fin/"+date_fin,"loader");
    if(province!="" && commune!="" && date_debut!="" && date_fin!="") gotoURL("./statistique-par-domaine-intervention/"+province+"/"+commune+"/"+date_debut+"/"+date_fin,"loader");

    if(province!="" && commune!="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-province&commune"+province+"/"+commune,"loader");

    if(province!="" && commune=="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-province&date-debut"+province+"/"+date_debut,"loader");
    if(province!="" && commune=="" && date_debut=="" && date_fin!="") gotoURL("./statistique-par-domaine-intervention/par-province&date-fin"+province+"/"+date_fin,"loader");
    if(province=="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-commune&date-debut"+commune+"/"+date_debut,"loader");
    if(province=="" && commune!="" && date_debut=="" && date_fin!="") gotoURL("./statistique-par-domaine-intervention/par-commune&date-fin"+commune+"/"+date_fin,"loader");
    if(province=="" && commune=="" && date_debut!="" && date_fin!="") gotoURL("./statistique-par-domaine-intervention/par-date-debut&fin"+date_debut+"/"+date_fin,"loader");

    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-province-commune-date_debut"+province+"/"+commune+"/"+date_debut+"/","loader");

    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-province-commune-date_fin"+province+"/"+commune+"/"+date_fin+"/","loader");
    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-province-date_debut-date_fin"+province+"/"+date_debut+"/"+date_fin+"/","loader");
    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-domaine-intervention/par-commune-date_debut-date_fin"+commune+"/"+date_debut+"/"+date_fin+"/","loader");

 
});