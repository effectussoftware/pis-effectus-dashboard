const formatPerYear = (dataPoints, convertRate, minYear, maxYear) => {
  const formattedDataPoints = Array(maxYear - minYear + 1)
    .fill()
    .map((_, idx) => ({ label: minYear + idx, y: 0.0, z: 0.0 }));
  dataPoints.forEach(
    (point) =>
      (formattedDataPoints[parseInt(point.date) - minYear] = {
        label: point.date,
        y: parseFloat(point.cost) * convertRate,
        z: parseFloat(point.cost),
      })
  );
  return formattedDataPoints;
};

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

const formatDataPoints = (
  dataPoints,
  chartType,
  minYear,
  maxYear,
  convertRate = 1
) => {
  const formattedDataPoints =
    chartType === 'per year'
      ? formatPerYear(dataPoints, convertRate, minYear, maxYear)
      : formatPerMonth(dataPoints, convertRate);
  return formattedDataPoints;
};

export default formatDataPoints;
