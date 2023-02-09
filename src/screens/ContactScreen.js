import {FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import ContactListitem from '../compponents/contactListItem';
import {API, graphqlOperation} from 'aws-amplify'
import {listUsers} from '../graphql/queries'
const ContactScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    API.graphql(graphqlOperation(listUsers)).then((result) =>{
      
      setUsers(result.data?.listUsers?.items)
     
    })

  }, [])
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <ContactListitem users={item} />}
      keyExtractor={(item) => item.id}
      style={{ backgroundColor: "white" }}
    />
  );
}

export default ContactScreen