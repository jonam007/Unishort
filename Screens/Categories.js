import React, {useEffect, useState} from 'react';
import {
  AsyncStorage,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const items = [
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_the_United_States_%281818-1819%29.svg/1200px-Flag_of_the_United_States_%281818-1819%29.svg.png?20220125174946',
    text: 'USA',
    id: 1,
  },
  {
    image: 'https://www.worldatlas.com/r/w960-q80/img/flag/ca-flag.jpg',
    text: 'Canada',
    id: 2,
  },
  {
    image:
      'https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg',
    text: 'UK',
    id: 3,
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png',
    text: 'Germany',
    id: 4,
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/383px-Flag_of_Australia_%28converted%29.svg.png',
    text: ' Australia',
    id: 5,
  },
];

const Categories = () => {
  const [country, setCountry] = useState('');

  const handlePress = async item => {
    try {
      await AsyncStorage.setItem('Country', JSON.stringify(item.id));
    } catch (error) {
      console.log('SetItem error ', error);
      return null;
    }
  };

  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 30,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={{alignItems: 'center', marginRight: 30}}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: 50,
                  height: 40,
                  borderRadius: 50,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{fontSize: 13, fontWeight: '700', color: 'black'}}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});

{
  items.map((i, item) => {});
}
