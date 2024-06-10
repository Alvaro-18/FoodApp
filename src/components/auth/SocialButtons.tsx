import {View, Image, Pressable, StyleSheet} from "react-native";

export function SocialButtons() {
  return(
      <View style={styles.buttonContainer}>
          <Pressable>
           <View style={styles.button}>
            <Image source={require("../../assets/images/Facebook-icon.png")} style={styles.img}/>
            </View>
          </Pressable>

        <Pressable>
          <View style={styles.button}>
            <Image source={require("../../assets/images/Google-icon.png")} style={styles.img}/>
          </View>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
    width: "100%",
    height: "9%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: "4%",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 92,
    height: 64,
    backgroundColor: "#fff",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  img: {
    width: "25%",
    height: "35%",
    resizeMode: "stretch"
  }
});