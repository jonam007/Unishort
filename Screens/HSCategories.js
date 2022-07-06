import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const items = [
  {
    
    text: 'Universtites',
    icon:'apartment',
    page:'University'

  },
  {
    
    text: 'Courses',
    icon:'library-books',
    page:'Course'
  },
  {
    
    text: 'Forum',
    icon:'question-answer',
    page:'Forum'
  },
  {
    
    text: 'blog',
    icon:'rss-feed',
    page:'Blog'
  },
  {
    
    text: 'Scholarship',
    icon:'star-rate',
    page:'Scholarship'
  },
];


const HSCategories = ({navigation}) => {
  
    const handlePress = i => {
        navigation.navigate(i.page);
        console.log(i.page)
      };
  return (
      <View
        style={{
            marginTop:5,
            backgroundColor:"rgba(223, 101, 137, 0.9)",
            paddingVertical:30,    
       
        }}
      
      >
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {items.map((i,l)=>(
          <TouchableOpacity onPress={() => handlePress(i)}>
          <View style={{alignItems:'center',marginRight:30}}>
          {/* <Image
            source={{uri:item.image}}
            style={{
              width: 50,
              height: 40,
              borderRadius:50,
              resizeMode: 'contain',
            }}
          /> */}
           <MaterialIcons style={{
               width: 50,
               height: 40,
               borderRadius:80,
               alignSelf:'center',
               backgroundColor:'#7c0357',
               justifyContent:'center',
               padding:10,
               left:4
           }} name={i.icon} color="#ffba52" size={26} />
          <Text style={{fontSize: 13, fontWeight: '700',color:'#fff'}}>{i.text}</Text>
        </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
};

export default HSCategories;

const styles = StyleSheet.create({});

{items.map((i, item) => {
    
  })}