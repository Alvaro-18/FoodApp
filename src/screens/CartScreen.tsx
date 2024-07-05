import {FlatList, StyleSheet, Text, View} from "react-native";
import {Colors} from "../assets/constants/Colors";
import {STORE} from "../store/Data";
import {PrimaryButton} from "../components/UI/PrimaryButton";
import {ListHeader} from "../components/cart/ListHeader";
import {useEffect, useState} from "react";
import { OrderResumeCard } from "../components/cart/OrderResumeCard";

const data = {
  storeName: "Starbucks",
  imageURL: STORE[1].logoURL,
  itens: [
    {
      name: "Coffe with milk",
      price: 12.99,
      quantity: 1,
      description:
        "Indulge in the vibrant and refreshing flavors of the Mediterranean with our Mediterranean Salad",
    },
    {
      name: "Coffe with milk",
      price: 12.99,
      quantity: 1,
      description:
        "Indulge in the vibrant and refreshing flavors of the Mediterranean with our Mediterranean Salad",
    },
    {
      name: "Coffe with milk",
      price: 12.99,
      quantity: 1,
      description:
        "Indulge in the vibrant and refreshing flavors of the Mediterranean with our Mediterranean Salad",
    },
  ],
};

export function CartScreen() {
  function confirmOrderhandler() {
    console.log("");
  }

  const [total, setTotal] = useState(0);

  useEffect(() => {
    function calc() {
      for (const ob of data.itens) {
        setTotal(prevState => prevState + (ob.price * ob.quantity));
      }
    }

    calc();
  },[]);

  
  
  function bottomList() {
    return (
      <View style={{marginBottom: 12}}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total with tax: </Text>
          <Text style={styles.price}>R$ {total}</Text>
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
        ListHeaderComponent={ListHeader}
        ListFooterComponent={bottomList}
        data={data.itens}
        renderItem={({item}) => (
          <OrderResumeCard item={item}
          />
        )}
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
