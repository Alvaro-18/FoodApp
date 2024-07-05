import {View, StyleSheet, FlatList} from "react-native";
import {PRODUCTS} from "../store/Data";
import {FavoritesCard} from "../components/home/FavoritesCard";

export function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
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
  },
});
