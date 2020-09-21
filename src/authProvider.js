const TOKEN = 'token';

export default {
  login: (googleUser) => {
    const { id_token: token } = googleUser.getAuthResponse();
    localStorage.setItem(TOKEN, token);
    return Promise.resolve();
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
