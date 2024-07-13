import {useCallback, useState} from "react";
import {
  View,
  Pressable,
  Image,
  Modal,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import {PRODUCTS} from "../../store/Data";
import {FavoritesCard} from "./FavoritesCard";
import {Product} from "../../types/interfaces/Product";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export function SearchButton() {
  const [visibility, setVisibility] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const productNavigation = useCallback((item: Product) => {
    navigation.navigate("product", {id: item.id});
    setVisibility(false);
  }, []);

  const search = (text: string) => {
    setSearchText(text);
    if (text) {
      const filtered = PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <View>
      <Modal animationType="fade" transparent={false} visible={visibility}>
        <View style={styles.modalContainer}>
          <View style={styles.searchBar}>
            <Image
              source={require("../../assets/images/Search-icon.png")}
              style={styles.image}
              resizeMode="center"
            />

            <TextInput
              placeholder="Search in the app"
              placeholderTextColor={"#000"}
              style={styles.input}
              onChangeText={search}
            />

            <Pressable
              onPress={() => setVisibility(false)}
              style={{width: 24, height: 22, alignItems: "center"}}>
              <Image
                source={require("../../assets/images/Outline-close.png")}
              />
            </Pressable>
          </View>

          <FlatList
            data={filteredProducts}
            renderItem={({item}) => <FavoritesCard data={item} onPress={productNavigation}/>}
            style={styles.list}
            ListEmptyComponent={
              <Text style={searchText ? styles.empty : styles.notFound}>
                Sorry, we don’t have this 😕
              </Text>
            }
          />
        </View>
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
    width: 342,
    height: 40,
    marginTop: 8,
    paddingHorizontal: 7,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    justifyContent: "space-between",
    borderRadius: 20,
  },

  pressed: {
    opacity: 0.5,
  },

  input: {
    width: "80%",
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
    marginBottom: 46,
    backgroundColor: "#fff",
  },

  empty: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: "80%",
  },

  notFound: {
    display: "none",
  },
});
