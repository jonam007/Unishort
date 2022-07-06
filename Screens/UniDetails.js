import {StyleSheet, Text, View, Linking} from 'react-native';
import React, { useLayoutEffect } from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {Image, Card, SocialIcon} from 'react-native-elements';
const UniDetails = ({navigation, ...props}) => {
  let {
    name,
    logo,
    cost,
    avg,
    applifee,
    location,
    residing,
    fb,
    insta,
    about,
  } = props.route.params;
  console.log(residing);

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"Details"
    
   
    })
  })



  const Facebook = (fb) => {
    Linking.openURL(
      `${fb}`,
    ).catch(err => console.error("Couldn't load page", err));
  };
  const Insta = () => {
    Linking.openURL(`${insta}`).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <ScrollView>
      <Card>
        <Image
          source={{
            uri: `${logo}`,
          }}
          style={{width: '100%', height: 180}}
        />
        <Text
          style={{alignSelf:'center', marginTop: '15%', lineHeight: 25,fontSize:21,flexWrap:'wrap',color:'black',fontSize:18}}
        >
          {name}
        </Text>
        <Text
          style={{ marginTop: '15%', lineHeight: 25,color:'black',width:'100%'}}
          h1
          h1Style={{color: 'red',fontSize:24}}>
          About:
          {'\n'}
          {about}
        </Text>
        <Text
          style={{ marginTop: '15%', lineHeight: 25,width:'100%',color:'black'}}
          h1
          h1Style={{color: 'red'}}>
          Location:
          {'\n'}
          {location}
        </Text>
        <Text
          style={{marginLeft: '15%', marginTop: '15%', lineHeight: 25,color:'black'}}
          h1
          h1Style={{color: 'red'}}>
          Social Media:
          {'\n'}
        </Text>
        <SocialIcon title="Facebook" button type="facebook" onPress={()=>Facebook(fb)} />
        <SocialIcon title="Instagram" button type="instagram" onPress={()=>Insta(insta)} />
      </Card>
    </ScrollView>
  );
};

export default UniDetails;

const styles = StyleSheet.create({});
