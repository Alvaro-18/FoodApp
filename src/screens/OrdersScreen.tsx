import {View, StyleSheet} from "react-native";
import {HeaderBar} from "../components/home/HeaderBar";
import {PRODUCTS} from "../store/Data";
import { OrderCard } from "../components/order/OrderCard";
import { Status } from "../types/enums/Status";

export function OrdersScreen() {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <OrderCard data={PRODUCTS[0]} status={Status.COMPLETED}/>
      <View style={{height: 24}}></View>
      <OrderCard data={PRODUCTS[2]} status={Status.SENDED}/>
      <View style={{height: 24}}></View>
      <OrderCard data={PRODUCTS[3]} status={Status.CANCELED}/>
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
