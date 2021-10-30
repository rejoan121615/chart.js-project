import '../scss/style.scss';
import {Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const myChart = new Chart(document.querySelector("#chart").getContext("2d"), {
  type: 'bar',
  data: {
    labels: ["Mohd Rejoan", "Khairuzzaman", "Rokibul", "Sorifur Rahman"],
    datasets: [{
      label: 'Red',
      data: [25, 78, 47, 6],
      backgroundColor: 'yellow'
    }, {
      label: 'Green',
      data: [85, 24, 67, 32],
      backgroundColor: 'tomato'
      }, {
      label: "yellow",
      data: [22, 74, 32, 87],
        backgroundColor: 'violet'
    }]
  },
  options: {}
});
