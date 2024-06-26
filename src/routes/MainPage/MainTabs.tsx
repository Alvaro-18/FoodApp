import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/HomeScreen";
import { mainPageOptions } from "./MainPageOptions";
import { FavoritesScreen } from "../../screens/FavoritesScreen";
import { OrdersScreen } from "../../screens/OrdersScreen";
import { UserScreen } from "../../screens/UserScreen";

const Tab = createBottomTabNavigator();
export function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={mainPageOptions.screenOptions}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={mainPageOptions.homeOptions}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesScreen}
        options={mainPageOptions.favoritesOptions}
      />
      <Tab.Screen
        name="orders"
        component={OrdersScreen}
        options={mainPageOptions.ordersOptions}
      />
      <Tab.Screen
        name="profile"
        component={UserScreen}
        options={mainPageOptions.profileOptions}
      />
    </Tab.Navigator>
  );
}