import {
  USER_ACTION_LIST,
  REVIEWER_ACTION_LIST,
  USER_ACTION_LIST_ATT,
  REVIEWER_ACTION_LIST_ATT,
  COMPLETED,
} from './consts';

const renameAndDelete = (form, old_name, new_name) => {
  form[new_name] = form[old_name];
  delete form[old_name];
};

const addDefaultCompleted = (form, attribute) => {
  if (!form[attribute]) return;
  form[attribute].forEach((actionItem) => {
    if (
      !actionItem.hasOwnProperty(COMPLETED) &&
      !actionItem.hasOwnProperty('_destroy')
    ) {
      actionItem[COMPLETED] = false;
    }
  });
};

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

  renameAndDelete(formData, USER_ACTION_LIST, USER_ACTION_LIST_ATT);
  renameAndDelete(formData, REVIEWER_ACTION_LIST, REVIEWER_ACTION_LIST_ATT);

  addDefaultCompleted(formData, USER_ACTION_LIST_ATT);
  addDefaultCompleted(formData, REVIEWER_ACTION_LIST_ATT);
  return formData;
};

export default transformActionList;
