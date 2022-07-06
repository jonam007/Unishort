import {Image, StyleSheet, View ,FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card,Title,Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PricingCard} from 'react-native-elements/dist/pricing/PricingCard';
import {auth, db} from '../firebase';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, ListItem, Text} from 'react-native-elements';
import HSCategories from './HSCategories';
import Blogs from './Blogdata';


const Blog = ({navigation}) =>{
const [data,setData] = useState([])
const [blog,setBlog]=useState([])
  useEffect(() => {
    db.collection("Blogs").onSnapshot(snapshot => {
      setData(
        snapshot.docs.map(doc => ({
          data: doc.data(),
        })),
      );
    });
   
   
  },[]);

  data.map((i)=>{
    blog.push(i.data)
  })

  const handleNavigation = ()=>{
    navigation.navigate('Blog')
  }


return(

<>
<View >
  {
    blog.map((l, i) => (
      <TouchableOpacity onPress={()=>handleNavigation(l)}>
      <Card style={{marginBottom:'5%',marginLeft:'2%',marginRight:'2%',backgroundColor:'rgba(223, 101, 137, 0.9)',}}>
      
      <Card.Content style={{flexDirection:'row',flexWrap:'wrap',padding:50,margin:1,justifyContent:'space-between'}}>
      <Image style={{width:'30%',height:'90%',borderRadius:10,marginLeft:5,position:'absolute',marginTop:'3%'}} resizeMode='contain' source={{ uri:l.image }} />
        <Title style={{fontSize:12,color:'#fff',marginLeft:'35%'}}>{l.title}</Title>
        {/* <Title style={{color:'black',fontSize:7}}>{l.content}</Title> */}
      </Card.Content>
      
    </Card>
    </TouchableOpacity>
    ))
  }
</View>

</>

)


}



const Home = ({navigation}) => {
  const list = [
    {
      name: 'Universities',
      page: 'More',
      iconname: 'school',
    },

    {
      name: 'Blog',
      page: 'Forum',
      iconname: 'rss-feed',
    },

    {
      name: 'Forum',
      page: 'Forum',
      iconname: 'question-answer',
    },

    {
      name: 'Courses',
      page: 'Forum',
      iconname: 'book',
    },
    {
      name: 'Scholarship',
      page: 'Forum',
      iconname: 'star',
    },
  ];
  const handlePress = i => {
    navigation.navigate(i.page);
  };

  const Banner = () => {
    return (
      <>
        <LinearGradient
          colors={['#4c4478', '#DF6589FF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            height: 191.92,
            borderRadius: 16,
            backgroundColor: 'green',
            marginTop: '30%',
            left: 10,
            right: 10,
            position: 'absolute',
            flexDirection:'row'
          }}>
          <View
            style={{
              width: 175,
              margin: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 119,
                height: 23,
                borderRadius: 12,
                backgroundColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <MaterialIcons name="book" color="#ffba52" size={20} />
              <Text h4 h4Style={{fontSize: 12,fontFamily:'Inter-SemiBold'}}>
                Study Aboard
              </Text>
            </View>
            <Text h4 h4Style={{fontSize: 18,fontFamily:'Inter-SemiBold',color:'#fff'}}>For every single aspirant who wants to study outside their country, anywhere in the world!</Text>
          </View>
        </LinearGradient>
        <View
        style={{
        justifyContent:'flex-end',
        flexDirection:'row'
        }}
        >
          <Image source={require('../Screens/images/Student.png')} style={{height:320,width:211}}/>

        </View>

      </>
    );
  };

  const Card1 = member => {
    return (
      <>
        <View
          style={{
            backgroundColor: '#e8fae8',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: '15%',
            flex: 1,
            flexDirection:'row',backgroundColor:'red'
          }}>
         
            
            {/* {list.map((i, l) => (
              <TouchableOpacity onPress={() => handlePress(i)}>
                <Card
                  style={{
                    padding: 30,
                    marginLeft: 60,
                    marginRight: 0,
                    marginTop: '30%',
                    flex: 1,
                  }}>
                  <MaterialIcons name={i.iconname} color="#ffba52" size={26} />
                  <Text style={{width: '100%'}}>{i.name}</Text>
                </Card>
              </TouchableOpacity>
            ))} */}
         
        </View>
      </>
    );
  };

  return (
    <>
    
     <ScrollView  contentContainerStyle={{backgroundColor: '#3C1053FF', }}>
     
      <Image source={{uri: auth.currentUser.photoURL}} style={styles.image2} />
      <Text style={styles.name}> Welcome {auth.currentUser.displayName}</Text>
      <Banner />
      <View
      style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'3%',
        marginRight:'3%'
      }}
      >
        <Text h4  h4Style={{color:'#DF6589FF',margin:5}}>Explore </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('More')}}>
        <Text style={{fontSize:18,fontWeight:'100',color:'#DF6589FF'}} >View more</Text>

        </TouchableOpacity>

        
        
      </View>
      <HSCategories navigation={navigation}/>

      <View
      style={{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'3%',
        marginRight:'3%'
      }}
      >
        <Text h4  h4Style={{color:'#DF6589FF',margin:10}}>Latest News </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Blog')}}>
        <Text style={{fontSize:18,fontWeight:'100',color:'#DF6589FF',margin:10}} >View more</Text>

        </TouchableOpacity>

       
        
      </View>
     <Blog navigation={navigation} />
    </ScrollView>
    </>
   
  );
};

export default Home;

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DF6589FF',
    marginTop: '8%',
    marginLeft: '15%',
  },
  view2: {
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  user: {
    flexDirection: 'column',
    marginBottom: 6,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  subcard: {
    borderRadius: 20,
    borderColor: '#fafffb',
    paddingLeft: '4%',
    paddingRight: '6%',
    elevation: 20,
    flex: 1,
    height: '18%',
    paddingBottom: '14%',
    paddingTop: '14%',
    shadowColor: '#0a0a0a',
    marginBottom: '2%',
    backgroundColor: 'rgba(250, 255, 251, 1)',
    marginTop: '5%',
  },
  subcard2: {
    borderRadius: 10,
    borderColor: '#fba51a',
    shadowColor: 'red',
    marginBottom: '5%',
    marginTop: '20%',
    backgroundColor: '#01334c',
  },
  info: {
    fontWeight: '800',
    borderRadius: 10,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  image2: {
    width: '16%',
    height: '6%',
    borderRadius: 50,
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight:2
  },
  pricingButtonStyle: {
    backgroundColor: 'rgba(221, 218, 235, 0.8)',
    width: 0,
    opacity: 0.1,

    display: 'none',
  },
  bg: {
    width: '100%',
    height: '100%',
    flex: 1,

    position: 'absolute',
  },
  title: {
    fontSize: 24,
    color: '#fba51a',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(221, 218, 235, 0.2)',
  },
  pricecard: {
    borderRadius: 10,

    height: '40%',

    borderColor: '#fba51a',
    backgroundColor: 'rgba(242, 242, 242,0.8)',
  },
  icons: {
    backgroundColor: 'rgba(221, 218, 235, 0.8)',
    borderRadius: 50,
    padding: 13,
    alignSelf: 'center',
    width: '30%',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
