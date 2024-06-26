import {View, StyleSheet, FlatList} from "react-native";
import {HeaderBar} from "../components/home/HeaderBar";
import {PRODUCTS} from "../store/Data";
import {FavoritesCard} from "../components/home/FavoritesCard";

export function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <FlatList
        style={styles.list}
        data={PRODUCTS}
        renderItem={({item}) => <FavoritesCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "95%",
    marginTop: "6%",
  },

  list: {
    marginBottom: "10%",
  },
});
