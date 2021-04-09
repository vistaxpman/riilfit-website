import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const login = ({ payload }) => {
  return new Promise((resolve, reject) => {
    const API_URL = publicRuntimeConfig.API_URL;
    const url = `${API_URL}/users/login`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
