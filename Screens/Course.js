import { AsyncStorage, BackHandler, StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import university from '../android/university'
import { Chip } from 'react-native-paper';
import {Image, Text ,Card} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Categories from './Categories';
import Courses from './Coursesdata';
import {BASE_URL} from "@env"

const CourseImage = props => {
  let images=props.image.slice(19)
  return (
    <>
    
      <Image
        source={{
          uri: images,
        }}
        style={{width: '100%', height: 180}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
          marginTop: 20,
          marginLeft: 20,
        }}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color={'pink'}
        />
      </TouchableOpacity>
    </>
  );
};

const CourseInfo = props => {
 
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black',alignSelf:'center',marginLeft:'15%'}}>
          {props.name}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>
          {props.details}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey',paddingTop:10}}>
          Category: {props.category}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey',paddingTop:10}}>
          Country: {props.country}
        </Text>
      </View>
      
    </View>
    
  );
};




const Course = ({navigation}) => {
  const [data,setData]=useState([])
  const [country, setCountry] = useState();
  const [filters,setFilters]=useState('')
    useLayoutEffect(()=>{
        navigation.setOptions({
        
          gesturesEnabled: false,
        })
           
      },[navigation])
      useEffect(() => {
        function handleBackButton() {
          navigation.goBack();
          return true;
        }
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    
        return () => BackHandler.remove();
      }, [navigation]);
    

      useEffect(()=>{
        fetch(`${BASE_URL}Courses`)
            .then(res => res.json())
            .then(data => setData(data))
      },[])
      
      setInterval(async () => {
        try {
          const value = await AsyncStorage.getItem('Country');
          setCountry(value);
      
        } catch (error) {
          console.log(error);
        }
      }, 5000);


    const newdata = data.filter((i)=> i.id == country )
      
      console.log(newdata)
  return (
    <>
     <Categories />
    {/* <ScrollView horizontal={true} style={{marginTop:'7%',marginBottom:'5%'}} contentContainerStyle={{flexDirection:'row'}}>
     <Chip style={{padding:'2%'}}  icon="information" selected = {true} onPress={() => setFilters('Science')}>Science</Chip>
     <Chip icon="information" selected = {true} onPress={() => setFilters('Business')}>Business</Chip>
     <Chip icon="information" selected = {true} onPress={() => setFilters('Medical')}>Medical</Chip>
     <Chip icon="information" selected = {true} onPress={() => setFilters('Arts')}>Arts</Chip>
     <Chip icon="information" selected = {true} onPress={() => setFilters('Economics')}>Economics</Chip>
     
     </ScrollView> */}
   
     <ScrollView>
       
    {newdata.length == 0 ? (
      <Text
        h3
        style={{
          textAlign: 'center',
          marginTop: '50%',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        👋🏼 No Data Currently
      </Text>
    ) : (
      <>
        
       
        {newdata &&
          newdata.map(i => (
            <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}
            onPress={()=> navigation.navigate("CourseDetails",{
              name:i.name,
              image:i.image,
              details:i.details,
              structure:i.structure,
              scholar:i.scholar,
              work:i.work,
             
            })}>
            
             <Card
             containerStyle={{borderRadius:15,width:'90%'}}
               style={{
                 marginTop: 15,
                 padding: 15,
               }}>
               <CourseImage   image={i.image} />
               <CourseInfo name={i.name}  details={i.details} category={i.category} country={i.country}/>
             </Card>
           </TouchableOpacity>
          ))}
      </>
    )}
  </ScrollView>
    </>
   
  )
}

export default Course

const styles = StyleSheet.create({})