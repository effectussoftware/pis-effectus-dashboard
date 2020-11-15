const formatPerYear = (dataPoints) => {
  return dataPoints.map((point) => {
    return { label: point.date, y: parseFloat(point.cost) };
  });
};

const formatPerMonth = (dataPoints) => {
  const formattedDataPoints = [
    { label: 'Enero', y: 0.0 },
    { label: 'Febrero', y: 0.0 },
    { label: 'Marzo', y: 0.0 },
    { label: 'Abril', y: 0.0 },
    { label: 'Mayo', y: 0.0 },
    { label: 'Junio', y: 0.0 },
    { label: 'Julio', y: 0.0 },
    { label: 'Agosto', y: 0.0 },
    { label: 'Septiembre', y: 0.0 },
    { label: 'Octubre', y: 0.0 },
    { label: 'Noviembre', y: 0.0 },
    { label: 'Diciembre', y: 0.0 },
  ];
  dataPoints.forEach((element) => {
    const point = formattedDataPoints[parseInt(element.date.slice(4)) - 1];
    formattedDataPoints[parseInt(element.date.slice(4)) - 1] = {
      ...point,
      y: parseFloat(element.cost),
    };
  });
  return formattedDataPoints;
};

const formatDataPoints = (dataPoints, chartType) => {
  const formattedDataPoints =
    chartType === 'per year'
      ? formatPerYear(dataPoints)
      : formatPerMonth(dataPoints);
  return formattedDataPoints;
};

export default formatDataPoints;
