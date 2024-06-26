import {useState} from "react";
import {
  View,
  Pressable,
  Image,
  Modal,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import {PRODUCTS} from "../../store/Data";
import {FavoritesCard} from "./FavoritesCard";

export function SearchButton() {
  const [visibility, setVisibility] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={visibility}>
        <View style={styles.modalContainer}>
          <View style={styles.searchBar}>
            <Pressable
              onPress={() => {
                setVisibility(false);
                setSearch("");
              }}
              style={({pressed}) => pressed && styles.pressed}>
              <Image
                source={require("../../assets/images/Search-icon.png")}
                style={styles.image}
                resizeMode="center"
              />
            </Pressable>

            <TextInput
              placeholder="Search in the app"
              placeholderTextColor={"#000"}
              style={styles.input}
              onChangeText={setSearch}
            />
          </View>

          <FlatList
            data={PRODUCTS}
            renderItem={({item}) => <FavoritesCard data={item} />}
            style={search !== "" ? styles.list : styles.empty}
          />
        </View>
        <Pressable
          style={styles.screen}
          onPress={() => {
            setVisibility(false);
          }}></Pressable>
      </Modal>

      <Pressable
        onPress={() => {
          setVisibility(true);
        }}
        style={({pressed}) => pressed && styles.pressed}>
        <Image
          source={require("../../assets/images/Search-icon.png")}
          style={styles.image}
          resizeMode="center"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    width: "95%",
  },

  searchBar: {
    height: 43,
    marginTop: "3%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: "3.8%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  pressed: {
    opacity: 0.5,
  },

  input: {
    width: "89%",
    padding: 0,
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
  },
  image: {
    width: 24,
    height: 22,
  },

  searchResult: {
    height: "76%",
    marginTop: 12,
  },

  list: {
    marginTop: 16,
    maxHeight: 280,
    backgroundColor: "#fff",
  },

  empty: {
    display: "none",
  },

  screen: {
    height: "100%",
  },
});
