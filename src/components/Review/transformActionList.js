import {
  USER_ACTION_LIST,
  REVIEWER_ACTION_LIST,
  USER_ACTION_LIST_ATT,
  REVIEWER_ACTION_LIST_ATT,
} from './consts';

const transformActionList = (formData) => {
  var newData = formData;
  newData[USER_ACTION_LIST_ATT] = formData[USER_ACTION_LIST];
  newData[REVIEWER_ACTION_LIST_ATT] = formData[REVIEWER_ACTION_LIST];
  delete newData[USER_ACTION_LIST];
  delete newData[REVIEWER_ACTION_LIST];
  return newData;
};

export default transformActionList;
