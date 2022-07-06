import {StyleSheet, Text, View, Linking} from 'react-native';
import React, { useLayoutEffect } from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {Image, Card, SocialIcon} from 'react-native-elements';
const CourseDetails = ({navigation, ...props}) => {
  let {
    name,
    image,
    details,
    structure,
    scholar,
    work,
  } = props.route.params;

  

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"MoreInfo"
    
   
    })
  })





  return (
    <ScrollView>
      <Card>
        <Image
          source={{
            uri: `${image.slice(19)}`,
          }}
          style={{width: '100%', height: 180}}
        />
        <Text
          style={{marginLeft: '8%', marginTop: '15%', lineHeight: 25,fontSize:21,flexWrap:'wrap',color:"black"}}
          h1
          h1Style={{color: 'red',}}>
          {name}
        </Text>
        <Text
          style={{marginLeft: '8%', marginTop: '15%', lineHeight: 25,fontSize:21,flexWrap:'wrap',color:"black"}}
          h1
          h1Style={{color: 'red',}}>
              Overview :{'\n'}
          {details}
        </Text>
        <Text
          style={{marginLeft: '8%', marginTop: '15%', lineHeight: 25,fontSize:21,flexWrap:'wrap',color:"black"}}
          h1
          h1Style={{color: 'red',}}>
              Course Structure:{'\n'}
          {structure}
        </Text>
        <Text
          style={{marginLeft: '8%', marginTop: '15%', lineHeight: 25,fontSize:21,flexWrap:'wrap',color:"black"}}
          h1
          h1Style={{color: 'red',}}>
              Top Scholarship:{'\n'}
          {scholar}
        </Text>
        <Text
          style={{marginLeft: '8%', marginTop: '15%', lineHeight: 25,fontSize:21,flexWrap:'wrap',color:"black"}}
          h1
          h1Style={{color: 'red',}}>
              Work Opportunities:{'\n'}
          {work}
        </Text>

      </Card>
    </ScrollView>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({});
