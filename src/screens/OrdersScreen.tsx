import {View, StyleSheet, FlatList} from "react-native";

import {ORDERS} from "../store/Data";
import {OrderCard} from "../components/order/OrderCard";

export function OrdersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={({item}) => (
          <OrderCard data={item}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "96%",
  },
});
