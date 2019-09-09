import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,ImageBackground,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { scale, ScaledSheet } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/MaterialIcons'
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
import styles from './Styles/FacouritesScreenStyle'

class FacouritesScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
      selectedTab: "0"
    }
  }
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
          <Icon name='favorite' size={scale(25)} color={(focused) ? 'red':'#000'} />
          <Text style={{ fontSize: scale(10) }}>Favourites</Text>
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
      <View style={{ flex: 1 }}>
      <Container>
      <Card style={{width:'100%',backgroundColor:'#F7F7F7',paddingTop:0,marginTop:0,paddingLeft:0,paddingRight:0}}>
        <Header style={{height:scale(45), backgroundColor: "#fff" }}>
          <Left style={{ flex: 1 }}>
            
          </Left>
          <Body
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: scale(5)
            }}
          >
            <Text style={{fontWeight:'bold',alignItems:'center',justifyContent:'center'}}>Favourites</Text>
          </Body>
          <Right style={{ flex: 1 }}>
           
          </Right>
        </Header>
        </Card>
        {/* Content Starts Herer */}
        <View>
        <View
              style={{
                paddingTop: scale(10),
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                
              }}
            >
              <TouchableOpacity
                style={{
                  borderBottomWidth: scale(3),
                  borderBottomColor:
                    this.state.selectedTab == "0" ? "blue" : "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1
                }}
                onPress={() => {
                  this.setState({ selectedTab: 0 });
                }}
              >
                <View style={{ paddingBottom: scale(10) }}>
                  <Text>Active</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  borderBottomWidth: scale(3),
                  borderBottomColor:
                    this.state.selectedTab == "1" ? "blue" : "#fff"
                }}
                onPress={() => {
                  this.setState({ selectedTab: 1 });
                }}
              >
                <View style={{ paddingBottom: scale(10) }}>
                  <Text>All</Text>
                </View>
              </TouchableOpacity>
            </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
         <ImageBackground source={require("../Images/favorites.png")} style={{resizeMode:'cover',width: '100%', height: scale(200)}}>
          
          </ImageBackground>
          <View style={{marginTop:scale(50),width:scale(300),justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:scale(12)}}>No Active vouchers</Text>

            <Text style={{marginTop:scale(10),alignItems:'center',alignSelf:'center',alignContent:'center'}}>
              Check Out Our Newest Voucher.
            maybe you'll find the able for you?</Text>
          </View>
            <Button style={{backgroundColor:'blue',paddingHorizontal:scale(30),borderRadius:scale(5),marginTop:scale(50)}}><Text style={{color:'#fff'}}>Countinue Shopping</Text></Button>
        </View>
        </View>
      </Container>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacouritesScreen)
