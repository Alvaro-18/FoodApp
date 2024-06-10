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
import {PrimaryButton} from "../util/PrimaryButton";
import {AddressForm} from "./AddressForm";

export function LocationButton() {
  const [visibilityModalSelect, setVisibilityModalSelect] = useState(false);
  const [visibilityModaAddShipping, setVisibilityModaAddShipping] =
    useState(false);

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
            style={styles.button}
            onPress={() => {
              setVisibilityModalSelect(false);
            }}>
            <Image
              source={require("../../assets/images/Location-dot.png")}
              style={styles.image}
            />
            <Text style={styles.text}>Salvador, BA</Text>
          </Pressable>

          <Text style={styles.modalTitle}>Address selection</Text>

          <FlatList
            data={ADDRESS}
            renderItem={({item}) => (
              <OptionButton
                selected={item.isSelected}
                title={item.title}
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
              />
            )}
            style={styles.list}
            ListFooterComponent={addNewLocation}
          />

          <PrimaryButton
            onPress={() => {
              setVisibilityModalSelect(false);
            }}
            colorNumber={1}>
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
        <Text style={styles.text}>Salvador, BA</Text>
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
    marginBottom: "18%",
  },

  image: {
    width: 12,
    height: 16,
  },

  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },

  modalContainer: {
    marginTop: "5.8%",
    width: "95%",
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
    alignSelf: "center",
    width: "95%",
    marginTop: "4%",
    marginBottom: "8%",
    height: 88,
    borderRadius: 6,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
    alignItems: "center",
    justifyContent: "center",
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
