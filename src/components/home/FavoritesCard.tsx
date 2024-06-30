import {View, Pressable, StyleSheet, Text, Image} from "react-native";
import {Product} from "../../types/interfaces/Product";
import {HeartButton} from "../UI/HeartButton";

export function FavoritesCard({data}: {data: Product}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Image
          source={{uri: data.imageURL}}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.storeName} numberOfLines={1}>{data.name}</Text>
          <Text style={styles.paragraph}>R$ {data.price}</Text>
        </View>
      </Pressable>

      <HeartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 12,
    alignSelf: "center",
    width: "96%",
    height: 68,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  button: {
    width: "76%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  image: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },

  textContainer: {
    width: "79%",
  },

  storeName: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },

  paragraph: {
    color: "#3D3D3D",
    fontSize: 12,
    fontWeight: "500",
  },
});
