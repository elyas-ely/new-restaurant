import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { selectBasketItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import Categories from "../components/categories";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  BellIcon,
  MagnifyingGlassIcon,
  Bars3BottomRightIcon,
} from "react-native-heroicons/outline";

export default function Header() {
  const basketItems = useSelector(selectBasketItems);
  const navigation = useNavigation();

  const cartHandler = () => {
    if (basketItems.length !== 0) {
      navigation.navigate("Cart");
    }
  };
  const openDrawer = () => {
    // Open the drawer directly from the navigation object
    navigation.openDrawer();
  };

  return (
    <View className=" bg-slate-100 ">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="space-y-6 pt-10"
      >
        {/* Cart and bell icon */}
        <View className="px-3 flex-row justify-between  mb-2">
          <TouchableOpacity
            className="  rounded-full relative mt-1"
            onPress={() => cartHandler()}
          >
            <Icon.ShoppingCart
              height={40}
              width={40}
              strokeWidth="2.5"
              stroke={themeColors.bgColor(1)}
            />
            <View
              className="w-7 h-7  absolute -top-1 -right-1 items-center justify-center rounded-full border-2 border-slate-100"
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Text className="text-xs">{basketItems.length}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Bars3BottomRightIcon
              size={hp(5)}
              color="gray"
              onPress={() => openDrawer()}
            />
          </TouchableOpacity>
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            افغان رسټورانټ ته ښه راغلاست
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3) }}
              className="font-semibold text-neutral-600"
            >
              ستاسو فرمایش زموږ کیفیت
            </Text>
          </View>
        </View>

        {/* search bar */}

        <View className="mx-4 flex-row items-center  rounded-full bg-black/5 p-[6px]">
          <View className="flex-row items-center space-x-1 border-0 border-r-2 px-4 border-r-gray-300">
            <Text className="text-gray-600">کندهار</Text>
            <Icon.MapPin height="20" width="20" stroke="gray" />
          </View>
          <TextInput
            placeholder="خواړه ..."
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 mr-3 pl-3 tracking-wider"
          />
          <TouchableOpacity
            className=" rounded-full p-3"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="white" />
          </TouchableOpacity>
        </View>
        <Categories />
      </ScrollView>
    </View>
  );
}
