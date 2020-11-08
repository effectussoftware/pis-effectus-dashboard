import React from 'react';
import { BulkDeleteButton, useListContext } from 'react-admin';
import Tooltip from '@material-ui/core/Tooltip';

import { DATE_TIME, IS_PUBLISHED } from './consts';

const CommunicationsBulkActionButtons = (props) => {
  const { data, selectedIds } = useListContext();
  const selectedIdsContainPublishedComm = selectedIds.some(
    (id) => data[id][IS_PUBLISHED] && !data[id][DATE_TIME]
  );

  return selectedIdsContainPublishedComm ? (
    <Tooltip title="Alguno de los comunicados seleccionados ya fue publicado">
      <div>
        <BulkDeleteButton disabled {...props} />
      </div>
    </Tooltip>
  ) : (
    <BulkDeleteButton undoable={false} {...props} />
  );
};

export default CommunicationsBulkActionButtons;
