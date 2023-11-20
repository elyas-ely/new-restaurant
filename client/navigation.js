import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import CustomDrawer from "./components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { themeColors } from "./theme";

import { getItem } from "./utils/asyncStorage";
import WelcomeScreen from "./screens/WelcomeScreen";

function EmptyScreen() {
  return <View />;
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function RootDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      // drawerPosition="right" // Set the drawer position to 'right'
      screenOptions={{
        drawerPosition: "right",
        drawerActiveBackgroundColor: themeColors.bgColor(1),
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerInactiveBackgroundColor: "#fff",
        drawerLabelStyle: {
          marginRight: -25,
          // fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}
    >
      {/* <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
          drawerLabel: ({ focused, color, size }) => (
            <Text style={{ marginLeft: 10, fontSize: 18, color }}>
              اصلي پاڼه
            </Text>
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
          drawerLabel: ({ focused, color, size }) => (
            <Text style={{ marginLeft: 10, fontSize: 18, color }}>
              زموږ باره کي
            </Text>
          ),
        }}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Setting"
        component={EmptyScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
          drawerLabel: ({ focused, color, size }) => (
            <Text style={{ marginLeft: 10, fontSize: 18, color }}>تنظیمات</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem("onboarded");
    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  };

  if (showOnboarding == null) {
    return null;
  }

  // if (showOnboarding) {
  //   return <OnboardingScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        //  --------------------------------------- main -------
        // initialRouteName={showOnboarding ? "Onboarding" : "RootDrawer"}
        // initialRouteName={showOnboarding ? "Onboarding" : "Welcome"}
        //  --------------------------------------- Test -------
        initialRouteName={showOnboarding ? "Welcome" : "Welcome"}
        //  --------------------------------------- Extra test -------
        // initialRouteName={showOnboarding ? "Welcome" : "RootDrawer"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="RootDrawer" component={RootDrawer} />
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Welcome"
          options={{ presentation: "modal", headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="About"
          options={{ presentation: "modal", headerShown: false }}
          component={AboutScreen}
        />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal", headerShown: false }}
          component={CartScreen}
        />
        <Stack.Screen
          name="PreparingOrder"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
