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

// Montant des investissements par province
Highcharts.chart('wrap-graphique', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Montant total des réalisations par province"
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

// Montant des investissements par commune

Highcharts.chart('wrap-graphique1', {
    data: {
        table: 'datatable1'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Montant total des réalisations par commune"
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


// Nbre femmes et jeunes  impactées par province

Highcharts.chart('wrap-graphique2', {
    data: {
        table: 'datatable2'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de femmes et jeunes impactés par provinces d'interventions"
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

// Nbre femmes et jeunes  impactées par commune

Highcharts.chart('wrap-graphique3', {
    data: {
        table: 'datatable3'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de femmes et jeunes impactés par communes d'interventions"
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

// Nbre citoyens  impactées par province

Highcharts.chart('wrap-graphique4', {
    data: {
        table: 'datatable4'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de citoyens impactés par provinces d'interventions"
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

// Nbre citoyens  impactées par commune

Highcharts.chart('wrap-graphique5', {
    data: {
        table: 'datatable5'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de citoyens impactés par communes d'interventions"
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

// Nbre enfants et personnes handicapées  impactées par province

Highcharts.chart('wrap-graphique6', {
    data: {
        table: 'datatable6'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres d'enfants et de personnes handicapées impactés par provinces d'interventions"
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

// Nbre enfants et personnes handicapées impactées par commune

Highcharts.chart('wrap-graphique7', {
    data: {
        table: 'datatable7'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres d'enfants et de personnes handicapées impactés par communes d'interventions"
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


// Nbre personnes agées  impactées par province

Highcharts.chart('wrap-graphique8', {
    data: {
        table: 'datatable8'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de personnes agées impactés par provinces d'interventions"
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

// Nbre personnes agées impactées par commune

Highcharts.chart('wrap-graphique9', {
    data: {
        table: 'datatable9'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Nombres de personnes agées impactés par communes d'interventions"
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

$("#search_btn").click(function(){
    const commune=$("#commune-search").val(), province=$("#province-search").val(), date_debut=$("#date-debut").val(), date_fin=$("#date-fin").val();
    if(province=="" && commune=="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/","loader");
    if(province!="" && commune=="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-province/"+province,"loader");
    if(commune!="" && province=="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-commune/"+commune,"loader");
    if(date_debut!="" && commune=="" && province=="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-date-debut/"+date_debut,"loader");
    if(date_fin!="" && commune=="" && date_debut=="" && province=="") gotoURL("./statistique-par-zone-intervention/par-date-fin/"+date_fin,"loader");
    if(province!="" && commune!="" && date_debut!="" && date_fin!="") gotoURL("./statistique-par-zone-intervention/"+province+"/"+commune+"/"+date_debut+"/"+date_fin,"loader");

    if(province!="" && commune!="" && date_debut=="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-province&commune"+province+"/"+commune,"loader");

    if(province!="" && commune=="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-province&date-debut"+province+"/"+date_debut,"loader");
    if(province!="" && commune=="" && date_debut=="" && date_fin!="") gotoURL("./statistique-par-zone-intervention/par-province&date-fin"+province+"/"+date_fin,"loader");
    if(province=="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-commune&date-debut"+commune+"/"+date_debut,"loader");
    if(province=="" && commune!="" && date_debut=="" && date_fin!="") gotoURL("./statistique-par-zone-intervention/par-commune&date-fin"+commune+"/"+date_fin,"loader");
    if(province=="" && commune=="" && date_debut!="" && date_fin!="") gotoURL("./statistique-par-zone-intervention/par-date-debut&fin"+date_debut+"/"+date_fin,"loader");

    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-province-commune-date_debut"+province+"/"+commune+"/"+date_debut+"/","loader");

    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-province-commune-date_fin"+province+"/"+commune+"/"+date_fin+"/","loader");
    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-province-date_debut-date_fin"+province+"/"+date_debut+"/"+date_fin+"/","loader");
    if(province!="" && commune!="" && date_debut!="" && date_fin=="") gotoURL("./statistique-par-zone-intervention/par-commune-date_debut-date_fin"+commune+"/"+date_debut+"/"+date_fin+"/","loader");

 
});