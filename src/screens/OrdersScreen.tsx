import {View, StyleSheet, FlatList} from "react-native";

import {OrderCard} from "../components/order/OrderCard";
import {useContext} from "react";
import {AppContext} from "../store/AppContext";

export function OrdersScreen() {
  const {orders} =
  useContext(AppContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
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
