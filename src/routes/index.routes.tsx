import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FriendScreen from "../screens/FriendScreen/FriendScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import BottomMenu from "../components/BottomMenu";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Friends" component={FriendScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
