export default ({ invitations_attributes, ...rest }) => ({
  invitations_attributes: invitations_attributes.map(({ id }) => ({
    user_id: id,
  })),
  ...rest,
});
