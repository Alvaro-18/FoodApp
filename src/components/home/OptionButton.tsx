import {View, Text, Image, StyleSheet, Pressable, GestureResponderEvent} from "react-native";
import {Colors} from "../../assets/constants/Colors";

interface option {
  title: string,
  subtitle1?: string,
  subtitle2?: string
}

export function OptionButton({
  selected,
  data,
  onPress
}: {
  selected: boolean;
  data:option
  onPress: (event: GestureResponderEvent) => void
}) {
  return (
    <Pressable style={[styles.button, selected && styles.buttonSelected]} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text
            style={data.subtitle1 !== undefined ? styles.subtitle : styles.empty}>
            {data.subtitle1 }
          </Text>
          <Text
            style={data.subtitle2 !== undefined ? styles.subtitle : styles.empty}>
            {data.subtitle2}
          </Text>
        </View>

        <Image
          source={require("../../assets/images/Option-selected-icon.png")}
          style={selected ? styles.image : styles.empty}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#D9D9D9",
    borderWidth: 2
  },

  buttonSelected: {
    borderWidth: 2,
    borderColor: Colors.green600,
  },

  container: {
    margin: 8,
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

  empty: {
    display: "none",
  },

  image: {
    alignSelf: "flex-end",
    width: 20,
    height: 20,
  },
});
