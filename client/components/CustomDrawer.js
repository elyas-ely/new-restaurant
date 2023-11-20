import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

const CustomDrawer = (props) => {
  // const [activeButton, setActiveButton] = useState(null);

  // const backgroundColors = {
  //   bgColor: (isActive) => (isActive ? themeColors.bgColor(1) : "#fff"),
  //   textColor: (isActive) => (isActive ? "#fff" : "#333"),
  // };
  // const navigation = useNavigation();

  // const handleButtonPress = (buttonName) => {
  //   console.log(`${buttonName} Pressed`);
  //   setActiveButton(buttonName);
  //   navigation.navigate(buttonName);
  // };

  return (
    <SafeAreaView className="flex-1 bg-slate-100 ">
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <ImageBackground
          className="flex-1 items-end p-4"
          source={require("../assets/images/pizza.png")}
          // style={{ padding: 20 }}
        >
          {/* Dark Overlay */}
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here
            }}
          />
          <Image
            source={require("../assets/images/avatar.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text className="font-bold text-white mb-1 text-xl">
            افغان رسټورانټ
          </Text>
          <View>
            <Text className="text-white ">
              خوندور خواړه د مختلفو خوندونو سره
            </Text>
            {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
          </View>
        </ImageBackground>

        {/* ------- Main ------------ */}
        <View className="flex-1, p-2">
          <DrawerItemList {...props} />
          {/* <TouchableOpacity
            className="p-4 rounded-lg flex-row  mb-2 justify-end items-center"
            style={{
              backgroundColor: backgroundColors.bgColor(
                activeButton === "RootDrawer"
              ),
            }}
            onPress={() => handleButtonPress("RootDrawer")}
          >
            <Text
              className="mr-4 font-bold text-base"
              style={{
                color: backgroundColors.textColor(
                  activeButton === "RootDrawer"
                ),
              }}
            >
              اصلي پاڼه
            </Text>
            <Ionicons
              name="home-outline"
              size={22}
              // color={themeColors.bgColor(1)}
              color={backgroundColors.textColor(activeButton === "RootDrawer")}
            />
          </TouchableOpacity> */}

          {/* Button 2 */}
          {/* <TouchableOpacity
            className="p-4 rounded-lg flex-row  mb-2 justify-end items-center"
            style={{
              backgroundColor: backgroundColors.bgColor(
                activeButton === "About"
              ),
            }}
            onPress={() => handleButtonPress("About")}
          >
            <Text
              className="mr-4 font-bold text-base "
              style={{
                color: backgroundColors.textColor(activeButton === "About"),
              }}
            >
              زموږ په اړه
            </Text>
            <Ionicons
              name="chatbox-ellipses-outline"
              size={22}
              // color={themeColors.bgColor(1)}
              color={backgroundColors.textColor(activeButton === "About")}
            />
          </TouchableOpacity> */}

          {/* Button 3 */}
          {/* <TouchableOpacity
            className="p-4 rounded-lg flex-row  mb-2 justify-end items-center"
            style={{
              backgroundColor: backgroundColors.bgColor(
                activeButton === "button3"
              ),
            }}
            onPress={() => handleButtonPress("button3")}
          >
            <Text
              className="mr-4 font-bold text-base "
              style={{
                color: backgroundColors.textColor(activeButton === "button3"),
              }}
            >
              تنظیمات
            </Text>
            <Ionicons
              name="settings-outline"
              size={22}
              // color={themeColors.bgColor(1)}
              color={backgroundColors.textColor(activeButton === "button3")}
            />
          </TouchableOpacity> */}
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                // fontFamily: "Roboto-Medium",
                marginRight: 5,
              }}
            >
              شریک یی کړی
            </Text>
            <Ionicons name="share-social-outline" size={22} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                // fontFamily: "Roboto-Medium",
                marginRight: 5,
              }}
            >
              ووځی
            </Text>
            <Ionicons name="exit-outline" size={22} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
