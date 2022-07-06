import {BackHandler, Linking, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ScholarData from './ScholarData';
import {Button, Card, Image} from 'react-native-elements';
import {BASE_URL} from "@env"
const Scholar = ({navigation}) => {
const [data,setData]=useState([])


  const handlePress = i => {
    Linking.openURL(i.more);
  };


  useEffect(() => {
    function handleBackButton() {
      navigation.goBack();
      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => backHandler.remove();
  }, [navigation]);


  useEffect(()=>{
    fetch(`${BASE_URL}Scholarship`)
        .then(res => res.json())
        .then(data => setData(data))
  })


  return (
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={{borderRadius:15}}>
          <Card.Title>SCHOLARSHIP DETAILS</Card.Title>
          <Card.Divider />
          {data.map((i, l) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="stretch"
                  source={{uri: i.image}}
                />
                <Text style={styles.name}>{i.title}</Text>
                <Text style={styles.name}>{i.amt}</Text>
                <Text style={styles.name}>{i.type}</Text>
                <Text style={styles.name}>{i.time}</Text>
                <Button
                  buttonStyle={styles.button}
                  title="Apply Now"
                  onPress={() => handlePress(i)}
                />
                <Card.Divider />
              </View>
            );
          })}
        </Card>
      </View>
    </ScrollView>
  );
};

export default Scholar;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginLeft: '30%',
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    color: 'black',
  },

  button: {
    width: '50%',
    alignSelf: 'center',
    margin: 20,
    backgroundColor: '#f07400',
    padding: 15,
    borderRadius: 17,
  },
});
