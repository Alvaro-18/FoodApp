import {View, StyleSheet, FlatList} from "react-native";

import {CategoriesSection} from "../components/home/CategoriesSection";
import {CATEGORIES, STORE} from "../store/Data";
import {StoreSection} from "../components/home/StoreSection";

export function HomeScreen() {
  return (
    <View style={styles.container}>
   
     <FlatList
        ListHeaderComponent={() => <CategoriesSection data={CATEGORIES} />}
        data={CATEGORIES}
        renderItem={({item}) => (
          <StoreSection data={STORE} title={item.title} />
        )}
        initialNumToRender={4}
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
