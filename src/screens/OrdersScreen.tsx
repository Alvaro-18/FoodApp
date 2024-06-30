import {View, StyleSheet, FlatList} from "react-native";
import {HeaderBar} from "../components/home/HeaderBar";
import {ORDERS} from "../store/Data";
import {OrderCard} from "../components/order/OrderCard";
import {OrderStatus} from "../types/enums/OrderStatus";

export function OrdersScreen() {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <FlatList
        data={ORDERS}
        renderItem={({item}) => (
          <OrderCard data={item} status={(item.status) ? item.status : OrderStatus.COMPLETED}/>
        )}
      />
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
