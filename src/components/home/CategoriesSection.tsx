import {View, StyleSheet, Pressable, Text, Image} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ParamListBase, useNavigation} from "@react-navigation/native";

import {Colors} from "../../assets/constants/Colors";
import Icon from "../UI/Icon";

export function CategoriesSection() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    navigation.navigate("home");
  }

  return (
    <View style={styles.list}>
      <View style={styles.row}>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="TicketPercent" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Offers</Text>
        </Pressable>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="Martini" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Drinks</Text>
        </Pressable>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="EggOff" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Vegans</Text>
        </Pressable>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="Coffee" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Coffees</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="Apple" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Fruits</Text>
        </Pressable>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="Cookie" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Desserts</Text>
        </Pressable>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="Sandwich" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Snacks</Text>
        </Pressable>
        <Pressable
          onPress={() => navigationHandler}
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}>
            <Icon name="CookingPot" color={Colors.white200} size={32} />
          </View>
          <Text style={styles.text}>Dinners</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 4,
    marginTop: 4,
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  button: {
    width: 82,
    height: 98,
    borderRadius: 12,
    backgroundColor: "#fff",
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

  containerImage: {
    backgroundColor: Colors.green600,
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    borderRadius: 50,
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
