import {View, Text, Image, StyleSheet} from "react-native";
import {Colors} from "../assets/constants/Colors";

const image = "";

export function UserScreen() {
  function UserImage() {
    if (image == null) {
      return <View style={styles.noImage}></View>;
    } else {
      return (
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.userImage}
          resizeMode="contain"
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <UserImage />
        <Text style={styles.username} numberOfLines={1}>
          Álvaro Marques Silva da costa e silva
        </Text>
      </View>

      <View style={styles.modalContainer}>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Notifications</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Adress</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Rating</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Payment method</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Edit profile</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Change password</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Change phone</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>Configuration</Text>
        </View>
        <View style={styles.modaItens}>
          <Text style={styles.modalText}>I want to sell in the app</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  noImage: {
    width: 48,
    height: 48,
    backgroundColor: "gray",
    borderRadius: 50,
    marginRight: 8,
  },

  username: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: "64%",
  },

  userImage: {
    width: 48,
    height: 48,
    backgroundColor: "gray",
    borderRadius: 50,
    marginRight: 8,
  },

  modalContainer: {
    marginTop: 24,
  },

  modalText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    marginLeft: 12,
  },

  modaItens: {
    backgroundColor: Colors.secundaryColor,
    marginTop: 12,
    height: 42,
    justifyContent: "center",
    borderRadius: 8,
  },
});
