import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const CostSummaryChart = ({ dataPoints, chartType, year }) => {
  const chartTitle =
    'Costo de los eventos ' +
    (chartType === 'per year' ? 'por año' : `del ${year} por mes`);
  const axisXTitle = chartType === 'per year' ? 'Año' : 'Mes';
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2', //"light1", "dark1", "dark2"
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
  console.log({ dataPoints });
  console.log(options);
  return <CanvasJSChart options={options} />;
};

export default CostSummaryChart;
