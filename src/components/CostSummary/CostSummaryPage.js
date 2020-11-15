import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

import CostSummaryForm from './CostSummaryForm';

const CostSummaryPage = () => {
  return (
    <Card>
      <Title title="Dashboard de visualización de costos" />
      <CardContent>
        <h1>Elegir forma de visualización</h1>
        <CostSummaryForm />
      </CardContent>
    </Card>
  );
};

export default CostSummaryPage;
