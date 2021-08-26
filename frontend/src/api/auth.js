import axios from "axios";

export const register = async (registration, registrationCallback) => {
  axios.post('/api/v1/register', { registration })
  .then(function (response) {
    localStorage.setItem('token', response.data.token);
    registrationCallback();
    return response.data || null;
  })
  .catch(function (error) {
    console.error({ error });
    return null;
  })
}

export const logIn = async (logIn, loginCallback) => {
  axios.post('/api/v1/logIn', { logIn })
  .then(function (response) {
    localStorage.setItem('token', response.data.token)
    loginCallback();
    return response.data || null;
  })
  .catch(function (error) {
    console.error({ error });
    return null;
  })
}

export const logOut = async (callback) => {
  localStorage.removeItem('token');
  callback();
}