import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FriendScreen from "../screens/FriendScreen/FriendScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import BottomMenu from "../components/BottomMenu";
import { Pomodoro } from "../screens/Pomodoro";
import TopMenu from "../components/TopMenu";

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();


// -- navegador Interno (Home,Friends) --

function HomeSubTabs() {
  return (
    <TopTab.Navigator
      tabBar={(props) => <TopMenu {...props}/>}
    >
      <TopTab.Screen name="HomeScreen" component={HomeScreen} />
      <TopTab.Screen name="FriendScreen" component={FriendScreen} />
    </TopTab.Navigator>
  )
}



// -- Navegador Principal (HomeSubTabs, Pomodoro) --
export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator 
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomMenu {...props}/>}
      >
        <BottomTab.Screen name="Home" component={HomeSubTabs} />
        <BottomTab.Screen name="Pomodoro" component={Pomodoro} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
