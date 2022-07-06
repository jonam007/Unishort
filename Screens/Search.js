import { StyleSheet,  View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput,Card } from 'react-native-paper';
// import university from '../android/university';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Image, Text} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BASE_URL} from "@env"
const UniImage = props => {
    var [local,setLocal]=useState([])
   
    const handlePress = async (props) => {
      local.push(props)
     console.log(local)
      
      try {
        await AsyncStorage.setItem('Uni', JSON.stringify(local));
      } catch (error) {
        console.log('SetItem error ', error);
        return null;
      }
    };
  

  
    return (
      <>
        <Image
          source={{
            uri: props.image,
          }}
          style={{width: '100%', height: 180}}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            marginTop: 20,
            marginLeft: 20,
          }} onPress={()=>handlePress(props)}>
          <MaterialCommunityIcons name="heart-outline" size={25} color={'pink'} />
        </TouchableOpacity>
      </>
    );
  };
  
  const UniInfo = props => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              alignSelf: 'center',
              marginLeft: '15%',
            }}>
            {props.name}
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>
            {props.cost}
          </Text>
          <View style={{marginTop: '12%'}}>
            <Text style={{color: 'black', marginRight: '10%'}}>
              Averagecost: {props.averagecost} 
            </Text>
            <Text style={{color: 'black', marginRight: '10%'}}>
              Country:  {props.country} 
            </Text>
          </View>
        </View>
      </View>
    );
  };
  



const Search = ({navigation}) => {
const[data,setData] = useState([])
const [text, setText] = React.useState("");
const [search,setSearch] = useState([])

 const name = 'Harvard University'



 useEffect(()=>{
  fetch(`${BASE_URL}University`)
      .then(res => res.json())
      .then(data => setData(data))  
},[])



const handleChange = (text)=>{
  setText(text)
  data.map((i)=>{
   
    if(i.name == text){
      setSearch([i])
    }
  })
}
 



console.log(search)

// useEffect(()=>{
 
//   if (data.name == text){
//     console.log(data)
//   }
// })


console.log(data)
  return (
    <>
        <TextInput
      label="Search"
      value={text}
      onChangeText={text => handleChange(text)}
    />
 <ScrollView>
        {search.length == 0 ? (
          <Text
            h3
            style={{
              textAlign: 'center',
              marginTop: '50%',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            👋🏼 No Result Found......
          </Text>
        ) : (
          <>
            {search &&
              search.map((i) => 
              
              (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{marginBottom: 30}}
                  onPress={() =>
                    navigation.navigate('UniDetails', {
                      name: i.name,
                      logo: i.logo,
                      cost: i.Cost,
                      country:i.country,
                      avg: i.averagecost,
                      applifee: i.ApllicationFee,
                      location: i.LocationDetails,
                      residing: i.Residing,
                      fb: i.Facebook,
                      insta: i.Insta,
                      about: i.About,
                    })
                  }>
                  <Card
                    style={{
                      marginTop: 10,
                      padding: 15,
                    }}>
                    <UniImage image={i.logo}
                   name={i.name}
                   averagecost={i.averagecost}
                   cost={i.Cost}
                   country={i.country}
                   fb={i.Facebook} 
                   insta= {i.Insta}
                   about= {i.About}
                   applifee= {i.ApllicationFee}
                   location= {i.LocationDetails}
                   residing= {i.Residing}
                   logo= {i.logo}
                    />
                    <UniInfo
                      name={i.name}
                      averagecost={i.averagecost}
                      cost={i.Cost}
                      country={i.country}
                    />
                  </Card>
                </TouchableOpacity>
              ))}
          </>
        )}
      </ScrollView>


    </>
  )
}

export default Search

const styles = StyleSheet.create({})