import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import OnboardingScreen from "./screens/OnboardingScreen";

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
      drawerPosition="right" // Set drawerPosition to 'right'
      drawerStyle={{
        transform: [{ translateX: -5 }], // Adjust the translateX value as needed
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="About"
        component={About}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen name="Settings" component={EmptyScreen} />
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
          component={About}
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
