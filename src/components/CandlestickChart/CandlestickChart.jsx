import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const CandlestickChart = () => {
    // Candlestick chart options
    const options = {
        chart: {
            type: 'candlestick',
        },
        xaxis: {
            type: 'datetime',
        },
    };

    // Candlestick chart data
    const series = [
        {
            data: [
                // Add your candlestick data points here
                // Each data point should have x, y, o, h, l, and c properties
                // For example:
                { x: new Date('2023-09-01').getTime(), y: [100, 150, 90, 120] },
                { x: new Date('2023-09-02').getTime(), y: [120, 160, 110, 140] },
                // Add more data points as needed
            ],
        },
    ];

    return (
        <div className="candlestick-chart">
            <ReactApexChart options={options} series={series} type="candlestick" height={'100%'} />
        </div>
    );
};

