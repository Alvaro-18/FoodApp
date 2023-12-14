import {View, StyleSheet, FlatList} from "react-native";

import { CategoriesSection } from "../components/CategoriesSection";
import { CATEGORIES, STORE } from "../store/Data";
import { StoreSection } from "../components/StoreSection";
import { HeaderBar } from "../components/HeaderBar";


export function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderBar/>
      <FlatList
        style={styles.list}
        ListHeaderComponent={()=> (
          <CategoriesSection data={CATEGORIES}/>
        )}
        data={STORE}
        renderItem={({item}) => (
          <StoreSection data={STORE} title={"Recommend"}/>
        )}
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
    marginBottom: "14%"
  }
});
