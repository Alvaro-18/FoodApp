import {StyleSheet, View, Image, Text} from "react-native";

export function NoteIndicator({note}:{note:string}) {
  return (
    <View style={styles.noteContainer}>
      <Image
        source={require("../../assets/images/Star-full.png")}
        style={styles.starIcon}
      />
      <Text style={styles.note}>{note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    width: 35,
    backgroundColor: "#A3A3A3",
    opacity: 0.85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  starIcon: {
    width: 8,
    height: 8,
  },

  note: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
});
