import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeTabs} from "./MainTabs";
import {ProductScreen} from "../../screens/ProductScreen";
import {StoreScreen} from "../../screens/StoreScreen";
import {CartScreen} from "../../screens/CartScreen";
import {LocationButton} from "../../components/home/LocationButton";
import {NotificationButton} from "../../components/home/NotificationButton";
import {SearchButton} from "../../components/home/SearchButton";
import { ChatScreen } from "../../screens/ChatScreen";
import { FormAddressScreen } from "../../screens/FormAddressScreen";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {backgroundColor: "#fff"},
      }}>
      <Stack.Screen
        name="homeTabs"
        component={HomeTabs}
        options={{
          headerTitle: () => <LocationButton />,
          headerRight: () => <NotificationButton />,
          headerLeft: () => <SearchButton />,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="product"
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="store"
        component={StoreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="address"
        component={FormAddressScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
