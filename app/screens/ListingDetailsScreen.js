import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "../components/Text";
import { ListItem } from "../components/lists";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>

          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/justice.jpg")}
              title="Justice Nyaga"
              subTitle="5 Listings"
            />
          </View>

          <ContactSellerForm listing={listing} />
        </View>
      </View>
    </KeyboardAvoidingView>
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
