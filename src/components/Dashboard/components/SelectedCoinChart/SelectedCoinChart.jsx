import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./SelectedCoinChart.css";

export const SelectedCoinChart = ({ chartData }) => {
  // const categories = [
  //   "Week 1",
  //   "Week 2",
  //   "Week 3",
  //   "Week 4",
  //   "Week 5",
  //   "Week 6",
  //   "Week 7",
  // ];
  // const data = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  //   25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  //   46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
  //   67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
  //   88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
  //   107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
  //   124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
  //   141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
  //   158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
  // ];

  // const paddedData = new Array(data.length).fill(null);
  // for (let i = 0; i < data.length; i++) {
  //   if (i % 24 === 0) {
  //     const categoryIndex = i / 24;
  //     paddedData[i] = data[i];
  //     categories[categoryIndex] = `Category ${categoryIndex + 1}`;
  //   } else {
  //     paddedData[i] = null;
  //   }
  // }

  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      markers: {
        size: 20,
        colors: ["#00050"],
        shape: "circle",
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box biggest-test-ever">' +
          "<span>" +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
    },
    // dataLabels: {
    //   enabled: false,
    //   formatter: function (val, opts) {
    //     console.log(val, opts);
    //     if (opts.dataPointIndex % 24 === 0) {
    //       return opts.xaxis.categories[opts.dataPointIndex / 24];
    //     }
    //     return "";
    //   },
    //   // formatter: function (value, { seriesIndex, dataPointIndex, w }) {
    //   //   return w.config.series[seriesIndex].name + ":  " + value;
    //   // },
    // },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#272C57"],
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#272C57"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
        hideOverlappingLabels: true,
        skipOverlapLabels: false,
      },
      categories: [1991, null, 1992, null, 1993],
      // categories: [
      //   "Sat, 11PM",
      //   "Sat, 12PM",
      //   "Sun, 4AM",
      //   "Sun, 8PM",
      //   "Mon, 12PM",
      //   "Tue, 4AM",
      //   "Tue, 8PM",
      // ],
      // categories: ["Sat, 11PM", "Sat, 12PM", "Tue, 8PM"],
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  });

  // const [chartSeries, setChartSeries] = useState([
  //   {
  //     name: "Price",
  //     // data: chartData?.sparkline_in_7d?.price,
  //     data: [10, 20],
  //   },
  // ]);

  const chartSeries = [
    {
      name: "Price",
      // data: chartData?.sparkline_in_7d?.price,
      data: [20, 15, 30, 1, 40],
    },
  ];

  // console.log(chartSeries);

  return (
    <div className="selected-coin-chart">
      {chartData.id && (
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={"100%"}
        />
      )}
    </div>
  );
};
