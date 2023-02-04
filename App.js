import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListitem from './src/compponents/chatListItem';
export default function App() {
  return (
    <View style={styles.container}>
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      <ChatListitem />
      
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
