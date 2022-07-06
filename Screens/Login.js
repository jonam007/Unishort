import React, {useState, useEffect, useLayoutEffect} from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  BackHandler,
  ScrollView,
  }

  from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import {auth} from '../firebase';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onBackPress =()=>{
   BackHandler.exitApp()
    
    return true
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
    header: ()=> null,
      gesturesEnabled: false,
    })
       
  },[navigation])
  useEffect(() => {
    
    const unSubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        navigation.navigate('Base');
      } 
    });
    return () => {
      unSubscribe();
    };
  }, []);
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',onBackPress)
  },[])
  
  const SignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => alert('Please Enter UserName and Password'));
  };
  
  return (
    
   
   
      <KeyboardAvoidingView 
         style={styles.container}>
      
      <Image
        source={require("../Screens/images/login.png")}
        style={{width: 100, height: 100, borderRadius: 30, marginBottom: 100,marginTop: 100,}}
      />
      <View style={styles.innerContainer}>
        <Input
          placeholder="Email"
          autofocus
          type="email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={SignIn}
        />
        <View style={{height: 10}}></View>
      
     
      </View>
      <Button title="Login" buttonStyle={{backgroundColor:"#8a08fc",}} onPress={SignIn} containerStyle={styles.btn} />
      <Button
        buttonStyle={{color: 'white', padding: 8, borderRadius: 40,}}
        onPress={() => navigation.navigate('Register')}
        title="Register"
        type="outline  "
        containerStyle={styles.btn}
      />
      <View style={{height: 100}} />
       
       </KeyboardAvoidingView>
      
    
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  innerContainer: {
    width: 300,
    marginBottom: 70,
    
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 10,
    shadowColor: 'purple',
    shadowOffset: { width: 10, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    
  },
  btn: {
    justifyContent: 'space-between',
    borderRadius: 20,
    
    width: 250,
    height: 48,
    padding: 5,
    
  },
});
