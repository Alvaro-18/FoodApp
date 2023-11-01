import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";

export function PrimaryButton({
  children,
  onPress,
}: {
  children: string;
  onPress: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressed] : styles.button
      }>
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#DB3022",
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

  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Roboto500",
  },

  pressed: {
    opacity: 0.75,
  },
});
