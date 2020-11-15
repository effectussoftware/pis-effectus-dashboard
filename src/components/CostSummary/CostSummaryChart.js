import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const CostSummaryChart = ({ dataPoints, chartType, year }) => {
  const isPerYear = chartType === 'per year';
  const auxChartTitle = isPerYear ? 'por año' : `del ${year} por mes`;
  const chartTitle = `Costo de los eventos ${auxChartTitle}`;
  const axisXTitle = isPerYear ? 'Año' : 'Mes';
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2',
    title: { text: chartTitle },
    axisY: { includeZero: true },
    axisX: { title: axisXTitle },
    data: [
      {
        type: 'column',
        dataPoints,
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};

export default CostSummaryChart;
