import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import tw from "tailwind-react-native-classnames";

const ChatScreen = () => {
  return (
    <SafeAreaView style={tw.style("pt-5")}>
      <Header title="Chat" />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;
