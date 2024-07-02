import Ionicons from "react-native-vector-icons/Ionicons";
import {Colors} from "../../assets/constants/Colors";

export const mainPageOptions = {
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: Colors.secundaryColor,
    tabBarLabelStyle: {fontSize: 14},
    tabBarHideOnKeyboard: true
  },
  homeOptions: {
    tabBarIcon: ({color, size, focused}: any) => (
      <Ionicons
        name={focused ? "home" : "home-outline"}
        color={color}
        size={size}
      />
    ),
  },

  favoritesOptions: {
    tabBarIcon: ({color, size, focused}: any) => (
      <Ionicons
        name={focused ? "heart" : "heart-outline"}
        color={color}
        size={size}
      />
    ),
  },

  ordersOptions: {
    tabBarIcon: ({color, size, focused}: any) => (
      <Ionicons
        name={focused ? "reader" : "reader-outline"}
        color={color}
        size={size}
      />
    ),

  },

  ordesOptionsActivated: {
    tabBarIcon: ({color, size, focused}: any) => (
      <Ionicons
        name={focused ? "reader" : "reader-outline"}
        color={color}
        size={size}
      />
    ),
    tabBarBadge: false,
    tabBarBadgeStyle: {
      maxWidth: 6,
      maxHeight: 8,
      backgroundColor: "red"
    }
  },

  ordersOptionsActivated: {
    tabBarIcon: ({color, size, focused}: any) => (
      <Ionicons
        name={focused ? "reader" : "reader-outline"}
        color={color}
        size={size}
      />
    ),
    tabBarBadge: "on",
    tabBarBadgeStyle: {
      maxWidth: 6,
      maxHeight: 8,
    },
  },

  profileOptions: {
    tabBarIcon: ({color, size, focused}: any) => (
      <Ionicons
        name={focused ? "person" : "person-outline"}
        color={color}
        size={size}
      />
    ),
  },
};
