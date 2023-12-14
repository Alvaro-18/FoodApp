import {Pressable, Image, StyleSheet, GestureResponderEvent, Text} from "react-native";

export function CategoryCard({onPress, title} : {onPress: (event: GestureResponderEvent) => void, title:string}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.button, styles.pressed] : styles.button}>
      <Image
        source={require("../assets/images/Coffe.jpg")}
        resizeMode={"contain"}
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 78,
    height: 90,
    borderRadius:12,
    backgroundColor:"#fff",
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  pressed: {
    opacity: 0.75
  },

  image:  {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginBottom: 8
  },

  text:{
    color: "#000",
    fontSize: 16,
    fontWeight: "500"
  }
});
