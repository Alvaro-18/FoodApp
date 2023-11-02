import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function PrimaryButton({
  children,
  onPress,
  isDisable,
}: {
  children: string;
  onPress: (event: GestureResponderEvent) => void;
  isDisable: boolean;
}) {
  function Content() {
    if (!isDisable) {
      return (
        <View>
          <Text style={styles.text}>{children}</Text>
        </View>
      );
    } else {
      return(
        <ActivityIndicator size={30} color={Colors.secundaryColor}/>
      );
    }
  }

  return (
    <Pressable
      disabled={isDisable}
      onPress={onPress}
      style={
        !isDisable
          ? ({pressed}) =>
              pressed ? [styles.button, styles.pressed] : styles.button
          : [styles.button, styles.disable]
      }>
      <Content />
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

  disable: {
    backgroundColor: "#565656",
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
