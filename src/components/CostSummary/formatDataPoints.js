const formatPerYear = (dataPoints, convertRate) =>
  dataPoints.map((point) => ({
    label: point.date,
    y: parseFloat(point.cost) * convertRate,
    z: parseFloat(point.cost),
  }));

const formatPerMonth = (dataPoints, convertRate) => {
  const formattedDataPoints = [
    { label: 'Enero', y: 0.0, z: 0.0 },
    { label: 'Febrero', y: 0.0, z: 0.0 },
    { label: 'Marzo', y: 0.0, z: 0.0 },
    { label: 'Abril', y: 0.0, z: 0.0 },
    { label: 'Mayo', y: 0.0, z: 0.0 },
    { label: 'Junio', y: 0.0, z: 0.0 },
    { label: 'Julio', y: 0.0, z: 0.0 },
    { label: 'Agosto', y: 0.0, z: 0.0 },
    { label: 'Septiembre', y: 0.0, z: 0.0 },
    { label: 'Octubre', y: 0.0, z: 0.0 },
    { label: 'Noviembre', y: 0.0, z: 0.0 },
    { label: 'Diciembre', y: 0.0, z: 0.0 },
  ];
  dataPoints.forEach((element) => {
    const point = formattedDataPoints[parseInt(element.date.slice(4)) - 1];
    formattedDataPoints[parseInt(element.date.slice(4)) - 1] = {
      ...point,
      y: parseFloat(element.cost) * convertRate,
      z: parseFloat(element.cost),
    };
  });
  return formattedDataPoints;
};

const formatDataPoints = (dataPoints, chartType, convertRate = 1) => {
  const formattedDataPoints =
    chartType === 'per year'
      ? formatPerYear(dataPoints, convertRate)
      : formatPerMonth(dataPoints, convertRate);
  return formattedDataPoints;
};

export default formatDataPoints;
