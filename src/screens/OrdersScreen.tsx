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
