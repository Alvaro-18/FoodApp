import {Pressable, StyleSheet, Text, View} from "react-native";

import {Product} from "../../types/interfaces/Product";
import {AppContext} from "../../store/AppContext";
import {useCallback, useContext} from "react";
import {useNavigation} from "@react-navigation/native";
import {memo} from "react";
import {TrashIcon, MinusIcon, PlusIcon} from "lucide-react-native";
import { Colors } from "../../assets/constants/Colors";

interface item {
  product: Product;
  quantity: number;
}


export const OrderResumeCard = memo(
  ({item}: {item: item}) => {
    const navigation = useNavigation();
    const {setItem, decrease, cart, removeItem} = useContext(AppContext);

    const increaseCount = useCallback(() => {
      if (item.product) {
        setItem(item.product);
      }
    }, [item.product, setItem]);
  
    const decreaseCount = useCallback(() => {
      if (item.product && item.quantity > 1) {
        decrease(item.product.id);
      } else {
        if (cart.length === 1) {
          navigation.goBack();
          removeItem(item.product.id);
        } else {
          removeItem(item.product.id);
        }
      }
    }, [item.product, item.quantity, cart.length, decrease, removeItem, navigation]);
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textMedium}>{item.product.name}</Text>
          <Text style={styles.price}>
            R$ {item.product.price.toFixed(2)}
          </Text>
        </View>
  
        <View style={styles.details}>
          <Text style={styles.description} numberOfLines={2}>
            {item.product.description}
          </Text>
          <View style={styles.counterContainer}>
            <Pressable onPress={decreaseCount}>
              {
                item.quantity === 1 ? <TrashIcon color={"red"} size={16}/> : <MinusIcon color={Colors.green600} size={16}/>
              }
            </Pressable>
            <Text style={styles.counterText}>{item.quantity}</Text>
            <Pressable onPress={increaseCount}>
              <PlusIcon color={Colors.green600} size={16}/>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
);

OrderResumeCard.displayName = "OrderResumeCard";

const styles = StyleSheet.create({
  container: {
    borderColor: "#bbb",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textMedium: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
    maxWidth: 200,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
  },
  counterText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
  },
});