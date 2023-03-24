import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./SelectedCoinChart.css";

export const SelectedCoinChart = ({ chartData }) => {
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
    dataLabels: {
      enabled: false,
      formatter: function (val, opts) {
        console.log(val, opts);
        if (opts.dataPointIndex % 24 === 0) {
          return opts.xaxis.categories[opts.dataPointIndex / 24];
        }
        return "";
      },
      // formatter: function (value, { seriesIndex, dataPointIndex, w }) {
      //   return w.config.series[seriesIndex].name + ":  " + value;
      // },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#272C57"],
      // Add a linear gradient to the stroke
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
      categories: [
        "Sat, 11PM",
        "Sat, 12PM",
        "Sun, 4AM",
        "Sun, 8PM",
        "Mon, 12PM",
        "Tue, 4AM",
        "Tue, 8PM",
      ],
      // labels: {
      //   style: {
      //     fontSize: "14px",
      //     fontFamily: "Roboto, sans-serif",
      //   },
      // },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false, // disable y-axis tooltip
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
      data: [20, 15, 30, 20, 30, 40, 20],
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
