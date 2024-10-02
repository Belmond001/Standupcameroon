


// Graphe 1

Highcharts.chart('container1', {


    yAxis: {
        title: {
            text: 'Nombre inscriptions'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2012 to 2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2012
        }
    },

    series: [{
        name: 'Inscripton / Ans',
        data: [
            43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610, 168960, 171558
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});




// Grape 2

Highcharts.chart('container2', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Amount'
        }
    }
});

// Graph3

// Data retrieved from https://www.ssb.no/en/transport-og-reiseliv/landtransport/statistikk/bilparken
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

// Build the chart
Highcharts.chart('container3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
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
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Candidat 1', y: 938899 },
            { name: 'Candidat 2', y: 1229600 },
            { name: 'Candidat 3', y: 325251 },
            { name: 'Candidat 4', y: 238751 }
        ]
    }]
});

// Graphe 4

Highcharts.chart('container4', {
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: ['Janvier', 'Fevrier', 'Mars', 'Octobre', 'Novembre', 'Décembre'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Sondage'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Homme',
            data: [387749, 280000, 129000, 64300, 54000, 34300]
        },
        {
            name: 'Femme',
            data: [45321, 140000, 10000, 140500, 19500, 113500]
        }
    ]
});
