import { ScrollView, StyleSheet, Text, View} from "react-native";
import {Colors} from "../assets/constants/Colors";
import {PrimaryButton} from "../components/UI/PrimaryButton";
import {ListHeader} from "../components/cart/ListHeader";
import {OrderResumeCard} from "../components/cart/OrderResumeCard";
import {useContext} from "react";
import {AppContext} from "../store/AppContext";
import {OrderStatus} from "../types/enums/OrderStatus";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export function CartScreen() {
  const {cart, cartTotal, address, method, createOrder, clearCart} =
    useContext(AppContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function confirmOrderhandler() {
    const itens = cart.map(item => {
      return {
        id: item.product.id.toString(),
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      };
    });

    const userAddress = address.find(item => item.isSelected);
    console.log(cart[0].product.store);

    if (userAddress) {
      createOrder({
        id: Math.random().toString(),
        storeId: cart[0].product.store,
        status: OrderStatus.SENDING,
        itens: itens,
        total: cartTotal(),
        address: userAddress.data,
        date: new Date(),
        paymentMethod: method.paymentMethods.title,
        deliveryMethod: method.deliveryMethods.title,
      });

      navigation.navigate("orders");
      clearCart();
    }
  }

  function Bottom() {
    return (
      <View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total with tax: </Text>
          <Text style={styles.price}>R$ {cartTotal().toFixed(2)}</Text>
        </View>

        <PrimaryButton
          onPress={confirmOrderhandler}
          color={Colors.green600}
          isDisabled={false}>
          Confirm order
        </PrimaryButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView >
        <ListHeader />
        {cart.map(item => (
          <OrderResumeCard key={item.product.id.toString()} item={item} />
        ))}
      </ScrollView>
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "92%",
    alignSelf: "center",
    height: "98%",
  },

  textMedium: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },

  totalContainer: {
    backgroundColor: "#EAEAEA",
    marginVertical: 12,
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    justifyContent: "space-between",
    borderRadius: 4,
    borderBottomColor: "#BBBBBB",
    borderBottomWidth: 2,
  },

  totalText: {
    color: "#717171",
    fontSize: 12,
    fontWeight: "500",
  },

  price: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
