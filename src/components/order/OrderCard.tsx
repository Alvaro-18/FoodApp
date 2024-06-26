import {View, StyleSheet, Text, Image, FlatList} from "react-native";
import {Product} from "../../types/interfaces/Product";
import {HeartButton} from "../UI/HeartButton";
import {Status} from "../../types/enums/Status";
import {ContactButtons} from "../UI/ContactButtons";

const itensInTheOrder = [
  {name: "Coffe with milk", price: 14.92},
  {name: "Traditional Cappuccino", price: 20},
];

export function OrderCard({data, status}: {data: Product; status: Status}) {
  function OrderStatusHandler() {
    if (status == "SENDING") {
      return (
        <View style={[styles.statusContainer, styles.sendingContainer]}>
          <View style={styles.sendingContainer}>
            <Image
              source={require("../../assets/images/Status-wait.png")}
              style={styles.statusIcon}
            />
            <Text style={styles.statusText}>Order on way</Text>
          </View>

          <ContactButtons />
        </View>
      );
    }
    if (status == "COMPLETED") {
      return (
        <View style={styles.statusContainer}>
          <Image
            source={require("../../assets/images/Status-ok.png")}
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>Order completed</Text>
        </View>
      );
    }
    if (status == "CANCELED") {
      return (
        <View style={styles.statusContainer}>
          <Image
            source={require("../../assets/images/Status-error.png")}
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>Order Canceled</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top}>
          <Image
            source={require("../../assets/images/Coffe.jpg")}
            style={styles.image}
          />
          <Text style={styles.storeName}>{data.store}</Text>
        </View>
        <HeartButton />
      </View>

      <View>
        <Text style={styles.text}>Status</Text>
        <OrderStatusHandler />
        <FlatList
          style={{marginTop: 12}}
          data={itensInTheOrder}
          renderItem={({item}) => (
            <Text style={styles.item}>
              - {item.name} - R${item.price}
            </Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "96%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
    paddingBottom: 12,
  },

  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    marginBottom: 8,
  },

  image: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },

  statusContainer: {
    width: "100%",
    flexDirection: "row",
    borderColor: "#D9D9D9",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 12,
    alignItems: "center",
  },

  sendingContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },

  statusIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },

  storeName: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
  },

  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },

  statusText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },

  item: {
    color: "#3D3D3D",
    fontSize: 14,
    fontWeight: "500",
  },
});
