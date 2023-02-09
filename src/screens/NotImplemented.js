import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const NotImplemented = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NotImplemented</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/capybara+copy.png"
        }}
        resizeMode={"contain"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  image: {
    width: '80%',
    aspectRatio: 2 / 1,
  },
});

export default NotImplemented