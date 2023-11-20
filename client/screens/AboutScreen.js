import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/pizza.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>About Our Restaurant</Text>
      <Text style={styles.description}>
        Welcome to Afghan Restaurant, where we strive to provide a delightful
        dining experience. Our chefs use the finest ingredients to create
        mouthwatering dishes that will satisfy your taste buds.
      </Text>
      <Text style={styles.description}>Address: Aino Mena</Text>
      <Text style={styles.description}>Phone: 0705171411</Text>
      <Text style={styles.description}>Email: afghanrestaurant@gmail.com</Text>
      <Text style={styles.description}>
        Follow us on social media: @afghan_restaurant
      </Text>
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Special Features</Text>
        <Text style={styles.featureItem}>✨ Outdoor Seating</Text>
        <Text style={styles.featureItem}>✨ Live Music on Weekends</Text>
        <Text style={styles.featureItem}>✨ Catering Services Available</Text>
      </View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.menuButtonText}>View Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  featuresContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "stretch",
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  menuButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  menuButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default AboutScreen;
