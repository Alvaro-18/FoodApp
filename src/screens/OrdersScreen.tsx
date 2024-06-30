import {View, StyleSheet} from "react-native";
import {HeaderBar} from "../components/home/HeaderBar";
import {PRODUCTS} from "../store/Data";
import {OrderCard} from "../components/order/OrderCard";
import {OrderStatus} from "../types/enums/OrderStatus";

export function OrdersScreen() {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <OrderCard data={PRODUCTS[0]} status={OrderStatus.COMPLETED} />
      <View style={{height: 24}}></View>
      <OrderCard data={PRODUCTS[2]} status={OrderStatus.SENDING} />
      <View style={{height: 24}}></View>
      <OrderCard data={PRODUCTS[3]} status={OrderStatus.CANCELED} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "95%",
    marginTop: "6%",
  },

  text: {
    color: "red",
  },
});
