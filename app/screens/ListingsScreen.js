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
import useApi from "../hooks/useApi.";

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {error && (
          <>
            <Text style={styles.error}>Couldn't retrieve the listings</Text>
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
              thumbnailUrl={item.images[0].thumbnailUrl}
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
  error: {
    alignSelf: "center",
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
