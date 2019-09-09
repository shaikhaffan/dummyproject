import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation'
import PurchaseScreen from '../Containers/PurchaseScreen'
import FacouritesScreen from '../Containers/FacouritesScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'


const MainTabs = createBottomTabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    PurchaseScreen: { screen: PurchaseScreen },
    FacouritesScreen: { screen: FacouritesScreen },
   
  },
  {
      initialRouteName: 'HomeScreen',
      headerMode: 'none',
  });
// Manifest of possible screens
const PrimaryNav = createStackNavigator({
    MainTabs: MainTabs,
   
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainTabs',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createAppContainer(PrimaryNav);
