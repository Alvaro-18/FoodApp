import {View, StyleSheet} from "react-native";
import {SearchButton} from "../components/SearchButton";
import {NotificationButton} from "../components/NotificationButton";
import {LocationButton} from "../components/LocationButton";

export function HeaderBar() {
  return (
    <View style={styles.headerBar}>
      <SearchButton />
      <LocationButton />
      <NotificationButton />
    </View>
  );
}


const styles = StyleSheet.create({
  headerBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: "4%",
  },
});