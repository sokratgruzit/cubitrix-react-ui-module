import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./SelectedCoinChart.css";

export const SelectedCoinChart = ({ chartData }) => {
  const [chartType, setChartType] = useState("7D");
  const latestUpdate = "2023-03-27T07:56:43.706Z";
  const latestUpdateDate = new Date(latestUpdate);

  const days = 7;
  const dates = Array.from({ length: days }, (_, i) => {
    const daysAgo = days - i - 1;
    const date = new Date(
      latestUpdateDate.getTime() - daysAgo * 24 * 60 * 60 * 1000 - 11 * 60 * 60 * 1000,
    );

    const options = { weekday: "short", hour: "numeric", hour12: true };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  });
  // const categories = Array.from({ length: 7 * 24 }, (_, i) => {
  //   const categoryIndex = Math.floor(i / 24);
  //   if (i % 24 === 0) {
  //     return dates[categoryIndex];
  //   } else {
  //     return "";
  //   }
  // });

  const categories = Array.from({ length: 7 * 24 }, (_, i) => {
    const categoryIndex = Math.floor(i / 24);
    const categoryStartIndex = categoryIndex * 24;
    if (i === categoryStartIndex + 12) {
      return dates[categoryIndex];
    } else if (i >= categoryStartIndex && i < categoryStartIndex + 24) {
      return "";
    } else {
      return null;
    }
  });

  console.log(categories);

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
          "$ " +
          series[seriesIndex][dataPointIndex].toFixed(4) +
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
      // categories: [1991, "", 1992, "", 1993],
      categories: categories,
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
      data: chartData?.sparkline_in_7d?.price,
      // data: [20, 15, 30, 1, 40],
    },
  ];

  // console.log(chartSeries);

  return (
    <div className="selected-coin-chart">
      <div className="chart-options-wrapper">
        <div
          onClick={() => setChartType("24H")}
          className={`chart-option ${chartType === "24H" ? "selected-chart-type" : ""}`}
        >
          24H
        </div>
        <div
          onClick={() => setChartType("7D")}
          className={`chart-option ${chartType === "7D" ? "selected-chart-type" : ""}`}
        >
          7D
        </div>
      </div>
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
