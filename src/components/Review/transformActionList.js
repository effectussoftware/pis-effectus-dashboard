import {
  USER_ACTION_LIST,
  REVIEWER_ACTION_LIST,
  USER_ACTION_LIST_ATT,
  REVIEWER_ACTION_LIST_ATT,
} from './consts';

const transformActionList = (formData) => {
  // eslint-disable-next-line no-unused-expressions
  formData[`${USER_ACTION_LIST}_toDestroy`]?.forEach((id) => {
    formData[USER_ACTION_LIST][id] = { _destroy: true, id };
  });
  delete formData[`${USER_ACTION_LIST}_toDestroy`];

  // eslint-disable-next-line no-unused-expressions
  formData[`${REVIEWER_ACTION_LIST}_toDestroy`]?.forEach((id) => {
    formData[REVIEWER_ACTION_LIST][id] = { _destroy: true, id };
  });
  delete formData[`${REVIEWER_ACTION_LIST}_toDestroy`];

  formData[USER_ACTION_LIST_ATT] = formData[USER_ACTION_LIST];
  formData[REVIEWER_ACTION_LIST_ATT] = formData[REVIEWER_ACTION_LIST];
  delete formData[USER_ACTION_LIST];
  delete formData[REVIEWER_ACTION_LIST];
  return formData;
};

export default transformActionList;
