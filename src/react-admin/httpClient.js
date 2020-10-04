import { fetchUtils } from 'react-admin';

import { USER_INFO, UID, ACCESS_TOKEN, CLIENT } from '../constants';

const { fetchJson } = fetchUtils;

const baseUrl = `${process.env.REACT_APP_API_URL}/admin`;

export default async (url, options) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem(USER_INFO)) || {};
    const headers = new Headers(userInfo);

    const response = await fetchJson(`${baseUrl}/${url}`, {
      ...options,
      headers,
    });

    const uid = response.headers.get(UID);
    const accessToken = response.headers.get(ACCESS_TOKEN);
    const client = response.headers.get(CLIENT);

    if (uid && accessToken && client)
      localStorage.setItem(
        USER_INFO,
        JSON.stringify({
          [UID]: uid,
          [ACCESS_TOKEN]: accessToken,
          [CLIENT]: client,
        })
      );

    return response;
  } catch (error) {
    console.error(error);
  }
};
