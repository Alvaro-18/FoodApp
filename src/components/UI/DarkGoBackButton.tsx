import {Pressable, Image, StyleSheet, GestureResponderEvent} from "react-native";

export function DarkGoBackButton({onPress} : {onPress: (event: GestureResponderEvent) => void;}) {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={require("../../assets/images/Arrow-back.png")}
        resizeMode={"contain"}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image:  {
    width: 24,
    height: 24
  }
});
