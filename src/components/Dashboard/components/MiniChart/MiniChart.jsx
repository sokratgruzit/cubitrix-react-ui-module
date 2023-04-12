import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import "./MiniChart.css";

export const MiniChart = ({ chartData, isPositive }) => {
  const options = {
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "smooth",
      colors: [isPositive ? "#00FFD0" : "#F61379"],
    },
    grid: {
      show: false,
    },
    markers: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Price",
      data: [],
    },
  ]);

  useEffect(() => {
    if (chartData) {
      setChartSeries((prevState) => [
        {
          ...prevState[0],
          data: chartData,
        },
      ]);
    }
  }, [chartData]);

  return (
    <div className="selected-coin-mini-chart">
      <ReactApexChart
        options={options}
        series={chartSeries}
        type="line"
        height={"100%"}
      />
    </div>
  );
};
