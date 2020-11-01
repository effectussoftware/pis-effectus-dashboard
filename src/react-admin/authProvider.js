import request from './httpClient';

import { USER_INFO } from '../constants';

export default {
  login: async (googleUser) => {
    const { id_token: token } = googleUser.getAuthResponse();
    return request('auth/login', {
      method: 'POST',
      body: JSON.stringify({
        token,
      }),
    });
  },
  logout: () => {
    localStorage.removeItem(USER_INFO);
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem(USER_INFO) ? Promise.resolve() : Promise.reject(),
  checkError: () =>
    localStorage.getItem(USER_INFO) ? Promise.resolve() : Promise.reject(),
  getPermissions: () =>
    localStorage.getItem(USER_INFO) ? Promise.resolve() : Promise.reject(),
};
