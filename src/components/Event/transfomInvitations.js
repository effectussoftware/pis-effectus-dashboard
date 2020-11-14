import { INVITATIONS } from './consts';

export default ({ [INVITATIONS]: invitations, ...rest }) => ({
  [INVITATIONS]:
    invitations?.map(({ id }) => ({
      user_id: id,
    })) || [],
  ...rest,
});
