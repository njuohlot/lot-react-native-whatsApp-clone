import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ContactListitem = ({ users }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Chat", { id: users.id, name: users.name })
      }
    >
      <Image
        source={{
          uri: users.image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
       
          <Text style={styles.name} numberOfLines={1}>
            {users.name}
          </Text>
          <Text style={styles.subTitle}>{users.status}</Text>
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
    alignItems: 'center'
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
  content: {
flex: 1,
  },
 
  subTitle: {
    color: "gray",
  },
});
export default ContactListitem;
