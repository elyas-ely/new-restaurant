import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { emptyBasket } from "../slices/basketSlice";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  // const restaurant = useSelector(selectRestaurant);
  const restaurant = {
    lat: 31.6178149,
    lng: 65.768908,
  };
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(emptyBasket());
    navigation.navigate("RootDrawer");
  };
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={"افغان رسټورانټ"}
          description="ستاسو د خوښی خواړه"
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <TouchableOpacity className="absolute right-4 top-2"></TouchableOpacity>
        <View className="flex-row justify-between px-5 pt-10">
          <Image
            className="h-24 w-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              د رسولو وخت
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              په ۲۰ - ۳۰ دقیقو کی
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              ستاسو اډر په لاره دی
            </Text>
          </View>
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View className="flex-row items-center space-x-3 ml-3">
            <TouchableOpacity
              onPress={handleCancel}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X stroke={"red"} strokeWidth="5" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth="1"
              />
            </TouchableOpacity>
          </View>
          <View className="flex-1 mr-3">
            <Text className="text-lg font-bold text-white">الیاس</Text>
            <Text className="text-white font-semibold">ستاسو ډرایور</Text>
          </View>
          <View
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            className="p-1 rounded-full"
          >
            <Image
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/bikeGuy.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
