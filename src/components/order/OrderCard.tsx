import {View, StyleSheet, Text, Image, FlatList} from "react-native";
import {OrderStatus} from "../../types/enums/OrderStatus";
import {ContactButtons} from "../UI/ContactButtons";
import {Order} from "../../types/interfaces/Order";
import {memo, useCallback} from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { Store } from "../../types/interfaces/Store";
import { STORE } from "../../store/Data";


export const OrderCard = memo(({data}: {data: Order}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const fetchStore = useCallback((id:string) => {
    return STORE.filter((item:Store) => item.id == id);
  }, []);

  const store = fetchStore(data.id);

  const chatHandler = useCallback((item: Store) => {
    navigation.navigate("chat", {id: item.id});
  }, []);

  function phoneHandler(){
    console.log("ring");
  } 

  function OrderStatusHandler() {
    switch (data.status) {
      case OrderStatus.SENDING:
        return (
          <View style={[styles.statusContainer, styles.position]}>
            <View style={styles.position}>
              <Image
                source={require("../../assets/images/Status-wait.png")}
                style={styles.statusIcon}
              />
              <Text style={styles.statusText}>Order on way</Text>
            </View>

            <ContactButtons onPressChatBtn={chatHandler} onPressPhoneBtn={phoneHandler} data={store[0]}/>
          </View>
        );

      case OrderStatus.COMPLETED:
        return (
          <View style={[styles.statusContainer, styles.position]}>
            <View style={styles.position}>
              <Image
                source={require("../../assets/images/Status-ok.png")}
                style={styles.statusIcon}
              />
              <Text style={styles.statusText}>Order completed</Text>
            </View>

            <ContactButtons onPressChatBtn={chatHandler} onPressPhoneBtn={phoneHandler} data={store[0]}/>
          </View>
        );

      case OrderStatus.CANCELED:
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
          <Image source={{uri: store[0].logoURL}} style={styles.image} />
          <Text style={styles.storeName}>{store[0].name}</Text>
        </View>

      </View>

      <View style={styles.border}>
        <Text style={styles.text}>Status</Text>
        <OrderStatusHandler />
        <FlatList
          style={styles.list}
          data={data.itens}
          renderItem={({item}) => (
            <Text style={styles.item}>
              - {item.name} - R$ {item.price.toFixed(2)} x {item.quantity}
            </Text>
          )}
        />
      </View>

      <View>
        <Text style={styles.total}>Total: R$ {data.total}</Text>
      </View>
    </View>
  );
});

OrderCard.displayName = "OrderCard";

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
    marginTop: 4,
    marginBottom: 12,
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

  position: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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

  total: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
  },

  list: {
    marginTop: 12,
    marginBottom: 12,
  },

  border: {
    borderBottomColor: "#BBBBBB",
    borderBottomWidth: 1,
  },
});
