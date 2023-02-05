import {ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import BG from '../../assets/images/BG.png'
import Message from '../compponents/Message'
import {message} from '../../assets/message'
import InputBox from '../compponents/InputBox'
const ChatScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.bg}>
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
}


const styles = StyleSheet.create({
    bg:{
        flex: 1
    },
    list:{
        padding: 10,
        marginVertical: 5
    }

});

export default ChatScreen