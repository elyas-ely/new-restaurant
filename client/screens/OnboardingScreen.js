import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Welcome");
    setItem("onboarded", "1");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/animation_lmbvnth2.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "مختلف خواړه ",
            subtitle: "په افغان رسټورانټ کی هر قسم خواړه ترلاسه کولای سی",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/animation_lmbvqv87.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "مسلکي اشپزان",
            subtitle: "د مسلکي اشپزانو په مټ نوی او خوندور خواړه تجربه کړی",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/animation_lmbvp20p.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "زموژ سره تماس",
            subtitle:
              "تاسی کولای سی چی زموژ ادرس ته د ګوګل مپ او د موبایل دلاری لاسرسی پیدا کړی!",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
});
