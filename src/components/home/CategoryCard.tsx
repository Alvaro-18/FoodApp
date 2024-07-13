import {
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  Text,
  View,
} from "react-native";
import {memo} from "react";
import {Category} from "../../types/interfaces/Category";
import {Colors} from "../../assets/constants/Colors";
import { Icon } from "../UI/Icon";

export const CategoryCard = memo(
  ({
    onPress,
    data,
  }: {
    onPress: (event: GestureResponderEvent) => void;
    data: Category;
  }) => {
  
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }>
        <View style={{backgroundColor: Colors.secundaryColor, width: 46, height: 46, alignItems: "center", justifyContent: "center", borderRadius: 50, marginBottom: 4}}>

        <Icon name={data.iconName} color={"#fff"} size={22} />
        </View>
        <Text style={styles.text}>{data.title}</Text>
      </Pressable>
    );
  },
);

CategoryCard.displayName = "CategoryCard";

const styles = StyleSheet.create({
  button: {
    width: 78,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  pressed: {
    opacity: 0.75,
  },

  image: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginBottom: 8,
  },

  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
