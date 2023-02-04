import {ImageBackground, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import BG from '../../assets/images/BG.png'
import Message from '../compponents/Message'
import {message} from '../../assets/message'
const ChatScreen = () => {
  return (
    <ImageBackground source={BG} style={styles.bg}>
      <FlatList
        data={message}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item) =>item.id}
        style={styles.list}
        inverted
      />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
    bg:{
        flex: 1
    },
    list:{
        padding: 10
    }

});

export default ChatScreen