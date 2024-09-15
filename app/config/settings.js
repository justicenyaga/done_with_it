import { releaseChannel } from "expo-updates";

const settings = {
  dev: {
    apiUrl: "https://done-with-it-ba080be64146.herokuapp.com/api",
  },
  staging: {
    apiUrl: "https://done-with-it-ba080be64146.herokuapp.com/api",
  },
  prod: {
    apiUrl: "https://done-with-it-ba080be64146.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
