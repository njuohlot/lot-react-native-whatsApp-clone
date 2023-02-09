import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import BG from "../../assets/images/BG.png";
import Message from "../compponents/Message";
import { message } from "../../assets/message";
import InputBox from "../compponents/InputBox";
import { useRoute, useNavigation } from "@react-navigation/native";
const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'android' ? 110 : 60}
      style={styles.bg}
    >
      <ImageBackground source={BG} style={styles.bg}>
        <FlatList
          data={message}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={(item) => item.id}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
    marginVertical: 5,
  },
});

export default ChatScreen;
