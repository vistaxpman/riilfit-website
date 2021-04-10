import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const getClient = ({ id, email }) => {
  return new Promise((resolve, reject) => {
    const API_URL = publicRuntimeConfig.API_URL;
    const url = `${API_URL}/client/:id?id=${id}&email=${email}`;
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
