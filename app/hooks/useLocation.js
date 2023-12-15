import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestBackgroundPermissionsAsync();
    if (!granted) return;

    const {
      coords: { longitude, latitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ longitude, latitude });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
