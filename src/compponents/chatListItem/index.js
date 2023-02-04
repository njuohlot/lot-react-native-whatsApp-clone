import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ChatListitem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            Lot
          </Text>
          <Text style={styles.subTitle}>7:30</Text>
        </View>

        <Text style={styles.subTitle} numberOfLines={2}>
          Hello Message
        </Text>
      </View>
    </View>
  );
};

export default ChatListitem;

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
