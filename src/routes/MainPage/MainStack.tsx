
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeTabs} from "./MainTabs";
import {View} from "react-native";
import { ProductScreen } from "../../screens/ProductScreen";
import { StoreScreen } from "../../screens/StoreScreen";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: "#fff"}
      }}>
      <Stack.Screen name="homeTabs" component={HomeTabs} />
      <Stack.Screen name="product" component={ProductScreen} />
      <Stack.Screen name="store" component={StoreScreen} />
    </Stack.Navigator>
  );
}
