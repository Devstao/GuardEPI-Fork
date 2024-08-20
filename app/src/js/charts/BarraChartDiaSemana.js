// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

$(document).ready(function () {
  $.ajax({
    url: "/saidasEquipamento",
    type: "GET",
    success: function (data) {
      var ctx = document.getElementById("ChartDiaSemana");
      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: "Revenue",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: data.values,
          }],
        },
        options: {
          scales: {
            xAxes: [{
              time: {
                unit: 'day'
              },
              gridLines: {
                display: false
              },
              ticks: {
                maxTicksLimit: 6
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                maxTicksLimit: 5
              },
            }],
            
          },
          legend: {
            display: false
          }
        }
      });
    }});
  });

