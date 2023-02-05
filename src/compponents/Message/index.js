import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Message = ({message}) => {

  const isMyMessage = () => {
  return message.user.id === "u1"
  }
  return (
    <View style={[styles.container, {
      backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
      alignSelf: isMyMessage() ?'flex-start' : 'flex-end',
    }]}>
      <Text>{message.content}</Text>
      <Text style={styles.time}>{message.createdAt}</Text>
    </View>
  );
}
 const styles = StyleSheet.create({
  container:{
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  time:{
    color: 'gray',
    alignSelf: 'flex-end'
  }
 })
export default Message