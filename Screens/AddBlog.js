import React, { useState , useLayoutEffect,useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet,  View ,KeyboardAvoidingView,StatusBar, ScrollView ,BackHandler} from 'react-native'
import {Button,Image,Input,Text} from 'react-native-elements'
import {db, auth} from '../firebase';
import Blogs from './Blogdata';
const AddBlog = ({navigation}) => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [genre,setGenre]=useState("")
    const [image,setImage]=useState("")
    const [date,setDate]=useState("")
   
   const handleSave = ()=>{
    db.collection('Blogs').add(

        {
  
          name:auth.currentUser.displayName,
          dp:auth.currentUser.photoURL,
          image:image,
          title:title,
          content:content,
          genre:genre,
          date:date,
  
        }
  
      )

      navigation.navigate('Blog')
     
  
    };
  
   
    return ( 
      
        
            <KeyboardAvoidingView  style={styles.container}>
             
            <StatusBar style="dark"/>
            <View style={styles.margin} >
            <Text h3 style={{marginBottom:20,marginLeft:50}}>Add Blog </Text>
           
         
            <ScrollView style={styles.innerContainer}>
            
                    <Input placeholder="Title" autofocus type="text" value={title} onChangeText={(text)=>setTitle(text)}/>
                    <Input placeholder="Date" autofocus type="text"  value={date} onChangeText={(text)=>setDate(text)}/>
                    <Input placeholder="PhotoUrl"  type="text" value={image} onChangeText={(text) => setImage(text)} />
                    <Input placeholder="genre"  type="text" value={genre} onChangeText={(text) => setGenre(text)} />
                    <Input placeholder=" Type your Content"  type="text" multiline={true} value={content} onChangeText={(text) => setContent(text)} />
                    
                    
                </ScrollView>
               
            
            </View>
           
             <Button title="Save" buttonStyle={styles.innerbtn}  raised onPress={handleSave} containerStyle={styles.btn}/>
           
            </KeyboardAvoidingView>
         
            
        )
    }
export default AddBlog

const styles = StyleSheet.create({
       container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#fff',
        
       

    },
    margin:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        padding:10,
        marginTop:120
    },
    innerContainer:{
        width:340,
        height:"200%",
        flex:1
        
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
        
    }
})

