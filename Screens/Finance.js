import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
class Finance extends Component {

  
    render() {
      
      return <WebView source={{ uri: 'https://www.wemakescholars.com/' }} />;
    }
  }

export default Finance

const styles = StyleSheet.create({})