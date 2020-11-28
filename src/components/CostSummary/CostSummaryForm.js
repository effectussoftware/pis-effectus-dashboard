import * as React from 'react';
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
    chartPesos: undefined,
    chartDolares: undefined,
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
    const formattedDataPointsPesos = formatDataPoints(
      dataPoints['pesos'],
      data.chartType
    );
    const formattedDataPointsDolares = formatDataPoints(
      dataPoints['dolares'],
      data.chartType
    );

    const newChartPesos = (
      <CostSummaryChart
        dataPoints={formattedDataPointsPesos}
        chartType={data.chartType}
        year={data.year}
        currency="pesos"
      />
    );

    const newChartDolares = (
      <CostSummaryChart
        dataPoints={formattedDataPointsDolares}
        chartType={data.chartType}
        year={data.year}
        currency="dolares"
      />
    );

    setData({
      ...data,
      chartPesos: newChartPesos,
      chartDolares: newChartDolares,
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
      <div>{data.chartPesos}</div>
      <div>{data.chartDolares}</div>
    </>
  );
};

export default CostSummaryForm;
