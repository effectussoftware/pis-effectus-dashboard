const TOKEN = 'token';

export default {
  login: async (googleUser) => {
    const { id_token: token } = googleUser.getAuthResponse();
    localStorage.setItem(TOKEN, token);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: 'POST',
        body: JSON.stringify({
          token,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.ok ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem(TOKEN);
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem(TOKEN) ? Promise.resolve() : Promise.reject(),
  checkError: () =>
    localStorage.getItem(TOKEN) ? Promise.resolve() : Promise.reject(),
  getPermissions: () =>
    localStorage.getItem(TOKEN) ? Promise.resolve() : Promise.reject(),
};
