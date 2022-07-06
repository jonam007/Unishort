import React, { useState , useLayoutEffect,useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet,  View ,KeyboardAvoidingView,StatusBar, ScrollView ,BackHandler} from 'react-native'
import {Button,Image,Input,Text} from 'react-native-elements'
import {auth} from "../firebase"
const Register = ({navigation}) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [imageUrl,setImageUrl]=useState("")
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle:"Login",
            
        })
    },[navigation])
    const register = ()=>{
        
        auth
    .createUserWithEmailAndPassword(email,password)
        .then((authUser) =>{
            authUser.user.updateProfile     ({
                displayName:name,
                photoURL:
                  imageUrl || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg "
            })
        })
        .catch((error) => alert(error.message))
        navigation.navigate('login')

}
useEffect(() => {
    function handleBackButton() {
      navigation.push('login');
      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => backHandler.remove();
  }, [navigation]);
    return ( 
      
        
            <KeyboardAvoidingView  style={styles.container}>
             
            <StatusBar style="dark"/>
            <View style={styles.margin} >
            <Text h3 style={{marginBottom:20,marginLeft:50}}>Create An Account</Text>
           
         
            <ScrollView style={styles.innerContainer}>
            
                    <Input placeholder="Full Name" autofocus type="text" value={name} onChangeText={(text)=>setName(text)}/>
                    <Input placeholder="Email" autofocus type="email" value={email} onChangeText={(text)=>setEmail(text)}/>
                    <Input placeholder="Password" autofocus type="email" secureTextEntry value={password} onChangeText={(text)=>setPassword(text)}/>
                    <Input placeholder="ProfilePhotoUrl"  type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register}/>
                    
                    
                </ScrollView>
               
            
            </View>
           
             <Button title="Register" buttonStyle={styles.innerbtn}  raised onPress={register} containerStyle={styles.btn}/>
           
            </KeyboardAvoidingView>
         
            
        )
    }
export default Register

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
        backgroundColor: 'red',
        color:'white',
        paddingBottom:13,
        alignItems:'center',
        
    },
    btn:{
        width:300,
        backgroundColor:'#FF5733',
        color:'#FF5733',
        marginBottom:70,
        
    }
})

