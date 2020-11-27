import { INVITATIONS } from './consts';

export default ({ [INVITATIONS]: invitations, ...rest }) => ({
  [INVITATIONS]:
    invitations?.map(({ id, _destroy }) =>
      _destroy
        ? {
            id,
            _destroy,
          }
        : {
            user_id: id,
          }
    ) || [],
  ...rest,
});
