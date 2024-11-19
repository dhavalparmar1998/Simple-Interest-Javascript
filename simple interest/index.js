 function myfunc(){
    var p = document.getElementById("x1").value;
    var n = document.getElementById("x2").value;
    var r = document.getElementById("x3").value;
     
    var interest = (p*n*r/100);
    var result = interest + Number(p);
    
    document.querySelector("#a1").innerHTML =` Amount is : ${p} ₹ `
    document.querySelector("#a2").innerHTML = `Interest is : ${interest} ₹`
    document.querySelector("#a3").innerHTML = `Final Amount is : ${result} ₹`

    document.getElementById("x1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("x3").value = "";

    Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Simple Interest Calculator'
    },
    tooltip: {
        valueSuffix: '%'
    },
 
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'amount',
                    y: result
                },
                {
                    name: 'interest',
                    y: interest
                }
            ]
        }
    ]
});

   }
