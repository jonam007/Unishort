import {AsyncStorage, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {db, auth} from '../../firebase';

const UniImage = props => {
  const handlePress = props => {
    console.log(props.name);
    db.collection(auth.currentUser.displayName)
      .where('name', '==', props.name)
      .get()
      .then(querySnapshot => {
        querySnapshot.docs[0].ref.delete();
        console.log('deleted');
      });
  };

  return (
    <>
      <Image
        source={{
          uri: props.logo,
        }}
        style={{width: '100%', height: 180}}
      />
      <TouchableOpacity
        style={{
          position: 'relative',
          right: 20,
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
          alignSelf: 'flex-end',
          zIndex: 1,
        }}
        onPress={() => handlePress(props)}>
        <MaterialCommunityIcons name="delete" size={25} color={'pink'} />
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
          Cost:{props.cost}
        </Text>
        <View style={{marginTop: '7%'}}>
          <Text style={{color: 'black', marginRight: '10%'}}>
            Averagecost: {props.averagecost}
          </Text>
          <Text style={{color: 'black', marginRight: '10%'}}>
            Country: {props.country}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Unisave = ({navigation}) => {
  const [data, setData] = useState([]);
  const [save, setSave] = useState([]);

  useEffect(() => {
    db.collection(auth.currentUser.displayName).onSnapshot(snapshot => {
      setData(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });

    setSave(data);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:'Shortlist'
    });
  }, [navigation]);


  // useEffect(()=>{

  //   const Save = async () => {
  //     try {
  //       const values = await AsyncStorage.getItem('Uni');
  //       setData(JSON.parse(values))

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   Save()

  // },[])

  return (
    <>
      <ScrollView>
        {save.length == 0 ? (
          <Text
            h3
            style={{
              textAlign: 'center',
              marginTop: '50%',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            👋🏼 No Data Currently
          </Text>
        ) : (
          <>
            {save &&
              save.map(i => (
                <>
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{marginBottom: 30}}>
                    <Card
                      style={{
                        marginTop: 10,
                        padding: 15,
                      }}>
                      <UniImage
                        name={i.data.name}
                        averagecost={i.data.averagecost}
                        cost={i.data.Cost}
                        country={i.data.country}
                        fb={i.data.Facebook}
                        insta={i.data.Insta}
                        about={i.data.About}
                        applifee={i.data.ApllicationFee}
                        location={i.data.LocationDetails}
                        residing={i.data.Residing}
                        logo={i.data.logo}
                      />
                      <UniInfo
                        name={i.data.name}
                        averagecost={i.data.averagecost}
                        cost={i.data.Cost}
                        country={i.data.country}
                      />
                      <Button
                        onPress={() =>
                          navigation.navigate('UniDetails', {
                            name: i.data.name,
                            logo: i.data.logo,
                            cost: i.data.cost,
                            country: i.data.country,
                            avg: i.data.averagecost,
                            applifee: i.data.applifee,
                            location: i.data.Location,
                            residing: i.data.residing,
                            fb: i.data.fb,
                            insta: i.data.insta,
                            about: i.data.About,
                          })
                        }
                        title="Learn More"
                        buttonStyle={{marginTop: '5%'}}
                      />
                    </Card>
                  </TouchableOpacity>
                </>
              ))}
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Unisave;

const styles = StyleSheet.create({});
