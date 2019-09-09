import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { scale } from "react-native-size-matters";
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
import styles from './Styles/PurchaseScreenStyle'

class PurchaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
     
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
           <Icon name='import-export' size={scale(25)} color={(focused) ? 'red':'#000'} />
          <Text style={{ fontSize: scale(10) }}>Purchase</Text>
        </View>
      );
    },
   
  };

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Container>
        <Card style={{width:'100%',backgroundColor:'#F7F7F7',paddingTop:0,marginTop:0,paddingLeft:0,paddingRight:0}}>
          <Header style={{ height:scale(45),backgroundColor: "#fff" }}>
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
              <Text style={{fontWeight:'bold',alignItems:'center',justifyContent:'center'}}>Purchase</Text>
            </Body>
            <Right style={{ flex: 1 }}>
             
            </Right>
          </Header>
          </Card>
          {/* Content Starts Herer */}
          <View style={{justifyContent:'center',alignItems:'center'}}>
           <ImageBackground source={require("../Images/purchase.jpg")} style={{resizeMode:'cover',width: '100%', height: scale(200)}}>
            
            </ImageBackground>
            <View style={{marginTop:scale(50),width:scale(300),justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:scale(12)}}>Found nothing exciting yet?</Text>

              <Text style={{marginTop:scale(10),alignItems:'center',alignSelf:'center',alignContent:'center'}}>
                Check Out Our Newest Offer.
              maybe you'll find the able for you?</Text>
            </View>
              <Button style={{backgroundColor:'blue',paddingHorizontal:scale(30),borderRadius:scale(5),marginTop:scale(50)}}><Text style={{color:'#fff'}}>Countinue Shopping</Text></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseScreen)
