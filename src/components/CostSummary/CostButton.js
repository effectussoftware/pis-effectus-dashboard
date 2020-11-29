import * as React from 'react';
import { Button } from 'react-admin';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom';

const CostButton = () => {
  return (
    <Button label="Costos" component={Link} to="/costs">
      <AttachMoneyIcon />
    </Button>
  );
};

export default CostButton;
