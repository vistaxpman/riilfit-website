import path from "path";
import getConfig from "next/config";

export const combineData = (data, params) => {
  const obj = {};
  for (const property in params) {
    obj[property] = params[property];
  }
  return { ...data, ...obj };
};

export const serverPath = (staticFilePath) => {
  return path.join(
    getConfig().publicRuntimeConfig.STATIC_FOLDER,
    staticFilePath
  );
};

export const getImage = (imagePath) => {
  return `${getConfig().publicRuntimeConfig.ASSETS_URL}/${imagePath}`
}
