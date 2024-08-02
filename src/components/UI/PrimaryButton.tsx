import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import {Colors} from "../../assets/constants/Colors";

export function PrimaryButton({
  children,
  onPress,
  color,
  isDisabled,
}: {
  children: string;
  onPress: (event: GestureResponderEvent) => void;
  color: string;
  isDisabled?: boolean;
}) {
  if (!isDisabled) {
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [styles.button, {backgroundColor: color}, styles.pressed]
            : [styles.button, {backgroundColor: color}]
        }>
        <View>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={onPress} style={[styles.button, {backgroundColor: "#565656"}]}>
        <View>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 48,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  buttonApp: {
    backgroundColor: Colors.green600,
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
