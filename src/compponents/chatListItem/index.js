import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)
const ChatListitem = ({chat}) => {
  const navigation = useNavigation();
  return (

    <Pressable style={styles.container} onPress={() => navigation.navigate('Chat', {id: chat.id, name: chat.users.name})}>
      <Image
        source={{
          uri: chat.users.imageUri
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.users.name}
          </Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
        </View>

        <Text style={styles.subTitle} numberOfLines={2}>
          {chat.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    height: 50,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    shadowRadius: 55,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 4 },
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  subTitle: {
    color: "gray",
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  image: {
    width: 60,
    borderRadius: 30,
    marginRight: 10,
    height: 60,
  },
});
export default ChatListitem;
