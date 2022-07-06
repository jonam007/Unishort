import React, {useEffect, useState, useLayoutEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import CustomListItem from './CustomListItem';
import {Avatar} from 'react-native-elements';
import {auth, db} from '../firebase';
const Forum = ({navigation}) => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    function handleBackButton() {
      navigation.push('Base');
      return true;
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => backHandler.remove();
  }, [navigation]);

  const SignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate('login');
    });
  };
 
  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => {
      setChats(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Forum',
      headerStyle: {backgroundColor: '#7c0357'},
      headerTitleStyle: {color: '#ffba52',alignSelf:'center',marginLeft:'50%',width:'100%',postion:'relative' },
      headerTintColor: '#8a08fc',
      headerLeft: () => (
        <SafeAreaView style={{marginLeft: 20}}>
          <TouchableOpacity onPress={SignOut}>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
            />
          </TouchableOpacity>
        </SafeAreaView>
      ),
      headerRight: () => (
        <View style={styles.icons}>
            
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camera" style={{marginLeft:'50%'}} size={24} color="#ffba52" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddChat')}
            activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color="#ffba52" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const enterChat = (id, chatName) => {
    navigation.navigate('Chat', {
      id,
      chatName,
    });
  };
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        {chats.map(({id, data: {chatName}}) => (
          <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}  />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forum;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    marginRight: 30,
  },
  container: {
    height: '100%',
  },
});
