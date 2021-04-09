import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const getSelectedGym = ({ tag }) => {
  return new Promise((resolve, reject) => {
    const API_URL = publicRuntimeConfig.API_URL;
    const url = `${API_URL}/gym/tag?tag=${tag}`;
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
