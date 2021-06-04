export const getUser = (user) => {
  return {
    type: 'GET_USER',
    value: user,
  };
};
