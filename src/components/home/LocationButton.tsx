import {useState} from "react";
import {
  View,
  Pressable,
  Image,
  Modal,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import {OptionButton} from "./OptionButton";
import {ADDRESS} from "../../store/Data";
import {PrimaryButton} from "../UI/PrimaryButton";
import {AddressForm} from "./AddressForm";
import { Colors } from "../../assets/constants/Colors";
import { Option } from "../../types/interfaces/Option";


export function LocationButton() {
  const [visibilityModalSelect, setVisibilityModalSelect] = useState(false);
  const [visibilityModaAddShipping, setVisibilityModaAddShipping] =
    useState(false);

  const [isSelected, setIsSelected] = useState<Option>(ADDRESS[0]);  

  function addNewLocation() {
    return (
      <Pressable
        style={styles.footerListContainer}
        onPress={() => {
          setVisibilityModaAddShipping(true);
        }}>
        <Text style={styles.footerListText}>Add new location +</Text>
      </Pressable>
    );
  }

  function selectHandler(item:Option){
    setIsSelected(item);
  }

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={false}
        visible={visibilityModaAddShipping}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Pressable
              onPress={() => {
                setVisibilityModaAddShipping(false);
              }}>
              <Image
                source={require("../../assets/images/Arrow-back.png")}
                style={styles.arrow}
              />
            </Pressable>
            <Text style={styles.modalTitle}>Adding shipping address</Text>
          </View>

          <AddressForm />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={false}
        visible={visibilityModalSelect}>
        <View style={styles.modalContainer}>
          <Pressable
            style={[styles.button, styles.textModal]}>
            <Image
              source={require("../../assets/images/Location-dot.png")}
              style={styles.image}
            />
            <Text style={styles.text}>{isSelected.title}</Text>
          </Pressable>

          <Text style={styles.modalTitle}>Address selection</Text>

          <FlatList
            data={ADDRESS}
            renderItem={({item}) => (
              <OptionButton
                selected={item == isSelected}
                data={item}
                onPress={() => {selectHandler(item);}}
              />
            )}
            style={styles.list}
            ListFooterComponent={addNewLocation}
          />

          <PrimaryButton
            onPress={() => {
              setVisibilityModalSelect(false);
            }}
            color={Colors.secundaryColor}>
            Confirm address
          </PrimaryButton>
        </View>
      </Modal>

      <Pressable
        style={styles.button}
        onPress={() => {
          setVisibilityModalSelect(true);
        }}>
        <Image
          source={require("../../assets/images/Location-dot.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{isSelected.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    maxWidth: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  textModal: {
    marginBottom: "12%"
  },

  image: {
    width: 14,
    height: 18,
  },

  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },

  modalContainer: {
    marginTop: 16,
    width: "92%",
    alignSelf: "center",
  },

  modalTitle: {
    alignSelf: "center",
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },

  list: {
    marginTop: "4%",
    height: "55%",
    marginBottom: "30%",
  },

  footerListContainer: {
    marginTop: "4%",
    marginBottom: "8%",
    height: 88,
    borderRadius: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D9D9D9",
    borderWidth: 2
  },

  footerListText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
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
});
