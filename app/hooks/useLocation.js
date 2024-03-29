import { useState, useEffect } from "react";
import * as Location from "expo-location";

import logger from "../util/logger";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setLocation("Location not enabled");
        return;
      }

      const lastKnownPosition = await Location.getLastKnownPositionAsync();
      if (!lastKnownPosition) {
        setLocation("No last known location");
        return;
      }
      const {
        coords: { longitude, latitude },
      } = lastKnownPosition;
      setLocation({ longitude, latitude });
    } catch (error) {
      logger.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
