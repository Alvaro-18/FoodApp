import {View, Pressable, StyleSheet, Text, Image} from "react-native";
import {Store} from "../types/interfaces/Store";

export function StoreCard({data}: {data: Store}) {
  return (
    <Pressable style={({pressed}) => pressed ? [styles.button, styles.pressed] : styles.button}>
      <View style={styles.containerImage}>
        <Image source={{uri: data.storeImageUrl}} style={styles.image} />

        <View style={styles.noteContainer}>
          <Image
            source={require("../assets/images/Star-full.png")}
            style={styles.starIcon}
          />
          <Text style={styles.note}>{data.storeNote}</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.storeName}>{data.storeName}</Text>
        <Text style={styles.paragraph}>
          {data.storeDistance} - {data.deliveryTime}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 146,
    marginRight: 12,
  },

  pressed: {
    opacity: 0.75
  },

  containerImage: {
    flexDirection: "row",
  },

  image: {
    width: 120,
    height: 100,
    borderRadius: 12,
  },

  noteContainer: {
    backgroundColor: "#A3A3A3",
    opacity: 0.85,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginLeft: 8,
    marginTop: 74,
  },

  starIcon: {
    width: 8,
    height: 8,
  },

  note: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "500",
  },

  textContainer: {
    marginTop: 6,
    alignItems: "center"
  },

  storeName: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
  },

  paragraph: {
    color: "#676767",
    fontSize: 12,
    fontWeight: "500",
  },
});
