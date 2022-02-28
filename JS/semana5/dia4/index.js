/**
 * chart de tipo bar
 */
 const contenedorBarChart = document
 .querySelector("#bar-chart")
 .getContext("2d");

const barChart = new Chart(contenedorBarChart, {
 type: "bar",
 data: {
   labels: [
     "Lunes",
     "Martes",
     "Miercoles",
     "Jueves",
     "Viernes",
     "Sabado",
     "Domingo",
   ],
   datasets: [
     {
       label: "Numero de usuarios por dia",
       data: [20, 40, 10, 100, 50, 75, 200],
       borderWidth: 3,
       borderColor: "#1d6ab3",
       backgroundColor: [
           "#e615c3",
           "#c2061c",
           "#44b038",
           "#d4d417",
           "#2d5ff7",
           "#5615d6",
           "#e04212",
           
       ]
     },
   ],
 },
});


const containerDoughnutChart = document
  .querySelector("#doughnut-chart")
  .getContext("2d");

const dataForChart = {
  labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
  datasets: [
    {
      label: "PRODUCTOS ELECTRONICOS",
      data: [100, 230, 520, 267],
      backgroundColor: ["#12e015", "#b012e0", "#1231e0", "#e02312"],
    },
  ],
};

const config = {
  type: "doughnut",
  data: dataForChart,
};

const donutChart = new Chart(containerDoughnutChart, config);





const containerLineChart = document.querySelector("#lineal-chart");
const configLineal = {
    type: "line",
    data: dataForChart,
} 
const lineChart = new Chart(containerLineChart, configLineal);

const containerBubbleChart = document
  .querySelector("#bubble-chart")
  .getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [
  {
    x: 20,
    y: 100,
    r: 15,
  },
  {
    x: 60,
    y: 10,
    r: 10,
  },
];

const configBubble = {
  type: "bubble",
  data: dataForChart,
};

const bubbleChart = new Chart(containerBubbleChart, configBubble);



const containerPolarChart = document
  .querySelector("#polar-chart")
  .getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [400,145,212,670];

const configPolar = {
  type: "polarArea",
  data: dataForChart,
};

const polarChart = new Chart(containerPolarChart, configPolar);




const containerRadarChart = document
  .querySelector("#radar-chart")
  .getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [400,145,212,670];

const configRadar = {
  type: "radar",
  data: dataForChart,
};

const radarChart = new Chart(containerRadarChart, configRadar);

const containerScatterChart = document
  .querySelector("#scatter-chart")
  .getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [
  {
    x: 250,
    y: 100,
  
  },
  {
    x: 215,
    y: 154,
    
  },
  {
    x: -10,
    y: 20,
    
  },
];

const configScatter = {
  type: "scatter",
  data: dataForChart,
};

const scatterChart = new Chart(containerScatterChart, configScatter);

