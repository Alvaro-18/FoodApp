import {Image, Pressable, View, StyleSheet} from "react-native";

export function ContactButtons() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
        <Image source={require("../../assets/images/Chat-solid.png")} style={styles.img}/>
      </Pressable>
      <Pressable style={styles.btn}>
        <Image source={require("../../assets/images/Phone-solid.png")} style={styles.img}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  btn: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#BBBBBB",
    paddingRight: 6,
    paddingLeft: 6,
  },

  img: {
    width: 24,
    height: 20,
    resizeMode: "center"
  }
});
