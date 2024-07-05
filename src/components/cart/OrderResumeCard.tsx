import { Image, Pressable, StyleSheet, Text, View} from "react-native";

import {useState} from "react";

interface item {
  name: string,
  price: number,
  quantity: number,
  description: string,
}

export function OrderResumeCard({item}:{item:item}) {
  const [count, setCounter] = useState(1);

  function increaseCount() {
    setCounter(prevState => prevState + 1);
  }

  function decreaseCount() {
    if (count == 1) {
      setCounter(1);
    } else {
      setCounter(prevState => prevState - 1);
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
        <Text style={styles.textMedium}>{item.name}</Text>

        <Text style={{color: "#000", fontSize: 16, fontWeight: "600"}}>
          R$ {(item.price * count).toFixed(2)}
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
          {item.description}
        </Text>

        <View style={styles.counterContainer}>
          <Pressable onPress={decreaseCount}>
            <Image
              source={require("../../assets/images/Minus-solid.png")}
              style={styles.counterBtnIcon}
            />
          </Pressable>
          <Text style={styles.counterText}>{count}</Text>
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