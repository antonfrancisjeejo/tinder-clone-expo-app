import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

const MatchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { loggedInProfile, userSwiped } = route.params;
  return (
    <View style={tw.style("h-full bg-red-500 pt-20", { opacity: 0.89 })}>
      <View style={tw.style("justify-center px-10 pt-20")}>
        <Image
          source={{
            uri: "https://e9digital.com/love-at-first-website/images/its-a-match.png",
          }}
          style={tw.style("h-20 w-full")}
        />
        <Text style={tw.style("text-white text-center mt-5")}>
          You and {userSwiped.displayName} have liked each other
        </Text>

        <View style={tw.style("flex-row justify-evenly mt-5")}>
          <Image
            style={tw.style("h-32 w-32 rounded-full")}
            source={{
              uri: loggedInProfile.photoURL,
            }}
          />
          <Image
            style={tw.style("h-32 w-32 rounded-full")}
            source={{
              uri: userSwiped.photoURL,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={tw.style("bg-white m-5 px-10 py-8 rounded-full mt-20")}
        onPress={() => {
          navigation.goBack();
          navigation.navigate("Chat");
        }}
      >
        <Text style={tw.style("text-center")}>Send a Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchScreen;
