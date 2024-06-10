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
  colorNumber,
}: {
  children: string;
  onPress: (event: GestureResponderEvent) => void;
  colorNumber?: number;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed
          ? [
              colorNumber === undefined
                ? styles.button
                : [styles.button, styles.buttonApp],
              styles.pressed,
            ]
          : colorNumber === undefined
          ? styles.button
          : [styles.button, styles.buttonApp]
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
    backgroundColor: "#D32626",
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
    backgroundColor: Colors.secundaryColor,
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
