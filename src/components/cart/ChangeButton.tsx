import {GestureResponderEvent, Pressable, StyleSheet, Text, View} from "react-native";
import { Colors } from "../../assets/constants/Colors";

export function ChangeButton({onPress, title, description}:{ onPress: (event: GestureResponderEvent) => void ,title:string, description:string}) {
  return (
    <Pressable style={({pressed}) =>
      pressed ? [styles.changeBtn, styles.pressed] : styles.changeBtn
      
      } onPress={onPress}>
      <View>
        <Text style={styles.textMedium}>{title}</Text>
        <Text style={styles.textRegular}>{description}</Text>
      </View>
      <Text style={styles.textMediumGreen}>Change</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  changeBtn: {
    backgroundColor: "#EAEAEA",
    marginTop: 10,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
  },

  textMedium: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },

  textMediumGreen: {
    color: Colors.secundaryColor,
    fontSize: 14,
    fontWeight: "500",
  },

  textRegular: {
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
  },

  pressed: {
    opacity: 0.75
  }
});