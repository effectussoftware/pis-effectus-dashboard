import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const CostSummaryChart = ({
  dataPointsPesos,
  dataPointsDolares,
  chartType = 'per year',
  year,
}) => {
  const isPerYear = chartType === 'per year';
  const auxChartTitle = isPerYear ? 'por año' : `del ${year} por mes`;
  const chartTitle = `Costo de los eventos ${auxChartTitle}`;
  const axisXTitle = isPerYear ? 'Año' : 'Mes';
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2',
    title: { text: chartTitle },
    axisX: { title: axisXTitle },
    axisY: { includeZero: true, title: 'Costo en Pesos' },
    data: [
      {
        name: 'Costo en Pesos',
        type: 'column',
        toolTipContent: '<b>{label}</b><br>Costo en pesos: $ {y}',
        showInLegend: true,
        dataPoints: dataPointsPesos,
      },
      {
        name: 'Costo en Dólares',
        type: 'column',
        toolTipContent:
          '<b>{label}</b><br>Costo en pesos: $ {y}<br>Costo en dólares: USD {z}',
        showInLegend: true,
        dataPoints: dataPointsDolares,
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};

export default CostSummaryChart;
