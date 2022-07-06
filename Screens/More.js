import React, {useEffect, useLayoutEffect, } from 'react';
import {
  StyleSheet,
  
  ScrollView,
  BackHandler,
  Share,
  
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Icon} from 'react-native-elements';


const More = ({navigation}) => {


 

  useEffect(() => {
    function handleBackButton() {
      BackHandler.exitApp();
      return true;
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => backHandler.remove();
  }, [navigation]);
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:'Unishort',
      headerLeft: ()=> null,
    })
  })
  const list = [
   
  
    {
      name: 'Forum',
      page:'Forum',
      icon:'question-answer',
      type:'material-design',
      subtitle: "",
     
    },
    {
      name: 'Scholarship',
      page:'Scholarship',
      icon:'history-edu',
      type:'material-design',
      subtitle: "",
     
    },
    {
      name: 'Course',
      page:'Course',
      icon:'school',
      type:'material-design',
      subtitle: "",
     
    },
    {
      name: 'Blogs',
      page:'Blog',
      icon:'rss-feed',
      type:'material-design',
      subtitle: "",
     
    },
    {
      name: 'Shortlist',
      page:'Saved',
      icon:'book',
      type:'material-design',
      subtitle: "",
     
    },
    {
      name: 'Financial Guideness',
      page:'Finance',
      icon:'attach-money',
      type:'material-design',
      subtitle: "",
     
    },
    {
      name: 'Feedback',
      page:'Feedback',
      icon:'send',
      type:'material-design',
      subtitle: "",
     
    },
   
 
  ];

 

  const handleNavigation =(l)=>{
    navigation.navigate(l.page)
  }
   
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install Unishort  APP :https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en_IN&gl=USh',
        url: 'https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en_IN&gl=USh',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  
 
    
    
  

  return (
    <SafeAreaView>
      <ScrollView >
        {list.map((l, i) => (
          
          <ListItem style={{padding:1}}key={i} bottomDivider onPress={(text)=> handleNavigation(l)}>
             <Icon name={l.icon} 
             size={30}
             iconStyle={{color:'#fba51a'}}
             style={styles.icons}
             type={l.type}/>
            <ListItem.Content>
              <ListItem.Title style={{textTransform:'capitalize',marginTop:'7%',fontWeight:'bold',fontSize:17}}>{l.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={44}/>
          </ListItem>
        ))}

<ListItem style={{padding:1}} bottomDivider onPress={()=> onShare()}>
             <Icon name="share" 
             size={30}
             iconStyle={{color:'#fba51a'}}
             style={styles.icons}
             type='material-design'/>
            <ListItem.Content>
              <ListItem.Title style={{textTransform:'capitalize',marginTop:'7%',fontWeight:'bold',fontSize:17}}>Share</ListItem.Title>
             
            </ListItem.Content>
            <ListItem.Chevron size={44}/>
          </ListItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    fontFamily: ' sans-serif'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  icons:{
    backgroundColor:'#7c0357',
    borderRadius:10,
    padding:13
  },
  subtitle:{
    textTransform:'capitalize',
    fontWeight:'800'
  }
});
``