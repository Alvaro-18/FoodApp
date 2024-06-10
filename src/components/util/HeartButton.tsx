import {Pressable, StyleSheet, Image} from "react-native";
import {useState} from "react";

export function HeartButton() {
  const [isFavorite, setFavorite] = useState(false);

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
      onPress={() => {
        setFavorite(!isFavorite);
      }}>
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
