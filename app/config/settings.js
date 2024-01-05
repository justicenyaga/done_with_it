import { releaseChannel } from "expo-updates";

const settings = {
  dev: {
    apiUrl: "http://192.168.121.228:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.121.228:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.121.228:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
