import { FlatList, Text } from 'react-native'
import React from 'react'
import ChatListitem from '../compponents/chatListItem'
import { chat } from '../../assets/data'
const ChatsScreen = () => {
  return (
    
   
      <FlatList
        data={chat}
        renderItem={({ item }) => <ChatListitem chat={item} />}
        keyExtractor={(item) => item.id}
      />
    
  );
}

export default ChatsScreen