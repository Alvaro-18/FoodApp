import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { AddressForm } from "../components/home/AddressForm";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export function FormAddressScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <Pressable
          onPress={navigationHandler}>
          <Image
            source={require("../assets/images/Arrow-back.png")}
            style={styles.arrow}
          />
        </Pressable>
        <Text style={styles.modalTitle}>Adding shipping address</Text>
      </View>

      <AddressForm />
    </View>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 16,
    width: "92%",
    alignSelf: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "20%",
  },

  arrow: {
    width: 24,
    height: 24,
  },

  modalTitle: {
    alignSelf: "center",
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },

});

