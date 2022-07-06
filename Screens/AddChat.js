import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, Input} from 'react-native-elements';
import {db} from '../firebase';
const AddChat = ({navigation}) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    navigation.setOptions({
      title: 'AddChats',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {color: '#8a08fc', marginRight: 30},
      headerTintColor: '#8a08fc',
    });
  }, [navigation]);

  const addChats = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) =>
        alert(error)
       );
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="add chats"
        value={input}
       
        onChangeText={(text) => setInput(text)}
      />
      <Button buttonStyle={{width:100,backgroundColor:'#8a08fc'}} title="AddChat" onPress={addChats} />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:300,
    left:50
  }
});
