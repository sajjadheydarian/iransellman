import initChart from "./costum-chart.js";
initChart(
  ["7/1", "7/10", "7/15", "7/25", "7/28"],
  [500, 1000, 2500, 3000, 2000],
  document.querySelector("#myChart").getContext("2d")
);
