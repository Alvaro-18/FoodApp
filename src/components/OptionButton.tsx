import {View, Text, Image, StyleSheet, Pressable} from "react-native";
import {Colors} from "../assets/constants/Colors";

export function OptionButton({selected, title, subtitle1, subtitle2}: {selected: boolean, title:string, subtitle1?:string, subtitle2?:string}) {

  return (
    <Pressable style={[styles.button,selected && styles.buttonSelected]}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={(subtitle1 !== undefined) ? styles.subtitle : styles.empty}>{subtitle1}</Text>
          <Text style={(subtitle1 !== undefined) ? styles.subtitle : styles.empty}>{subtitle2}</Text>
        </View>

        <Image
          source={require("../assets/images/Option-selected-icon.png")}
          style={(selected)? styles.image : styles.empty}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: "95%",
    marginTop: "4%",
    borderRadius: 6,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  buttonSelected: {
    borderWidth: 2,
    borderColor: Colors.secundaryColor,
  },

  container: {
    marginVertical: 8,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textContainer: {
    flexDirection: "column",
    maxWidth: 250,
  },

  title: {
    fontWeight: "500",
    fontSize: 14,
    color: "#000",
  },

  subtitle: {
    fontWeight: "400",
    fontSize: 12,
    color: "#000",
  },

  empty:{
    display: "none",
  },

  image: {
    alignSelf: "flex-end",
    width: 20,
    height: 20,
  },
});
