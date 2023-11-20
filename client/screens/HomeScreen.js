import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  t,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/categories";
import FeatureRow from "../components/featuredRow";
import Header from "../components/header";
import { getFeaturedRestaurants } from "../api";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import BasketIcon from ".././components/basketIcon";
import { selectBasketItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { storeData } from "../utils/restaurantStorage";
import { getData } from "../utils/restaurantStorage";
import { removeData } from "../utils/restaurantStorage";

export default function HomeScreen() {
  // console.log(getFeaturedRestaurants());
  const basketItems = useSelector(selectBasketItems);

  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await getData("featuredCategories");
      console.warn("got data for restaurants");
      if (storedData) {
        // Data is already available, use it
        setFeaturedCategories(storedData);
      } else {
        // Data is not available, fetch and store it
        console.error("Data is not availible for restaurants");
        try {
          const fetchedData = await getFeaturedRestaurants();
          setFeaturedCategories(fetchedData);
          storeData("featuredCategories", fetchedData);
        } catch (error) {
          console.error("Error fetching and storing data for restaurants:");
        }
      }
    };

    fetchData();
  }, []);

  const cartHandler = () => {
    if (basketItems.length !== 0) {
      navigation.navigate("Cart");
    }
  };

  // const allRestaurants = featuredCategories[0];
  // console.warn(allRestaurants);

  // const removeDat = () => {
  //   return removeData("featuredCategories");
  // };
  // removeDat();
  return (
    <>
      <Header />
      <SafeAreaView className=" flex-1 bg-slate-100  relative">
        <StatusBar
          // backgroundColor={themeColors.bgColor(0.2)}
          barStyle="dark-content"
        />

        {/* main */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            {
              // paddingBottom: 20,
            }
          }
          style={{ scaleX: -1 }}
        >
          {/* featured */}
          <View className="">
            {featuredCategories?.map((category) => {
              return (
                <FeatureRow
                  key={category._id}
                  id={category._id}
                  title={category.name}
                  restaurants={category.restaurants}
                  description={category.description}
                  featuredCategory={category._type}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
