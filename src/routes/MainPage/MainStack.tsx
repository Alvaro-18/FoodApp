
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeTabs} from "./MainTabs";
import {View} from "react-native";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Product" component={View} />
      <Stack.Screen name="Store" component={View} />
    </Stack.Navigator>
  );
}
