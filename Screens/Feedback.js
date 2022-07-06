import React, {useState, useLayoutEffect, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {Button, Image, Input, Text} from 'react-native-elements';
import {db, auth} from '../firebase';
import Blogs from './Blogdata';
import Mailer from 'react-native-mail';
const Feedback = ({navigation}) => {

  useEffect(() => {
    function handleBackButton() {
      navigation.goBack();
      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => BackHandler.remove();
  }, [navigation]);



  const handleEmail = () => {
    Mailer.mail(
      {
        subject: `Feedback from  ${auth.currentUser.displayName}`,
        recipients: ['adminunishort@gmail.com'],

        body: body,
        customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
        isHTML: true,
        attachments: [
          {
            // Specify either `path` or `uri` to indicate where to find the file data.
            // The API used to create or locate the file will usually indicate which it returns.
            // An absolute path will look like: /cacheDir/photos/some image.jpg
            // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
            path: '', // The absolute path of the file from which to read data.
            uri: '', // The uri of the file from which to read the data.
            // Specify either `type` or `mimeType` to indicate the type of data.
            type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            mimeType: '', // - use only if you want to use custom type
            name: '', // Optional: Custom filename for attachment
          },
        ],
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {
              text: 'Ok',
              onPress: () => console.log('OK: Email Error Response'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('CANCEL: Email Error Response'),
            },
          ],
          {cancelable: true},
        );
      },
    );
  };
  const [body, setBody] = useState('');

  return (
      <>
      <Text h3 style={{marginBottom: 20, marginLeft: 130}}>
          Feedback{' '}
        </Text>
      <Image
          source={require('../Screens/images/email.png')}
          style={styles.image}
        />
        <Text h4 h4Style>Enter the feedback below</Text>
         <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.margin}>
        

        

        <ScrollView style={styles.innerContainer}>
          <Input
            placeholder="Feedback"
            autofocus
            type="text"
            value={body}
            multiline={true}
            onChangeText={body => setBody(body)}
          />
        </ScrollView>
      </View>

      <Button
        title="Send"
        buttonStyle={styles.innerbtn}
        raised
        onPress={handleEmail}
        containerStyle={styles.btn}
      />
    </KeyboardAvoidingView>
      </>
   
  );
};

export default Feedback;

const styles = StyleSheet.create({


image:{
width:'95%',
height:'45%',
justifyContent:'center',
marginLeft:'3%',
borderRadius:10
},

innerbtn:{
    backgroundColor: 'violet',
    color:'white',
    paddingBottom:13,
    alignItems:'center',
    
},
btn:{
    width:300,
    backgroundColor:'#15752f',
    color:'#FF5733',
    marginBottom:70,
    marginLeft:'10%'
    
}

});
