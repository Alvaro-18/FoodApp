import {View, StyleSheet, FlatList} from "react-native";
import {PRODUCTS} from "../store/Data";
import {FavoritesCard} from "../components/home/FavoritesCard";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useCallback} from "react";
import {Product} from "../types/interfaces/Product";

export function FavoritesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const productNavigation = useCallback((item: Product) => {
    navigation.navigate("product", {id: item.id});
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={({item}) => <FavoritesCard data={item} onPress={productNavigation}/>}
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
