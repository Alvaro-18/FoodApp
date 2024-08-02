import { Image, Pressable, StyleSheet, Text, View} from "react-native";

import { Product } from "../../types/interfaces/Product";
import {AppContext} from "../../store/AppContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

interface item {
  product:Product,
  quantity: number
}

export function OrderResumeCard({item}:{item:item}) {
  const navigation = useNavigation();
  const userContext = useContext(AppContext);
  function increaseCount() {
    if (item.product) {
      userContext.setItem(item.product);
    }
  }

  function decreaseCount() {
    if (item.product && item.quantity > 1) {
      userContext.decrease(item.product.id);
    } else {
      
      if(userContext.cart.length == 1) {
        navigation.goBack();
        userContext.removeItem(item.product.id);
      } else {
        userContext.removeItem(item.product.id);
      }
    }
  }

  return (
    <View
      style={{
        borderColor: "#bbb",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 8,
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Text style={styles.textMedium}>{item.product.name}</Text>

        <Text style={{color: "#000", fontSize: 16, fontWeight: "600"}}>
          R$ {(item.product.price * item.quantity).toFixed(2)}
        </Text>
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <Text
          style={{
            color: "#000",
            fontSize: 12,
            fontWeight: "400",
            maxWidth: 200,
          }}
          numberOfLines={2}>
          {item.product.description}
        </Text>

        <View style={styles.counterContainer}>
          <Pressable onPress={decreaseCount}>
            <Image
              source={require("../../assets/images/Minus-solid.png")}
              style={styles.counterBtnIcon}
            />
          </Pressable>
          <Text style={styles.counterText}>{item.quantity}</Text>
          <Pressable onPress={increaseCount}>
            <Image
              source={require("../../assets/images/Plus-solid.png")}
              style={styles.counterBtnIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textMedium: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },

  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
  },

  counterBtnIcon: {
    width: 16,
    height: 16,
    resizeMode: "center",
  },

  counterText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
  },
});