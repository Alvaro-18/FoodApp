import {FlatList, StyleSheet, Text, View} from "react-native";
import {Colors} from "../assets/constants/Colors";
import {PrimaryButton} from "../components/UI/PrimaryButton";
import {ListHeader} from "../components/cart/ListHeader";
import { OrderResumeCard } from "../components/cart/OrderResumeCard";
import { useContext} from "react";
import { AppContext } from "../store/AppContext";

export function CartScreen() {
  const userContext = useContext(AppContext);

  function confirmOrderhandler() {
    console.log("");
  }
  
  function bottomList() {
    return (
      <View style={{marginBottom: 12}}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total with tax: </Text>
          <Text style={styles.price}>R$ {(userContext.cartTotal().toFixed(2))}</Text>
        </View>

        <PrimaryButton
          onPress={confirmOrderhandler}
          color={Colors.secundaryColor}
          isDisabled={false}>
          Confirm order
        </PrimaryButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (<ListHeader id={userContext.cart[0].product.store}/>)}
        ListFooterComponent={bottomList}
        data={userContext.cart}
        renderItem={({item}) => (
          <OrderResumeCard item={item}
          />
        )}
        ListEmptyComponent={()=> <View></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "92%",
    alignSelf: "center",
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
