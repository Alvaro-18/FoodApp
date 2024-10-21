import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ChangeButton} from "./ChangeButton";
import {OptionButton} from "../home/OptionButton";
import {Colors} from "../../assets/constants/Colors";
import {useContext, useEffect, useState, memo} from "react";
import {Store} from "../../types/interfaces/Store";
import {STORE} from "../../store/Data";
import {AppContext} from "../../store/AppContext";
import {Address} from "../../types/interfaces/Address";
import {BottomModal} from "../UI/BottomModal";

interface PaymentParams {
  id: string;
  title: string;
  subtitle1: string;
  data: {
    id: string;
  };
}

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

const PAYMENT_METHOD_OPTIONS: PaymentParams[] = [
  {
    id: "1",
    title: "Card",
    subtitle1: "Credit card",
    data: {
      id: "1",
    },
  },
  {
    id: "2",
    title: "Card",
    subtitle1: "Debit card",
    data: {
      id: "2",
    },
  },
  {
    id: "3",
    title: "Cash",
    subtitle1: "Pix",
    data: {
      id: "3",
    },
  },

  {
    id: "4",
    title: "Cash",
    subtitle1: "Money",
    data: {
      id: "4",
    },
  },
];

export const ListHeader = memo(() => {
  const {clearCart, address, updateAddress, setMethods, cart} =
    useContext(AppContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [store, setStore] = useState<Store>();
  const [modalAddressIsVisible, setModalAddressIsVisible] = useState(false);
  const [modalCardIsVisible, setModalCardIsVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentParams>(
    PAYMENT_METHOD_OPTIONS[0],
  );
  const [userAddressSelected, setUserAddressSelected] = useState<Address>({
    address: "",
    city: "",
    name: "",
    state: "",
    zipCode: "",
    complement: "",
    id: "",
  });

  function navigationHandler(): void {
    navigation.goBack();
  }

  const [isSelected, setIsSelected] = useState({opt1: false, opt2: true});

  function selectHandler({opt1, opt2}: {opt1: boolean; opt2: boolean}) {
    setIsSelected({opt1: opt1, opt2: opt2});
    
    if (isSelected.opt1) {
      setMethods({
        deliveryMethods: {
          title: deliveryOptions.delivery.title,
        },
        paymentMethods: {
          title: paymentMethod.subtitle1,
        },
      });
    } else {
      setMethods({
        deliveryMethods: {
          title: deliveryOptions.selfPickup.title,
        },
        paymentMethods: {
          title: paymentMethod.subtitle1,
        },
      });
    }
  }

  function delHandler() {
    navigation.navigate("home");
    clearCart();
  }

  useEffect(() => {
    function fetchProduct() {
      if(!cart[0].product.store) return;
      setStore(STORE.find(store => store.id === cart[0].product.store));

      const addressSelected = address.find(item => item.isSelected)?.data;

      if (addressSelected) {
        setUserAddressSelected(addressSelected);
      }
    }

    fetchProduct();
  }, []);

  function FetchImage() {
    if (store) {
      return <Image source={{uri: store.logoURL}} style={styles.orderImage} />;
    } else {
      return <View></View>;
    }
  }

  function handleChangeAddress(id: string) {
    updateAddress(id);
  }

  function changePaymentMethod(id: string) {
    const selectedMethod = PAYMENT_METHOD_OPTIONS.find(item => item.id === id);
    if (selectedMethod) {
      setPaymentMethod(selectedMethod);

      if (isSelected.opt1) {
        setMethods({
          deliveryMethods: {
            title: deliveryOptions.delivery.title,
          },
          paymentMethods: {
            title: selectedMethod.subtitle1,
          },
        });
      } else {
        setMethods({
          deliveryMethods: {
            title: deliveryOptions.selfPickup.title,
          },
          paymentMethods: {
            title: selectedMethod.subtitle1,
          },
        });
      }
    }
  }

  return (
    <View>
      <BottomModal
        data={address}
        isOpen={modalAddressIsVisible}
        onClose={() => setModalAddressIsVisible(false)}
        onItemPress={handleChangeAddress}
        title={"Change address"}
      />
      <BottomModal
        data={PAYMENT_METHOD_OPTIONS}
        isOpen={modalCardIsVisible}
        onClose={() => setModalCardIsVisible(false)}
        onItemPress={changePaymentMethod}
        title={"Change payment method"}
      />

      <View style={styles.header}>
        <Pressable onPress={navigationHandler}>
          <Image
            source={require("../../assets/images/Arrow-back.png")}
            style={styles.goBack}
          />
        </Pressable>
        <Text style={styles.headerText}>Cart</Text>
        <Pressable onPress={delHandler}>
          <Image
            source={require("../../assets/images/Trash-solid.png")}
            style={styles.trashIcon}
          />
        </Pressable>
      </View>

      <View style={styles.row}>
        <Text style={styles.primaryText}>Delivery address:</Text>
        <ChangeButton
          onPress={() => setModalAddressIsVisible(true)}
          title={userAddressSelected.name}
          description={userAddressSelected.address}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.primaryText}>Delivery methods:</Text>
        <OptionButton
          selected={isSelected.opt1}
          data={deliveryOptions.delivery}
          onPress={() => selectHandler({opt1: true, opt2: false})}
        />
        <OptionButton
          selected={isSelected.opt2}
          data={deliveryOptions.selfPickup}
          onPress={() => selectHandler({opt1: false, opt2: true})}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.primaryText}>Payment methods:</Text>
        <ChangeButton
          onPress={() => setModalCardIsVisible(true)}
          title={paymentMethod.title}
          description={paymentMethod.subtitle1}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.primaryText}>Order resume:</Text>
        <View style={styles.orderContainer}>
          <FetchImage />
          <Text style={styles.orderText}>{store?.name}</Text>
        </View>
      </View>
    </View>
  );
});

ListHeader.displayName = "ListHeader";

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
    backgroundColor: Colors.green600,
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
