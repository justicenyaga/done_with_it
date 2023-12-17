import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
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
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
