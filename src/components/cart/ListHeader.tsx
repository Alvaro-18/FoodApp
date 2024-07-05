import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {ChangeButton} from "./ChangeButton";
import {OptionButton} from "../home/OptionButton";
import {Colors} from "../../assets/constants/Colors";
import {useState} from "react";
import {STORE} from "../../store/Data";
import {useNavigation} from "@react-navigation/native";

const data = {
  storeName: "Starbucks",
  imageURL: STORE[1].logoURL,
  itens: [
    {
      name: "Coffe with milk",
      price: 12.99,
      quantity: 2,
    },
    {
      name: "Coffe with milk",
      price: 12.99,
      quantity: 2,
    },
    {
      name: "Coffe with milk",
      price: 12.99,
      quantity: 2,
    },
  ],
};

const deliveryOptions = {
  delivery: {
    title: "Delivery",
    subtitle1: "Tax: Free",
    subtitle2: "Delivery time: 52min - 60 min",
  },

  selfPickup: {
    title: "Self pickup",
    subtitle1: "Preparation time: 30 min",
  },
};

export function ListHeader() {
  function confirmOrderhandler(): void {
    console.log("");
  }

  function navigationHandler(): void {
    navigation.goBack();
  }

  const navigation = useNavigation();

  const [isSelected, setIsSelected] = useState(false);

  function selectHandler() {
    setIsSelected(!isSelected);
  }

  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={navigationHandler}>
          <Image
            source={require("../../assets/images/Arrow-back.png")}
            style={styles.goBack}
          />
        </Pressable>
        <Text style={styles.headerText}>Cart</Text>
        <Pressable>
          <Image
            source={require("../../assets/images/Trash-solid.png")}
            style={styles.trashIcon}
          />
        </Pressable>
      </View>

      <View style={styles.row}>
        <Text style={styles.primaryText}>Delivery address:</Text>
        <ChangeButton
          onPress={confirmOrderhandler}
          title="Street, number"
          description="lorem ipsum"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.primaryText}>Delivery methods:</Text>
        <OptionButton
          selected={isSelected}
          data={deliveryOptions.delivery}
          onPress={selectHandler}
        />
        <OptionButton
          selected={!isSelected}
          data={deliveryOptions.selfPickup}
          onPress={selectHandler}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.primaryText}>Payment methods:</Text>
        <ChangeButton
          onPress={confirmOrderhandler}
          title="Card"
          description="mastercard - 0942"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.primaryText}>Order resume:</Text>
        <View style={styles.orderContainer}>
          <Image source={{uri: data.imageURL}} style={styles.orderImage} />
          <Text style={styles.orderText}>{data.storeName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "92%",
    alignSelf: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },

  goBack: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secundaryColor,
    borderRadius: 50,
    width: 24,
    height: 24,
  },

  headerText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
  },

  trashIcon: {
    width: 20,
    height: 22,
  },

  row: {
    marginTop: 24,
  },

  primaryText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 18,
  },

  textMedium: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },

  textRegular: {
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
  },

  orderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },

  orderText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  orderImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
});
