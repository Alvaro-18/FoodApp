import {View, StyleSheet, FlatList} from "react-native";

import {CategoriesSection} from "../components/home/CategoriesSection";
import {CATEGORIES, STORE} from "../store/Data";
import {StoreSection} from "../components/home/StoreSection";
import {HeaderBar} from "../components/home/HeaderBar";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderBar />
     <FlatList
        style={styles.list}
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
    marginTop: "6%",
  },

  list: {
    marginBottom: "14%",
    marginTop: 2,
  },
});
