import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Keyboard, Platform} from 'react-native';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  BackHandler
} from 'react-native';
import {Avatar} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase'
import {db, auth} from '../firebase';
const Chat = ({navigation, route}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  
  let name = route.params.chatName;
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'left',
      headerTitleStyle: {color: '#8a08fc', marginRight: 80},
      headerStyle: {backgroundColor: '#fff'},
      headerTitle: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Avatar
            rounded
            source={{uri:messages[0]?.data.photoURL ||
               'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg',
            }}
          />
          <Text style={{color: 'purple', marginLeft: 10, fontWeight: '700'}}>
            {name}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 10}} onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="purple" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            width: 70,
            justifyContent: 'space-between',
            marginRight: 30,
          }}>
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="purple" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="phone" size={24} color="purple" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation,messages]);
  const sendMessage = () => {
    Keyboard.dismiss();
    db.collection('chats').doc(route.params.id).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });

    setInput('');
  };
 
  useEffect(() => {
    function handleBackButton() {
      navigation.goBack();
      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => backHandler.remove();
  }, [navigation]);
  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .doc(route.params.id)
      .collection('messages')
      .orderBy('timestamp','asc')
      .onSnapshot((snapshot)=>
      setMessages(
          snapshot.docs.map(
              doc=>({
                  id:doc.id,
                  data:doc.data(),
                  
              })
          )
      )
      )
    return unsubscribe
  },[route]);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
        style={styles.innerContainer}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
       
          <ScrollView contentContainerStyle={{paddingTop:15}}>
            {messages.map(({id, data ,timestamp}) => (
             data.email === auth.currentUser.email ?(
                <View key={id} style={styles.receiver}>
                  <Avatar 
                  containerStyle={{
                    position:'absolute',
                    bottom:-15,
                    right:-5 
                  }}
                  rounded
                  size={30}
                  source={{
                    uri:data.photoURL
                  }}
                  />
                  <Text style={styles.receiverTxt}>{data.message}</Text>
                  

                </View>
             ):(
                <View key={id} style={styles.sender}>
                  <Avatar
                  containerStyle={{
                    position:'absolute',
                    bottom:-15,
                    left:-5 
                  }}
                  rounded
                  size={30}
                  source={{
                    uri:data.photoURL
                  }}
                  />
                  
                  <Text style={styles.senderName}>{data.displayName}</Text>
                  <Text style={styles.senderTxt}>{data.message}</Text>
                  <Text style={styles.senderTime}>{(data.timestamp.toDate().toDateString())}</Text>
                </View>
             )
            ))}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Start messaging"
              style={styles.textbox}
              value={input}
              onChangeText={text => setInput(text)}
            />

            <TouchableOpacity
              onPress={sendMessage}
              activeOpacity={0.5}
              style={{marginTop: 10}}>
              <FontAwesome name="paper-plane" size={24} color="purple" />
            </TouchableOpacity>
          </View>
        </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
  },
  senderTime:{
    left:5,
    paddingRight:10,
    fontSize:9,
    fontWeight:'100',
    color:"white"
  },
  receiverTime:{
    color: '#000000',
    fontWeight:'500',
    marginLeft:20,
    fontSize:10
  },
  receiver:{
    padding:15,
    backgroundColor:"#ECECEC",
    alignSelf:"flex-end",
    borderRadius:20,
    marginRight:15,
    marginBottom:20,
    maxWidth:'90%',
    position:"relative",
  },
  sender:{
    padding:15,
    backgroundColor:"#cc0099",
    alignSelf:"flex-start",
    borderRadius:20,
    marginRight:10,
    marginLeft:10,
    marginBottom:20,
    maxWidth:'100%',
    color:'white',
    position:"relative",
  },
  senderText:{
    color:'white',
    fontWeight:'800',
    marginLeft:10,
    marginBottom:15,
    fontSize:70,
    position:"relative",
  },
  receiverTxt:{
    color: '#000000',
    fontWeight:'500',
    marginLeft:120
  },
  senderName:{
    left:5,
    paddingRight:10,
    fontSize:9,
    fontWeight:'100',
    color:"white"
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
  textbox: {
    bottom: 0,
    flex: 1,

    backgroundColor: '#ECECEC',

    marginRight: 20,
    borderRadius: 10,
    color: 'purple',
  },
});
