import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/HomeScreen";
import { View } from "react-native";
import { mainPageOptions } from "./MainPageOptions";

const Tab = createBottomTabNavigator();
export function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={mainPageOptions.screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={mainPageOptions.homeOptions}
      />
      <Tab.Screen
        name="favorites"
        component={View}
        options={mainPageOptions.favoritesOptions}
      />
      <Tab.Screen
        name="orders"
        component={View}
        options={mainPageOptions.ordersOptions}
      />
      <Tab.Screen
        name="Profile"
        component={View}
        options={mainPageOptions.profileOptions}
      />
    </Tab.Navigator>
  );
}