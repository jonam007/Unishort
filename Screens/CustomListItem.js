import React, {useState, useEffect, useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {db} from '../firebase';
const CustomListItem = ({id, chatName, enterChat}) => {
  const [chat, setChat] = useState([]);
  
  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => setChat(snapshot.docs.map(doc => doc.data())));
    return unsubscribe;
  }, []);
  return (
    <View>
      <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
        <Avatar
          rounded
          source={{
            uri:
              chat?.[0]?.photoURL ||
              'https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.font}>{chatName}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            {chat?.[0]?.displayName}: {chat?.[0]?.message}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};
export default CustomListItem;

const styles = StyleSheet.create({
  font: {
    fontWeight: '700',
    color:'black'
  },
});
