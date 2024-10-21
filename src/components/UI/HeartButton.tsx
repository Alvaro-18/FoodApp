import {Pressable, StyleSheet, Image, GestureResponderEvent} from "react-native";
import {useState} from "react";

export function HeartButton({isFavorite, onPress}:{isFavorite:boolean, onPress:(event: GestureResponderEvent) => void}) {

  function Favorite() {
    if (isFavorite) {
      return (
        <Image
          source={require("../../assets/images/Heart-solid-green.png")}
          style={styles.heartIcon}
        />
      );
    } else {
      return (
        <Image
          source={require("../../assets/images/Heart-regular-green.png")}
          style={styles.heartIcon}
        />
      );
    }
  }

  return (
    <Pressable
      onPress={onPress}>
      <Favorite />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  heartIcon: {
    width: 30,
    height: 27,
  },
});
