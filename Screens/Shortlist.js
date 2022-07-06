import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Shortlist = ({navigation}) => {
  useEffect(() => {
    function handleBackButton() {
      navigation.goBack();
      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => BackHandler.remove();
  }, [navigation]);



  return (
    <View>
      <Text>Shortlist</Text>
    </View>
  )
}

export default Shortlist

const styles = StyleSheet.create({})