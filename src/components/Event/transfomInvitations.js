import { INVITATIONS } from './consts';

export default ({
  [INVITATIONS]: invitations = [],
  [`${INVITATIONS}_destroy`]: invitations_destroy = [],
  ...rest
}) => ({
  [INVITATIONS]:
    invitations?.concat(invitations_destroy).map(({ id, _destroy }) =>
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
