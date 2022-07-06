import { StyleSheet, Text, TouchableWithoutFeedback, View ,Image} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Blogs from './Blogdata';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Card, Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {db, auth} from '../firebase';

const Blog = ({navigation}) => {

  const [data,setData]=useState([])
  const [blog,setBlog]=useState([])


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Blogs',
      headerRight:()=>(
        <>
        <TouchableWithoutFeedback
        onPress={()=>navigation.navigate('Addblog')}
        
        >

        <MaterialIcons  style={{marginRight:'10%'}} name="add" color="#ffba52" size={26} />


        </TouchableWithoutFeedback>
         
        </>
      )
      
    });
  });


useEffect(() => {
  db.collection("Blogs").onSnapshot(snapshot => {
    setData(
      snapshot.docs.map(doc => ({
        data: doc.data(),
      })),
    );
  });
 
 
},[]);




data.map((i)=>{
  blog.push(i.data)
})

  return (
    <>
    <ScrollView>
      
       
          {blog.map((u, i) => {
            return (
              <View key={i}>
                <Card containerStyle={{borderRadius:20,marginBottom:8}}>
                <View style={{flexDirection:'row'}}>
                
                <Image
                  style={styles.image2}
                  resizeMode="stretch"
                  source={{ uri: u.dp }}
                /> 
                <Text style={styles.name}>{u.name}</Text>
                </View>
         
          <Card.Divider />
          <Card.Title>{u.genre}</Card.Title>
                <Image
                  style={styles.image}
                  resizeMode="stretch"
                  source={{ uri: u.image }}
                />
                <Text style={styles.name} >{u.title}</Text>
                <Text style={styles.name} >{u.content}</Text>
                <Text style={styles.name}>{u.date}</Text>
                <TouchableOpacity containerStyle={{position:'absolute',alignSelf:'flex-end',flexDirection:'row'}}>
                <MaterialIcons  name="favorite-border" color="#ffba52" size={26} />
                </TouchableOpacity>
                
               
              </Card>        
              </View>
            );
          })}
        
      </ScrollView>
      </>
  )
}


export default Blog

const styles = StyleSheet.create({

  image: {
    width: '90%',
    height: 190,
    marginLeft: 12,
    alignSelf:'center',
    marginBottom:'2%',
    borderRadius:10
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    color:'black',
    margin:3,
    padding:5
  },
  image2: {
    width: '15%',
    height: 40,
    marginLeft: 12,
    alignSelf:'center',
    marginBottom:'2%',
    borderRadius:90
  },

})