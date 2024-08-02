import {memo, useContext} from "react";
import {Image, Pressable, View, Text, StyleSheet} from "react-native";
import {Product} from "../../types/interfaces/Product";
import {HeartButton} from "../UI/HeartButton";
import { AppContext } from "../../store/AppContext";

export const ProductCard = memo(({data, onPress}: {data: Product, onPress: (item:Product) => void}) => {
  const userContext = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Pressable style={styles.button} onPress={() => onPress(data)}>
          <Image
            source={{uri: data.imageURL}}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {data.name} 
            </Text>
            <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
          </View>
        </Pressable>
        <HeartButton isFavorite={userContext.favorites.includes(data)} onPress={() => userContext.addFavorite(data)}/>
      </View>

      <Pressable onPress={() => onPress(data)}>
        <Text style={styles.description} numberOfLines={3}>{data.description}</Text>
      </Pressable>
    </View>
  );
});

ProductCard.displayName = "ProductCard";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    marginBottom: 12,
    alignSelf: "center",
    alignItems: "center",
    width: "92%",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  cont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
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

  name: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },

  price: {
    color: "#3D3D3D",
    fontSize: 12,
    fontWeight: "500",
  },

  description: {
    color: "#000",
    maxWidth: 310,
    fontSize: 12,
    fontWeight: "400",
    marginTop: 4,
    textAlign: "justify",
    alignItems: "center"
  },
});
