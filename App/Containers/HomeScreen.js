import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,ImageBackground,FlatList,Image } from 'react-native'
import { connect } from 'react-redux'
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeAction from "../Redux/HomeRedux";
import SplashScreen from 'react-native-splash-screen';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Card
} from "native-base";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
     
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cardComponents !== this.state.cardComponents) {
      SplashScreen.hide();
    }
  }

  _renderItem = ({ item, index }) => (
    <View style={{backgroundColor:'#F7F7F7'}}>
      <Image
        source={{ uri: `${item.urlToImage}` }}
        style={{
          width: scale(250),
          height: scale(150),
          resizeMode: "cover"
        }}
      />
      <View style={{paddingHorizontal:scale(10),paddingVertical:scale(10),flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <Text style={{fontSize:scale(10),fontWeight:'bold'}}>Valid Till 31st Aug</Text>
        </View>
        <View>
          <Text style={{fontSize:scale(10),color:'blue'}}>Know More</Text>
        </View>
      </View>
    </View>
  );

  _renderSeparator = style => {
    return (
      <View
        style={{
          height: 1,
          width: scale(5),
          alignSelf: "center"
        }}
      ></View>
    );
  };


  componentDidMount = async () => {
    //   console.log("dintdmou");
       await this.props.getPopularNews();
    //   console.log("123");
      SplashScreen.hide();
    //   console.log("dasd");
     };


     
  static navigationOptions = {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: "#f8d224",
      inactiveTintColor: "#000000",
      style: {
        backgroundColor: "transparent",
        borderTopWidth: 1,
        borderTopColor: "#ffffff10"
      }
    },
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon name='home' size={scale(25)} color={(focused) ? 'red':'#000'} />
          <Text style={{ fontSize: scale(10) }}>Home</Text>
        </View>
      );
    },
    tabBarOnPress: ({ defaultHandler, navigation }) => {
      const { routeName } = navigation.state;
      if (routeName !== "CreateMatch") defaultHandler();
    }
  };


  render () {
    return (
      
      <ScrollView style={{padding:0}}>
         <Card style={{backgroundColor:'#F7F7F7',paddingBottom:0,width:'100%',paddingTop:0,marginTop:0,paddingLeft:0,paddingRight:0}}>
          <View style={{paddingVertical:scale(10),paddingHorizontal:scale(10),flexDirection:'row',justifyContent:'space-between'}}>
            
              <View>
                <Icon name='menu' size={scale(25)} color="#000" />
              </View>
              <View>
                <Text style={{paddingTop:scale(5),fontWeight:'bold',alignItems:'center',justifyContent:'center'}}>Socio Ladder</Text>
              </View>
              <View style={{flexDirection:'row',}}>
                <Icon name='search' style={{marginRight:scale(5)}} size={scale(25)} color="#000" />
                <Icon name='notifications-none'  size={scale(25)} color="#000" />
              </View>            
          </View>
       </Card>
        <View style={{flex:1,}}>
          <View style={{borderBottomColor:'gray',borderBottomWidth:scale(0.3),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Icon name='menu' size={scale(25)} color="#000" />
                  <Text>Happy</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='card-giftcard' size={scale(25)} color="#000" />
                  <Text>Eat out</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='spa' size={scale(25)} color="#000" />
                  <Text>Spa</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='face' size={scale(25)} color="#000" />
                  <Text>Salon</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='local-activity' size={scale(25)} color="#000" />
                  <Text>Activities</Text>
              </View>
          </View>
        </View>

        <View style={{flex:1,}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Icon name='card-giftcard' size={scale(25)} color="#000" />
                  <Text>Buffets</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='card-giftcard' size={scale(25)} color="#000" />
                  <Text>Gifts</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='fitness-center' size={scale(25)} color="#000" />
                  <Text>Fitness</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='healing' size={scale(25)} color="#000" />
                  <Text>Health</Text>
              </View>
              <View style={{paddingVertical:scale(10),borderRightColor:'gray',borderRightWidth:scale(0.3),flex:1,justifyContent:'center',alignItems:'center'}}>
              <Icon name='more-vert' size={scale(25)} color="#000" />
                  <Text>More</Text>
              </View>
          </View>
        </View>

        <View style={{backgroundColor:'#F7F7F7',paddingVertical:scale(10)}}>
          <ImageBackground source={require("../Images/offer.jpg")} style={{resizeMode:'cover',width: '100%', height: scale(200)}}>
            
          </ImageBackground>
        </View>

        <View style={{marginHorizontal:scale(10)}}>
          <View style={{marginVertical:scale(10)}}><Text style={{color:'#000',fontSize:scale(15)}}>Trending Right Now</Text></View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{flex:1}}>
                  <Image source={require("../Images/1.jpg")} style={{width:'100%',height:scale(100)}}/>
                  <View style={{paddingVertical:scale(10)}}>
                    <Text style={{fontWeight:'bold',fontSize:scale(12)}}>FlipKart</Text>
                    <Text style={{paddingTop:scale(5),fontWeight:'bold',fontSize:scale(12)}}>Rs 5000</Text>
                </View>
                </View>
                <View style={{paddingLeft:scale(10),flex:1}}>
                <Image source={require("../Images/2.jpg")} style={{width:'100%',height:scale(100)}}/>
                <View style={{paddingVertical:scale(10)}}>
                  <Text style={{fontWeight:'bold',fontSize:scale(12)}}>FlipKart</Text>
                  <Text style={{paddingTop:scale(5),fontWeight:'bold',fontSize:scale(12)}}>Rs 5000</Text>
                </View>
                 
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{flex:1}}>
                  <Image source={require("../Images/5.jpg")} style={{width:'100%',height:scale(100)}}/>
                  <View style={{paddingVertical:scale(10)}}>
                    <Text style={{fontWeight:'bold',fontSize:scale(12)}}>FlipKart</Text>
                    <Text style={{paddingTop:scale(5),fontWeight:'bold',fontSize:scale(12)}}>Rs 5000</Text>
                </View>
                </View>
                <View style={{paddingLeft:scale(10),flex:1}}>
                 <Image source={require("../Images/4.png")} style={{width:'100%',height:scale(100)}}/>
                 <View style={{paddingVertical:scale(10)}}>
                  <Text style={{fontWeight:'bold',fontSize:scale(12)}}>FlipKart</Text>
                  <Text style={{paddingTop:scale(5),fontWeight:'bold',fontSize:scale(12)}}>Rs 5000</Text>
                </View>
                </View>
            </View>
        </View>

        <View style={{marginHorizontal:scale(10)}}>
          <View style={{marginVertical:scale(10)}}><Text  style={{color:'#000',fontSize:scale(15)}}>More Savings</Text></View>
           <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={this.props.news.payload}
                  ItemSeparatorComponent={this._renderSeparator}
                  renderItem={this._renderItem}
                  keyExtractor={(item, index) => `${"tabbar" + index}`}
                />
        </View>
        
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, "stateherer");
   return {
     news: state.news
   };
 };
 
 const mapDispatchToProps = dispatch => {
   //console.log("dispatchAction");
   return {
     getPopularNews: () => dispatch(HomeAction.homeRequest())
   };
 };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
