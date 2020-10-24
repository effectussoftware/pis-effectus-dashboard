import React from 'react';
import { BulkDeleteButton, useListContext } from 'react-admin';
import Tooltip from '@material-ui/core/Tooltip';

import { IS_PUBLISHED } from './consts';

const CommunicationsBulkActionButtons = (props) => {
  const { data, selectedIds } = useListContext();
  const selectedIdsContainPublishedComm = selectedIds.some(
    (id) => data[id][IS_PUBLISHED]
  );

  return selectedIdsContainPublishedComm ? (
    <Tooltip title="Alguno de los comunicados seleccionados ya fue publicado">
      <div>
        <BulkDeleteButton disabled {...props} />
      </div>
    </Tooltip>
  ) : (
    <BulkDeleteButton {...props} />
  );
};

export default CommunicationsBulkActionButtons;