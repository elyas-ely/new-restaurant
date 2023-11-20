import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import DishRow from "../components/dishRow";
import BasketIcon from "../components/basketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant, setRestaurant } from "../slices/restaurantSlice";
import { emptyBasket } from "../slices/basketSlice";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  let dispatch = useDispatch();
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      type,
      address,
      description,
      dishes,
      lng,
      lat,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    // if (restaurant && restaurant.id != id) {
    //   dispatch(emptyBasket());
    // }
    dispatch(
      setRestaurant({
        id,
        title,
        imgUrl,
        rating,
        type,
        address,
        description,
        dishes,
        lng,
        lat,
      })
    );
  }, []);
  return (
    <>
      <BasketIcon />
      <SafeAreaView className="flex-1 mt-5">
        {/* <ScrollView> */}
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-slate-100 -mt-12 pt-6 relative"
        >
          <View className="px-6   ">
            <Text className="text-3xl font-bold">{title}</Text>
            <Text className="text-gray-500 mb-3">{description}</Text>
            <Text className=" py-4 text-2xl font-bold">مینیو</Text>
          </View>
        </View>
        <View className="flex-1  ">
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 90,
            }}
            // style={{ transform: [{ scaleX: -1 }] }}
            data={dishes}
            keyExtractor={(dish) => dish._id}
            renderItem={({ item: dish }) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
              />
            )}
          />
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
}
