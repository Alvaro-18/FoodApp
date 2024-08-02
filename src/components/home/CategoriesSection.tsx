import {View, StyleSheet, Pressable, Text} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {Category} from "../../types/interfaces/Category";
import {Colors} from "../../assets/constants/Colors";

export function CategoriesSection({data}: {data: Category[]}) {
  const navigation =
  useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler(){
    navigation.navigate("home");
  }

  return (
    <View style={styles.list}>
      <View style={styles.row}>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
        <Pressable
          style={({pressed}) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }>
          <View style={styles.containerImage}></View>
          <Text style={styles.text}>alvaro</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 4,
    marginTop: 4,
    marginBottom: 8
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
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
