import {AsyncStorage, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Image, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Categories from './Categories';
import { TextInput } from 'react-native-paper';
import Search from './Search';
import {db, auth} from '../firebase';
import {BASE_URL} from "@env"

const UniImage = props => {
  
  var [local,setLocal]=useState([])
  const handlePress = async (props) => {
    
   console.log(props)

    db.collection(auth.currentUser.displayName).add(

      {

        id:props.id,
        country:props.country,
        name:props.name,
        Location:props.location,
        About:props.about,
        Cost:props.cost,
        averagecost:props.averagecost,
        ApllicationFee:props.applifee,
        LocationDetails:props.location,
        Facebook:props.fb,
        Insta:props.insta,
        logo:props.logo,

      }

    )
   

  };


  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: '100%', height: 180}}
      />
      <Text style={{color:"red"}}>{props.top}</Text>
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
            Averagecost:{props.averagecost == "Empty" ? 'Normal'  : props.averagecost} 
          </Text>
          <Text style={{color: 'black', marginRight: '10%'}}>
            Country:  {props.country} 
          </Text>
        </View>
      </View>
    </View>
  );
};

const University = ({navigation}) => {
  const [university,setUniversity]=useState([])
  const [country,setCountry]=useState()
  const [data, setData] = useState([]);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      gesturesEnabled: false,
    });
  }, [navigation]);

  setInterval(async () => {
    try {
      const value = await AsyncStorage.getItem('Country');
      setCountry(value);
  
    } catch (error) {
      console.log(error);
    }
  }, 5000);




  useEffect(()=>{
    fetch(`${BASE_URL}University`)
        .then(res => res.json())
        .then(data => setUniversity(data))

    const filterdata =  university.filter((i) => i.id == country );
    setData(filterdata)
  },[country])


  console.log(data.Residing)

  const Search = ()=>{

    navigation.navigate('Search')

  }
  
  return (
    <>
    <TouchableOpacity 
    onPress={()=>Search()}
    
    style={{height:'12%'}}
    >
    <TextInput
      label="                        🔍    Search"
      outlineColor='red'
      disabled={true} 
    />
    </TouchableOpacity>
      <Categories />
      <ScrollView>
        {data.length == 0 ? (
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
            {data &&
              data.map((i) => 
              
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
                    <UniImage 
                    id={i.id}
                    image={i.logo}
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
                   top={i.top}
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
  );
};

export default University;

const styles = StyleSheet.create({});
