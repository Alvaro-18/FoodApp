
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeTabs} from "./MainTabs";
import { ProductScreen } from "../../screens/ProductScreen";
import { StoreScreen } from "../../screens/StoreScreen";
import { CartScreen } from "../../screens/CartScreen";

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
      <Stack.Screen name="cart" component={CartScreen}/>
    </Stack.Navigator>
  );
}
