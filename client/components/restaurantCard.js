import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function RestaurantCard({
  id,
  title,
  imgUrl,
  rating,
  type,
  address,
  description,
  dishes,
  reviews,
  lng,
  lat,
}) {
  // console.log(urlFor(imgUrl).url());
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      // style={{ transform: [{ scaleX: -1 }] }}
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          title,
          imgUrl,
          rating,
          type,
          address,
          description,
          dishes,
          lng,
          reviews,
          lat,
        });
      }}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          transform: [{ scaleX: -1 }],
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image
          className="h-40 w-64 rounded-t-3xl"
          source={{ uri: urlFor(imgUrl).url() }}
        />

        <View className="px-4 pb-4 space-y-1 flex items-end">
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-xs ">
              <Text className="font-semibold text-gray-700">خوندور {type}</Text>
            </Text>
          </View>
          <View className="flex-row items-center ">
            <Text className="text-gray-700 text-xs"> د مختلفو ډولونو سره</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
