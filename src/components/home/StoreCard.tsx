import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import {Store} from "../../types/interfaces/Store";
import {memo} from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NoteIndicator} from "../UI/NoteIndicator";

export const StoreCard = memo(({data}: {data: Store}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  function navigationHandler() {
    navigation.navigate("product");
  }

  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressed] : styles.button
      }
      onPress={navigationHandler}>
      <ImageBackground
        source={{uri: data.storeImageUrl}}
        style={styles.image}
        imageStyle={{borderRadius: 12}}>
        <NoteIndicator note={data.storeNote} />
      </ImageBackground>

      <View style={styles.textContainer}>
        <Text style={styles.storeName}>{data.storeName}</Text>
        <Text style={styles.paragraph}>
          {data.storeDistance} - {data.deliveryTime}
        </Text>
      </View>
    </Pressable>
  );
});

StoreCard.displayName = "StoreCard";

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 146,
    marginRight: 12,
  },

  pressed: {
    opacity: 0.75,
  },

  image: {
    width: 120,
    height: 100,
    justifyContent: "flex-end",
    paddingBottom: 6,
    paddingLeft: 8
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
    alignItems: "center",
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
