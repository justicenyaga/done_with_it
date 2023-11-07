import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Text from "../components/Text";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale!</Text>
        <Text style={styles.price}>$100</Text>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/justice.jpg")}
            title="Justice Nyaga"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
