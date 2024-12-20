document.addEventListener("DOMContentLoaded", function () {
    const nb_question = document.querySelectorAll(".item-graphe").length;

    for (let i = 1; i <= nb_question; i++) {
        const containerId ="container" + i;
        const tableId ="datatable" + i;

        if (document.getElementById(containerId) && document.getElementById(tableId)) {
            Highcharts.chart(containerId, {
                data: {
                    table: tableId,
                },
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: "pie",
                },
                title: {
                    text: `Répartition des réponses relatives à la question ${i}`,
                },
                accessibility: {
                    point: {
                        valueSuffix: "%",
                    },
                },
                plotOptions: {
                    lang: {
                        locale: 'fr'
                    },
                    pie: {
                        allowPointSelect: true,
                        cursor: "pointer",
                        dataLabels: {
                            enabled: true,
                            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                        },
                        showInLegend: true,
                    },
                },
                colors: [
                    "#E37B03",
                    "#50B432",
                    "#FE2D01",
                    "#F9C70C",
                    "#491d05",
                    "#8839B9",
                    "#00AEEF",
                ],
                tooltip: {
                    formatter: function () {
                        return (
                            "<b>" +
                            this.point.name +
                            "</b><br/>" +
                            this.point.y +
                            " votes"
                        );
                    },
                },
            });
        } else {
            console.warn(`Le conteneur ou la table manquant(e) pour la question ${i}.`);
        }
    }

});
