import React, {useLayoutEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from './Screens/Login';
import Register from './Screens/Register';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './Screens/Home';
import Blog from './Screens/Blog';
import More from './Screens/More';
import University from './Screens/University';
import AddChat from './Screens/AddChat';
import Chat from './Screens/Chat';
import Forum from './Screens/Forum';
import UniDetails from './Screens/UniDetails';
import Course from './Screens/Course';
import CourseDetails from './Screens/CourseDetails';
import Scholar from './Screens/Scholar';
import Shortlist from './Screens/Shortlist';
import Unisave from './Screens/SavedScreens/Unisave';
import Blogsave from './Screens/SavedScreens/Blogsave';
import Search from './Screens/Search';
import AddBlog from './Screens/AddBlog';
import Splash from './Screens/Splash';
import Finance from './Screens/Finance';
import Feedback from './Screens/Feedback';

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const topTab = createMaterialTopTabNavigator();
  const Base = ({navigation}) => {
    useLayoutEffect(() => {
      navigation.setOptions(
        {
          header: () => null,
        },
        [navigation],
      );
    }, [navigation]);
    return (
      <Tab.Navigator
        screenOptions={globalStyle}
        initialRouteName="Home"
        activeColor="#fff" //#f0edf6
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#7c0357', color: '#f0edf6'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={navigation => ({
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialIcons name="home" color="#ffba52" size={26} />
            ),
          })}
        />

     
        <Tab.Screen
          name="Contact"
          component={University}
          options={{
            tabBarLabel: 'University',
            tabBarIcon: () => (
              <MaterialIcons name="location-city" color="#ffba52" size={24} />
            ),
          }}
        />
           
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: () => (
              <MaterialIcons name="list" color="#ffba52" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const SavedTab = () => {
    return (
      <>
        <topTab.Navigator
          tabBarOptions={{
            scrollEnabled: true,
            activeTintColor: '#0763f7',
            pressColor: '#0763f7',
            allowFontScaling: true,

            labelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              margin: 0,
              padding: 0,
            },
          }}
          style={{  
            width: windowWidth,
            fontSize: 16,
            display: 'flex',
            fontWeight: 'bold',
          }}
          screenOptions={globalStyle}>
          <topTab.Screen name="Unisave" component={Unisave} />
          <topTab.Screen name="Blogsave" component={Blogsave} />
        </topTab.Navigator>
      </>
    );
  };

  const globalStyle = {
    headerStyle: {backgroundColor: '#7c0357'},
    headerTitleStyle: {color: '#ffba52',marginLeft:'35%'},
    headerTintColor: '#ffba52',
    headerTitleContainerStyle: {alignItems: 'center', marginLeft: '10%'},
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalStyle}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          options={{
            title: 'Sign Up',
          }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{
            title: 'Register',
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{
            title: 'Saved',
          }}
          name="Saved"
          component={Unisave}
        />

        <Stack.Screen
          options={{
            title: 'University',
          }}
          name="University"
          component={University}
        />
        <Stack.Screen
          options={{
            title: 'Finance',
          }}
          name="Finance"
          component={Finance}
        />
        <Stack.Screen
          options={{
            title: 'Addblog',
          }}
          name="Addblog"
          component={AddBlog}
        />
        <Stack.Screen
          options={{
            title: 'Course',
          }}
          name="Course"
          component={Course}
        />

        <Stack.Screen
          options={{
            title: 'Home',
          }}
          name="Home"
          component={Home}
        />
          <Stack.Screen
          options={{
            title: 'Feedback',
          }}
          name="Feedback"
          component={Feedback}
        />
        <Stack.Screen name="Base" component={Base} />
        <Stack.Screen
          options={{
            title: 'AddChat',
          }}
          name="AddChat"
          component={AddChat}
        />
        <Stack.Screen
          options={{
            title: 'Chat',
          }}
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          options={{
            title: 'Forum',
          }}
          name="Forum"
          component={Forum}
        />
        <Stack.Screen
          options={{
            title: 'UniDetails',
          }}
          name="UniDetails"
          component={UniDetails}
        />
        <Stack.Screen
          options={{
            title: 'CourseDetails',
          }}
          name="CourseDetails"
          component={CourseDetails}
        />
        <Stack.Screen
          options={{
            title: 'Scholarship',
          }}
          name="Scholarship"
          component={Scholar}
        />
        <Stack.Screen
          options={{
            title: 'Blog',
          }}
          name="Blog"
          component={Blog}
        />
        <Stack.Screen
          options={{
            title: 'Search',
          }}
          name="Search"
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
