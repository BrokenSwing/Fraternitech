import axios from 'axios';

const FB_API_ENDPOINT = 'https://graph.facebook.com/v6.0';
const APP_ID = '286354825532260';
const SECRET_KEY = 'bf0f7da6d4edcc6bd1063d862ac39ff7';
const APP_KEY = `${APP_ID}|${SECRET_KEY}`;

function debugToken(token: string) {
  return axios.get(`${FB_API_ENDPOINT}/debug_token`, {
    params: {
      access_token: APP_KEY,
      input_token: token,
    },
    responseType: 'json',
  });
}

function userInfo(userId: string) {
  return axios.get(`${FB_API_ENDPOINT}/${userId}`, {
    params: {
      access_token: APP_KEY,
      fields: 'id,first_name,last_name',
    },
    responseType: 'json',
  });
}

export default { debugToken, userInfo };
