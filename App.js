import { StatusBar } from 'expo-status-bar';
import {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from "aws-amplify-react-native";
import { getUser } from './src/graphql/queries';
import { createUser } from "./src/graphql/mutations";
import awsconfig from './src/aws-exports'

Amplify.configure({...awsconfig, Analytics: {disabled: true}});

 function App() {

  useEffect(() =>{
    const syncUser = async () =>{
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});

      const userData = await API.graphql(graphqlOperation(getUser, {id: authUser.attributes.sub}));
      if(userData.data.getUser){
        return;
      }
        const newUser = {
          id: authUser.attributes.sub,
          name: authUser.attributes.phone_number,
          status: "Hey, i am using WhatsApp",
        };
        console.log(newUser);
        const variables = {
          input: newUser,
        }
        await API.graphql(graphqlOperation(createUser, variables))
      

    }
syncUser();
  }, [])
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});

export default  withAuthenticator(App)