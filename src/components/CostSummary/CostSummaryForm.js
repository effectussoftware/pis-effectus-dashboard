import * as React from 'react';
import { fetchUtils } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import httpClient from '../../react-admin/httpClient';
import CostSummaryChart from './CostSummaryChart';
import formatDataPoints from './formatDataPoints';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  divButton: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CostSummaryForm = () => {
  const currentYear = new Date().getFullYear();
  const [data, setData] = React.useState({
    chartType: 'per year',
    year: currentYear,
    chart: undefined,
  });
  const classes = useStyles();

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const url =
      '/cost_summary' +
      (data.chartType === 'per month' ? `?year=${data.year}` : '');
    const {
      json: { cost_summary: dataPoints },
    } = await httpClient(url);

    const dateValuesPesos = dataPoints['pesos'].map((point) =>
      parseInt(point.date)
    );
    const dateValuesDolares = dataPoints['dolares'].map((point) =>
      parseInt(point.date)
    );

    const minDate = Math.min(...dateValuesPesos, ...dateValuesDolares);
    const maxDate = Math.max(...dateValuesPesos, ...dateValuesDolares);

    const { fetchJson } = fetchUtils;
    const url_dollar =
      'https://cotizaciones-brou.herokuapp.com/api/currency/latest';
    const {
      json: {
        rates: {
          USD: { sell: convertRate },
        },
      },
    } = await fetchJson(url_dollar);

    const formattedDataPointsPesos = formatDataPoints(
      dataPoints['pesos'],
      data.chartType,
      minDate,
      maxDate
    );
    const formattedDataPointsDolares = formatDataPoints(
      dataPoints['dolares'],
      data.chartType,
      minDate,
      maxDate,
      convertRate
    );

    const newChart = (
      <CostSummaryChart
        dataPointsPesos={formattedDataPointsPesos}
        dataPointsDolares={formattedDataPointsDolares}
        chartType={data.chartType}
        year={data.year}
      />
    );

    setData({
      ...data,
      chart: newChart,
    });
  };

  return (
    <>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="select-chart-type">Visualizar</InputLabel>
          <Select
            labelId="select-chart-type"
            id="chart-type"
            value={data.chartType}
            name="chartType"
            onChange={handleInputChange}
          >
            <MenuItem value={'per year'}>Anual</MenuItem>
            <MenuItem value={'per month'}>Mensual</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-number"
            label="Año"
            type="number"
            value={data.year}
            name="year"
            onChange={handleInputChange}
            disabled={data.chartType === 'per year'}
          />
        </FormControl>
      </div>
      <div className={classes.divButton}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          VER COSTOS
        </Button>
      </div>
      <div>{data.chart}</div>
    </>
  );
};

export default CostSummaryForm;
