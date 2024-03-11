import {View, StyleSheet} from "react-native";
import {SearchButton} from "./SearchButton";
import {NotificationButton} from "./NotificationButton";
import {LocationButton} from "./LocationButton";

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
