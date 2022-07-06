import React, {useLayoutEffect, useEffect} from 'react';
import WebView from 'react-native-webview';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
 
  
} from 'react-native';

const Splash = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  useEffect(() => {

      setTimeout(()=>{
          navigation.push('login')
      },5000)
  }, [])
  return (
    <ImageBackground
    source={require("../Screens/images/logo.png")}
      style={{height: '100%', width: '100%',position:'absolute',zIndex:2}}>
           {/* <WebView
    style={{ marginTop: 20, width: '100%', height:'25%',position:'absolute',backgroundColor:'purple' }}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    source={{ uri: "https://www.youtube.com/embed/jIVjWFOY6r4" }}
  /> */}
      <View>
      

        <Text style={styles.name}>Unishort</Text>
      </View>
     
      
    </ImageBackground>
   
  );
};

export default Splash;

const styles = StyleSheet.create({
  name: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop:690,
    fontSize: 19,
    fontWeight: '300',
  },
  backgroundVideo: {
      flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
