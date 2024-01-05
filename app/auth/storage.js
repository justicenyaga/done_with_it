import * as Storage from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import logger from "../util/logger";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await Storage.setItemAsync(key, authToken);
  } catch (error) {
    logger.log(error);
  }
};

const getToken = async () => {
  try {
    return await Storage.getItemAsync(key);
  } catch (error) {
    logger.log(error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await Storage.deleteItemAsync(key);
  } catch (error) {
    logger.log(error);
  }
};

export default { getToken, getUser, removeToken, storeToken };
