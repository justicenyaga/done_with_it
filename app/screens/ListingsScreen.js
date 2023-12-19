import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";

import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {error && (
          <>
            <Text style={{ textAlign: "center" }}>
              Couldn't retrieve the listings
            </Text>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}

        <ActivityIndicator visible={loading} />
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
