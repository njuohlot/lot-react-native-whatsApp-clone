import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
const InputBox = () => {

    const onSend = () =>{
        console.warn('Sending a new message: ', newMessage)
        setNewMessage('');
    }
    const [newMessage, setNewMessage] = useState('')
  return (
    <View style={styles.container}>
      <AntDesign size={20} name="plus" color={"royalblue"} />
      <TextInput style={styles.input} value={newMessage} onChangeText={setNewMessage}/>
      <MaterialIcons size={16} name="send" color={"white"} style={styles.send} onPress={onSend}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'whitesmoke',
        padding: 5,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'

    },
    input:{
        backgroundColor: 'white',
        padding:5,
        flex: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10, 

    },
    send:{
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
    },
})
export default InputBox