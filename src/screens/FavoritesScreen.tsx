import {View, StyleSheet, FlatList, Text} from "react-native";
import {FavoritesCard} from "../components/home/FavoritesCard";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Product} from "../types/interfaces/Product";
import {useCallback, useContext} from "react";
import { AppContext } from "../store/AppContext";

export function FavoritesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const productNavigation = useCallback((item: Product) => {
    navigation.navigate("product", {id: item.id});
  }, []);

  const userContext = useContext(AppContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={userContext.favorites}
        renderItem={({item}) => <FavoritesCard data={item} onPress={productNavigation}/>}
        ListEmptyComponent={
        <Text style={styles.text}>
          Que tal adicionar algo a sua lista de favoritos ? 
        </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "95%",
  },

  text:{
    color: "#000", 
    fontWeight: "bold", 
    textAlign: "center", 
    marginTop: "90%"
  }
});
